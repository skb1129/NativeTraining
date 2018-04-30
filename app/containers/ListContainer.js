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
        <Text style={styles.title}>Native Training</Text>
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
    borderBottomWidth: 0.5,
    borderColor: '#bbb',
    borderStyle: 'solid',
    borderRadius: 20,
  },
  title: {
    fontSize: 35,
    padding: 15,
    fontWeight: 'bold',
  },
  btn: {
    borderColor: '#bbb',
    borderStyle: 'solid',
    borderTopWidth: 0.5,
    borderRadius: 20,
  },
  btnText: {
    width: '50%',
    fontSize: 20,
    color: '#a04',
    padding: 15,
  }
});

export default ListContainer;
