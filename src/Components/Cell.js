import React, { PureComponent } from "react";
import {
    View,
    Image,
    Dimensions
} from "react-native";

import green from './../assets/green.png';
import blue from './../assets/blue.png';
import brown from './../assets/brown.png';
import pink from './../assets/pink.png';
import purple from './../assets/purple.png';
import red from './../assets/red.png';
import yellow from './../assets/yellow.png';
import gray from './../assets/gray.png';

import { CELL_LENGTH } from '../Constants';

export default class Cell extends PureComponent{
    render(){
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

        return (
            <View>
                <Image source={color(this.props.color)} style={{ width: CELL_LENGTH, height: CELL_LENGTH}} />
            </View>
        );
    }
}