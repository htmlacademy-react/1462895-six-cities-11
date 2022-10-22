import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';

import styles from './not-found-page.module.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray">
      <main className="page__main">
        <div className="container">
          <section className={styles['not-found']}>
            <p className={styles['not-found__code']}>404</p>
            <h1 className={styles['not-found__title']}>Page not found</h1>
            <Link to={AppRoute.Main} className={styles['not-found__link']}>Go to main page</Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
