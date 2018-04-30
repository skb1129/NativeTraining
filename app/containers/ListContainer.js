import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import fetchListItems from '../services/ListItemsService';

class ListContainer extends Component {
  state = {
    buttons: [],
  };
  
  componentDidMount() {
    fetchListItems().then(data => {
      this.setState({ buttons: data.buttons });
    }).catch(error => { console.log(error) });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>React Native Application</Text>
        {this.state.buttons.map(item => (
          <TouchableOpacity key={item.id} style={styles.btn}>
            <Text style={styles.btnText}>{item.btnText}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
  },
  btn: {
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: '#000',
  },
  btnText: {
    fontSize: 15,
    color: '#fff',
  }
});

export default ListContainer;
