import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOffer, getNearOffers, getComments } from '../../store/app-data/selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

import { MapType, PlaceCardType } from '../../const';
import { fetchOfferAction, fetchNearOffersAction, fetchCommentsAction } from '../../store/api-actions';
import { getOfferDataLoadingStatus, getNearOffersDataLoadingStatus, getCommentsDataLoadingStatus } from '../../store/app-data/selectors';

import Header from '../../components/header/header';
import PlaceCards from '../../components/place-cards/place-cards';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';

function PropertyPage():JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector(getOffer);
  const nearOffers = useAppSelector(getNearOffers);
  const comments = useAppSelector(getComments);
  const [ActiveOfferId, setActiveOfferId] = useState<number | null>(null);

  const isOfferDataLoading = useAppSelector(getOfferDataLoadingStatus);
  const isNearOffersDataLoading = useAppSelector(getNearOffersDataLoadingStatus);
  const isCommentsDataLoading = useAppSelector(getCommentsDataLoadingStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id.toString()));
      dispatch(fetchNearOffersAction(id.toString()));
      dispatch(fetchCommentsAction(id.toString()));
    }
  }, [dispatch, id]);

  const handleMouseCrossCard = (offerId: number | null) => setActiveOfferId(offerId);

  if (isOfferDataLoading || isNearOffersDataLoading || isCommentsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Header hasNav />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offer?.images
                  .slice(0, 6)
                  .map((imgUrl) => (
                    <div className="property__image-wrapper" key={imgUrl}>
                      <img className="property__image" src={imgUrl} alt="Preview studio" />
                    </div>
                  ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                offer?.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer?.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${offer?.rating ? offer?.rating * 20 : 0}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer?.rating ? offer?.rating : 'N/A'}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer?.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer?.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer?.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer?.goods.map((item) => (
                    <li className="property__inside-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer?.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer?.host.name}
                  </span>
                  {
                    offer?.host.isPro &&
                    <span className="property__user-status">
                      Pro
                    </span>
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer?.description}
                  </p>
                </div>
              </div>
              <Reviews reviews={comments} id={id} />
            </div>
          </div>
          <Map
            offers={nearOffers.slice(0, 3)}
            currentOffer={offer}
            mapType={MapType.NearPlaces}
            crossedCardId={ActiveOfferId}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceCards
              offers={nearOffers.slice(0, 3)}
              cardType={PlaceCardType.NearPlaces}
              onMouseCrossCard={handleMouseCrossCard}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyPage;
