import { Comment } from '../types/comment';

export const comments: Comment[] = [
  {
    comment: 'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
    date: '2022-10-08T13:58:46.511Z',
    id: 2,
    rating: 3,
    user: {
      id: 19,
      isPro: false,
      name: 'Christina',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/10.jpg',
    },
  },
  {
    comment: 'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    date: '2022-10-03T13:58:46.511Z',
    id: 3,
    rating: 3,
    user: {
      id: 18,
      isPro: true,
      name: 'Sophie',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/9.jpg',
    },
  },
  {
    comment: 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    date: '2022-10-08T13:58:46.511Z',
    id: 4,
    rating: 4,
    user: {
      id: 18,
      isPro: true,
      name: 'Sophie',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/9.jpg',
    },
  },
  {
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2022-10-08T13:58:46.511Z',
    id: 5,
    rating: 2,
    user: {
      id: 15,
      isPro: false,
      name: 'Kendall',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/6.jpg',
    },
  },
  {
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2022-10-08T13:58:46.511Z',
    id: 6,
    rating: 3,
    user: {
      id: 13,
      isPro: false,
      name: 'Zak',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/4.jpg',
    },
  }
];
