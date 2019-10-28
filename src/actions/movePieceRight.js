const _movePieceRight = (currentPiece, grid, setCurrentPiece, setGrid) => {
    let aux = [...grid];
    let nPiece = {...currentPiece};

    switch(nPiece.type){
        case 0:{
            let line = Math.trunc(currentPiece.blocks[3]/10)+1;

            if(currentPiece.rotate == 0 && currentPiece.blocks[3]+1 < line*10 && aux[currentPiece.blocks[3]+1].color == null){
                aux[currentPiece.blocks[0]].color = null;

                aux[currentPiece.blocks[3]+1].color = 'red';

                nPiece.blocks[0] = currentPiece.blocks[0]+1;
                nPiece.blocks[1] = nPiece.blocks[0]+1;
                nPiece.blocks[2] = nPiece.blocks[0]+2;
                nPiece.blocks[3] = nPiece.blocks[0]+3;
            }else if(currentPiece.blocks[3]+1 < line*10 && aux[currentPiece.blocks[3]+1].color == null && aux[currentPiece.blocks[2]+1].color == null && aux[currentPiece.blocks[1]+1].color == null && aux[currentPiece.blocks[0]+1].color == null){
                aux[currentPiece.blocks[0]].color = null;
                aux[currentPiece.blocks[1]].color = null;
                aux[currentPiece.blocks[2]].color = null;
                aux[currentPiece.blocks[3]].color = null;

                aux[currentPiece.blocks[0]+1].color = 'red';
                aux[currentPiece.blocks[1]+1].color = 'red';
                aux[currentPiece.blocks[2]+1].color = 'red';
                aux[currentPiece.blocks[3]+1].color = 'red';

                nPiece.blocks[0] = currentPiece.blocks[0]+1;
                nPiece.blocks[1] = currentPiece.blocks[1]+1;
                nPiece.blocks[2] = currentPiece.blocks[2]+1;
                nPiece.blocks[3] = currentPiece.blocks[3]+1;
            }
        }
    }

    setCurrentPiece(nPiece);
    setGrid(aux);
}

export default _movePieceRight;