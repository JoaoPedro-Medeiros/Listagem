var addNumber = document.getElementById('addNumber')
var tab = document.querySelector('select#tab')
var res = document.querySelector('div#resultados')
var ind = 0
var listaDeNum = []

function addButton(){  
    let num = Number(addNumber.value)
    //alert(`ind: ${ind}`)
    if(addNumber.value.length == 0 || num > 100 || num < 1){
        alert('[ERRO] Adicione um número entre 1 e 100 e tente novamente!')
    }else if(listaDeNum.indexOf(num) != -1){
        alert(`Esse número já foi adicionado! Tente novamente.`)
    }else{
        res.innerHTML = ""
        listaDeNum.push(num)
        let novoOpt = document.createElement('option')
        novoOpt.id = `opt_${ind}`
        novoOpt.value = `opt_${ind}`
        if(tab.innerText == 'Aguardando...'){
            tab.innerHTML = ``
        }
        novoOpt.innerText = `Valor ${num} adicionado!`
        ind++
        tab.appendChild(novoOpt)
        addNumber.value = ''
        addNumber.focus()
    }
}

function finaliza(){

    let sum = 0
    let quant = 0
    let maior = listaDeNum[0]
    let menor = listaDeNum[0]
    let média
    for(let analisador in listaDeNum){
        sum += listaDeNum[analisador]
        if(listaDeNum[analisador] > maior){
            maior = listaDeNum[analisador]
        }
        if(listaDeNum[analisador] < menor){
            menor = listaDeNum[analisador]
        }

    }
    quant = listaDeNum.length
    média = sum / quant
    res.innerHTML =`<p>Ao todo, temos ${quant} valores</p>
                    <p>O maior número é ${maior}</p>
                    <p>O menor número é ${menor}</p>
                    <p>A somatória de todos os valores é ${sum}</p>
                    <p>A média dos valores é ${média}`
}