<template>
<div class="passado">
    <h3><strong>Instruções</strong></h3>
    <p>
          Neste módulo, é possível simular um ou mais investimentos de renda fixa de forma a entender quanto o(s) investimento(s)
          teriam rendido caso feito(s) em determinado prazo até a presente data.
          Inicialmente selecione os investimentos a serem simulados atráves das caixas de seleção. 
          Após isso, insira o prazo do investimento e o valor do investimento inicial.
          Por fim, clique no botão "Simular Passado" para realizar a simulação.
        </p>
    <div v-if="notSubmitted" id="formulario">
        <form  @submit.prevent="registerInvestimento">
          <div class="mb-3">
            <label for="investimentos" class="form-label"><strong>Selecione os investimentos a serem simulados:</strong></label>
          </div>
          <div class="mb-3 form-check form-check-inline">
            <input type="checkbox" name="cdb" id="cdb" class="form-check-input" value="CDB" v-model="checkedInvestimentos">
            <label for="cdb">CDB</label>
          </div>
          <div class="mb-3 form-check form-check-inline">
            <input type="checkbox" name="lci" id="lci" class="form-check-input" value="LCI" v-model="checkedInvestimentos">
            <label for="lci">LCI</label>
          </div>
          <div class="mb-3 form-check form-check-inline">
            <input type="checkbox" name="lca" id="lca" class="form-check-input" value="LCA" v-model="checkedInvestimentos">
            <label for="lca">LCA</label>
          </div>
          <div class="mb-3 form-check form-check-inline">
            <input type="checkbox" name="tesouro_ipca" id="tesouro-ipca" value="Tesouro IPCA" class="form-check-input" v-model="checkedInvestimentos">
            <label for="tesouro-ipca">Tesouro IPCA</label>
          </div>
          <div class="mb-3 form-check form-check-inline">
            <input type="checkbox" name="tesouro_selic" id="tesouro-selic" class="form-check-input" value="Tesouro Selic" v-model="checkedInvestimentos">
            <label label for="tesouro-selic">Tesouro Selic</label>
          </div>
           <br>
          <div class="mb-3">
             <label for="tempo" class="form-label"><strong>Qual o tempo do investimento em meses?</strong></label><br>
            <input type="number" name="tempo" id="tempo" min="1" max="60" alt="Insira um inteiro entre 1 e 60" v-model.number="tempoInvestimento">
          </div>
          <div class="mb-3">
            <label for="investimento-inicial" class="form-label"><strong>Qual o valor do investimento inicial?</strong></label><br>
            <input type="number" name="investimento-inicial" id="investimento-inicial" min="1" v-model.number="investimentoInicial">
          </div>
          <button class="btn btn-primary"><span class="bi-check-circle"></span> Simular Passado</button>
        </form>
        <br>
        <p><strong>Isenções de responsabilidade</strong></p>
        <p>
        Os resultados das simulações realizadas neste app tem caráter meramente educativo, sendo sua utilização optativa. 
        O autor não se responsabiliza por eventuais danos ou prejuízos que venham a ser causados ao usuário, ou qualquer terceiro, 
        pela tomada de decisão com base na utilização do app, assumindo, neste caso, o próprio usuário que dele fizer uso, a integral 
        e exclusiva responsabilidade.
        </p>
        <p><strong>Rentabilidade passada não garante rentabilidade futura!</strong></p>
    </div>

