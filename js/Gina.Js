function fase1gina() {
    let escolha1='C';

        escolha1= prompt ("escolha uma alternativa");
        if(escolha1 == 'B'){
        alert (`muito bem, vc avançou para a próxima fase!`)
        return location='../gina2.html';}
        else if(escolha1 === 'A'){
            return location='../gameovergina.html';}
            else if(escolha1 === 'C'){
                location.href ='../gameovergina.html';}
        else{
                alert('escolha inválida, escolha entre A B ou C ' )
            }
        }

        function fase2gina() {
            let escolha1='C';
        
                escolha1= prompt ("escolha uma alternativa");
                if(escolha1 == 'B'){
                alert (`muito bem, vc avançou para a próxima fase!`)
                return location='../Gina3.html';}
                else if(escolha1 === 'A'){
                    return location='../gameovergina.html';}
                    else if(escolha1 === 'C'){
                        location.href ='../gameovergina.html';}
                else{
                        alert('escolha inválida, escolha entre A B ou C ' )
                    }
                }

                function fase3gina() {
                    let escolha1='C';
                        escolha1= prompt ("escolha uma alternativa");
                        if(escolha1 == 'A'){
                        alert (`muito bem, vc avançou para a próxima fase!`)
                        return location='../acertougina.html';}
                        else if(escolha1 === 'B'){
                            return location='../gameovergina.html';}
                            else if(escolha1 === 'C'){
                                location.href ='../gameovergina.html';}
                        else{
                                alert('escolha inválida, escolha entre A B ou C ' )
                            }
                        }

