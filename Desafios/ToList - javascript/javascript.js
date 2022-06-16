
function start(){
    let itemLista = document.getElementById("item-lista").value;
    let resposta = verifica(itemLista);
    if(resposta == 0){
        console.log("Item já está na lista");
    } else  if(resposta == 1){
        console.log("Item inserido na lista.");
    }else console.log("Informe descrição do item");

    document.getElementById("item-lista").value = "";
}

function verifica(descricao){
    let cont = 0;
    let testa = document.getElementsByTagName('input');

    if(descricao == ""){
        alert("Insira a descrição do item!");
        return 2;
    }

    for(let i = 0; i < testa.length; i++){ 
        if(testa[i].type == 'checkbox'){ // Verifica se há algum item inserido na lista
            cont++;
            break;
        }
    }

    if(cont < 1){ // Caso não haja ele insere o primeiro item
        console.log(testa);
            inserir(descricao);
            return 1;
        
    }else{ /* Caso já contenha o sistema verifica primeiro todos que são do tipo checkbox e armazena no array 
    de validação chamado valida*/
        let valida = [];
        for(let i = 0; i < testa.length; i++){
            if(testa[i].type == 'checkbox'){
                valida.push(testa[i]); // Se for o tipo checkbox ele add no array
            }
        }
        
        // Aqui o sistema evita que haja duplicidade de cadastro na lista
        for(let i = 0; i < valida.length; i++){
                if(valida[i].value.toUpperCase() == descricao.toUpperCase()) {
                    return 0;
                }
        }
        //Estando tudo ok o sistema insere na lista
        inserir(descricao);
        return 1;

    }
}


function inserir(itemLista){ //função que irá inserir valores na lista
    let divLista = document.getElementById("lista");

    let listaLabel = document.createElement("label");
    listaLabel.setAttribute('Id','label'+itemLista);
    listaLabel.setAttribute('for',itemLista);
    listaLabel.setAttribute('name',itemLista);
    listaLabel.setAttribute('class','alinha-itens');
    listaLabel.innerHTML = itemLista;


   let listaInput = document.createElement("input");
   listaInput.setAttribute('type','checkbox');
   listaInput.setAttribute('value',itemLista);
   listaInput.setAttribute('name',itemLista);
   listaInput.setAttribute('Id',itemLista);
   listaInput.setAttribute('onClick','mudaStatus("'+itemLista+'")');
   listaInput.setAttribute('class','alinha-itens');

   let listaDiv = document.createElement("div");
   listaDiv.setAttribute('class','componente-lista');
   
   listaDiv.appendChild(listaInput);
   listaDiv.appendChild(listaLabel);

   divLista.appendChild(listaDiv);

}


function mudaStatus(item){ //Função que valida se checkbox está selecionado e risca item da lista.
    let checkboxItem = document.getElementById(item);
    console.log(checkboxItem);
    if(checkboxItem.checked){
        document.getElementById('label'+item).style.textDecoration = 'line-through';
    }else {
        document.getElementById('label'+item).style.textDecoration = 'none';
    }
}