<div v-else class="resultados">

      <div v-if="loaded" class="resultados" id="carregados">
        <nav>
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link" :class="{'active': isActiveBarra}" @click="showBarra" id="pills-home-tab" type="button" role="tab">Gráfico de barras</button>
            </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" :class="{'active': isActiveLinha}" @click="showLinha" id="pills-profile-tab" type="button" role="tab">Gráfico de linhas</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" :class="{'active': isActiveTabela}" @click="showTabela" id="pills-contact-tab" type="button" role="tab">Tabela</button>
          </li>
          </ul>
        </nav>
        <!-- Div da tabela -->
        <div v-if="flagTabela" class="tabela">
          <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Investimento</th>
                    <th>Juros</th>
                    <th>Imposto</th>
                    <th>Valor Final</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, key) in montante" :key="key">
                    <td> {{ key }}</td>
                    <td>{{juros[key]}}</td>
                    <td>{{imposto[key]}}</td>
                    <td>{{ value }}</td>
                </tr>
            </tbody>
          </table>

        </div>
        <!-- Div do gráfico de barras -->
        <div v-if="flagBarras"  class="chart-container">
        <div class="chart">
          <BarChart :chart-data="barChartData"/>
        </div>
          
        </div>
        <!-- Div do gráfico de linhas -->
        <div v-if="flagLinha" class="chart-container">
        <div class="chart">
          <LineChart :chart-data="lineChartData"/>
        </div>
          <strong></strong>
        </div>
        <br>
        <div id="fonte-dados">
          <p>
            Para a realização desta simulação foram usadas as seguintes fontes: para o CDB, Tesouro IPCA e Tesouro SELIC 
            foram usados os dados do <strong>Boletim da renda fixa da ANBIMA</strong>, disponível
            em: <a href="https://www.anbima.com.br/pt_br/informar/relatorios/renda-fixa-tesouraria/boletim-renda-fixa/boletim-renda-fixa.htm" target="_blank">Boletim Renda Fixa</a>
            e para a LCI/LCA foi considerado um rendimento de 98% do CDI, sendo o valor deste obtido da <strong>Série Temporal Taxa de juros - CDI acumulada no mês</strong> 
            do Banco Central do Brasil, disponível em: <a href="https://www3.bcb.gov.br/sgspub/localizarseries/localizarSeries.do?method=prepararTelaLocalizarSeries" target="_blank">SGS - Sistema Gerenciador de Séries Temporais</a> sob o código de número 4391.
          </p>
        </div>
      </div>
      <!--
        <div class="btn-group" role="group" aria-label="Basic example">
          <button id="nova-simulacao" type="button" class="btn btn-primary" @click="clearData">Nova Simulação</button>
           <button id="imprimir-tela" class="btn btn-secondary" @click="printResult">Imprimir</button>
      </div>
      -->
      
      <div id="botoes-nova-pdf">
        <div class="inner">
            <button id="nova-simulacao" class="btn btn-primary" @click="clearData">Nova Simulação</button>
        </div>
        <div class="inner">
            <button id="gerar-pdf" class="btn btn-success" @click="printResult">Imprimir</button>
        </div> 
      </div>
  
  </div>

        
</div>
</template>

<script>
import DataService from "../../services/DataService"
import BarChart from "./BarChart.vue";
import LineChart from "./LineChart.vue";

