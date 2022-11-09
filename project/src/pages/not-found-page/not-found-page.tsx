import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';

import styles from './not-found-page.module.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray">
      <main className="page__main">
        <div className="container">
          <section className={styles.error}>
            <p className={styles.code}>404</p>
            <h1 className={styles.desc}>Page not found</h1>
            <Link to={AppRoute.Main} className={styles.link}>Go to main page</Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
