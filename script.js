// Array que armazena os jogadores
jogadores = []
let nomeJogador = document.querySelector('input#txtjogador')

// Variáveis que recebem os inputs necessários
let addJogador = document.querySelector('input#btnjogador')
let removeJogador = document.querySelector('input#btnexclusao')
let txtExclusao = document.querySelector('input#txtexclusao')
let qtdJogadores = document.querySelector('input#numeroJogadores')
let btnEscalar = document.querySelector('input#btnescalar')
let txtQtdJogadores = document.querySelector('select#numeroJogadores')
let btnSortear = document.querySelector('input#btnsorteio')
let areaTime = document.querySelector('div.conteudo-times')

// Array que armazena os nomes dos jogadores dos cards time
let players = []
for(let i = 0; i < 25; i++){
    players[i] = document.querySelector(`h1#j${i+1}`)
}

// Variáveis que armazenam os inputs presentes nos alertas
let alerta = document.querySelector('div.alerta')
// let cancelar = document.querySelector('input#btncancelar')
let cancelar2 = document.querySelector('input#btncancelar2')
let confirmar = document.querySelector('input#btnconfirmar')
let confirmar2 = document.querySelector('input#btnconfirmar2')

// Variável que a lista de jogadores
let lista = document.querySelector('div.lista-jogadores')

function paginaJogadores(){
    // Atribuição de eventos aos inputs 
    addJogador.addEventListener('click', adicionarJogador)
    confirmar.addEventListener('click', fecharAlerta)
    confirmar2.addEventListener('click', fecharAlerta)
    removeJogador.addEventListener('click', removerJogador)
    btnEscalar.addEventListener('click', exibirAreaTimes)
    btnSortear.addEventListener('click', gerarTimes)
    
    // Alertas iniciam desabilitados
    document.getElementById("alerta").style.display = "none"
    document.getElementById("alerta2").style.display = "none"
    document.getElementById("alerta3").style.display = "none"
}

// Função que adiciona os jogadores ao array e cria os cards do front
function adicionarJogador(){
    if(nomeJogador.value != ''){
        jogadores.push(nomeJogador.value)

        let h1Lista = document.querySelector('h1#titulo-lista-jogadores')
        h1Lista.innerHTML = 'Jogadores Convocados'
        document.getElementById("chuteira").style.display = "none"
    
        let itemLista = document.createElement('div')
        itemLista.setAttribute('class', 'item-jogadores')
        itemLista.setAttribute('id', nomeJogador.value)
    
        let tituloLista = document.createElement('div')
        tituloLista.setAttribute('class', 'nome-jogador')
    
        let labelTitulo = document.createElement('h1')
        labelTitulo.innerHTML = nomeJogador.value
    
        let botaoItem = document.createElement('div')
        botaoItem.setAttribute('class', 'botao-jogador')
    
        let botao = document.createElement('input')
        botao.setAttribute("type", "button")
        botao.value = 'X'
        botao.setAttribute('id', 'btnremover')
        botao.setAttribute('onclick', 'exibirAlerta()')

        document.getElementById("area-escalar").style.display = "block"
        document.getElementById("btnescalar").style.display = "block"
    
        lista.appendChild(itemLista)
        itemLista.appendChild(tituloLista)
        tituloLista.appendChild(labelTitulo)
        itemLista.appendChild(botaoItem)
        botaoItem.appendChild(botao)
    
        nomeJogador.value = ''
        nomeJogador.focus()
    }else{
        document.getElementById("alerta2").style.display = "block"
        document.getElementById("lista-jogadores").style.display = "none"
    }
   
}

// Função que remove os jogadores do array e desabilita o card do front
function removerJogador(){
    if(txtExclusao.value != ''){
        if(jogadores.indexOf(txtExclusao.value) != -1){
            jogadores.splice(jogadores.indexOf(txtExclusao.value), 1);
            document.getElementById("alerta").style.display = "none"
            document.getElementById(txtExclusao.value).style.display = "none"
            txtExclusao.value = ''
            document.getElementById("alerta3").style.display = "block"
        }else{
            alert('Jogador inexistente!')
        }
    }else{
        document.getElementById("alerta").style.display = "none"
        document.getElementById("alerta2").style.display = "block"
    }
}

