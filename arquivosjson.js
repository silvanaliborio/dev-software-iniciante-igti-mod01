var fs = require("fs");
var nomeArquivo = "carros.json";
var carros = ["Gol", "Palio", "Uno", "Celta"];
var concessionaria = {
    nome: "Concessionaria XYZ",
    carros
}

fs.writeFile(nomeArquivo, json.stringify(concessionaria), function(err) {
    if (err) {
        console.log(err);
    }else {
        console.log(data);
    }

});