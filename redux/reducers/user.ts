import { GET_USER, SET_USER } from '../types';

const user = (state = {}, action: { type: any; payload: { user: any } }) => {
  switch (action.type) {
    case SET_USER: {
      return action.payload.user;
    }
    case GET_USER: {
      return action.payload.user;
    }
    default:
      return state;
  }
};

export default user;
