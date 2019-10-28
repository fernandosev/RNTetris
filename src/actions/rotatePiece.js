const _rotatePiece = (currentPiece, grid, setCurrentPiece, setGrid) => {
    let aux = [...grid];
    let nPiece = {...currentPiece};

    switch(currentPiece.type){
        case 0:{
            if(currentPiece.rotate == 0){
                if(currentPiece.blocks[0]+30 < 159 && grid[currentPiece.blocks[0]+10].color == null && grid[currentPiece.blocks[0]+20].color == null && grid[currentPiece.blocks[0]+30].color == null){
                    aux[currentPiece.blocks[0]+1].color = null;
                    aux[currentPiece.blocks[0]+2].color = null;
                    aux[currentPiece.blocks[0]+3].color = null;

                    aux[currentPiece.blocks[0]+10].color = 'red';
                    aux[currentPiece.blocks[0]+20].color = 'red';
                    aux[currentPiece.blocks[0]+30].color = 'red';

                    nPiece.blocks[1] = currentPiece.blocks[0]+10;
                    nPiece.blocks[2] = currentPiece.blocks[0]+20;
                    nPiece.blocks[3] = currentPiece.blocks[0]+30;

                    nPiece.rotate = 1;
                }
            }else{
                let line = Math.trunc(currentPiece.blocks[3]/10)+1;

                if(currentPiece.blocks[3]+3 < (line*10) && grid[currentPiece.blocks[3]+1].color == null && grid[currentPiece.blocks[3]+2].color == null && grid[currentPiece.blocks[3]+3].color == null){
                    aux[currentPiece.blocks[0]].color = null;
                    aux[currentPiece.blocks[0]+10].color = null;
                    aux[currentPiece.blocks[0]+20].color = null;

                    aux[currentPiece.blocks[3]+1].color = 'red';
                    aux[currentPiece.blocks[3]+2].color = 'red';
                    aux[currentPiece.blocks[3]+3].color = 'red';

                    nPiece.blocks[0] = currentPiece.blocks[3];
                    nPiece.blocks[1] = currentPiece.blocks[3]+1;
                    nPiece.blocks[2] = currentPiece.blocks[3]+2;
                    nPiece.blocks[3] = currentPiece.blocks[3]+3;

                    nPiece.rotate = 0;
                }
            }
            break;
        }
    }

    setCurrentPiece(nPiece);
    setGrid(aux);
}

export default _rotatePiece;