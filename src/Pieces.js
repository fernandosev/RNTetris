import Constants from './Constants';

export default pieces = [
    [[Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)-1,  -2, 'green'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2),  -2, 'green'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+1,  -2, 'green'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+1,  -1, 'green'], 1],
    [[Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)-1,  -2, 'purple'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2),  -2, 'purple'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+1,  -2, 'purple'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)-1,  -1, 'purple'], 1],
    [[Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)-1, -2, 'brown'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2), -2, 'brown'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2), -1, 'brown'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+1, -1, 'brown'], 1],
    [[Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)-1, -1, 'pink'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2), -1, 'pink'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2), -2, 'pink'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+1, -2, 'pink'], 0],
    [[Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)-1,  -2, 'yellow'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2),  -2, 'yellow'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+1,  -2, 'yellow'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2),  -1, 'yellow'], 1],
    [[Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2),  -2, 'blue'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+1,  -2, 'blue'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2),  -1, 'blue'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+1,  -1, 'blue'], false],
    [[Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)-1,  -1, 'red'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2),  -1, 'red'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+1,  -1, 'red'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+2,  -1, 'red'], 1]
];