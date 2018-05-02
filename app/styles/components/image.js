import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  image: {
    height: (deviceWidth / 2) - 10,
    width: (deviceWidth / 2) - 10,
    margin: 5,
    borderRadius: 10,
  },
});

export default styles;
