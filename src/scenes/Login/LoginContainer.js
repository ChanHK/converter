import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image
            style={styles.logostyle}
            source={require('../../img/logo.png')}
          />
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={Actions.HomeContainer}>
            <Text style={styles.buttonText}>ENTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#576463',
    flex: 1,
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
  },
  logostyle: {
    width: 300,
    height: 75,
  },
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: '#BC8D55',
    borderRadius: 8,
    width: 286,
    height: 55,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default LoginContainer;
