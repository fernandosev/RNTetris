import { Dimensions } from 'react-native';

export default Constants = {
    MAX_WIDTH: Dimensions.get('window').width,
    MAX_HEIGHT: Dimensions.get('window').width*1.5,
    CELL_LENGTH: 12,
    GRID_LENGTH_WIDTH: 12,
    GRID_LENGTH_HEIGHT: 12*1.5,
    CELL_LENGTH: (Dimensions.get('window').width)/12,
    GAME_SPEED: 15
}