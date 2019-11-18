import {
    Dimensions
} from 'react-native';

const computeNumberOfCellsVertical = () => {
    const numberOfCellsVertical = ((HEIGHT_SCREEN)/(WIDTH_SCREEN/NUMBER_OF_CELLS_HORIZONTAL));

    return Math.trunc(numberOfCellsVertical);
}

//O menos 100 em HEIGHT_SCREEN é devido ao componente Score que ocupa 100 de altura da tela
const WIDTH_SCREEN = Dimensions.get('screen').width;
const HEIGHT_SCREEN = Dimensions.get('window').height-50;
const NUMBER_OF_CELLS_HORIZONTAL = 12;
const NUMBER_OF_CELLS_VERTICAL = computeNumberOfCellsVertical();
const CELL_LENGTH = WIDTH_SCREEN/NUMBER_OF_CELLS_HORIZONTAL;
const GAME_SPEED = 10; //min = 1

export {
    WIDTH_SCREEN,
    HEIGHT_SCREEN,
    NUMBER_OF_CELLS_HORIZONTAL,
    NUMBER_OF_CELLS_VERTICAL,
    CELL_LENGTH,
    GAME_SPEED
};