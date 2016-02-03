import React, { Component, PropTypes } from 'react';
import styles from '../../css/components/league.css';

export default class League extends Component {

  render() {

    const { league } = this.props;
    const renderLeague = this.renderLeague;

    return (
      <div className={styles.base}>

        {league.map(renderLeague.bind(this))}

      </div>
    );

  }

  renderLeague(league, i) {

    const { elo, losses, rank, user_name, wins } = league;

    return (
      <div key={i}>

        <h1>{rank}. {user_name} - wins: {wins} - losses: {losses} (elo: {elo})</h1>

      </div>
    )

  }

}

League.propTypes = {
  league: PropTypes.array.isRequired
};