function exibirAlerta(){
    document.getElementById("alerta").style.display = "block"
    document.getElementById("lista-jogadores").style.display = "none"
}

function fecharAlerta(){
    document.getElementById("alerta").style.display = "none"
    document.getElementById("alerta2").style.display = "none"
    document.getElementById("alerta3").style.display = "none"
    document.getElementById("lista-jogadores").style.display = "block"
}

function exibirAreaTimes(){
    document.getElementById("area-times").style.display = "block"
    document.getElementById("section-jogadores").style.display = "none"
}

// Função que determina o número de jogadores por time
let verificador = 0
function gerarTimes(){
    if(txtQtdJogadores.value != "0"){
        let times = sortearTime()
        if(txtQtdJogadores.value == 5){
            separarTimes()
        }else if(txtQtdJogadores.value == 11){
            alert('11 jogadores')
        }
    }else{
        alert('Opaa, selecione o número de jogadores!')
    }
}

// Função que retorna um array com valores sorteados
function sortearTime(){
    let times = [jogadores[0]]
    while(times.length <= jogadores.length - 1){
        let pos = Math.random() * (jogadores.length - 1) + 1
        if(times.indexOf(jogadores[Math.floor(pos)]) == -1){
            times.push(jogadores[Math.floor(pos)])
        }
    }
    return times
}

// Função que separa os times de 5 em 5 
function separarTimes(){
    let times = sortearTime()
    if(verificador == 0){
        for(let i in players){
            players[i].innerHTML = times[i]
        }
        if(times.length < 5){
            alert('Número de jogadores insuficientes!')
        }else if(times.length == 5){
            document.getElementById("card-time1").style.display = "block"        
        }else if(times.length > 5 && times.length < 11){
            doisTimes()
        }else if(times.length > 10 && times.length < 16){
           tresTimes()
        }else if(times.length > 15 && times.length < 21){
            quatroTimes()
        }else if(times.length > 20 && times.length < 26){
            cincoTimes()
        }
        verificador++
    }else{
        document.getElementById("card-time1").style.display = "none"
        document.getElementById("card-time2").style.display = "none"
        document.getElementById("card-time3").style.display = "none"
        document.getElementById("card-time4").style.display = "none"
        document.getElementById("card-time5").style.display = "none"
        for(let i in players){
            players[i].innerHTML = times[i]
        }
        if(times.length == 5){
            document.getElementById("card-time1").style.display = "block"        
        }else if(times.length > 5 && times.length < 11){
            doisTimes()
        }else if(times.length > 10 && times.length < 16){
           tresTimes()
        }else if(times.length > 15 && times.length < 21){
            quatroTimes()
        }else if(times.length > 20 && times.length < 26){
            cincoTimes()
        }
    }
}

function doisTimes(){
    document.getElementById("card-time1").style.display = "block"
    document.getElementById("card-time2").style.display = "block"
}

function tresTimes(){
    document.getElementById("card-time1").style.display = "block"
    document.getElementById("card-time2").style.display = "block"
    document.getElementById("card-time3").style.display = "block"
}

function quatroTimes(){
    document.getElementById("card-time1").style.display = "block"
    document.getElementById("card-time2").style.display = "block"
    document.getElementById("card-time3").style.display = "block"
    document.getElementById("card-time4").style.display = "block"
}

function cincoTimes(){
    document.getElementById("card-time1").style.display = "block"
    document.getElementById("card-time2").style.display = "block"
    document.getElementById("card-time3").style.display = "block"
    document.getElementById("card-time4").style.display = "block"
    document.getElementById("card-time5").style.display = "block"
}
