import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceholderImage = require("../../assets/images/piano.jpg");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled){
      setSelectedImage(result.assets[0].uri)
    } else {
      alert("Image selection cancelled")
    }
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.buttonContainer}>
        <Button label="Choose photo" theme="primary" onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  buttonContainer: {
    flex: 1 / 3,
    justifyContent: "center",
  }
});
