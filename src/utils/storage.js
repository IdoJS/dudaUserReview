export const setCounter = (c = 0) => {
  localStorage.setItem('counter', c);
};

export const getCounter = () => {
  return localStorage.getItem('counter') || 0;
};


export const setReview = (review) => {
  localStorage.setItem('review', JSON.stringify(review));
};

export const getReviews = () => {
  return JSON.parse(localStorage.getItem('review'));
}