import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DEVICE_WIDTH = Dimensions.get('window').width;

const imageUri =
  'https://lh3.googleusercontent.com/VQ-uK-sBBrdALDrWg3PwJJSQxbkcxmfgV5WmC57rTpG453nW9uC6oZlyzSWJhbnphZe_O3hVKKwG8ZCkPzcidGra' +
  '=s' +
  Math.floor(DEVICE_WIDTH * 1.1) +
  '-c';

const Post = () => (
  <View style={{ flex: 1 }}>
    <View style={styles.userBar}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{ width: 40, height: 40, borderRadius: 100, marginRight: 8 }}
          source={{
            uri: imageUri,
          }}
        />
        <Text>Alucard</Text>
      </View>
      <Ionicons name="ios-more" size={30} color="black" />
    </View>
    <TouchableOpacity
      style={{ flex: 0.7 }}
      onPress={() => {
        console.log('pressed');
      }}
    >
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri:
            'https://lh3.googleusercontent.com/VQ-uK-sBBrdALDrWg3PwJJSQxbkcxmfgV5WmC57rTpG453nW9uC6oZlyzSWJhbnphZe_O3hVKKwG8ZCkPzcidGra',
        }}
      />
    </TouchableOpacity>
  </View>
);

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      {[1, 2, 3].map(() => (
        <Post />
      ))}
    </ScrollView>
  );
}

SettingsScreen.navigationOptions = {};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    flex: 1,
    width: DEVICE_WIDTH,
    height: Math.floor(DEVICE_WIDTH * 1.1),
  },
  userBar: {
    backgroundColor: 'white',
    width: '100%',
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
