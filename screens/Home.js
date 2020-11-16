import React from "react";
import {
    Dimensions,
    FlatList,
    StyleSheet,
    View,
} from "react-native";
import ScaledImage from "../components/ScaledImage";
import { IMAGES } from '../test.js'

const SCREEN_WIDTH = Dimensions.get('window').width
const ItemSeperator = () => {
    return (
        <View style={styles.itemSeperator} />
    )
}

const HomeScreen = ({ }) => {
    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={IMAGES}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={ItemSeperator}
            renderItem={({ item }) => <ScaledImage width={SCREEN_WIDTH} uri={item.imageUrl} />}
        />
    )
};
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    itemSeperator: {
        height: 5,
        backgroundColor: 'blue',
    }
})