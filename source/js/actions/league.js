import 'whatwg-fetch';

export const REQUEST_LEAGUE = 'REQUEST_LEAGUE';
export const REQUEST_LEAGUE_FAILURE = 'REQUEST_LEAGUE_FAILURE';
export const RECEIVE_LEAGUE = 'RECEIVE_LEAGUE';

function requestLeague() {
  return {
    type: REQUEST_LEAGUE
  };
}

function requestLeagueFailure(error) {
  return {
    type: REQUEST_LEAGUE_FAILURE,
    error
  };
}

function receiveLeague(league) {

  console.log(league);

  return {
    type: RECEIVE_LEAGUE,
    league: league,
    receivedAt: Date.now()
  };

}

function fetchLeague() {

  // thunk!
  return (dispatch, getState) => {

    dispatch(requestLeague());

    return fetch('http://bots.playplay.io/seasons/current?team_id=56ab3bd3ec4fcb000300007a')
      .then(req => req.json())
      .then(json => dispatch(receiveLeague(json._embedded.user_ranks)))
      .catch(err => dispatch(requestLeagueFailure(err)));

  };

}

function shouldFetchLeague(state) {

  const league = state.league;

  if (league.status !== 'ok') {
    return true;
  } else if (league.isFetching) {
    return false;
  } else {
    return false;
  }

}

export function fetchLeagueIfNeeded() {

  return (dispatch, getState) => {

    if (shouldFetchLeague(getState())) {
      return dispatch(fetchLeague());
    } else {
      return Promise.resolve();
    }

  };

}
