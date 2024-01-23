const styles = {
  appName: 'flex items-center cursor-pointer px-8 pl-[7rem]',
  parlay: 'text-white sm:text-lg md:text-xl xl:text-3xl 2xl:text-[2rem]',
  lets: 'text-[#ff8300] pl-[7rem] sm:pl-[3rem] md:pl-[1rem]',
  buttonsWrapper: 'flex items-center px-8 whitespace-nowrap pr-[7rem]',
  button: 'text-white sm:text-sm md:text-lg xl:text-xl 2xl:py-1 px-8',
  login: 'bg-neutral-800 border border-neutral-800 rounded-md',
  join: 'rounded-lg bg-[#ff8300] border border-[#ff8300]',
};

export function NavBar() {
  return (
    <div className="bg-neutral-800 h-20 flex items-center justify-between">
      <div className={styles.appName}>
        <span className={styles.lets}>LETS</span>
        <span className={styles.parlay}>PARLAY</span>
      </div>
      <div className={styles.buttonsWrapper}>
        <button className={`${styles.button} ${styles.login}`}>LOGIN</button>
        <button className={`${styles.button} ${styles.join}`}>JOIN</button>
      </div>
    </div>
  );
}
