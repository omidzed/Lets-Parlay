import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './NavBar';
import { useModal } from '../../hooks/useModal';
import { useUser } from '../../hooks/useUser';
import { getToken, hasToken } from "../../utils/token-storage";
import '@testing-library/jest-dom';


// Mocking the custom hooks and utility functions
jest.mock('../../hooks/useModal', () => ({
  useModal: jest.fn(),
}));
jest.mock('../hooks/useUser', () => ({
  useUser: jest.fn(),
}));
jest.mock('../utils/token-storage', () => ({
  getToken: jest.fn(),
  hasToken: jest.fn(),
  removeToken: jest.fn(),
}));

// Helper function to render NavBar with router
const renderNavBar = () => {
  return render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
};

describe('NavBar Component', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();

    // Default mock implementations
    (useModal as jest.Mock).mockReturnValue({
      openModal: jest.fn(),
      closeModal: jest.fn(),
    });
    (useUser as jest.Mock).mockReturnValue({
      setUser: jest.fn(),
      setFunds: jest.fn(),
    });
    (hasToken as jest.Mock).mockReturnValue(false);
  });

  test('renders NavBar with login button when not authenticated', () => {
    renderNavBar();
    expect(screen.getByText('Log In | Sign Up')).toBeInTheDocument();
  });

  test('renders NavBar with user name and funds when authenticated', () => {
    (hasToken as jest.Mock).mockReturnValue(true);
    (getToken as jest.Mock).mockReturnValue({
      user: { name: 'John Doe', funds: 1000 },
    });

    renderNavBar();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('($1,000.00)')).toBeInTheDocument();
  });

  test('opens modal when login button is clicked', () => {
    const openModalMock = jest.fn();
    (useModal as jest.Mock).mockReturnValue({
      openModal: openModalMock,
      closeModal: jest.fn(),
    });

    renderNavBar();
    fireEvent.click(screen.getByText('Log In | Sign Up'));
    expect(openModalMock).toHaveBeenCalled();
  });

  test('toggles menu when menu icon is clicked', () => {
    renderNavBar();
    const menuIcon = screen.getByTestId('menu-icon');
    fireEvent.click(menuIcon);
    expect(screen.getByTestId('app-drawer')).toBeInTheDocument();
    fireEvent.click(menuIcon);
    expect(screen.queryByTestId('app-drawer')).not.toBeInTheDocument();
  });

  test('logs out user when logout button is clicked', () => {
    (hasToken as jest.Mock).mockReturnValue(true);
    (getToken as jest.Mock).mockReturnValue({
      user: { name: 'John Doe', funds: 1000 },
    });
    const setUserMock = jest.fn();
    (useUser as jest.Mock).mockReturnValue({
      setUser: setUserMock,
      setFunds: jest.fn(),
    });

    renderNavBar();
    fireEvent.click(screen.getByText('Log Out'));
    expect(setUserMock).toHaveBeenCalledWith(undefined);
  });

  test('renders FAQ button when not on FAQ page', () => {
    renderNavBar();
    expect(screen.getByTestId('faq-button')).toBeInTheDocument();
  });

  test('does not render FAQ button when on FAQ page', () => {
    Object.defineProperty(window, 'location', {
      value: { pathname: '/faq' },
      writable: true,
    });
    renderNavBar();
    expect(screen.queryByTestId('faq-button')).not.toBeInTheDocument();
  });
});
