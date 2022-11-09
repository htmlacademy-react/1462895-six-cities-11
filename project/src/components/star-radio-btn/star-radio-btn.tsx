import { ChangeEvent } from 'react';

import { Rating } from '../../types/rating';

type StarRadioBtnProps = {
  starMark: Rating;
  fieldChangeHandler: (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

function StarRadioBtn({ starMark, fieldChangeHandler }: StarRadioBtnProps): JSX.Element {
  const [ markDesc, mark] = starMark;
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={mark}
        onChange={fieldChangeHandler}
        id={`${mark}-stars`}
        type="radio"
      />
      <label
        htmlFor={`${mark}-stars`}
        className="reviews__rating-label form__rating-label"
        title={markDesc}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default StarRadioBtn;
