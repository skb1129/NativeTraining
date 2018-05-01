import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import Image from './Image';

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
        <Text>Images</Text>
        <Image />
      </View>
    );
  }
}

export default ViewImages;
