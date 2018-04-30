import React, { Component } from 'react';
import { View } from 'react-native';

import fetchListItems from '../services/ListItemsService';

import ListButtons from '../components/ListButtons';
import Loader from '../components/Loader';

class ListContainer extends Component {
  state = {
    buttons: [],
    isLoading: true,
  };
  
  componentDidMount() {
    fetchListItems().then(data => {
      this.setState({
        buttons: data.buttons,
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
        <ListButtons buttons={this.state.buttons}/>
      </View>
    );
  }
}

export default ListContainer;
