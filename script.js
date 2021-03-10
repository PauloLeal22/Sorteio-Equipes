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
let players = [
    document.querySelector('h1#j1'), 
    document.querySelector('h1#j2'), 
    document.querySelector('h1#j3'), 
    document.querySelector('h1#j4'), 
    document.querySelector('h1#j5'),
    document.querySelector('h1#j6'), 
    document.querySelector('h1#j7'), 
    document.querySelector('h1#j8'), 
    document.querySelector('h1#j9'), 
    document.querySelector('h1#j10'),
    document.querySelector('h1#j11'), 
    document.querySelector('h1#j12'), 
    document.querySelector('h1#j13'), 
    document.querySelector('h1#j14'), 
    document.querySelector('h1#j15'),
    document.querySelector('h1#j16'), 
    document.querySelector('h1#j17'), 
    document.querySelector('h1#j18'), 
    document.querySelector('h1#j19'), 
    document.querySelector('h1#j20'),
    document.querySelector('h1#j21'), 
    document.querySelector('h1#j22'), 
    document.querySelector('h1#j23'), 
    document.querySelector('h1#j24'), 
    document.querySelector('h1#j25')
]

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
        players[0].innerHTML = times[0]
        players[1].innerHTML = times[1]
        players[2].innerHTML = times[2]
        players[3].innerHTML = times[3]
        players[4].innerHTML = times[4]
        players[5].innerHTML = times[5]
        players[6].innerHTML = times[6]
        players[7].innerHTML = times[7]
        players[8].innerHTML = times[8]
        players[9].innerHTML = times[9]
        players[10].innerHTML = times[10]
        players[11].innerHTML = times[11]
        players[12].innerHTML = times[12]
        players[13].innerHTML = times[13]
        players[14].innerHTML = times[14]
        players[15].innerHTML = times[15]
        players[16].innerHTML = times[16]
        players[17].innerHTML = times[17]
        players[18].innerHTML = times[18]
        players[19].innerHTML = times[19]
        players[20].innerHTML = times[20]
        players[21].innerHTML = times[21]
        players[22].innerHTML = times[22]
        players[23].innerHTML = times[23]
        players[24].innerHTML = times[24]
        if(times.length < 5){
            alert('Número de jogadores insuficientes!')
        }else if(times.length == 5){
            document.getElementById("card-time1").style.display = "block"        
        }else if(times.length > 5 && times.length < 11){
            document.getElementById("card-time1").style.display = "block"
            document.getElementById("card-time2").style.display = "block"
        }else if(times.length > 10 && times.length < 16){
            document.getElementById("card-time1").style.display = "block"
            document.getElementById("card-time2").style.display = "block"
            document.getElementById("card-time3").style.display = "block"
        }else if(times.length > 15 && times.length < 21){
            document.getElementById("card-time1").style.display = "block"
            document.getElementById("card-time2").style.display = "block"
            document.getElementById("card-time3").style.display = "block"
            document.getElementById("card-time4").style.display = "block"
        }else if(times.length > 20 && times.length < 26){
            document.getElementById("card-time1").style.display = "block"
            document.getElementById("card-time2").style.display = "block"
            document.getElementById("card-time3").style.display = "block"
            document.getElementById("card-time4").style.display = "block"
            document.getElementById("card-time5").style.display = "block"
        }
        verificador++
    }else{
        document.getElementById("card-time1").style.display = "none"
        document.getElementById("card-time2").style.display = "none"
        document.getElementById("card-time3").style.display = "none"
        document.getElementById("card-time4").style.display = "none"
        document.getElementById("card-time5").style.display = "none"
        players[0].innerHTML = times[0]
        players[1].innerHTML = times[1]
        players[2].innerHTML = times[2]
        players[3].innerHTML = times[3]
        players[4].innerHTML = times[4]
        players[5].innerHTML = times[5]
        players[6].innerHTML = times[6]
        players[7].innerHTML = times[7]
        players[8].innerHTML = times[8]
        players[9].innerHTML = times[9]
        players[10].innerHTML = times[10]
        players[11].innerHTML = times[11]
        players[12].innerHTML = times[12]
        players[13].innerHTML = times[13]
        players[14].innerHTML = times[14]
        players[15].innerHTML = times[15]
        players[16].innerHTML = times[16]
        players[17].innerHTML = times[17]
        players[18].innerHTML = times[18]
        players[19].innerHTML = times[19]
        players[20].innerHTML = times[20]
        players[21].innerHTML = times[21]
        players[22].innerHTML = times[22]
        players[23].innerHTML = times[23]
        players[24].innerHTML = times[24]
        if(times.length == 5){
            document.getElementById("card-time1").style.display = "block"        
        }else if(times.length > 5 && times.length < 11){
            document.getElementById("card-time1").style.display = "block"
            document.getElementById("card-time2").style.display = "block"
        }else if(times.length > 10 && times.length < 16){
            document.getElementById("card-time1").style.display = "block"
            document.getElementById("card-time2").style.display = "block"
            document.getElementById("card-time3").style.display = "block"
        }else if(times.length > 15 && times.length < 21){
            document.getElementById("card-time1").style.display = "block"
            document.getElementById("card-time2").style.display = "block"
            document.getElementById("card-time3").style.display = "block"
            document.getElementById("card-time4").style.display = "block"
        }else if(times.length > 20 && times.length < 26){
            document.getElementById("card-time1").style.display = "block"
            document.getElementById("card-time2").style.display = "block"
            document.getElementById("card-time3").style.display = "block"
            document.getElementById("card-time4").style.display = "block"
            document.getElementById("card-time5").style.display = "block"
        }
    }
}