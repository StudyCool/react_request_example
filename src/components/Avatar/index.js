import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

class Avatar extends Component {
  render () {
    return <img {...this.props}/>;
  }

}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  className: '',
  alt: 'avatar'
};

export default Avatar;