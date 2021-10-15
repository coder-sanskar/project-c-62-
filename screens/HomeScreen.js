import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';


export default class HomeScreen extends React.Component {
 alexa1Pressed(){
  var alexa1 = db.ref('alexa/' + '/')
  alexa1.update({
    'absent': 'true'
  })
}

alexa2Pressed(){
  var alexa2 = db.ref('alexa/' + '/')
  alexa2.update({
    'present': 'true'
  })
}
siri1Pressed(){
  var siri1 = db.ref('siri/' + '/')
  siri1.update({
    'absent': 'true'
  })
}

siri2Pressed(){
  var siri2 = db.ref('siri/' + '/')
  siri2.update({
    'present': 'true'
  })
}
sophia1Pressed(){
  var sophia1 = db.ref('sophia/' + '/')
  sophia1.update({
    'absent': 'true'
  })
}

sophia2Pressed(){
  var sophia2 = db.ref('sophia/' + '/')
  sophia2.update({
    'present': 'true'
  })
}

  goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  render() {
    return (
      <View>
        <AppHeader />

        <Text style={styles.studenChartContainer}>Alexa</Text>
        <Text style={styles.studenChartContainer}>Siri</Text>
        <Text style={styles.studenChartContainer}>Sophia</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.sophia1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button }
          onPress={() => {
            this.siri1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
               this.alexa1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

       
           <TouchableOpacity
          style={styles.button2}
          onPress={() => {
           this.alexa2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
             this.siri2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
              this.sophia2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

       
        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
          }}>
          <Text style={styles.button3Text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  studenChartContainer: {
     flexDirection: 'row',
     padding: 10,
     alignItems: 'center',
     margin: 20
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: -95,
    //marginBottom: 30,
    marginLeft: 200,
    width: 100,
    height: 30,
    backgroundColor: 'red'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  button2: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
   // marginTop: 10,
    marginLeft: -30,
    width: 100,
    height: 30,
    backgroundColor: 'green'
  },
  button2Text: {
    textAlign: 'center',
    color: 'white',
  },
  button3: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    //marginBottom: 10,
   marginTop: 90,
    marginLeft: 40,
    width: 200,
    height: 50,
    backgroundColor: 'yellow',
  },
   button3Text: {
    textAlign: 'center',
    color: 'purple',
  },
 
});