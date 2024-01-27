/* eslint-disable eol-last */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unreachable */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const IMAGE_AMOUNT = 25;
const AVATAR_AMOUNT = 6;
const MIN_LIKES_AMOUNT = 15;
const MAX_LIKES_AMOUNT = 200;
const COMMENT_AMOUNT = 20;
const COMMENT_LENGHT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTION = [
'Жарим шашлыки #meat, #chill, #eat, #eatmeat',
'Разбили Лагерь c друзьями! #camping, #friends',
'Трэш, застукала парня с рядом с лошадью #wtf, #trashcontent, #trash',
'Прыжок с 200 метров #jump, #highrisk, #emmotions',
'Не могу выйти из дома, я в депресии #locked, #homealone, #depression'
];

const NAMES = ['София', 'Святослав', 'Карен', 'Ариа', 'Алан', 'Валентин'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.lenght - 1)];


const createIdGenerator = () => {
  let lastGeneratedId = 0;

return () => {
  lastGeneratedId += 1;
  return lastGeneratedId;
 };
};
const generateCommentId = createIdGenerator();

const createMessage = () =>
 Array.from({lenght: getRandomInteger(1, 2) },() =>
  getRandomArrayElement(COMMENT_LENGHT)
  ).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: 'img/avatar-$ {getRandomInteger(1, AVATAR_AMOUNT)}.svg' ,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
 id: index,
 url: 'photos/${index}.jpg',
 description: getRandomArrayElement(DESCRIPTION),
 likes: getRandomInteger(MIN_LIKES_AMOUNT, MAX_LIKES_AMOUNT),
 comments: Array.from(
  {length: getRandomInteger(0, COMMENT_AMOUNT) },
  createComment
 ),

});

const getPictures = () =>
 Array.from({ length: PICTURE_AMMONT }, (_, pictureIndex) =>
  createPicture(pictureIndex + 1)
  );

getPictures();
