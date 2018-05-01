import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import ListContainer from './containers/ListContainer';
import ImagesContainer from './containers/ImagesContainer';

class App extends Component {
  render() {
    return (
      <ScrollView>
        <ListContainer />
        <ImagesContainer />
      </ScrollView>
    );
  }
}

export default App;
