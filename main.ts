const url = "https://servicodados.ibge.gov.br/api/v3/agregados/7392/periodos/2014/variaveis/10484?localidades=N1[all]&classificacao=454[47952]%7C919[48244,48245,48246,48277]"

async function visualizarDados() {
  const res = await fetch(url);
  const dados = await res.json();
  var regiao = 0;
  const tipo_dados = dados[0]["variavel"];
  console.log(tipo_dados);
  const dados_da_regiao = dados[0]['resultados'][0]["series"][regiao];
  var resultado_dados = dados_da_regiao['serie'];
  var resultado_regiao = dados_da_regiao["localidade"]['nome'];
  console.log(resultado_dados, resultado_regiao);
}
visualizarDados();

const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos--container__texto')
paragrafo.innerHTML = `Está é uma pesquisa do IBGE com o foco em ${tipo_dados}`
container.appendChild(paragrafo)
