import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CameraScreen = ({ navigation }) => {
  return (
    // <View>
    //   <SafeAreaView>
    //     <Button title="Close" onPress={() => navigation.goBack()} />
    //   </SafeAreaView>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Camera!</Text>
    </View>
    // </View>
  );
};

export default CameraScreen;
