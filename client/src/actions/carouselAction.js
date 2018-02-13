import axios from 'axios'

const getImages = () => (dispatch) => (
  dispatch({
    type: "GET_IMAGE",
    payload: axios.post('/images', {
    })
  })
);
