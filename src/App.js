import React, { useRef, useState } from 'react';
import {
    View,
    StyleSheet,
    StatusBar,
    Alert,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import { GameEngine } from 'react-native-game-engine';
import { GameLoop } from "./Systems";

import Grid from './Components/Grid';

export default function App() {
    const[running, setRunning] = useState(true);
    var engine = useRef();

    const onEvent = (e) => {
        if (e.type === "game-over"){
            setRunning(false);
            Alert.alert("Game Over");
        }
    }

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    return(
        <GestureRecognizer
            onSwipeUp={() => engine.dispatch({ type: "rotate" })}
            onSwipeDown={() => engine.dispatch({ type: "slide" })}
            config={config}
            style={{flex: 1}}>
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                
                <GameEngine 
                ref={(ref) => { engine = ref; }}
                style={styles.gameEngine}
                systems={[ GameLoop ]}
                entities={{
                    grid: {grid: [
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null]
                    ], 
                    //Velocidade do jogo
                    nextMove: 20, 
                    updateFrequency: 20,
                    //Conponente rederizado
                    renderer: <Grid/>}
                }}
                running={running}
                onEvent={onEvent}/>

                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={() => { engine.dispatch({ type: "move-left" })} }/>
                    <TouchableOpacity style={styles.button} onPress={() => { engine.dispatch({ type: "move-right" })} }/>
                </View>

            </View>
        </GestureRecognizer>
    );
}

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    },

    gameEngine: {
        //position: 'absolute',
        //bottom: 0,
        backgroundColor: 'red'
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