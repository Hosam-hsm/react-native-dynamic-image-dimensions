import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Image,
    ActivityIndicator,
} from "react-native";

const ScaledImage = (props) => {
    const [width, setWidth] = useState()
    const [height, setHeight] = useState()
    const [imageLoading, setImageLoading] = useState(true)

    useEffect(() => {
        Image.getSize(props.uri, (width1, height1) => {
            if (props.width && !props.height) {
                setWidth(props.width)
                setHeight(height1 * (props.width / width1))
            } else if (!props.width && props.height) {
                setWidth(width1 * (props.height / height1))
                setHeight(props.height)
            } else {
                setWidth(width1)
                setHeight(height1)
            }
            setImageLoading(false)
        }, (error) => {
            console.log("ScaledImage,Image.getSize failed with error: ", error)
        })
    }, [])

    return (
        height ?
            <View style={[styles.imageContainer, { height, width, }]}>
                <Image
                    source={{ uri: props.uri }}
                    style={{ height, width }}
                />
            </View>
            : imageLoading ?
                <ActivityIndicator size="large" />
                : null
    )
};
export default ScaledImage;

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 5,
        backgroundColor: "lightgray"
    }
})