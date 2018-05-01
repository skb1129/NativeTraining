import React, { Component } from 'react';
import { View } from 'react-native';

import ListContainer from './containers/ListContainer';
import ImagesContainer from './containers/ImagesContainer';

class App extends Component {
  render() {
    return (
      <View>
        <ListContainer />
        <ImagesContainer />
      </View>
    );
  }
}

export default App;
