import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default function BestScores({data}){
    const renderScores = () => {
        return data.map(
            (element, index) => <Text key={index} style={styles.text}> #{index+1} - {element} </Text>
        )
    }
    
    return (
        <View style={styles.container}>
            {data && 
                <View style={styles.scores}>
                    <Text style={[styles.text, {fontSize: 20, marginBottom: 5}]}>Best scores</Text>
                    {renderScores()}
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        paddingLeft: 30,
        paddingBottom: 80
    },

    text:{
        fontSize: 14,
        color: '#FFF'
    }
});