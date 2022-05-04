function fase1jake() {
    let escolha1='C';

        escolha1= prompt ("escolha uma alternativa");
        if(escolha1 == 'B'){
        alert (`muito bem, vc avançou para a próxima fase!`)
        return location='../jake2.html';}
        else if(escolha1 === 'A'){
            return location='../gameoverjake';}
            else if(escolha1 === 'C'){
                location.href ='../gameoverjake';}
        else{
                alert('escolha inválida, escolha entre A B ou C ' )
            }
        }

        function fase2jake() {
            let escolha1='C';
        
                escolha1= prompt ("escolha uma alternativa");
                if(escolha1 == 'A'){
                alert (`muito bem, vc avançou para a próxima fase!`)
                return location='../jake3.html';}
                else if(escolha1 === 'B'){
                    return location='../gameoverjake.html';}
                    else if(escolha1 === 'C'){
                        location.href ='../gameoverjake.html';}
                else{
                        alert('escolha inválida, escolha entre A B ou C ' )
                    }
                }

                function fase3jake() {
                    let escolha1='C';
                
                        escolha1= prompt ("escolha uma alternativa");
                        if(escolha1 == 'A'){
                        alert (`muito bem, vc avançou para a próxima fase!`)
                        return location='../acertoujake.html';}
                        else if(escolha1 === 'A'){
                            return location='../gameovergina';}
                            else if(escolha1 === 'C'){
                                location.href ='../gameovergina';}
                        else{
                                alert('escolha inválida, escolha entre A B ou C ' )
                            }
                        }