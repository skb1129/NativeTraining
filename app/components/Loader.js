import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

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
