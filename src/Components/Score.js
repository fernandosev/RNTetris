import React from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

export default function Score({score}){
    return (
        <SafeAreaView style={styles.score}>
            <Text style={styles.txtScore}>Score: { score }</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    score: {
        height: 50,
        width: Dimensions.get('window').width,
        backgroundColor: '#F08080',
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtScore: {
        color: '#FFF',
        fontSize: 22
    }
});