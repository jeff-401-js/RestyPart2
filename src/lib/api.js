import superagent from 'superagent';

let base = 'http://localhost:3000/api/v1';

// /api/v1/models
// /api/v1/:model/schema
// /api/v1/:model/:id

/**
 * get component
 * @param {object} payload
 * @description gets the payload and attaches to the base url
 */
export const get = payload => {
  let url = base + '/' + Object.values(payload).join('/');
  return superagent
    .get(url)
    .then(result => result.body)
    .catch(console.error);
};

/**
 * get component
 * @param {object} payload
 * @description put updates the url with payload data
 */
export const put = payload => {
  let url = `${base}/${payload.model}/${payload.data._id}`;
  return superagent
    .put(url)
    .send(payload.data)
    .then(result => result.body)
    .catch(console.error);
};
