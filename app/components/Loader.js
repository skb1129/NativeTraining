import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/components/loader';

class Loader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading.......</Text>
      </View>
    );
  }
}

export default Loader;
