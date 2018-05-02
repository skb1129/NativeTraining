import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import Button from './Button';

class ListButtons extends Component {
  static propTypes = {
    buttons: PropTypes.array,
  };

  static defaultProps = {
    buttons: [],
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Native List</Text>
        {this.props.buttons.map(button => (
          <Button key={button.id} button={button} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  title: {
    fontSize: 35,
    padding: 15,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ListButtons;
