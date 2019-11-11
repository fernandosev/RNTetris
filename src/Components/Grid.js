import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';

import Cell from './Cell';

export default function Grid({grid}) {
    const cells = () => {
        let finalCells = [];
        let keyValue = 0;

        for(let i=0; i<grid.length; i++) {
            for(let j=0; j<grid[i].length; j++){
                finalCells.push(<Cell key={keyValue} color={grid[i][j]}/>)
                keyValue++;
            }
        }

        return finalCells;
    }
    
    return (
        <View style={styles.container}>
            {cells()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').width*1.8,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});