import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import { Ionicons, Foundation, Octicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

export default function LinksScreen() {
  const camera = useRef(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  const getCameraRollPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      return true;
    } else {
      /// Handle permissions denied;
      console.log('Uh oh! The user has not granted us permission.');
      return false;
    }
  };

  useEffect(() => {
    const checkCameraPermission = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);

      setHasCameraPermission(status === 'granted');
    };
    checkCameraPermission();
  }, []);

  const snap = async () => {
    if (camera.current) {
      let photo = await camera.current.takePictureAsync();
      const granted = await getCameraRollPermissions();

      if (!granted) return;
      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      MediaLibrary.createAlbumAsync('Expo', asset)
        .then(() => {
          console.log('Album created!');
        })
        .catch(error => {
          console.log('err', error);
        });
    }
  };

  if (hasCameraPermission === null) {
    return <View />;
  } else if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} ref={camera} />
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.bottomButton}>
            <Octicons name="kebab-horizontal" size={30} color="white" />
          </TouchableOpacity>
          <View style={{ flex: 0.4 }}>
            <TouchableOpacity onPress={snap} style={{ alignSelf: 'center' }}>
              <Ionicons name="ios-radio-button-on" size={70} color="white" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.bottomButton}>
            <View>
              <Foundation name="thumbnails" size={30} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  bottomButton: {
    flex: 0.3,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {
    paddingBottom: 5,
    backgroundColor: '#000',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    flex: 0.12,
    flexDirection: 'row',
  },
});
