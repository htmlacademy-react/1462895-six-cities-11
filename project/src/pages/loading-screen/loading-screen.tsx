import styles from './loading-screen.module.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className={styles.spinner}></div>
  );
}

export default LoadingScreen;
