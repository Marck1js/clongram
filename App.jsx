import React from 'react';
import imgxD from './macOS-Sierra.jpg';
import {
  Button,
  Image,
  Pressable,  
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
const App = props => {
  return (
    <SafeAreaView style={[styles.root, styles.contenedor]}>
      <View style={styles.contenido}>
        <View style={styles.imagen}>
          <Image source={imgxD} style={styles.imgxD} resizeMode="cover" />
        </View>

        <View style={styles.opciones}>
          <Pressable
            style={styles.press}
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'settings',
                },
              })
            }>
            <Text style={styles.textConnect}>Connect</Text>
          </Pressable>

          <Pressable
            style={styles.press}
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'login',
                },
              })
            }>
            <Text style={styles.textConnect}>Message</Text>
          </Pressable>
        </View>

        <View style={styles.details}>
          <View style={styles.detailsBox}>
            <Text style={styles.textBox}>2K</Text>
            <Text style={styles.textBox}>Orders</Text>
          </View>
          <View style={styles.detailsBox}>
            <Text style={styles.textBox}>10</Text>
            <Text style={styles.textBox}>Photos</Text>
          </View>
          <View style={styles.detailsBox}>
            <Text style={styles.textBox}>89</Text>
            <Text style={styles.textBox}>Comments</Text>
          </View>
        </View>
        <Text style={styles.nameInfo}>Marco Dev, 22</Text>
        <Text style={styles.placeInfo}>Buenos Aires, ARG</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

App.options = {
  topBar: {
    visible: false,
    title: {
      text: 'Menu',
    },
  },
  bottomTab: {
    text: 'Home',
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fefef910',
  },
  contenedor: {
    backgroundColor: '#218090',
  },
  contenido: {
    borderRadius: 20,
    height: 350,
    width: 352,
    backgroundColor: '#fefef9',
    paddingHorizontal: 3,
  },
  imagen: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
    alignSelf: 'center',
    transform: [{translateY: -50}],
    borderRadius: 50,
    overflow: 'hidden',
    position: 'absolute',
  },
  imgxD: {
    width: 100,
    height: 100,
  },
  opciones: {
    marginTop: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  press: {
    paddingVertical: 5,
    paddingHorizontal: 25,
    backgroundColor: 'green',
    borderRadius: 4,
  },
  textConnect: {
    color: '#fff',
    textTransform: 'uppercase',
  },
  details: {
    alignSelf: 'center',
    width: 250,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  detailsBox: {
    alignItems: 'center',
  },
  textBox: {
    color: '#000',
  },
  nameInfo: {
    textAlign: 'center',
    fontSize: 24,
    color: '#051c56',
    marginTop: 20,
    marginBottom: 5,
    fontWeight: '700',
  },
  placeInfo: {
    textAlign: 'center',
    fontSize: 18,
    color: '#051c56',
    fontWeight: '400',
  },
});
