import { useAppSelector } from '../../hooks';
import {getFavoriteOffers} from '../../store/app-data/selectors';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesList from '../../components/favorites-list/favorites-list';
import NothingInFavorites from '../../components/nothing-in-favorites/nothing-in-favorites';

function FavoritesPage():JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <div className="page">
      <Header hasNav />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {
            favoriteOffers.length < 1
              ? <NothingInFavorites />
              : (
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <FavoritesList offers={favoriteOffers} />
                </section>
              )
          }
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FavoritesPage;
