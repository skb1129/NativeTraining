import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image as NativeImage, StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

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
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: deviceWidth/2 - 10,
    width: deviceWidth/2 - 10,
    margin: 5,
    borderRadius: 10,
  }
});

export default Image;
