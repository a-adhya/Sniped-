import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      // Handle the taken photo further (e.g., navigate to a preview screen)
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={cameraRef}>
        {/* Back Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Handle back button press
            }}>
            <Ionicons name="arrow-back" size={40} color="white" />
          </TouchableOpacity>
        </View>

        {/* Take Picture Button */}
        <View style={styles.takePictureButtonContainer}>
          <TouchableOpacity
            style={styles.takePictureButton}
            onPress={takePicture}>
            <FontAwesome name="circle-o" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
    // Additional styling...
  },
  takePictureButtonContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  takePictureButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#fff', // Change as needed
    borderRadius: 30,
  },
  // ... Other styles...
});

export default CameraScreen;
