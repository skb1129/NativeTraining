import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

class Button extends Component {
  static propTypes = {
    button: PropTypes.object.isRequired,
  };
  
  render() {
    return (
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>{this.props.button.btnText}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    borderColor: '#bbb',
    borderStyle: 'solid',
    borderTopWidth: 0.5,
    borderRadius: 20,
  },
  btnText: {
    fontSize: 20,
    color: '#a04',
    padding: 15,
  }
});

export default Button;
