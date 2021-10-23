import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { MediaLibrary } from 'expo-media-library';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import mime from "mime";

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [imageUri, setImageUri] = useState(null);
  const isFocused = useIsFocused();

  var FormData = require('form-data');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

    const unsubscribe = navigation.addListener('focus', () => {
      // console.log(imageUri);
      // setImageUri(null);
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (this.camera) {
      const options = { quality: 1, base64: true, skipProcessing: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      //const asset = await MediaLibrary.createAssetAsync(data.uri);
      //setImageUri(asset);
      //console.log(imageUri);
      const formData = new FormData();
      formData.append('image', {
        uri: data.uri,
        type: 'image/jpeg',
        name: 'image.jpg',
      });

      var config = {
        method: 'post',
        url: 'https://api.logmeal.es/v2/image/recognition/complete/:model_version?skip_types=[1,3]&language=eng',
        headers: {
          'Authorization': 'Bearer c00399492c96866ead660e9acdedc33349383779',
          'Content-Type': 'multipart/form-data',
        },
        data: formData
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      // postLogMealReq();

    }
  };

  const postLogMealReq = async () => {
    const formData = new FormData();
    console.log(imageUri);
    const newImageUri = "file:///" + imageUri.split("file:/").join("");

    formData.append('image', {
      uri: newImageUri,
      type: mime.getType(newImageUri),
      name: newImageUri.split("/").pop(),
    });

    var config = {
      method: 'post',
      url: 'https://api.logmeal.es/v2/image/recognition/complete/:model_version?skip_types=[1,3]&language=eng',
      headers: {
        'Authorization': 'Bearer c00399492c96866ead660e9acdedc33349383779',
        'Content-Type': 'multipart/form-data',
        Accept: "application/json"
      },
      data: formData
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
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
