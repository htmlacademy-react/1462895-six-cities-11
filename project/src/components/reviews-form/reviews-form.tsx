import { ChangeEvent, useState, FormEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { addCommentAction } from '../../store/api-actions';
import { getCommentsDataSendingStatus } from '../../store/app-data/selectors';

import StarRadioBtn from '../star-radio-btn/star-radio-btn';

import { StarMarks } from '../../const';
import { CommentData } from '../../types/comment-data';

const ReviewLimit = {
  MIN_CHARACTERS: 50,
  MAX_CHARACTERS: 300,
};

type ReviewFormProps = {
  id: string | undefined;
}

type FormDataState = {
  rating: string;
  review: string;
}

const initialState = {
  rating: '0',
  review: '',
};

function ReviewsForm({ id }: ReviewFormProps): JSX.Element {
  const [formData, setFormData] = useState<FormDataState>(initialState);

  const dispatch = useAppDispatch();

  const isCommentSending = useAppSelector(getCommentsDataSendingStatus);

  const handleFieldChange = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = evt.target;

    setFormData({ ...formData, [name]: value });
  };

  const isDisabled = formData.rating === '0'
    || formData.review.length < ReviewLimit.MIN_CHARACTERS
    || formData.review.length > ReviewLimit.MAX_CHARACTERS;

  const onSubmit = (commentData: CommentData) => {
    dispatch(addCommentAction(commentData));
  };

  const clearForm = () => setFormData(initialState);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      id: Number(id),
      comment: formData.review,
      rating: Number(formData.rating),
      onSuccess: clearForm,
    });

    setFormData(initialState);
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
          <StarRadioBtn
            starMark={starMark}
            fieldChangeHandler={handleFieldChange}
            isDisabled={isCommentSending}
            currentRating={formData.rating}
            key={starMark[1]}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        onChange={handleFieldChange}
        value={formData.review}
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isCommentSending}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">{ReviewLimit.MIN_CHARACTERS} characterss and no more than {ReviewLimit.MAX_CHARACTERS} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled || isCommentSending}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
