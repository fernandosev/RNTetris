import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    AsyncStorage
} from 'react-native';

//animacoes
import * as Animatable from 'react-native-animatable';

import logo from './assets/logo.png';

import BestScores from './Components/BestScores';

export default function GameMenu({navigation}){
    const[gameOver, setGameOver] = useState(true);
    const[bestScores, setBestScores] = useState(null);

    useEffect(() => {
        async function scores(){
            try{
                let data = await AsyncStorage.getItem('Best_Scores')
                setBestScores(JSON.parse(data));
                setGameOver(false);
            }catch(e){
                console.log(e);
            }
        }

        if(gameOver == true){
            scores();
        }
    }, [gameOver]);

    return(
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.logo}/>

            <Animatable.View animation="rubberBand" easing="ease-out" iterationCount="infinite">
                <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('Game', { setGameOver })}>
                    <Text style={styles.txtBtnStart}>Start</Text>
                </TouchableOpacity>
            </Animatable.View>

            <BestScores data={bestScores}></BestScores>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#006400',
       alignItems: 'center',
       justifyContent: 'center'
   },

   logo: {
       width: 200,
       height: 40,
       marginBottom: 30
   },

   btnStart: {
       backgroundColor: '#FFF'
   },

   txtBtnStart: {
       fontSize: 20,
       color: '#006400',
       paddingHorizontal: 30,
       paddingVertical: 20
   }
});