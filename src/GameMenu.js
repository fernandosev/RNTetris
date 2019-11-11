import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

//animacoes
import * as Animatable from 'react-native-animatable';

import logo from './assets/logo.png';

export default function GameMenu({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.logo}/>

            <Animatable.View animation="rubberBand" easing="ease-out" iterationCount="infinite">
                <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('Game')}>
                    <Text style={styles.txtBtnStart}>Start</Text>
                </TouchableOpacity>
            </Animatable.View>
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