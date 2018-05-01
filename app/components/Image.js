import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image as NativeImage, StyleSheet } from 'react-native';

class Image extends Component {
  static propTypes = {
    image: PropTypes.object.isRequired,
  };
  
  render() {
    return (
      <View>
        <NativeImage
          style={styles.image}
          source={{uri: this.props.image.imageUrl}}
          resizeMode='contain'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 180,
    width: 180,
  }
});

export default Image;
