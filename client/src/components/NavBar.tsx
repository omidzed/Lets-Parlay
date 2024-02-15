import { Link, Outlet } from 'react-router-dom';
import { getToken, removeToken, hasToken } from '../utilities/token-storage';
import { useModal } from './useModal';
import { useUser } from './useUser';
import { AuthForm } from './AuthForm';
import { useState, useEffect } from 'react';

export function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasToken());
  const [action, setAction] = useState<'sign-up' | 'sign-in'>(undefined);

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
    nav: 'flex pr-2 items-center justify-between items-center py-4 md:pr-20 bg-[#1F1F21] mb-6 pb-4',
    appName:
      'text-bigger flex items-center ml-4 md:text-4xl md:ml-20 cursor-pointer md:py-2 md:px-8',
    parlay: ' italic',
    let: 'text-red-600 italic mr-1',
    s: 'text-yellow-300 md:text-4xl mr-1 font-light ',
    buttonsWrapper: 'flex items-center gap-4',
    join: 'text-rounds  p-1 tracking-widest text-white bg-black rounded-sm md:rounded-md md:px-6 md:py-2 md:text-thead',
    login:
      'text-rounds p-1  md:tracking-widest text-white  bg-blue-800 rounded-sm md:rounded-md md:px-6 md:py-2 md:text-thead',
    logout:
      'text-rounds p-1 md:tracking-wider text-white md:mr-4  md:text-thead rounded-lg bg-red-700 md:px-6 md:py-2',
    list: 'flex leading-2  items-center justify-center text-smallest text-white mr-3 text-right mt-2',
    userName:
      'text-sm leading-2 md:text-odds md:tracking-widest text-white mr-2 text-left',
    funds: 'text-xs leading-2 md:text-odds text-[#54D338]',
  };

  return (
    <div>
      <nav className={styles.nav}>
        <Link to={'/'} className={`app-name text-[#9c9b9b] ${styles.appName}`}>
          <p className={styles.let}>LET</p>
          <p className={styles.s}>{' $ '}</p>
          <p className={styles.parlay}>PARLAY</p>
        </Link>

        {hasToken() ? (
          <div className="flex justify-between items-center">
            <div className="flex-col md:mr-4">
              <div className={styles.list}>
                <p className={styles.userName}>{name}</p>
                <p className={styles.funds}>{`(${formattedFunds})`}</p>
              </div>
            </div>
            <button className={styles.logout} onClick={logOut}>
              Log Out
            </button>
            {/* <Sling
              toggled={isOpen}
              toggle={setOpen}
              color="#FFFFFF"
              size={10}
              direction="left"
            /> */}
          </div>
        ) : (
          <div className={styles.buttonsWrapper}>
            <button className={styles.join} onClick={handleRegister}>
              Join
            </button>
            <button className={styles.login} onClick={handleLogin}>
              Log In
            </button>
            {/* <Sling
              toggled={isOpen}
              toggle={setOpen}
              color="#FFFFFF"
              size={10}
              direction="left"
            /> */}
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

//import { Sling } from 'hamburger-react';
//const [isOpen, setOpen] = useState(false);
