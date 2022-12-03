import {useAppSelector} from '../../hooks';
import styles from './error-message.module.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);

  return error
    ? <div className={styles.message}>{error}</div>
    : null;

}

export default ErrorMessage;
