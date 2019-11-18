import React, { useRef, useState } from 'react';
import {
    View,
    StyleSheet,
    StatusBar,
    Alert,
    SafeAreaView,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import { GameEngine } from 'react-native-game-engine';
import { GameLoop } from "./Systems";

import Grid from './Components/Grid';

import {
    NUMBER_OF_CELLS_HORIZONTAL,
    NUMBER_OF_CELLS_VERTICAL,
    GAME_SPEED
} from './Constants';

import { addScore } from './Data/score';

import Score from './Components/Score';

export default function App({navigation}) {
    const[running, setRunning] = useState(true);
    const[score, setScore] = useState(0);
    var engine = useRef();

    const renderGrid = () => {
        let grid = [];

        for(i=0; i<NUMBER_OF_CELLS_VERTICAL; i++){
            grid[i] = [];
            for(j=0; j<NUMBER_OF_CELLS_HORIZONTAL; j++){
                grid[i][j] = null;
            }
        }

        return grid;
    }

    const onEvent = async (e) => {
        if (e.type === "game-over"){
            setRunning(false);
            
            if(score > 0){
                await addScore(score);
                let gameMenuFunction = navigation.getParam('setGameOver');
                gameMenuFunction(true);
            }

            Alert.alert("Game Over");
            navigation.navigate('GameMenu');
        }else if(e.type === "add-score"){
            setScore(score + e.score);
        }
    }

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    return(
            <SafeAreaView style={styles.container}>
                <GestureRecognizer
                    onSwipeUp={() => engine.dispatch({ type: "rotate" })}
                    onSwipeDown={() => engine.dispatch({ type: "slide" })}
                    onSwipeLeft={() => engine.dispatch({ type: "move-left" })}
                    onSwipeRight={() => engine.dispatch({ type: "move-right" })}
                    config={config}
                    style={{flex: 1}}>

                <StatusBar hidden={true}/>
                
                <Score score={score}/>

                <GameEngine 
                ref={(ref) => { engine = ref; }}
                style={styles.gameEngine}
                systems={[ GameLoop ]}
                entities={{
                    grid: {grid: renderGrid(), 
                    //Velocidade do jogo
                    nextMove: GAME_SPEED, 
                    updateFrequency: GAME_SPEED,
                    //Conponente rederizado
                    renderer: <Grid/>}
                }}
                running={running}
                onEvent={onEvent}/>

                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={() => { engine.dispatch({ type: "move-left" })} }/>
                    <TouchableOpacity style={styles.button} onPress={() => { engine.dispatch({ type: "move-right" })} }/>
                </View>

                </GestureRecognizer>
            </SafeAreaView>
    );
}

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttons: {
        flexDirection: 'row'
    },

    button: {
        width: Dimensions.get('screen').width/2,
        height: Dimensions.get('window').height,
        backgroundColor: 'rgba(255,255,255, 0)',
    }
});