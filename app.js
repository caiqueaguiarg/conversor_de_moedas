const inserirDados = (dados) => {
    document.getElementById('input2').value = dados;
}
const  converteMoeda = async ()=>{
    let moeda1 = document.getElementById('seletor1').value;
    let moeda2 = document.getElementById('seletor2').value;

        let link = `https://economia.awesomeapi.com.br/json/last/${moeda1}-${moeda2}`;
            
        const informacoes = await fetch(link);
        const dados = await informacoes.json();
    

        const a = moeda1 + moeda2;

        if(document.getElementById('input1').value < 0){
            alert('Adicione um número maior que zero!');
            document.getElementById('input1').value = '';
            document.getElementById('input2').value = '';
      } else if(moeda1 == moeda2){
            alert('Erro, moedas iguais!');
            document.getElementById('input1').value = '';
            document.getElementById('input2').value = '';

        } else if(informacoes.status === 404){
            alert("Erro de pesquisa!");
            document.getElementById('input1').value = '';
            document.getElementById('input2').value = '';

        } else{ 
            let dados2 = dados[`${a}`].bid * document.getElementById('input1').value;
            inserirDados(dados2.toFixed(2));
            console.log(dados[`${a}`]);
      }
}
     