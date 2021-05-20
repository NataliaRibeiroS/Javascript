var fs = require("fs");
var func = "funcionarios.json";

fs.readFile(func, "utf-8", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        var resultado = JSON.parse(data);

        var salario = 0
        var somaSetor = 0
        var numFunc = 0
        var media = ""

        console.log("---------------ADMINISTRAÇÃO---------------")

        //MAIOR SALARIO DO SETOR ADMINISTRATIVO                   
        for (var i = 0; i < resultado.funcionarios.length; i++) {
            if ((resultado.funcionarios[i].setor === "Administrativo") && (resultado.funcionarios[i].salario > salario)) {
                salario = resultado.funcionarios[i].salario
                nomeMaior = resultado.funcionarios[i].nome
                nomeSetor = resultado.funcionarios[i].setor

            }
        }
        console.log(nomeMaior + " - Esse funcionario recebe R$ " + salario + " e é o maior salário do setor " + nomeSetor)

        //MENOR SALARIO DO SETOR ADMINISTRATIVO                  
        for (var i = 0; i < resultado.funcionarios.length; i++) {
            if ((resultado.funcionarios[i].setor === "Administrativo") && (resultado.funcionarios[i].salario < salario)) {
                salario = resultado.funcionarios[i].salario
                nomeMenor = resultado.funcionarios[i].nome
                nomeSetor = resultado.funcionarios[i].setor

            }
        }

        console.log(nomeMenor + " - Esse funcionario recebe R$ " + salario + " e é o menor salário do setor " + nomeSetor)

        //MÉDIA SETOR ADMINISTRATIVO
        for (var i = 0; i < resultado.funcionarios.length; i++) {
            if (resultado.funcionarios[i].setor === "Administrativo") {
                somaSetor += resultado.funcionarios[i].salario
                numFunc++
            }
        }
        media = somaSetor / numFunc
        console.log("MÉDIA salariarial setor = " + media)

        var salario = 0
        var somaSetor = 0
        var numFunc = 0

        console.log("---------------PRODUÇÃO---------------")
        //MAIOR SALARIO DO SETOR PRODUÇÃO              
        for (var i = 0; i < resultado.funcionarios.length; i++) {
            if ((resultado.funcionarios[i].setor === "Produção") && (resultado.funcionarios[i].salario > salario)) {
                salario = resultado.funcionarios[i].salario
                nomeMaior = resultado.funcionarios[i].nome
                nomeSetor = resultado.funcionarios[i].setor

            }
        }
        console.log(nomeMaior + " - Esse funcionario recebe R$ " + salario + " e é o maior salário do setor " + nomeSetor)

        //MENOS SALARIO DO SETOR PRODUÇÃO                  
        for (var i = 0; i < resultado.funcionarios.length; i++) {
            if ((resultado.funcionarios[i].setor === "Produção") && (resultado.funcionarios[i].salario < salario)) {
                salario = resultado.funcionarios[i].salario
                nomeMenor = resultado.funcionarios[i].nome
                nomeSetor = resultado.funcionarios[i].setor

            }
        }

        console.log(nomeMenor + " - Esse funcionario recebe R$ " + salario + " e é o menor salário do setor " + nomeSetor)

        //MÉDIA SETOR PRODUÇÃO
        for (var i = 0; i < resultado.funcionarios.length; i++) {
            if (resultado.funcionarios[i].setor === "Produção") {
                somaSetor += resultado.funcionarios[i].salario
                numFunc++
            }
        }
        media = somaSetor / numFunc
        console.log("MÉDIA salariarial  setor = " + media)

        var salario = 0
        var somaSetor = 0
        var numFunc = 0

        console.log("---------------COMERCIAL---------------")

        //MAIOR SALARIO DO SETOR COMERCIAL                  
        for (var i = 0; i < resultado.funcionarios.length; i++) {
            if ((resultado.funcionarios[i].setor === "Comercial") && (resultado.funcionarios[i].salario > salario)) {
                salario = resultado.funcionarios[i].salario
                nomeMaior = resultado.funcionarios[i].nome
                nomeSetor = resultado.funcionarios[i].setor

            }
        }
        console.log(nomeMaior + " - Esse funcionario recebe R$ " + salario + " e é o maior salário do setor " + nomeSetor)

        //MENOR SALARIO DO SETOR COMERCIAL                  
        for (var i = 0; i < resultado.funcionarios.length; i++) {
            if ((resultado.funcionarios[i].setor === "Comercial") && (resultado.funcionarios[i].salario < salario)) {
                salario = resultado.funcionarios[i].salario
                nomeMenor = resultado.funcionarios[i].nome
                nomeSetor = resultado.funcionarios[i].setor

            }
        }

        console.log(nomeMenor + " - Esse funcionario recebe R$ " + salario + " e é o menor salário do setor " + nomeSetor)

        //MÉDIA SETOR COMERCIAL
        for (var i = 0; i < resultado.funcionarios.length; i++) {
            if (resultado.funcionarios[i].setor === "Comercial") {
                somaSetor += resultado.funcionarios[i].salario
                numFunc++
            }
        }
        media = somaSetor / numFunc
        console.log("MÉDIA salariarial  setor = " + media)

        console.log("---------------EMPRESA---------------")

        //MENOR SALÁRIO DA EMPRESA
        for (var i = 0; i < resultado.funcionarios.length; i++) {
            if (resultado.funcionarios[i].salario < salario) {
                salario = resultado.funcionarios[i].salario
                nomeMenor = resultado.funcionarios[i].nome

            }
        }

        console.log(nomeMenor + " - Esse funcionario recebe R$ " + salario + " e é o menor salário da empresa")

        //MAIOR SALÁRIO DA EMPRESA
        for (var i = 0; i < resultado.funcionarios.length; i++) {
            if (resultado.funcionarios[i].salario > salario) {
                salario = resultado.funcionarios[i].salario
                nomeMaior = resultado.funcionarios[i].nome

            }
        }

        console.log(nomeMaior + " - Esse funcionario recebe R$ " + salario + " e é o menor salário da empresa")

        //MÉDIA EMPRESA
        var salario = 0
        var somaSetor = 0
        var numFunc = 0
        for (var i = 0; i < resultado.funcionarios.length; i++) {
            somaSetor += resultado.funcionarios[i].salario
            numFunc++

        }
        media = somaSetor / numFunc
        console.log("MÉDIA salarial  da EMPRESA = " + media)

    }

});