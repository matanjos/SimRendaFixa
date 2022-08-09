const express = require('express');
const router = express.Router();
const path = require('path');
const investimento = require(path.join(__dirname,'./Investimento'));

// rota inicial
router.get('/', (req,res)=>{
    res.send("Pagina inicial");
})



//Rota para simular investimentos futuros
router.post("/simuladofuturo", async(req,res)=>{
    let tempo = parseInt(req.body.tempoInvestimento);
    let investimentoInicial = parseInt(req.body.investimentoInicial);
    let checkedInvestimentos = req.body.checkedInvestimentos;
    let investimentosAtuais = await investimento.find({'rendimentos.mes': { $lte: 12} });
    let evolucao = [];
    let jurosCDB = 0.00;
    let jurosIPCA = 0.000;
    let jurosSelic = 0.00;
    let jurosLCI = 0.00;
    let jurosLCA = 0.00;
    let resultado = 0;
    
    let Imposto = {};
    let Juros = {};
    let Montantes = {};
    let Resposta = {};
    let montante = (investimento,juros,time)=>{
        let resultadoInter = investimento;
        evolucao.push(resultadoInter);
        for(let i = 0; i<time; i++){
            resultadoInter = resultadoInter + resultadoInter * juros;
            evolucao.push(resultadoInter.toFixed(2));
        }

        return resultadoInter;
    }

    let impostoCalc = (juros) =>{
        if(tempo <= 6)
            return parseFloat(juros) * 0.225;
        if(tempo <= 12)
            return parseFloat(juros) * 0.2;
        if(tempo <= 24)
            return parseFloat(juros) * 0.175;
    
            return parseFloat(juros) * 0.15;
    }


   for(let i = 0; i < investimentosAtuais.length; i++){
        if(investimentosAtuais[i].tipo === 'CDB'){
            let ultimaPosicao =  investimentosAtuais[i].rendimentos.length - 1;
            jurosCDB = investimentosAtuais[i].rendimentos[ultimaPosicao].rendimento/100;
        }
            
        if(investimentosAtuais[i].tipo === 'LCI'){
            let ultimaPosicao =  investimentosAtuais[i].rendimentos.length - 1;
            jurosLCI = investimentosAtuais[i].rendimentos[ultimaPosicao].rendimento/100;
        }
            
        if(investimentosAtuais[i].tipo === 'LCA'){
            let ultimaPosicao =  investimentosAtuais[i].rendimentos.length - 1;
            jurosLCA = investimentosAtuais[i].rendimentos[ultimaPosicao].rendimento/100;
        }
            
        if(investimentosAtuais[i].tipo === 'Tesouro IPCA'){
            let ultimaPosicao =  investimentosAtuais[i].rendimentos.length - 1;
            jurosIPCA = investimentosAtuais[i].rendimentos[ultimaPosicao].rendimento/100;
        }
            
        if(investimentosAtuais[i].tipo === 'Tesouro Selic'){
            let ultimaPosicao =  investimentosAtuais[i].rendimentos.length - 1;
            jurosSelic = investimentosAtuais[i].rendimentos[ultimaPosicao].rendimento/100;
        }
    }

    //Simulando os investimentos
    if(checkedInvestimentos !== undefined){
        for(let i = 0; i<checkedInvestimentos.length;i++){

            if(checkedInvestimentos[i]==='CDB'){
                resultado = montante(investimentoInicial,jurosCDB,tempo);
                Juros.CDB = (resultado - investimentoInicial).toFixed(2);
                Imposto.CDB = impostoCalc(Juros.CDB).toFixed(2);   
                resultado = resultado - Imposto.CDB;
                Montantes.CDB = resultado.toFixed(2);
            }
                
            if(checkedInvestimentos[i]==='LCI'){
                resultado = montante(investimentoInicial,jurosLCI,tempo);
                Montantes.LCI = resultado.toFixed(2);
                Juros.LCI = (resultado - investimentoInicial).toFixed(2);
                Imposto.LCI = 0;
            }
                
            if(checkedInvestimentos[i]==='LCA'){
                resultado = montante(investimentoInicial,jurosLCA,tempo);
                Montantes.LCA = resultado.toFixed(2);
                Juros.LCA = (resultado - investimentoInicial).toFixed(2);
                Imposto.LCA = 0;
            }
                
            if(checkedInvestimentos[i]==='Tesouro IPCA'){
                resultado = montante(investimentoInicial,jurosIPCA,tempo);
                Juros.TesouroIPCA = (resultado - investimentoInicial).toFixed(2);
                Imposto.TesouroIPCA = impostoCalc(Juros.TesouroIPCA).toFixed(2);   
                resultado = resultado - Imposto.TesouroIPCA;
                Montantes.TesouroIPCA = resultado.toFixed(2);
                

            }
                
            if(checkedInvestimentos[i]==='Tesouro Selic'){
                resultado = montante(investimentoInicial,jurosSelic,tempo);
                Juros.TesouroSelic = (resultado - investimentoInicial).toFixed(2);
                Imposto.TesouroSelic = impostoCalc(Juros.TesouroSelic).toFixed(2);   
                resultado = resultado - Imposto.TesouroSelic;
                Montantes.TesouroSelic = resultado.toFixed(2);
            }
        }

        Resposta.Montantes = Montantes;
        Resposta.Evolucao = evolucao;
        Resposta.Juros = Juros;
        Resposta.Imposto = Imposto;
        res.json(Resposta);
    }



  });

