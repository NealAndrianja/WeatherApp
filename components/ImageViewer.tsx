import { Image } from "expo-image"
import { StyleSheet } from "react-native"

type Props = {
    imgSource: string,
    selectedImage?: string
}
function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? {uri: selectedImage} : imgSource

  return (
    <Image source={imageSource} style={styles.image}/>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 440,
        borderRadius: 18,
    }
})

export default ImageViewer