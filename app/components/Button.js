import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, Alert } from 'react-native';

import styles from '../styles/components/button';

class Button extends Component {
  static propTypes = {
    button: PropTypes.object.isRequired,
  };

  showAlert = () => { Alert.alert(this.props.button.btnText); };

  render() {
    return (
      <TouchableOpacity style={styles.btn} onPress={this.showAlert}>
        <Text style={styles.btnText}>{this.props.button.btnText}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
