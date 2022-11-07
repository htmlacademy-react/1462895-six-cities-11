import React, { ChangeEvent, useState } from 'react';

const MIN_REVIEW_LENGTH = 50; // symbols

type FormDataState = {
  rating: string | null;
  review: string;
}

function ReviewsForm(): JSX.Element {
  const [formData, setFormData] = useState<FormDataState>({
    rating: null,
    review: '',
  });

  const handleFieldChange = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = evt.target;

    setFormData({ ...formData, [name]: value });

  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((item) => (
          <React.Fragment key={item}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={`${item}`}
              onChange={handleFieldChange}
              id={`${item}-stars`}
              type="radio"
            />
            <label htmlFor={`${item}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        onChange={handleFieldChange}
        value={formData.review}
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={formData.rating === null || formData.review.length < MIN_REVIEW_LENGTH}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
