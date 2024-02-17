import {getRandomInteger, getRandomArrayElement, generateCommentId} from './util.js';

const IMAGE_AMOUNTS = 25;
const AVATAR_AMOUNTS = 6;
const MIN_LIKES_AMOUNTS = 15;
const MAX_LIKES_AMOUNTS = 200;
const COMMENT_AMOUNTS = 20;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Жарим шашлыки #meat, #chill, #eat, #eatmeat',
  'Разбили Лагерь c друзьями! #camping, #friends',
  'Трэш, застукала парня с рядом с лошадью #wtf, #trashcontent, #trash',
  'Прыжок с 200 метров #jump, #highrisk, #emmotions',
  'Не могу выйти из дома, я в депресии #locked, #homealone, #depression'
];

const NAMES = ['София', 'Святослав', 'Карен', 'Ариа', 'Алан', 'Валентин'];

const createMessage = () =>
  Array.from({length: getRandomInteger(1, 2) },() =>
    getRandomArrayElement(COMMENT_LINES)
  ).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_AMOUNTS)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPictures = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES_AMOUNTS, MAX_LIKES_AMOUNTS),
  comments: Array.from(
    {length: getRandomInteger(0, COMMENT_AMOUNTS) },
    createComment
  ),

});


const getPictures = () =>
  Array.from({length: IMAGE_AMOUNTS}, (_, imageIndex) =>
    createPictures(imageIndex + 1)
  );

export {getPictures};
