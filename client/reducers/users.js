import { GET_USERS} from '../actions/types';
const initialState = {
  data: []
}

export default function comments (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}
