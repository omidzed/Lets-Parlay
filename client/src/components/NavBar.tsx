import { Link, Outlet } from 'react-router-dom';
import { getToken, removeToken, hasToken } from '../utilities/token-storage';
import { useModal } from './ModalContext';
import { useUser } from './useUser';
import { AuthForm } from './AuthForm';
import { useState, useEffect } from 'react';
import { Sling } from 'hamburger-react';

export function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasToken());
  const [action, setAction] = useState<'sign-up' | 'sign-in'>(undefined);
  const [isOpen, setOpen] = useState(false);
  const [funds, setFunds] = useState<string>(() => {
    const tokenData = getToken();
    return tokenData ? (tokenData.user.funds / 100).toFixed(2) : '1000.00';
  });

  const { openModal, closeModal } = useModal();
  const { setUser } = useUser();

  const handleOpenModal = (actionType: 'sign-up' | 'sign-in') => {
    setAction(actionType);

    const modalContent = (
      <AuthForm
        key={actionType}
        action={actionType}
        onSignIn={handleAuthSuccess}
        closeModal={closeModal}
        toggleAction={() =>
          handleOpenModal(actionType === 'sign-up' ? 'sign-in' : 'sign-up')
        }
      />
    );
    openModal(
      modalContent,
      actionType === 'sign-up' ? `Let's create your account!` : 'Welcome back!'
    );
  };

  useEffect(() => {
    if (isAuthenticated) {
      const tokenData = getToken();
      const fundsFromToken = tokenData?.user.funds
        ? (tokenData.user.funds / 100).toFixed(2)
        : '1000.00';
      setFunds(fundsFromToken);
    } else {
      setFunds('1000.00');
    }
  }, [isAuthenticated]);

  const handleAuthSuccess = (data) => {
    localStorage.setItem('token', JSON.stringify(data));
    setUser(data.user);
    setIsAuthenticated(true);
    closeModal();
  };

  const token = getToken();
  const name = token?.user.name;

  const handleLogin = () => handleOpenModal('sign-in');
  const handleRegister = () => handleOpenModal('sign-up');

  const logOut = () => {
    removeToken();
    setUser(null);
    setIsAuthenticated(false);
  };

  const formattedFunds = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(parseFloat(funds));

  action;

  const styles = {
    nav: 'flex pr-2 justify-between items-center py-8 md:pr-20 bg-[#1F1F21] mb-8 pb-6',
    appName:
      'text-bigger flex items-center ml-4 md:text-5xl md:ml-20 cursor-pointer md:pt-2 md:px-8',
    parlay: 'text-gray-400 italic',
    let: 'text-red-600 italic mr-1',
    s: 'text-yellow-300 md:text-4xl mr-1 font-light',
    buttonsWrapper: 'flex items-center gap-1 border-orange-200 md:gap-4',
    join: 'text-sm  p-2 tracking-widest text-white  rounded-md bg-red-600 border border-white md:px-10 md:py-5 md:text-custom',
    login:
      'text-sm p-2  md:tracking-widest text-white border border-white bg-black rounded-md md:px-10 md:py-5 md:text-custom',
    logout:
      'text-sm p-2 md:tracking-wider text-white border border-white md:mr-4  md:text-custom rounded-lg bg-blue-800 md:px-8 md:py-4',
    list: 'text-smallest text-white mr-6 text-right mt-2',
    userName:
      'text-sm md:text-username md:tracking-widest text-white mr-2 text-left',
    funds: 'flex text-xs md:text-xl text-[#54D338]',
  };

  return (
    <div>
      <nav className={styles.nav}>
        <Link to={'/'} className={styles.appName}>
          <p className={styles.let}>LET</p>
          <p className={styles.s}>{' $ '}</p>
          <p className={styles.parlay}>PARLAY</p>
        </Link>
        {hasToken() ? (
          <div className="flex justify-between items-center">
            <div className="flex-col md:mr-4">
              <ul className={styles.list}>
                <li className={styles.userName}>{name}</li>
                <li className={styles.funds}>{formattedFunds}</li>
              </ul>
            </div>
            <button className={styles.logout} onClick={logOut}>
              LOGOUT
            </button>
            <Sling
              toggled={isOpen}
              toggle={setOpen}
              color="#FFFFFF"
              size={10}
              direction="left"
            />
          </div>
        ) : (
          <div className={styles.buttonsWrapper}>
            <button className={styles.join} onClick={handleRegister}>
              JOIN
            </button>
            <button className={styles.login} onClick={handleLogin}>
              LOGIN
            </button>
            <Sling
              toggled={isOpen}
              toggle={setOpen}
              color="#FFFFFF"
              size={10}
              direction="left"
            />
          </div>
        )}
      </nav>
      <Outlet />
    </div>
  );
}

{
  /* <button
              className="text-sm p-2 tracking-widest text-white font-bold rounded-md bg-gray-500 border border-white md:px-8 md:py-2 md:text-custom"
              onClick={() => setIsAuthenticated(hasToken())}>
              GUEST CHECK IN
            </button> */
}
