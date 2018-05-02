import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import ListContainer from './containers/ListContainer';
import ImagesContainer from './containers/ImagesContainer';

class App extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ListContainer />
        <ImagesContainer />
      </ScrollView>
    );
  }
}

export default App;
