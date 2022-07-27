import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCalendarPlus,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/react-protrips">
          <FontAwesomeIcon icon={faHome} style={{ fontSize: '35px' }} />
        </Link>
        <Link to="/react-protrips/addTrip">
          <FontAwesomeIcon icon={faCalendarPlus} style={{ fontSize: '35px' }} />
        </Link>
        <Link to="/react-protrips/display">
          <FontAwesomeIcon icon={faCalendarAlt} style={{ fontSize: '35px' }} />
        </Link>
      </div>
    );
  }
}