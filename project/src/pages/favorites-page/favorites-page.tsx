import { AuthorizationStatus } from '../../const';

import { useAppSelector } from '../../hooks';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import FavoritesList from '../../components/favorites-list/favorites-list';

function FavoritesPage():JSX.Element {
  const offers = useAppSelector((state) => state.offers);

  return (
    <div className="page">
      <Header hasNav authorizationStatus={AuthorizationStatus.Auth} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FavoritesPage;
