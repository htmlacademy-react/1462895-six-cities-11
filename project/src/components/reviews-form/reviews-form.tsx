import { ChangeEvent, useState, FormEvent } from 'react';

import { useAppDispatch } from '../../hooks';
import { addCommentAction } from '../../store/api-actions';

import StarRadioBtn from '../star-radio-btn/star-radio-btn';

import { StarMarks } from '../../const';
import { CommentData } from '../../types/comment-data';

const MIN_REVIEW_LENGTH = 50; // characters

type ReviewFormProps = {
  id: string | undefined;
}

type FormDataState = {
  rating: string;
  review: string;
}

function ReviewsForm({ id }: ReviewFormProps): JSX.Element {
  const [formData, setFormData] = useState<FormDataState>({
    rating: '0',
    review: '',
  });

  const dispatch = useAppDispatch();

  const handleFieldChange = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = evt.target;

    setFormData({ ...formData, [name]: value });
  };

  const isDisabled = formData.rating === '0' || formData.review.length < MIN_REVIEW_LENGTH;

  const onSubmit = (commentData: CommentData) => {
    dispatch(addCommentAction(commentData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      id: Number(id),
      comment: formData.review,
      rating: Number(formData.rating),
    });

    setFormData({ ...formData, rating: '0', review: '' });
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {StarMarks.map((starMark) => (
          <StarRadioBtn starMark={starMark} fieldChangeHandler={handleFieldChange} key={starMark[1]} />
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
          stay with at least <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
