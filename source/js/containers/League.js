import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from '../components/loader';
import League from '../components/league';
import * as LeagueActions from '../actions/league';

class LeagueContainer extends Component {

  componentDidMount() {

    const { fetchLeagueIfNeeded } = this.props;

    fetchLeagueIfNeeded().then(() => {
        // do something
      });

  }

  render() {

    const { league, isFetching, status, errorMessage } = this.props;

    return (
      <div>

        <Loader loading={isFetching}>
          <League league={league} />
        </Loader>

      </div>
    );

  }

}

function mapStateToProps(state) {

  const { items: league, isFetching, status, errorMessage } = state.league;

  return {
    league,
    isFetching,
    status,
    errorMessage
  };

}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(LeagueActions, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(LeagueContainer);