export default {
    name: "PassadoComponent",
    components: {  BarChart, LineChart},
    data() {
        return {
            checkedInvestimentos: [],
            tempoInvestimento: "",
            investimentoInicial: "",
            montante:{},
            juros:{},
            imposto: {},
            barChartData: {
                           //   labels: [],
                              datasets: []
                          },


           lineChartData: {
                                labels: [],
                                datasets: []
                          },
            //chartOptions:,

            notSubmitted: true,
            loaded: false,
            flagTabela: false,
            flagLinha: false,
            flagBarras: true,
            isActiveBarra: "",
            isActiveLinha: "",
            isActiveTabela: ""
        };
    },
    methods: {
        registerInvestimento: function () {

            let backgorundColorSet =
             {
                      CDB: '#648FFF',//'yellow',
                      LCI: '#785EF0',//'red',
                      LCA: '#DC267F',//'green',
                      TesouroIPCA: '#FE6100', //'brown',
                      'Tesouro IPCA': '#FE6100',  //'brown',
                      TesouroSelic: '#FFB000', //'blue',
                      'Tesouro Selic': '#FFB000' //'blue'
            }
           //Salvando os dados da simulação em um objeto
           let dados = {
              tempoInvestimento: this.tempoInvestimento,
              investimentoInicial: this.investimentoInicial,
              checkedInvestimentos: this.checkedInvestimentos
            };

            //Enviando os dados da simulação para o backend, processando a resposta e colocando nos dados do gráfico
            DataService.createPassado(dados)
            .then(response =>  {

              let datasetBarra = {label:'',backgroundColor:"", data:{}};
              let k = 0;
              let datasetLinha = {label:'', borderColor:'',backgroundColor:""};
              let j = 0;
              let data = new Array();


              //Salvando os dados para o gráfico de barras e para a tabela
              for(const key in response.data.Montantes){
                  this.montante[key] = response.data.Montantes[key];
                  this.juros[key] = response.data.Juros[key];
                  this.imposto[key] = response.data.Imposto[key];

                  datasetBarra.label = this.checkedInvestimentos[k];
                  datasetBarra.backgroundColor = backgorundColorSet[key];
                  datasetBarra.data[datasetBarra.label] = parseFloat(response.data.Montantes[key]);
                  this.barChartData.datasets.push(datasetBarra);
                  datasetBarra = {label:'',backgroundColor:"", data:{}};
                  k = k + 1;
               }

               //Salvando os dados para o gráfico de linhas
               for(let i = 0; i < response.data.Evolucao.length; i++ ){   
                if(i === 0)
                  data.push(response.data.Evolucao[i]);
                else if(response.data.Evolucao[i] == this.investimentoInicial){
                  datasetLinha.label = this.checkedInvestimentos[j];
                  datasetLinha.borderColor = backgorundColorSet[this.checkedInvestimentos[j]];
                  datasetLinha.backgroundColor = backgorundColorSet[this.checkedInvestimentos[j]];
                  datasetLinha['data'] = data;
                  this.lineChartData.datasets.push(datasetLinha);
                  datasetLinha = {label:'', borderColor:'',backgroundColor:""};
                  data = new Array();
                  data.push(response.data.Evolucao[i]);
                  j++;
                }
                else
                  data.push(response.data.Evolucao[i]);
                if(i === response.data.Evolucao.length-1){
                  datasetLinha.label = this.checkedInvestimentos[j];
                  datasetLinha.borderColor = backgorundColorSet[this.checkedInvestimentos[j]];
                  datasetLinha.backgroundColor = backgorundColorSet[this.checkedInvestimentos[j]];
                  datasetLinha['data'] = data;
                  this.lineChartData.datasets.push(datasetLinha);
                }
                
               }

               for(let i = 0; i <= parseInt(this.tempoInvestimento); i++){
                this.lineChartData.labels.push(i);
               }

              
              this.clearForm();
              this.showResultados();

             })
          .catch(error => {
          console.log(error.message);
         });
        },

        showResultados: function(){
              this.showBarra();
              this.notSubmitted = false;
              this.loaded = true;
        },
    clearForm: function() {
       this.checkedInvestimentos = [];
        this.tempoInvestimento = "";
        this.investimentoInicial = "";
    },
    showBarra: function(){
      this.flagBarras = true;
      this.flagLinha = false;
      this.flagTabela = false;
      this.isActiveBarra ="active";
      this.isActiveLinha="";
      this.isActiveTabela="";
    },
    showTabela: function(){
      this.flagBarras = false;
      this.flagLinha = false;
      this.flagTabela = true;
      this.isActiveBarra ="";
      this.isActiveLinha="";
      this.isActiveTabela="active";
    },
    showLinha: function(){
      this.flagBarras = false;
      this.flagLinha = true;
      this.flagTabela = false;
      this.isActiveBarra ="";
      this.isActiveLinha="active";
      this.isActiveTabela="";
    },
     clearData: function(){

          this.barChartData.datasets = []; // Resetando os dados do gráfico de barras

          this.lineChartData.datasets = [];// Resetando os dados do gráfico de linhas
          this.lineChartData.labels = [];//  Resetando os dados das labels do gráfico de linhas

          //Resetando os dados usados na tabela
          this.montante = {};
          this.juros = {};
          this.imposto = {};

          this.notSubmitted = !this.notSubmitted;
    },
    printResult: function(){
      window.print();
    }

    },
}
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.chart-container {
  margin-top: 10px;
  max-height: 380px;
  max-width: 400px;
  align-items: center;
  justify-content: center;
  display: flex;
}

#nova-simulacao,#gerar-pdf{
  margin-top: 10px;
  margin-right: 50px;
}

#tempo{
  width: 202.4px;
}

#botoes-nova-pdf
{
    width:100%;
    text-align: center;
}
.inner
{
    display: inline-block;
}
</style>
