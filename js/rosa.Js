function fase1rosa() {
    let escolha1='C';

        escolha1= prompt ("escolha uma alternativa");
        if(escolha1 == 'C'){
        alert (`muito bem, vc avançou para a próxima fase!`)
        return location='../rosa2.html';}
        else if(escolha1 === 'A'){
            return location='../gameoverrosa.html';}
            else if(escolha1 === 'B'){
                location.href ='../gameoverrosa.html';}
        else{
                alert('escolha inválida, escolha entre A B ou C ' )
            }
        }

        function fase2rosa() {
            let escolha1='B';
                escolha1= prompt ("escolha uma alternativa");
                if(escolha1 == 'B'){
                alert (`muito bem, vc avançou para a próxima fase!`)
                return location='../Rosa3.html';}
                else if(escolha1 === 'A'){
                    return location='../gameoverrosa.html';}
                    else if(escolha1 === 'C'){
                        location.href ='../gameoverrosa.html';}
                else{
                        alert('escolha inválida, escolha entre A B ou C ' )
                    }
                }

                
        function fase3rosa() {
            let escolha1='C';
        
                escolha1= prompt ("escolha uma alternativa");
                if(escolha1 == 'C'){
                alert (`muito bem, vc avançou para a próxima fase!`)
                return location='../Rosa3.html';}
                else if(escolha1 === 'A'){
                    return location='../gameoverrosa.html';}
                    else if(escolha1 === 'B'){
                        location.href ='../gameoverrosa.html';}
                else{
                        alert('escolha inválida, escolha entre A B ou C ' )
                    }
                }


