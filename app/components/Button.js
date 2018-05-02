import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const styles = StyleSheet.create({
  btn: {
    borderColor: '#bbb',
    borderStyle: 'solid',
    borderBottomWidth: 0.7,
    borderRadius: 20,
  },
  btnText: {
    fontSize: 20,
    color: '#a04',
    padding: 15,
  },
});

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
