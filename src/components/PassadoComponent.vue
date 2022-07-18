<template>
<div class="passado">
    <p>
          Neste módulo, é possível simular um ou mais investimentos de renda fixa de forma a entender quanto o(s) investimento(s)
          teriam rendido caso feito(s) em determinado prazo até a presente data.
          Inicialmente selecione os investimentos a serem simulados atráves das caixas de seleção. 
          Após isso, insira o prazo do investimento e o valor do investimento inicial.
          Por fim, clique no botão "Passado" para realizar a simulação.
        </p>
    <form action="/simulado" method="post">
        <div class="mb-3">
             <label for="investimentos" class="form-label">Selecione os investimentos a serem simulados:</label>
        </div>
        <div class="form-check form-check-inline">
            <input type="checkbox" name="cdb" id="cdb" class="form-check-input">
            <label for="cdb"  >CDB</label>
          </div>
          <div class="form-check form-check-inline">
             <input type="checkbox" name="lci" id="lci" class="form-check-input">
            <label for="cdb">LCI</label>
          </div>
           <div class="form-check form-check-inline">
            <input type="checkbox" name="lca" id="lca" class="form-check-input">
            <label for="cdb">LCA</label>
           </div>
           <div class="form-check form-check-inline">
             <input type="checkbox" name="tesouro_ipca" id="tesouro_ipca" class="form-check-input">
            <label for="cdb">Tesouro IPCA</label>
           </div>
           <div class="form-check form-check-inline">
                <input type="checkbox" name="tesouro_selic" id="tesouro_selic" class="form-check-input">
            <label label for="cdb">Tesouro Selic</label>
           </div>
        <div class="mb-3">
             <label for="tempo" class="form-label">Tempo de investimento: </label><br>
            <input type="number" name="tempo" id="tempo" min="0">
        </div>
        <div class="mb-3">
            <label for="investimento_inicial" class="form-label">Qual o valor do investimento inicial? </label><br>
            <input type="number" name="investimento_inicial" id="investimento_inicial" min="0">
        </div>
    <button class="btn btn-primary"  type="submit">Simular Passado</button>
    </form>
</div>
</template>

<script>

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
</style>
