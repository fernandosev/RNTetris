import React from "react";
import Constants from './Constants';
import Pieces from './Pieces';

const randomBetween = (min, max) => {
    let x = Math.floor(Math.random() * (max - min + 1) + min);
    return x;
}

export const GameLoop = (entities, { touches, dispatch, events }) => {
    let currentPiece = entities.currentPiece;
    let construction = entities.construction;

    //Apaga uma linha que estiver completa
    const deleteLine = (array) => {
        for(let i=0; i<Constants.GRID_LENGTH_HEIGHT; i++){
            let count = 0;

            for(let j=0; j<array.length; j++){
                if(array[j][1] == i)
                    count++;
            }

            if(count == Constants.GRID_LENGTH_WIDTH){
                for(let j=0; j<array.length; j++){
                    if(array[j][1] == i){
                        array.splice(j, 1);
                        j--;
                    }
                }

                for(let j=0; j<array.length; j++){
                    if(array[j][1] < i)
                        array[j][1]++; 
                }
            }
        }
    }

    //Verifica se na descida da peca existe um espaco ocupado
    const isOccupiedDown = (array1, array2) => {
        for(let i=0; i<array1.length-1; i++){
            for(let j=0; j<array2.length; j++){
                if(array1[i][0] == array2[j][0] && array1[i][1]+1 == array2[j][1]){
                    if(array1[i][1]+1 == 0){
                        dispatch({ type: "game-over" })
                    }
                    return true;
                }
            }
        }

        return false;
    }

    //Verifica se ao realizar um movimento lateral existe um espaco ocupado
    const isOccupiedLeftOrRight = (direction, array1, array2) => {
        for(let i=0; i<array1.length-1; i++){
            for(let j=0; j<array2.length; j++){
                if(array1[i][0]+direction == array2[j][0] && array1[i][1] == array2[j][1]){
                    return true;
                }
            }
        }

        return false;
    }

    //Verifica se a peca esta na borda da grid
    const isOnBorder = (border, array) => {
        for(let i = 0; i<array.length-1; i++){
            if(array[i][0] == border)
                return true;
        }

        return false;
    }

    const isOnborderEnd = (border, array) => {
        for(let i = 0; i<array.length-1; i++){
            if(array[i][1] == border)
                return true;
        }

        return false;
    }

    //Rotaciona uma peca
    const rotatePiece = () => {
        let newPiece = [];

        let i;
        let px = currentPiece.position[currentPiece.position.length-1];
        let x;
        let y;
        let aux;

        if(px == false)
            return;

        for(i=0; i<currentPiece.position.length-1; i++){
            if(i != px && px){
                y = currentPiece.position[px][1] + currentPiece.position[px][0] - currentPiece.position[i][1];
                x = currentPiece.position[i][0] + currentPiece.position[px][1] - currentPiece.position[px][0];
                z = currentPiece.position[i][2];

                aux = [y, x, z];
                
                newPiece[i] = aux;
            }else if(i == px && px){
                x = currentPiece.position[px][1];
                y = currentPiece.position[px][0];
                z = currentPiece.position[i][2];

                aux = [y, x, z];

                newPiece[i] = aux;
            }
        }

        newPiece[i] = currentPiece.position[i];

        if(!isOccupiedLeftOrRight(0, newPiece, construction.position) && !isOnBorder(-1, newPiece) && !isOnBorder(Constants.GRID_LENGTH_WIDTH, newPiece) && !isOnborderEnd(Constants.GRID_LENGTH_HEIGHT, newPiece))
            currentPiece.position = newPiece;
    }

    //Eventos dos botoes
    if (events.length){
        for(let i=0; i<events.length; i++){
            if (events[i].type === "move-left" && !isOnBorder(0, currentPiece.position) && !isOccupiedLeftOrRight(-1, currentPiece.position, construction.position)){
                for(let j = 0; j<currentPiece.position.length-1; j++)
                    currentPiece.position[j][0] = currentPiece.position[j][0] - 1;
            }else if (events[i].type === "move-right" && !isOnBorder(Constants.GRID_LENGTH_WIDTH-1, currentPiece.position) && !isOccupiedLeftOrRight(1, currentPiece.position, construction.position)){
                for(let j = 0; j<currentPiece.position.length-1; j++)
                    currentPiece.position[j][0] = currentPiece.position[j][0] + 1;
            }else if (events[i].type === "rotate"){
                rotatePiece();
            }
        }
    }

    //If para a velocidade do jogo
    currentPiece.nextMove -= 1;
    if (currentPiece.nextMove === 0){
        aux = true;
        currentPiece.nextMove = currentPiece.updateFrequency;
    
        for(let i = 0; i<currentPiece.position.length-1; i++){
            if(currentPiece.position[i][1] >= Constants.GRID_LENGTH_HEIGHT-1 || isOccupiedDown(currentPiece.position, construction.position)){
                aux = false;
                break;
            }
        }

        if(aux)
            for(let i = 0; i<currentPiece.position.length-1; i++)
                currentPiece.position[i][1] += currentPiece.yspeed;
        else{
            aux = true;
            construction.position = construction.position.concat(currentPiece.position.slice(0, currentPiece.position.length-1));

            deleteLine(construction.position);

            //Renderizando novas pecas
            switch(randomBetween(0, 6)){
                case 0: {
                    currentPiece.position = [[Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)-1,  -2, 'green'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2),  -2, 'green'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+1,  -2, 'green'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+1,  -1, 'green'], 1];
                    break;
                }

                case 1: {
                    currentPiece.position = [[Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)-1,  -2, 'purple'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2),  -2, 'purple'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+1,  -2, 'purple'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)-1,  -1, 'purple'], 1];
                    break;
                }

                case 2: {
                    currentPiece.position = [[Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)-1, -2, 'brown'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2), -2, 'brown'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2), -1, 'brown'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+1, -1, 'brown'], 1];
                    break;
                }

                case 3: {
                    currentPiece.position = [[Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)-1, -1, 'pink'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2), -1, 'pink'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2), -2, 'pink'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+1, -2, 'pink'], 1];
                    break;
                }

                case 4: {
                    currentPiece.position = [[Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)-1,  -2, 'yellow'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2),  -2, 'yellow'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+1,  -2, 'yellow'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2),  -1, 'yellow'], 1];
                    break;
                }

                case 5: {
                    currentPiece.position = [[Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2),  -2, 'blue'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+1,  -2, 'blue'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2),  -1, 'blue'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+1,  -1, 'blue'], false];
                    break;
                }

                case 6: {
                    currentPiece.position = [[Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)-1,  -1, 'red'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2),  -1, 'red'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+1,  -1, 'red'], [Math.floor((Constants.GRID_LENGTH_WIDTH-1)/2)+2,  -1, 'red'], 1];
                    break;
                }
            }

        }
    }

    return entities;
};