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
        <Text style={styles.title}>Native Images</Text>
        <View style={styles.container}>
          {this.props.images.map(image => (
            <View key={image.id} style={styles.image}>
              <Image image={image}/>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 35,
    padding: 15,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    padding: 10,
  },
});

export default ViewImages;
