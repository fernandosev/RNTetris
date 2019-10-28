import React from 'react';
import {
    View,
    Image
} from "react-native";

import green from './../assets/green.png';
import blue from './../assets/blue.png';
import brown from './../assets/brown.png';
import pink from './../assets/pink.png';
import purple from './../assets/purple.png';
import red from './../assets/red.png';
import yellow from './../assets/yellow.png';
import gray from './../assets/gray.png';

export function Construction({size, position}){
    const color = (c) => {
        switch(c){
            case 'green': {
                return green;
            }

            case 'brown': {
                return brown;
            }

            case 'blue': {
                return blue;
            }

            case 'purple': {
                return purple;
            }

            case 'pink': {
                return pink;
            }

            case 'red': {
                return red;
            }

            case 'yellow': {
                return yellow;
            }

            default: {
                return gray;
            }
        }
    }

    let construction = position.map((el, idx) => {
        return <Image key={idx} source={color(el[2])} style={{ width: size, height: size, position: 'absolute', left: el[0] * size, top: el[1] * size}} />
    });

    return (
        <View>
            {construction}
        </View>
    );
}