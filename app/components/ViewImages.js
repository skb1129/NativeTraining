import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import Image from './Image';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 35,
    padding: 15,
    fontWeight: 'bold',
    color: '#000',
  },
});

class ViewImages extends Component {
  static propTypes = {
    images: PropTypes.array,
  };

  static defaultProps = {
    images: [],
  };

  render() {
    return (
      <View>
        <Text style={styles.title}>Native Images</Text>
        <View style={styles.container}>
          {this.props.images.map(image => (
            <Image key={image.id} image={image} />
          ))}
        </View>
      </View>
    );
  }
}

export default ViewImages;
