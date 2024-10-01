const url = "https://servicodados.ibge.gov.br/api/v3/agregados/7392/periodos/2014/variaveis/10484?localidades=N1[all]&classificacao=454[47952]%7C919[48244,48245,48246,48277]"

async function visualizarDados(){
    const res = await fetch(url)
    const dados = await res.json()
    regiao = 0
     resultado_dados = (dados[0]['resultados'][0]["series"][regiao]['serie'])
    resultado_regiao = (dados[0]['resultados'][0]["series"][regiao]["localidade"]['nome'])
    console.log(resultado_dados, resultado_regiao)
  }
  visualizarDados()
  