//Rota para simular investimentos passados
  router.post("/simuladopassado", async(req,res)=>{
    let tempo = parseInt(req.body.tempoInvestimento);
    let investimentoInicial = parseInt(req.body.investimentoInicial);
    let checkedInvestimentos = req.body.checkedInvestimentos;
    let investimentos = await investimento.find({'rendimentos.mes': { $lte: 12} });
    let evolucao = [];
    let jurosCDB = [];
    let jurosIPCA = [];
    let jurosSelic = [];
    let jurosLCI = [];
    let jurosLCA = [];
    let resultado = 0;


    let Imposto = {};
    let Juros = {};
    let Montantes = {};
    let Resposta = {};

    let montante = (investimento,juros,time)=>{
        let resultadoInter = investimento;
        evolucao.push(resultadoInter);
        for(let i = 0; i<time; i++){
            resultadoInter = resultadoInter + resultadoInter * juros[i];
            evolucao.push(resultadoInter.toFixed(2));
        }

        return resultadoInter;
    }

    let impostoCalc = (juros) =>{
        if(tempo <= 6)
            return parseFloat(juros) * 0.225;
        if(tempo <= 12)
            return parseFloat(juros) * 0.2;
        if(tempo <= 24)
            return parseFloat(juros) * 0.175;
    
            return parseFloat(juros) * 0.15;
    }

 
    //Salvando os juros de cada investimento que serao usados para a simulacao
   for(let i = 0; i < investimentos.length; i++){
        if(investimentos[i].tipo === 'CDB'){
            let count = 0;
            let primeiraPosicao =  investimentos[i].rendimentos.length - tempo;
            for(let j = primeiraPosicao; j < investimentos[i].rendimentos.length; j++){
                jurosCDB[count] = parseFloat((investimentos[i].rendimentos[j].rendimento/100).toFixed(4));
                count++;
            }
        }
            
        if(investimentos[i].tipo === 'LCI'){
            let count = 0;
            let primeiraPosicao =  investimentos[i].rendimentos.length - tempo;
            for(let j = primeiraPosicao; j < investimentos[i].rendimentos.length; j++){
                jurosLCI[count] = parseFloat((investimentos[i].rendimentos[j].rendimento/100).toFixed(4));
                count++;
            }
        }
            
        if(investimentos[i].tipo === 'LCA'){
            let count = 0;
            let primeiraPosicao =  investimentos[i].rendimentos.length - tempo;
            for(let j = primeiraPosicao; j < investimentos[i].rendimentos.length; j++){
                jurosLCA[count] = parseFloat((investimentos[i].rendimentos[j].rendimento/100).toFixed(4));
                count++;
            }
        }
            
        if(investimentos[i].tipo === 'Tesouro IPCA'){
            let count = 0;
            let primeiraPosicao =  investimentos[i].rendimentos.length - tempo;
            for(let j = primeiraPosicao; j < investimentos[i].rendimentos.length; j++){
                jurosIPCA[count] = parseFloat((investimentos[i].rendimentos[j].rendimento/100).toFixed(4));
                count++;
            }
        }
            
        if(investimentos[i].tipo === 'Tesouro Selic'){
            let count = 0;
            let primeiraPosicao =  investimentos[i].rendimentos.length - tempo;
            for(let j = primeiraPosicao; j < investimentos[i].rendimentos.length; j++){
                jurosSelic[count] = parseFloat((investimentos[i].rendimentos[j].rendimento/100).toFixed(4));
                count++;
            }
        }
    }

    //Simulando os investimentos
    if(checkedInvestimentos !== undefined){
        for(let i = 0; i<checkedInvestimentos.length;i++){

            if(checkedInvestimentos[i]==='CDB'){
                resultado = montante(investimentoInicial,jurosCDB,tempo);
                Juros.CDB = (resultado - investimentoInicial).toFixed(2);
                Imposto.CDB = impostoCalc(Juros.CDB).toFixed(2);   
                resultado = resultado - Imposto.CDB;
                Montantes.CDB = resultado.toFixed(2);
            }
                
            if(checkedInvestimentos[i]==='LCI'){
                resultado = montante(investimentoInicial,jurosLCI,tempo);
                Montantes.LCI = resultado.toFixed(2);
                Juros.LCI = (resultado - investimentoInicial).toFixed(2);
                Imposto.LCI = 0;
            }
                
            if(checkedInvestimentos[i]==='LCA'){
                resultado = montante(investimentoInicial,jurosLCA,tempo);
                Montantes.LCA = resultado.toFixed(2);
                Juros.LCA = (resultado - investimentoInicial).toFixed(2);
                Imposto.LCA = 0;
            }
                
            if(checkedInvestimentos[i]==='Tesouro IPCA'){
                resultado = montante(investimentoInicial,jurosIPCA,tempo);
                Juros.TesouroIPCA = (resultado - investimentoInicial).toFixed(2);
                Imposto.TesouroIPCA = impostoCalc(Juros.TesouroIPCA).toFixed(2);   
                resultado = resultado - Imposto.TesouroIPCA;
                Montantes.TesouroIPCA = resultado.toFixed(2);
            }
                
            if(checkedInvestimentos[i]==='Tesouro Selic'){
                resultado = montante(investimentoInicial,jurosSelic,tempo);
                Juros.TesouroSelic = (resultado - investimentoInicial).toFixed(2);
                Imposto.TesouroSelic = impostoCalc(Juros.TesouroSelic).toFixed(2);   
                resultado = resultado - Imposto.TesouroSelic;
                Montantes.TesouroSelic = resultado.toFixed(2);            
            }
        }

        Resposta.Montantes = Montantes;
        Resposta.Evolucao = evolucao;
        Resposta.Juros = Juros;
        Resposta.Imposto = Imposto;
        res.json(Resposta);
    }

    

  });


  module.exports = router;