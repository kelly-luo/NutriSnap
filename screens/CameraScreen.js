import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useIsFocused } from '@react-navigation/native';

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [imageUri, setImageUri] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (this.camera) {
      const options = { quality: 1, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      setImageUri(data.uri);
    }
  };

  return (
    <View style={styles.container}>
      {imageUri ? (imageUri && <Image source={{ uri: imageUri }} style={{ flex: 1 }} />) :
        isFocused && (<Camera style={styles.camera} ref={(ref) => { camera = ref }} type={type} >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <MaterialCommunityIcons name="camera-retake-outline" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cameraCapture} onPress={() => takePicture()} />
            <TouchableOpacity
              style={styles.button}>
              <MaterialCommunityIcons name="magnify" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </Camera>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 15,
  },
  button: {
    flex: 0.3,
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  cameraCapture: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    alignSelf: 'flex-end',
    borderColor: '#C0C0C0',
    borderWidth: 3,
  }
});

export default CameraScreen;
