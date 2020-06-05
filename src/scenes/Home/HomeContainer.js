import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kilogramInput: '',
      kilogramOutput: '',
      choosePounds: true,
      chooseMiligram: false,
    };
  }

  onChangeText(value) {
    if (this.state.choosePounds) {
      this.setState({
        kilogramInput: (value * 1).toString(),
        kilogramOutput: (value * 2.205).toString(),
      });
    }
    if (this.state.chooseMiligram) {
      this.setState({
        kilogramInput: (value * 1).toString(),
        kilogramOutput: (value * 1000000).toString(),
      });
    }
  }

  poundButtonPressed = () => {
    this.setState({
      choosePounds: true,
      chooseMiligram: false,
      kilogramOutput: (this.state.kilogramInput * 2.205).toString(),
    });
  };

  miliButtonPressed = () => {
    this.setState({
      chooseMiligram: true,
      choosePounds: false,
      kilogramOutput: (this.state.kilogramInput * 1000000).toString(),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logostyle}
          source={require('../../img/logo.png')}
        />
        <View style={{paddingTop: 50}}>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            placeholder={'30'}
            onChangeText={value => this.onChangeText(value)}
          />
        </View>

        <View style={{paddingTop: 100}}>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            editable={false}
            value={this.state.kilogramOutput}
          />
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={{
              backgroundColor: this.state.choosePounds ? '#BC8D55' : '#998989',
              borderRadius: 8,
              width: 155,
              height: 43,
              alignSelf: 'center',
              justifyContent: 'center',
            }}
            onPress={this.poundButtonPressed}>
            <Text style={styles.buttonText}>POUNDS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: this.state.choosePounds ? '#998989':'#BC8D55',
              borderRadius: 8,
              width: 155,
              height: 43,
              alignSelf: 'center',
              justifyContent: 'center',
            }}
            onPress={this.miliButtonPressed}>
            <Text style={styles.buttonText}>MILIGRAMS</Text>
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
  textInput: {
    width: 310,
    height: 98,
    backgroundColor: '#B5ACAC',
    borderRadius: 8,
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  logostyle: {
    width: 300,
    height: 75,
    alignSelf: 'center',
  },
  buttonView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 100,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
