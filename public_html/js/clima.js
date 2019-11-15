function getClima() {
    $.ajax({
        method: 'get',
        crossDomain: true,
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3468879&appid=62cb9f2cd2e669ec733f70b9d10409b8',
        dataType: 'json',
        success: function (data) {
           temperatura = data.main.temp - 273;
            var tempFormatadada = temperatura.toFixed(2).split(',');
            $('#temperatura').html(tempFormatadada + "°");
            
            descricao = traduzirDescricao(data.weather[0].description);
            $('#situacao').html(descricao);
               
            pressaoAr = data.main.pressure;   
            $('#pressaoAr').html(pressaoAr + "hPA ");
            
            umidade = data.main.humidity;
            $('#umidade').html(data.main.humidity + "%");
            
            wind = data.wind.speed;
            $('#wind').html(wind+"Km/h");
            
            temp_max =  Math.round(data.main.temp_max - 273);
            $('#temp_max').html(data.main.temp_max + "°");
            
            temp_min = Math.round(data.main.temp_min - 273);
            $('#temp_min').html(data.main.temp_min + "°");
            
            var dataAmanhecer = new Date(data.sys.sunrise*1000);
            var descDataAmanhecer = dataAmanhecer.getHours()+":"+dataAmanhecer.getMinutes();
            $('#amanhacer').html(descDataAmanhecer);
            
            
            var dataPorDoSol = new Date(data.sys.sunset*1000);
            var descPorDoSol = dataPorDoSol.getHours()+":"+dataAmanhecer.getMinutes();
            $('#porDoSol').html(descPorDoSol);

            var icone = data.weather[0].icon;
            var caminhoIcone = 'img/icones/'+icone+'.png';
            $('#icone').attr('src', caminhoIcone);
            


        },
        error: function (argument) {
            alert('Falha ao obter dados!');
        }
    });
}




function traduzirDescricao(descricao){
    descricaoTraduzida = "";
    
    if(descricao == "clear sky") {
        descricaoTraduzida = "Céu limpo";
    } else if(descricao == "few clouds"){
        descricaoTraduzida = "Poucas nuvens";
    } else if(descricao == "scattered clouds"){
        descricaoTraduzida = "Nuvens dispersas";
    } else if(descricao == "broken clouds"){
        descricaoTraduzida = "Nuvens carregadas";
    } else if(descricao == "shower rain"){
        descricaoTraduzida = "Chuva molha bobo";
    } else if(descricao == "rain"){
        descricaoTraduzida = "Chuva";
    } else if(descricao == "thunderstorm"){
        descricaoTraduzida = "Tempestade";
    } else if(descricao == "snow"){
        descricaoTraduzida = "Neve";
    } else if(descricao == "mist"){
        descricaoTraduzida = "Misto";
    }
}

window.onload = function () {
    getClima();
};
