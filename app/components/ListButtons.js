import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import Button from './Button';

import styles from '../styles/components/list-buttons';

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

export default ListButtons;
