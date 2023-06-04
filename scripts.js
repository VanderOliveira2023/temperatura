let chave = "288edfbbfb30e246287ca33cfdd3d1b1"

function colocaNaTela(dados) {
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".Umidade").innerHTML = Math.floor(dados.main.humidity) + "%"
    document.querySelector(".temp_max").innerHTML = Math.floor(dados.main.temp_max) + "°C"
    document.querySelector(".temp_min").innerHTML = Math.floor(dados.main.temp_min) + "°C"
document.querySelector(".icone").src = "http://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")
        .then(resposta => resposta.json())
    colocaNaTela(dados)

}


function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}
