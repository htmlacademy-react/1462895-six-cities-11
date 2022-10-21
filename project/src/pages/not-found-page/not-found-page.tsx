import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';

function NotFoundPage():JSX.Element {
  return (
    <div className="page page--gray">
      <main className="page__main">
        <div className="container">
          <section className="not-found">
            <h1>404</h1>
            <p>Page not found</p>
            <Link to={AppRoute.Main}>Go to main page</Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
