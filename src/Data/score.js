import { AsyncStorage } from 'react-native';

async function addScore(score){
    try{
        let data = await AsyncStorage.getItem('Best_Scores');
        let aux;
    
        aux = JSON.parse(data);

        if(aux === null){
            aux = [];
            aux[0] = score;
        }else{
            //Como o array vem em ordem decrescente -> invertemos
            aux.reverse();

            //adiciona o novo score no fim do array
            aux.push(score);

            //Precisamos dessa funcao sortNumber porque o metodo sort() trata os elementos
            //do array como strings 
            const sortNumber = (x, y) => (x - y);

            //ordena o array de forma crescente
            aux.sort(sortNumber);

            //Como o sort ordena em ordem crescente, uso o reverse() para inverter a order no array
            aux.reverse();

            //Eu só quero guardar os 5 melhores scores -> apago a ultima posicao se o array
            //tiver mais que 5 elementos
            if(aux.length > 5)
                aux.pop();
        }

        //grava o array no AsyncStorage como um String
        await AsyncStorage.setItem('Best_Scores', JSON.stringify(aux));

    }catch(error){
        console.log(error);
    }
}

export {
    addScore
}
