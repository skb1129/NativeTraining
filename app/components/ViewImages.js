import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import Image from './Image';

import styles from '../styles/components/view-images';

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
