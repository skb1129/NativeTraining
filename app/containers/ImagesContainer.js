import React, { Component } from 'react';
import { View, Text } from 'react-native';

import fetchImages from '../services/ImagesService';

import Loader from '../components/Loader';

class ImagesContainer extends Component {
  state = {
    images: [],
    isLoading: true,
  };
  
  componentDidMount() {
    fetchImages().then(data => {
      this.setState({
        images: data.images,
        isLoading: false,
      });
    }).catch(error => { console.log(error) });
  }
  
  render() {
    if (this.state.isLoading) {
      return (
        <Loader />
      )
    }
    return (
      <View>
        <Text>Images Container</Text>
      </View>
    );
  }
}

export default ImagesContainer;
