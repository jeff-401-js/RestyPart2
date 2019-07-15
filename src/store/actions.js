import superagent from "superagent";

export const getRemote = payload => dispatch => {

  return superagent
    .get(payload.url)
    .then(data => {
      let record = data.body.results;
      let model = payload.model;
      dispatch(get({ model, record }));
    })
    .catch(e => {
      console.error(e);
    });
};

export const get = payload => {
  return {
    type: "GET",
    payload: payload
  };
};

export const postRemote = payload => dispatch => {

  return superagent
    .post(payload.url)
    .send(payload.record)
    .then(data => {
      let record = data.body;
      let id = data.body.id;
      let model = payload.model;
      dispatch(post({ id, model, record }));
    })
    .catch(e => {
      console.error(e);
    });
};

export const post = payload => {
  return {
    type: "POST",
    payload: payload
  };
};

export const putRemote = payload => dispatch => {

  return superagent
    .put(payload.url)
    .send(payload.record)
    .then(data => {
      let record = data.body;
      let id = payload.id;
      let model = payload.model;
      dispatch(put({ id, model, record }));
    })
    .catch(e => {
      console.error(e);
    });
};

export const put = payload => {
  return {
    type: "PUT",
    payload: payload
  };
};

export const deleteRemote = payload => dispatch => {

  return superagent
    .delete(payload.url)
    .then(data => {
      let id = payload.id;
      let model = payload.model;
      dispatch(destroy({ id, model }));
    })
    .catch(e => {
      console.error(e);
    });
};

export const destroy = payload => {
  return {
    type: "DELETE",
    payload: payload
  };
};
