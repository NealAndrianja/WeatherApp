import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NotFoundScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Page Not Found</Text>
            <Link href={"/(tabs)"}>Go back to home screen</Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default NotFoundScreen;