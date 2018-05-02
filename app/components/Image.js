import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image as NativeImage } from 'react-native';

import styles from '../styles/components/image';

class Image extends Component {
  static propTypes = {
    image: PropTypes.object.isRequired,
  };

  render() {
    return (
      <View>
        <NativeImage
          style={styles.image}
          source={{ uri: this.props.image.imageUrl }}
        />
      </View>
    );
  }
}

export default Image;
