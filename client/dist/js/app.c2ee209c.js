(function(){var e={8186:function(e,a,t){"use strict";var i=t(9242),s=t(3396);const o={id:"app",class:"bg-light"},n=(0,s._)("header",null,[(0,s._)("h1",null,"Simulador de Renda Fixa")],-1),l={id:"sidebar"},r={id:"content"},c=(0,s._)("footer",{class:"text-center text-lg-start bg-light text-muted"},[(0,s._)("div",{class:"text-center p-4"}," Matheus dos Anjos Martins - 2022 ")],-1);function u(e,a,t,i,u,d){const m=(0,s.up)("MenuComponent"),h=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",o,[n,(0,s._)("aside",l,[(0,s.Wm)(m)]),(0,s._)("div",r,[(0,s.Wm)(h)]),c])}var d=t(7139);const m={class:"menu bg-light"},h={class:"d-flex align-items-start"},v={class:"nav flex-column nav-pills me-3",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},p=(0,s._)("i",{class:"fs-4 bi-house"},null,-1),b=(0,s.Uk)(),f=(0,s._)("span",{class:"ms-1 d-none d-sm-inline"},"Home",-1),_=(0,s._)("i",{class:"fs-4 bi-arrow-left-circle"},null,-1),k=(0,s.Uk)(),g=(0,s._)("span",{class:"d-none d-sm-inline"},"Simular",-1),C=(0,s.Uk)(" Passado"),I=(0,s._)("i",{class:"fs-4 bi-arrow-right-circle"},null,-1),w=(0,s.Uk)(),A=(0,s._)("span",{class:"d-none d-sm-inline"},"Simular",-1),y=(0,s.Uk)(" Futuro"),D=(0,s._)("i",{class:"fs-4 bi-info-circle"},null,-1),S=(0,s.Uk)(),T=(0,s._)("span",{class:"ms-1 d-none d-sm-inline"},"Sobre",-1);function L(e,a,t,i,o,n){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",m,[(0,s._)("div",h,[(0,s._)("div",v,[(0,s.Wm)(l,{to:"/",onClick:n.activeHome,class:(0,d.C_)(["nav-link",{active:o.isActiveHome}]),id:"v-pills-home-tab",role:"tab"},{default:(0,s.w5)((()=>[p,b,f])),_:1},8,["onClick","class"]),(0,s.Wm)(l,{to:"/simulpassado",onClick:n.activePassado,class:(0,d.C_)(["nav-link",{active:o.isActivePassado}]),id:"v-pills-home-tab",role:"tab"},{default:(0,s.w5)((()=>[_,k,g,C])),_:1},8,["onClick","class"]),(0,s.Wm)(l,{to:"/simulfuturo",onClick:n.activeFuturo,class:(0,d.C_)(["nav-link",{active:o.isActiveFuturo}]),id:"v-pills-home-tab",role:"tab"},{default:(0,s.w5)((()=>[I,w,A,y])),_:1},8,["onClick","class"]),(0,s.Wm)(l,{to:"/sobre",onClick:n.activeSobre,class:(0,d.C_)(["nav-link",{active:o.isActiveSobre}]),id:"v-pills-home-tab",role:"tab"},{default:(0,s.w5)((()=>[D,S,T])),_:1},8,["onClick","class"])])])])}var B={name:"MenuComponent",data(){return{isActiveHome:"active",isActivePassado:"",isActiveFuturo:"",isActiveSobre:""}},methods:{activeHome:function(){this.isActiveHome="active",this.isActiveFuturo="",this.isActivePassado="",this.isActiveSobre=""},activePassado:function(){this.isActiveHome="",this.isActiveFuturo="",this.isActivePassado="active",this.isActiveSobre=""},activeFuturo:function(){this.isActiveHome="",this.isActiveFuturo="active",this.isActivePassado="",this.isActiveSobre=""},activeSobre:function(){this.isActiveHome="",this.isActiveFuturo="",this.isActivePassado="",this.isActiveSobre="active"}}},x=t(89);const z=(0,x.Z)(B,[["render",L]]);var F=z,P={name:"App",components:{MenuComponent:F}};const U=(0,x.Z)(P,[["render",u]]);var j=U,q=(t(8937),t(2483));const O={class:"container-fluid"},E=(0,s._)("p",null," Este app foi desenvolvido como artefato final do Trabalho de Conclusão de Curso de Matheus dos Anjos Martins sob a orientação do Prof. Dr. Brauliro Goncalves Leal. Nele é possível realizar simulações e comparações de até cinco investimentos de renda fixa. ",-1),R=(0,s._)("p",null,[(0,s._)("strong",null,"Isenções de responsabilidade")],-1),M=(0,s._)("p",null," Os resultados das simulações realizadas neste app tem caráter meramente educativo, sendo sua utilização optativa. O autor não se responsabiliza por eventuais danos ou prejuízos que venham a ser causados ao usuário, ou qualquer terceiro, pela tomada de decisão com base na utilização do app, assumindo, neste caso, o próprio usuário que dele fizer uso, a integral e exclusiva responsabilidade. ",-1),V=(0,s._)("p",null,[(0,s._)("strong",null,"Rentabilidade passada não garante rentabilidade futura!")],-1),H=[E,R,M,V];function W(e,a){return(0,s.wg)(),(0,s.iD)("div",O,H)}const G={},Z=(0,x.Z)(G,[["render",W]]);var N=Z;const Q={class:"home"},J=(0,s._)("h2",null," Bem vindo ao SimRendaFixa (Simulador de Renda Fixa)! ",-1),$=(0,s._)("p",null," Neste simulador estão disponíveis os seguintes investimentos: LCI, LCA, CDB, Tesouro IPCA e Tesouro Selic. ",-1),K=(0,s._)("p",null,[(0,s._)("strong",null,"Isenções de responsabilidade")],-1),Y=(0,s._)("p",null," Os resultados das simulações realizadas neste app tem caráter meramente educativo, sendo sua utilização optativa. O autor não se responsabiliza por eventuais danos ou prejuízos que venham a ser causados ao usuário, ou qualquer terceiro, pela tomada de decisão com base na utilização do app, assumindo, neste caso, o próprio usuário que dele fizer uso, a integral e exclusiva responsabilidade. ",-1),X=(0,s._)("p",null,[(0,s._)("strong",null,"Rentabilidade passada não garante rentabilidade futura!")],-1),ee=[J,$,K,Y,X];function ae(e,a,t,i,o,n){return(0,s.wg)(),(0,s.iD)("div",Q,ee)}var te={name:"HomeComponent"};const ie=(0,x.Z)(te,[["render",ae]]);var se=ie;const oe=e=>((0,s.dD)("data-v-d0b86d54"),e=e(),(0,s.Cn)(),e),ne={class:"futuro"},le=oe((()=>(0,s._)("h3",null,[(0,s._)("strong",null,"Instruções")],-1))),re=oe((()=>(0,s._)("p",null,' Neste módulo, é possível simular um ou mais investimentos de renda fixa projetados para uma data futura a partir data presente. Inicialmente, selecione os investimentos a serem simulados atráves das caixas de seleção. Após isso, insira o prazo do investimento e o valor do investimento inicial. Por fim, clique no botão "Simular Futuro" para realizar a simulação. ',-1))),ce={key:0,id:"formulario"},ue=oe((()=>(0,s._)("div",{class:"mb-3"},[(0,s._)("label",{for:"investimentos",class:"form-label"},[(0,s._)("strong",null,"Selecione os investimentos a serem simulados:")])],-1))),de={class:"mb-3 form-check form-check-inline"},me=oe((()=>(0,s._)("label",{for:"cdb"},"CDB",-1))),he={class:"mb-3 form-check form-check-inline"},ve=oe((()=>(0,s._)("label",{for:"lci"},"LCI",-1))),pe={class:"mb-3 form-check form-check-inline"},be=oe((()=>(0,s._)("label",{for:"lca"},"LCA",-1))),fe={class:"mb-3 form-check form-check-inline"},_e=oe((()=>(0,s._)("label",{for:"tesouro-ipca"},"Tesouro IPCA",-1))),ke={class:"mb-3 form-check form-check-inline"},ge=oe((()=>(0,s._)("label",{label:"",for:"tesouro-selic"},"Tesouro Selic",-1))),Ce=oe((()=>(0,s._)("br",null,null,-1))),Ie={class:"mb-3"},we=oe((()=>(0,s._)("label",{for:"tempo",class:"form-label"},[(0,s._)("strong",null,"Qual o tempo do investimento em meses?")],-1))),Ae=oe((()=>(0,s._)("br",null,null,-1))),ye={class:"mb-3"},De=oe((()=>(0,s._)("label",{for:"investimento-inicial",class:"form-label"},[(0,s._)("strong",null,"Qual o valor do investimento inicial?")],-1))),Se=oe((()=>(0,s._)("br",null,null,-1))),Te=oe((()=>(0,s._)("button",{class:"btn btn-primary"},[(0,s._)("span",{class:"bi-check-circle"}),(0,s.Uk)(" Simular Futuro")],-1))),Le=oe((()=>(0,s._)("br",null,null,-1))),Be=oe((()=>(0,s._)("p",null,[(0,s._)("strong",null,"Isenções de responsabilidade")],-1))),xe=oe((()=>(0,s._)("p",null," Os resultados das simulações realizadas neste app tem caráter meramente educativo, sendo sua utilização optativa. O autor não se responsabiliza por eventuais danos ou prejuízos que venham a ser causados ao usuário, ou qualquer terceiro, pela tomada de decisão com base na utilização do app, assumindo, neste caso, o próprio usuário que dele fizer uso, a integral e exclusiva responsabilidade. ",-1))),ze=oe((()=>(0,s._)("p",null,[(0,s._)("strong",null,"Rentabilidade passada não garante rentabilidade futura!")],-1))),Fe={key:1,class:"resultados"},Pe={key:0,class:"resultados",id:"carregados"},Ue={class:"nav nav-pills mb-3",id:"pills-tab",role:"tablist"},je={class:"nav-item",role:"presentation"},qe={class:"nav-item",role:"presentation"},Oe={class:"nav-item",role:"presentation"},Ee={key:0,class:"tabela"},Re={class:"table table-striped table-bordered"},Me=oe((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Investimento"),(0,s._)("th",null,"Juros"),(0,s._)("th",null,"Imposto"),(0,s._)("th",null,"Valor Final")])],-1))),Ve={key:1,class:"chart-container"},He={class:"chart"},We={key:2,class:"chart-container"},Ge={class:"chart"},Ze=oe((()=>(0,s._)("strong",null,null,-1))),Ne=oe((()=>(0,s._)("br",null,null,-1))),Qe=oe((()=>(0,s._)("div",{id:"fonte-dados"},[(0,s._)("p",null,[(0,s.Uk)(" Para a realização desta simulação foram usadas as seguintes fontes: para o CDB, Tesouro IPCA e Tesouro SELIC foram usados os dados do "),(0,s._)("strong",null,"Boletim da renda fixa da ANBIMA"),(0,s.Uk)(", disponível em: "),(0,s._)("a",{href:"https://www.anbima.com.br/pt_br/informar/relatorios/renda-fixa-tesouraria/boletim-renda-fixa/boletim-renda-fixa.htm",target:"_blank"},"Boletim Renda Fixa"),(0,s.Uk)(" e para a LCI/LCA foi considerado um rendimento de 98% do CDI, sendo o valor deste obtido da "),(0,s._)("strong",null,"Série Temporal Taxa de juros - CDI acumulada no mês"),(0,s.Uk)(" do Banco Central do Brasil, disponível em: "),(0,s._)("a",{href:"https://www3.bcb.gov.br/sgspub/localizarseries/localizarSeries.do?method=prepararTelaLocalizarSeries",target:"_blank"},"SGS - Sistema Gerenciador de Séries Temporais"),(0,s.Uk)(" sob o código de número 4391. ")])],-1))),Je={id:"botoes-nova-pdf"},$e={class:"inner"},Ke={class:"inner"};function Ye(e,a,t,o,n,l){const r=(0,s.up)("BarChart"),c=(0,s.up)("LineChart");return(0,s.wg)(),(0,s.iD)("div",ne,[le,re,n.notSubmitted?((0,s.wg)(),(0,s.iD)("div",ce,[(0,s._)("form",{onSubmit:a[7]||(a[7]=(0,i.iM)(((...e)=>l.registerInvestimento&&l.registerInvestimento(...e)),["prevent"]))},[ue,(0,s._)("div",de,[(0,s.wy)((0,s._)("input",{type:"checkbox",name:"cdb",id:"cdb",class:"form-check-input",value:"CDB","onUpdate:modelValue":a[0]||(a[0]=e=>n.checkedInvestimentos=e)},null,512),[[i.e8,n.checkedInvestimentos]]),me]),(0,s._)("div",he,[(0,s.wy)((0,s._)("input",{type:"checkbox",name:"lci",id:"lci",class:"form-check-input",value:"LCI","onUpdate:modelValue":a[1]||(a[1]=e=>n.checkedInvestimentos=e)},null,512),[[i.e8,n.checkedInvestimentos]]),ve]),(0,s._)("div",pe,[(0,s.wy)((0,s._)("input",{type:"checkbox",name:"lca",id:"lca",class:"form-check-input",value:"LCA","onUpdate:modelValue":a[2]||(a[2]=e=>n.checkedInvestimentos=e)},null,512),[[i.e8,n.checkedInvestimentos]]),be]),(0,s._)("div",fe,[(0,s.wy)((0,s._)("input",{type:"checkbox",name:"tesouro_ipca",id:"tesouro-ipca",value:"Tesouro IPCA",class:"form-check-input","onUpdate:modelValue":a[3]||(a[3]=e=>n.checkedInvestimentos=e)},null,512),[[i.e8,n.checkedInvestimentos]]),_e]),(0,s._)("div",ke,[(0,s.wy)((0,s._)("input",{type:"checkbox",name:"tesouro_selic",id:"tesouro-selic",class:"form-check-input",value:"Tesouro Selic","onUpdate:modelValue":a[4]||(a[4]=e=>n.checkedInvestimentos=e)},null,512),[[i.e8,n.checkedInvestimentos]]),ge]),Ce,(0,s._)("div",Ie,[we,Ae,(0,s.wy)((0,s._)("input",{type:"number",name:"tempo",id:"tempo",min:"0",max:"60",alt:"Insira um inteiro entre 1 e 60","onUpdate:modelValue":a[5]||(a[5]=e=>n.tempoInvestimento=e)},null,512),[[i.nr,n.tempoInvestimento,void 0,{number:!0}]])]),(0,s._)("div",ye,[De,Se,(0,s.wy)((0,s._)("input",{type:"number",name:"investimento-inicial",id:"investimento-inicial",min:"1","onUpdate:modelValue":a[6]||(a[6]=e=>n.investimentoInicial=e)},null,512),[[i.nr,n.investimentoInicial,void 0,{number:!0}]])]),Te],32),Le,Be,xe,ze])):((0,s.wg)(),(0,s.iD)("div",Fe,[n.loaded?((0,s.wg)(),(0,s.iD)("div",Pe,[(0,s._)("nav",null,[(0,s._)("ul",Ue,[(0,s._)("li",je,[(0,s._)("button",{class:(0,d.C_)(["nav-link",{active:n.isActiveBarra}]),onClick:a[8]||(a[8]=(...e)=>l.showBarra&&l.showBarra(...e)),id:"pills-home-tab",type:"button",role:"tab"},"Gráfico de barras",2)]),(0,s._)("li",qe,[(0,s._)("button",{class:(0,d.C_)(["nav-link",{active:n.isActiveLinha}]),onClick:a[9]||(a[9]=(...e)=>l.showLinha&&l.showLinha(...e)),id:"pills-profile-tab",type:"button",role:"tab"},"Gráfico de linhas",2)]),(0,s._)("li",Oe,[(0,s._)("button",{class:(0,d.C_)(["nav-link",{active:n.isActiveTabela}]),onClick:a[10]||(a[10]=(...e)=>l.showTabela&&l.showTabela(...e)),id:"pills-contact-tab",type:"button",role:"tab"},"Tabela",2)])])]),n.flagTabela?((0,s.wg)(),(0,s.iD)("div",Ee,[(0,s._)("table",Re,[Me,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.montante,((e,a)=>((0,s.wg)(),(0,s.iD)("tr",{key:a},[(0,s._)("td",null,(0,d.zw)(a),1),(0,s._)("td",null,(0,d.zw)(n.juros[a]),1),(0,s._)("td",null,(0,d.zw)(n.imposto[a]),1),(0,s._)("td",null,(0,d.zw)(e),1)])))),128))])])])):(0,s.kq)("",!0),n.flagBarras?((0,s.wg)(),(0,s.iD)("div",Ve,[(0,s._)("div",He,[(0,s.Wm)(r,{"chart-data":n.barChartData},null,8,["chart-data"])])])):(0,s.kq)("",!0),n.flagLinha?((0,s.wg)(),(0,s.iD)("div",We,[(0,s._)("div",Ge,[(0,s.Wm)(c,{"chart-data":n.lineChartData},null,8,["chart-data"])]),Ze])):(0,s.kq)("",!0),Ne,Qe,(0,s._)("div",Je,[(0,s._)("div",$e,[(0,s._)("button",{id:"nova-simulacao",class:"btn btn-primary",onClick:a[11]||(a[11]=(...e)=>l.clearData&&l.clearData(...e))},"Nova Simulação")]),(0,s._)("div",Ke,[(0,s._)("button",{id:"gerar-pdf",class:"btn btn-success",onClick:a[12]||(a[12]=(...e)=>l.printResult&&l.printResult(...e))},"Imprimir")])])])):(0,s.kq)("",!0)]))])}var Xe=t(6265),ea=t.n(Xe),aa=ea().create({baseURL:"https://sim-renda-fixa.herokuapp.com",headers:{"Content-Type":"application/x-www-form-urlencoded"}}),ta=t(5410),ia=t.n(ta);class sa{createFuturo(e){return aa.post("/simuladofuturo",ia().stringify(e))}createPassado(e){return aa.post("/simuladopassado",ia().stringify(e))}retrieve(){return aa.get("/")}}var oa=new sa;function na(e,a,t,i,o,n){const l=(0,s.up)("Bar");return(0,s.wg)(),(0,s.j4)(l,{"chart-data":t.chartData,"chart-options":o.chartOptions},null,8,["chart-data","chart-options"])}var la=t(6294),ra=t(5140);ra.kL.register(ra.Dx,ra.u,ra.De,ra.ZL,ra.uw,ra.f$);var ca={name:"BarChart",components:{Bar:la.$Q},props:{chartData:{type:Object,required:!0}},data(){return{chartOptions:{responsive:!1,plugins:{title:{display:!0,text:"Valor final dos Investimentos",color:"black",font:{size:14}}},scales:{y:{title:{display:!0,text:"Valor Líquido (Reais)",color:"black",font:{size:14,weight:"bold"}}}}}}}};const ua=(0,x.Z)(ca,[["render",na]]);var da=ua;function ma(e,a,t,i,o,n){const l=(0,s.up)("Line");return(0,s.wg)(),(0,s.j4)(l,{"chart-data":t.chartData,"chart-options":o.chartOptions},null,8,["chart-data","chart-options"])}ra.kL.register(ra.Dx,ra.u,ra.De,ra.jn,ra.uw,ra.f$,ra.od);var ha={name:"LineChart",components:{Line:la.x1},props:{chartData:{type:Object,required:!0}},data(){return{chartOptions:{responsive:!1,plugins:{title:{display:!0,text:"Evolução dos Investimento ao longo do tempo",color:"black",font:{size:14}}},scales:{y:{title:{display:!0,text:"Valor bruto (Reais)",color:"black",font:{size:14,weight:"bold"}}},x:{title:{display:!0,text:"Tempo de investimento (meses)",color:"black",font:{size:14,weight:"bold"}}}}}}}};const va=(0,x.Z)(ha,[["render",ma]]);var pa=va,ba={name:"FuturoComponent",components:{BarChart:da,LineChart:pa},data(){return{checkedInvestimentos:[],tempoInvestimento:"",investimentoInicial:"",montante:{},juros:{},imposto:{},barChartData:{datasets:[]},lineChartData:{labels:[],datasets:[]},notSubmitted:!0,loaded:!1,flagTabela:!1,flagLinha:!1,flagBarras:!0,isActiveBarra:"",isActiveLinha:"",isActiveTabela:""}},methods:{registerInvestimento:function(){let e={CDB:"#648FFF",LCI:"#785EF0",LCA:"#DC267F",TesouroIPCA:"#FE6100","Tesouro IPCA":"#FE6100",TesouroSelic:"#FFB000","Tesouro Selic":"#FFB000"},a={tempoInvestimento:this.tempoInvestimento,investimentoInicial:this.investimentoInicial,checkedInvestimentos:this.checkedInvestimentos};oa.createFuturo(a).then((a=>{let t={label:"",backgroundColor:"",data:{}},i=0,s={label:"",borderColor:"",backgroundColor:""},o=0,n=new Array;for(const l in a.data.Montantes)this.montante[l]=a.data.Montantes[l],this.juros[l]=a.data.Juros[l],this.imposto[l]=a.data.Imposto[l],t.label=this.checkedInvestimentos[i],t.backgroundColor=e[l],t.data[t.label]=parseFloat(a.data.Montantes[l]),this.barChartData.datasets.push(t),t={label:"",backgroundColor:"",data:{}},i+=1;for(let l=0;l<a.data.Evolucao.length;l++)0===l?n.push(a.data.Evolucao[l]):a.data.Evolucao[l]==this.investimentoInicial?(s.label=this.checkedInvestimentos[o],s.borderColor=e[this.checkedInvestimentos[o]],s.backgroundColor=e[this.checkedInvestimentos[o]],s["data"]=n,this.lineChartData.datasets.push(s),s={label:"",borderColor:"",backgroundColor:""},n=new Array,n.push(a.data.Evolucao[l]),o++):n.push(a.data.Evolucao[l]),l===a.data.Evolucao.length-1&&(s.label=this.checkedInvestimentos[o],s.borderColor=e[this.checkedInvestimentos[o]],s.backgroundColor=e[this.checkedInvestimentos[o]],s["data"]=n,this.lineChartData.datasets.push(s));for(let e=0;e<=parseInt(this.tempoInvestimento);e++)this.lineChartData.labels.push(e);this.clearForm(),this.showResultados()})).catch((e=>{console.log(e.message)}))},showResultados:function(){this.showBarra(),this.notSubmitted=!1,this.loaded=!0},clearForm:function(){this.checkedInvestimentos=[],this.tempoInvestimento="",this.investimentoInicial=""},showBarra:function(){this.flagBarras=!0,this.flagLinha=!1,this.flagTabela=!1,this.isActiveBarra="active",this.isActiveLinha="",this.isActiveTabela=""},showTabela:function(){this.flagBarras=!1,this.flagLinha=!1,this.flagTabela=!0,this.isActiveBarra="",this.isActiveLinha="",this.isActiveTabela="active"},showLinha:function(){this.flagBarras=!1,this.flagLinha=!0,this.flagTabela=!1,this.isActiveBarra="",this.isActiveLinha="active",this.isActiveTabela=""},clearData:function(){this.barChartData.datasets=[],this.lineChartData.datasets=[],this.lineChartData.labels=[],this.montante={},this.juros={},this.imposto={},this.notSubmitted=!this.notSubmitted},printResult:function(){window.print()}}};const fa=(0,x.Z)(ba,[["render",Ye],["__scopeId","data-v-d0b86d54"]]);var _a=fa;const ka=e=>((0,s.dD)("data-v-ae57bb76"),e=e(),(0,s.Cn)(),e),ga={class:"passado"},Ca=ka((()=>(0,s._)("h3",null,[(0,s._)("strong",null,"Instruções")],-1))),Ia=ka((()=>(0,s._)("p",null,' Neste módulo, é possível simular um ou mais investimentos de renda fixa de forma a entender quanto o(s) investimento(s) teriam rendido caso feito(s) em determinado prazo até a presente data. Inicialmente selecione os investimentos a serem simulados atráves das caixas de seleção. Após isso, insira o prazo do investimento e o valor do investimento inicial. Por fim, clique no botão "Simular Passado" para realizar a simulação. ',-1))),wa={key:0,id:"formulario"},Aa=ka((()=>(0,s._)("div",{class:"mb-3"},[(0,s._)("label",{for:"investimentos",class:"form-label"},[(0,s._)("strong",null,"Selecione os investimentos a serem simulados:")])],-1))),ya={class:"mb-3 form-check form-check-inline"},Da=ka((()=>(0,s._)("label",{for:"cdb"},"CDB",-1))),Sa={class:"mb-3 form-check form-check-inline"},Ta=ka((()=>(0,s._)("label",{for:"lci"},"LCI",-1))),La={class:"mb-3 form-check form-check-inline"},Ba=ka((()=>(0,s._)("label",{for:"lca"},"LCA",-1))),xa={class:"mb-3 form-check form-check-inline"},za=ka((()=>(0,s._)("label",{for:"tesouro-ipca"},"Tesouro IPCA",-1))),Fa={class:"mb-3 form-check form-check-inline"},Pa=ka((()=>(0,s._)("label",{label:"",for:"tesouro-selic"},"Tesouro Selic",-1))),Ua=ka((()=>(0,s._)("br",null,null,-1))),ja={class:"mb-3"},qa=ka((()=>(0,s._)("label",{for:"tempo",class:"form-label"},[(0,s._)("strong",null,"Qual o tempo do investimento em meses?")],-1))),Oa=ka((()=>(0,s._)("br",null,null,-1))),Ea={class:"mb-3"},Ra=ka((()=>(0,s._)("label",{for:"investimento-inicial",class:"form-label"},[(0,s._)("strong",null,"Qual o valor do investimento inicial?")],-1))),Ma=ka((()=>(0,s._)("br",null,null,-1))),Va=ka((()=>(0,s._)("button",{class:"btn btn-primary"},[(0,s._)("span",{class:"bi-check-circle"}),(0,s.Uk)(" Simular Passado")],-1))),Ha=ka((()=>(0,s._)("br",null,null,-1))),Wa=ka((()=>(0,s._)("p",null,[(0,s._)("strong",null,"Isenções de responsabilidade")],-1))),Ga=ka((()=>(0,s._)("p",null," Os resultados das simulações realizadas neste app tem caráter meramente educativo, sendo sua utilização optativa. O autor não se responsabiliza por eventuais danos ou prejuízos que venham a ser causados ao usuário, ou qualquer terceiro, pela tomada de decisão com base na utilização do app, assumindo, neste caso, o próprio usuário que dele fizer uso, a integral e exclusiva responsabilidade. ",-1))),Za=ka((()=>(0,s._)("p",null,[(0,s._)("strong",null,"Rentabilidade passada não garante rentabilidade futura!")],-1))),Na={key:1,class:"resultados"},Qa={key:0,class:"resultados",id:"carregados"},Ja={class:"nav nav-pills mb-3",id:"pills-tab",role:"tablist"},$a={class:"nav-item",role:"presentation"},Ka={class:"nav-item",role:"presentation"},Ya={class:"nav-item",role:"presentation"},Xa={key:0,class:"tabela"},et={class:"table table-striped table-bordered"},at=ka((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Investimento"),(0,s._)("th",null,"Juros"),(0,s._)("th",null,"Imposto"),(0,s._)("th",null,"Valor Final")])],-1))),tt={key:1,class:"chart-container"},it={class:"chart"},st={key:2,class:"chart-container"},ot={class:"chart"},nt=ka((()=>(0,s._)("strong",null,null,-1))),lt=ka((()=>(0,s._)("br",null,null,-1))),rt=ka((()=>(0,s._)("div",{id:"fonte-dados"},[(0,s._)("p",null,[(0,s.Uk)(" Para a realização desta simulação foram usadas as seguintes fontes: para o CDB, Tesouro IPCA e Tesouro SELIC foram usados os dados do "),(0,s._)("strong",null,"Boletim da renda fixa da ANBIMA"),(0,s.Uk)(", disponível em: "),(0,s._)("a",{href:"https://www.anbima.com.br/pt_br/informar/relatorios/renda-fixa-tesouraria/boletim-renda-fixa/boletim-renda-fixa.htm",target:"_blank"},"Boletim Renda Fixa"),(0,s.Uk)(" e para a LCI/LCA foi considerado um rendimento de 98% do CDI, sendo o valor deste obtido da "),(0,s._)("strong",null,"Série Temporal Taxa de juros - CDI acumulada no mês"),(0,s.Uk)(" do Banco Central do Brasil, disponível em: "),(0,s._)("a",{href:"https://www3.bcb.gov.br/sgspub/localizarseries/localizarSeries.do?method=prepararTelaLocalizarSeries",target:"_blank"},"SGS - Sistema Gerenciador de Séries Temporais"),(0,s.Uk)(" sob o código de número 4391. ")])],-1))),ct={id:"botoes-nova-pdf"},ut={class:"inner"},dt={class:"inner"};function mt(e,a,t,o,n,l){const r=(0,s.up)("BarChart"),c=(0,s.up)("LineChart");return(0,s.wg)(),(0,s.iD)("div",ga,[Ca,Ia,n.notSubmitted?((0,s.wg)(),(0,s.iD)("div",wa,[(0,s._)("form",{onSubmit:a[7]||(a[7]=(0,i.iM)(((...e)=>l.registerInvestimento&&l.registerInvestimento(...e)),["prevent"]))},[Aa,(0,s._)("div",ya,[(0,s.wy)((0,s._)("input",{type:"checkbox",name:"cdb",id:"cdb",class:"form-check-input",value:"CDB","onUpdate:modelValue":a[0]||(a[0]=e=>n.checkedInvestimentos=e)},null,512),[[i.e8,n.checkedInvestimentos]]),Da]),(0,s._)("div",Sa,[(0,s.wy)((0,s._)("input",{type:"checkbox",name:"lci",id:"lci",class:"form-check-input",value:"LCI","onUpdate:modelValue":a[1]||(a[1]=e=>n.checkedInvestimentos=e)},null,512),[[i.e8,n.checkedInvestimentos]]),Ta]),(0,s._)("div",La,[(0,s.wy)((0,s._)("input",{type:"checkbox",name:"lca",id:"lca",class:"form-check-input",value:"LCA","onUpdate:modelValue":a[2]||(a[2]=e=>n.checkedInvestimentos=e)},null,512),[[i.e8,n.checkedInvestimentos]]),Ba]),(0,s._)("div",xa,[(0,s.wy)((0,s._)("input",{type:"checkbox",name:"tesouro_ipca",id:"tesouro-ipca",value:"Tesouro IPCA",class:"form-check-input","onUpdate:modelValue":a[3]||(a[3]=e=>n.checkedInvestimentos=e)},null,512),[[i.e8,n.checkedInvestimentos]]),za]),(0,s._)("div",Fa,[(0,s.wy)((0,s._)("input",{type:"checkbox",name:"tesouro_selic",id:"tesouro-selic",class:"form-check-input",value:"Tesouro Selic","onUpdate:modelValue":a[4]||(a[4]=e=>n.checkedInvestimentos=e)},null,512),[[i.e8,n.checkedInvestimentos]]),Pa]),Ua,(0,s._)("div",ja,[qa,Oa,(0,s.wy)((0,s._)("input",{type:"number",name:"tempo",id:"tempo",min:"1",max:"60",alt:"Insira um inteiro entre 1 e 60","onUpdate:modelValue":a[5]||(a[5]=e=>n.tempoInvestimento=e)},null,512),[[i.nr,n.tempoInvestimento,void 0,{number:!0}]])]),(0,s._)("div",Ea,[Ra,Ma,(0,s.wy)((0,s._)("input",{type:"number",name:"investimento-inicial",id:"investimento-inicial",min:"1","onUpdate:modelValue":a[6]||(a[6]=e=>n.investimentoInicial=e)},null,512),[[i.nr,n.investimentoInicial,void 0,{number:!0}]])]),Va],32),Ha,Wa,Ga,Za])):((0,s.wg)(),(0,s.iD)("div",Na,[n.loaded?((0,s.wg)(),(0,s.iD)("div",Qa,[(0,s._)("nav",null,[(0,s._)("ul",Ja,[(0,s._)("li",$a,[(0,s._)("button",{class:(0,d.C_)(["nav-link",{active:n.isActiveBarra}]),onClick:a[8]||(a[8]=(...e)=>l.showBarra&&l.showBarra(...e)),id:"pills-home-tab",type:"button",role:"tab"},"Gráfico de barras",2)]),(0,s._)("li",Ka,[(0,s._)("button",{class:(0,d.C_)(["nav-link",{active:n.isActiveLinha}]),onClick:a[9]||(a[9]=(...e)=>l.showLinha&&l.showLinha(...e)),id:"pills-profile-tab",type:"button",role:"tab"},"Gráfico de linhas",2)]),(0,s._)("li",Ya,[(0,s._)("button",{class:(0,d.C_)(["nav-link",{active:n.isActiveTabela}]),onClick:a[10]||(a[10]=(...e)=>l.showTabela&&l.showTabela(...e)),id:"pills-contact-tab",type:"button",role:"tab"},"Tabela",2)])])]),n.flagTabela?((0,s.wg)(),(0,s.iD)("div",Xa,[(0,s._)("table",et,[at,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.montante,((e,a)=>((0,s.wg)(),(0,s.iD)("tr",{key:a},[(0,s._)("td",null,(0,d.zw)(a),1),(0,s._)("td",null,(0,d.zw)(n.juros[a]),1),(0,s._)("td",null,(0,d.zw)(n.imposto[a]),1),(0,s._)("td",null,(0,d.zw)(e),1)])))),128))])])])):(0,s.kq)("",!0),n.flagBarras?((0,s.wg)(),(0,s.iD)("div",tt,[(0,s._)("div",it,[(0,s.Wm)(r,{"chart-data":n.barChartData},null,8,["chart-data"])])])):(0,s.kq)("",!0),n.flagLinha?((0,s.wg)(),(0,s.iD)("div",st,[(0,s._)("div",ot,[(0,s.Wm)(c,{"chart-data":n.lineChartData},null,8,["chart-data"])]),nt])):(0,s.kq)("",!0),lt,rt])):(0,s.kq)("",!0),(0,s._)("div",ct,[(0,s._)("div",ut,[(0,s._)("button",{id:"nova-simulacao",class:"btn btn-primary",onClick:a[11]||(a[11]=(...e)=>l.clearData&&l.clearData(...e))},"Nova Simulação")]),(0,s._)("div",dt,[(0,s._)("button",{id:"gerar-pdf",class:"btn btn-success",onClick:a[12]||(a[12]=(...e)=>l.printResult&&l.printResult(...e))},"Imprimir")])])]))])}var ht={name:"PassadoComponent",components:{BarChart:da,LineChart:pa},data(){return{checkedInvestimentos:[],tempoInvestimento:"",investimentoInicial:"",montante:{},juros:{},imposto:{},barChartData:{datasets:[]},lineChartData:{labels:[],datasets:[]},notSubmitted:!0,loaded:!1,flagTabela:!1,flagLinha:!1,flagBarras:!0,isActiveBarra:"",isActiveLinha:"",isActiveTabela:""}},methods:{registerInvestimento:function(){let e={CDB:"#648FFF",LCI:"#785EF0",LCA:"#DC267F",TesouroIPCA:"#FE6100","Tesouro IPCA":"#FE6100",TesouroSelic:"#FFB000","Tesouro Selic":"#FFB000"},a={tempoInvestimento:this.tempoInvestimento,investimentoInicial:this.investimentoInicial,checkedInvestimentos:this.checkedInvestimentos};oa.createPassado(a).then((a=>{let t={label:"",backgroundColor:"",data:{}},i=0,s={label:"",borderColor:"",backgroundColor:""},o=0,n=new Array;for(const l in a.data.Montantes)this.montante[l]=a.data.Montantes[l],this.juros[l]=a.data.Juros[l],this.imposto[l]=a.data.Imposto[l],t.label=this.checkedInvestimentos[i],t.backgroundColor=e[l],t.data[t.label]=parseFloat(a.data.Montantes[l]),this.barChartData.datasets.push(t),t={label:"",backgroundColor:"",data:{}},i+=1;for(let l=0;l<a.data.Evolucao.length;l++)0===l?n.push(a.data.Evolucao[l]):a.data.Evolucao[l]==this.investimentoInicial?(s.label=this.checkedInvestimentos[o],s.borderColor=e[this.checkedInvestimentos[o]],s.backgroundColor=e[this.checkedInvestimentos[o]],s["data"]=n,this.lineChartData.datasets.push(s),s={label:"",borderColor:"",backgroundColor:""},n=new Array,n.push(a.data.Evolucao[l]),o++):n.push(a.data.Evolucao[l]),l===a.data.Evolucao.length-1&&(s.label=this.checkedInvestimentos[o],s.borderColor=e[this.checkedInvestimentos[o]],s.backgroundColor=e[this.checkedInvestimentos[o]],s["data"]=n,this.lineChartData.datasets.push(s));for(let e=0;e<=parseInt(this.tempoInvestimento);e++)this.lineChartData.labels.push(e);this.clearForm(),this.showResultados()})).catch((e=>{console.log(e.message)}))},showResultados:function(){this.showBarra(),this.notSubmitted=!1,this.loaded=!0},clearForm:function(){this.checkedInvestimentos=[],this.tempoInvestimento="",this.investimentoInicial=""},showBarra:function(){this.flagBarras=!0,this.flagLinha=!1,this.flagTabela=!1,this.isActiveBarra="active",this.isActiveLinha="",this.isActiveTabela=""},showTabela:function(){this.flagBarras=!1,this.flagLinha=!1,this.flagTabela=!0,this.isActiveBarra="",this.isActiveLinha="",this.isActiveTabela="active"},showLinha:function(){this.flagBarras=!1,this.flagLinha=!0,this.flagTabela=!1,this.isActiveBarra="",this.isActiveLinha="active",this.isActiveTabela=""},clearData:function(){this.barChartData.datasets=[],this.lineChartData.datasets=[],this.lineChartData.labels=[],this.montante={},this.juros={},this.imposto={},this.notSubmitted=!this.notSubmitted},printResult:function(){window.print()}}};const vt=(0,x.Z)(ht,[["render",mt],["__scopeId","data-v-ae57bb76"]]);var pt=vt;const bt=[{path:"/",name:"Home",component:se,children:[]},{path:"/simulpassado",name:"Simular Passado",component:pt},{path:"/simulfuturo",name:"Simular Futuro",component:_a},{path:"/sobre",name:"Sobre",component:N}],ft=(0,q.p7)({history:(0,q.PO)(),routes:bt});var _t=ft;(0,i.ri)(j).use(_t).mount("#app")},4654:function(){}},a={};function t(i){var s=a[i];if(void 0!==s)return s.exports;var o=a[i]={exports:{}};return e[i](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,i,s,o){if(!i){var n=1/0;for(u=0;u<e.length;u++){i=e[u][0],s=e[u][1],o=e[u][2];for(var l=!0,r=0;r<i.length;r++)(!1&o||n>=o)&&Object.keys(t.O).every((function(e){return t.O[e](i[r])}))?i.splice(r--,1):(l=!1,o<n&&(n=o));if(l){e.splice(u--,1);var c=s();void 0!==c&&(a=c)}}return a}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[i,s,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var i in a)t.o(a,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:a[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,i){var s,o,n=i[0],l=i[1],r=i[2],c=0;if(n.some((function(a){return 0!==e[a]}))){for(s in l)t.o(l,s)&&(t.m[s]=l[s]);if(r)var u=r(t)}for(a&&a(i);c<n.length;c++)o=n[c],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(u)},i=self["webpackChunksim_renda_fixa_app"]=self["webpackChunksim_renda_fixa_app"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(8186)}));i=t.O(i)})();
//# sourceMappingURL=app.c2ee209c.js.map