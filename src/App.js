import React, { useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Text,
    Alert
} from 'react-native';

import { GameEngine } from 'react-native-game-engine';
import { GameLoop } from "./Systems";

import { CurrentPiece } from './Components/CurrentPiece';
import { Construction } from './Components/Construction';

import Constants from './Constants';

import Pieces from './Pieces';

const randomBetween = (min, max) => {
    let x = Math.floor(Math.random() * (max - min + 1) + min);
    return x;
}

export default function App() {
    const[running, setRunning] = useState(true);
    var engine = useRef();

    const onEvent = (e) => {
        if (e.type === "game-over"){
            setRunning(false);
            Alert.alert("Game Over");
        }
    }

    return(
        <View style={styles.container}>
            <GameEngine
                ref={(ref) => { engine = ref; }}
                style={styles.gameEngine}
                systems={[ GameLoop ]}
                entities={{
                    currentPiece: { position: Pieces[randomBetween(0, 6)], xspeed: 0, yspeed: 1, nextMove: Constants.GAME_SPEED, updateFrequency: Constants.GAME_SPEED, size: Constants.CELL_LENGTH, renderer: <CurrentPiece />},
                    construction: { position: [], size: Constants.CELL_LENGTH, renderer: <Construction />}
                }}
                onEvent={onEvent}
                running={running}>

                <StatusBar hidden={true}/>
            </GameEngine>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={() => { engine.dispatch({ type: "move-left" })} }>
                    <Text>LEFT</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { engine.dispatch({ type: "move-right" })} }>
                    <Text>RIGHT</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { engine.dispatch({ type: "rotate" })} }>
                    <Text>ROTATE</Text>
                </TouchableOpacity>
            </View>
        </View>
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
        width: Constants.MAX_WIDTH, 
        height: Constants.MAX_HEIGHT, 
        backgroundColor: '#ffffff', 
        flex: null
    },

    buttons: {
        flexDirection: 'row'
    },

    button: {
        padding: 20,
        backgroundColor: 'green',
    }
});