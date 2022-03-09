console.log("Bem-vindo(a) ao jogo de blackjack")

let jogo = confirm("Quer iniciar uma nova rodada?")

if (jogo) {
    let cartaOneUsuario = comprarCarta()
    let cartaTwoUsuario = comprarCarta()
    let cartaOnePc = comprarCarta()
    let cartaTwoPc = comprarCarta()

    let pontuacaoUsuario = cartaOneUsuario.valor + cartaTwoUsuario.valor
    let pontuacaoPc = cartaOnePc.valor + cartaTwoPc.valor

    console.log(`Usuário - cartas: ${cartaOneUsuario.texto} ${cartaTwoUsuario.texto} - ${pontuacaoUsuario}`)
    console.log(`Computador - cartas: ${cartaOnePc.texto} ${cartaTwoPc.texto} - ${pontuacaoPc}`)

    if (pontuacaoUsuario > pontuacaoPc) {
        console.log("O usuário ganhou!")
    } else if (pontuacaoPc > pontuacaoUsuario) {
        console.log("O computador ganhou!")
    } else if (pontuacaoUsuario === pontuacaoPc) {
        console.log("Empate!")
    }

} else {
    console.log("O jogo acabou")
}