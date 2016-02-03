import { REQUEST_LEAGUE, REQUEST_LEAGUE_FAILURE, RECEIVE_LEAGUE } from '../actions/league';

const initialState = {
  isFetching: false,
  status: null,
  errorMessage: null,
  items: []
};

export default function league(state = initialState, action) {

  switch (action.type) {

    case 'REQUEST_LEAGUE':
      return Object.assign({}, state, {
        isFetching: true,
        status: null
      });

    case 'REQUEST_LEAGUE_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        status: 'error',
        errorMessage: action.error
      });

    case 'RECEIVE_LEAGUE':
      return Object.assign({}, state, {
        isFetching: false,
        items: action.league,
        lastUpdated: action.receivedAt,
        status: 'ok'
      });

    default:
      return state;

  }

}
