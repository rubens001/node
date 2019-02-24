# SQLITE Project

instalacao do driver
```sh
baixado do site do sqlite o pacote compilado ja possui : sqldiff, sqlite3, sqlite3_analyzer
$ npm install sqlite3 --save
```

```sh
parece que só com pacote npm já é suficiente...
```

bovespa dados históricos
http://www.bmfbovespa.com.br/pt_br/servicos/market-data/historico/mercado-a-vista/cotacoes-historicas/
http://www.bmfbovespa.com.br/pt_br/servicos/market-data/historico/mercado-a-vista/series-historicas/

tipo de mercado :
010 VISTA
012 EXERCÍCIO DE OPÇÕES DE COMPRA
013 EXERCÍCIO DE OPÇÕES DE VENDA
017 LEILÃO
020 FRACIONÁRIO
030 TERMO
050 FUTURO COM RETENÇÃO DE GANHO
060 FUTURO COM MOVIMENTAÇÃO CONTÍNUA
070 OPÇÕES DE COMPRA
080 OPÇÕES DE VENDA

classif por cdNegociacao + dtPregao
onbreak  : coluna Y2 =IF(C2=C1;0;1)
primUltim: coluna Z2 =IF(Y2=1;M2;Z1)
variacao : coluna AA2 =IF(Y3=1;(M2-Z2)*100/Z2;0)

acoes terminadas em :
3  Ordinária
4  Preferencial
5  Preferencial classe A
6  Preferencial classe B
11 BDRs, ETFs e Units

11 – Não há uma regra específica para a ação negociada com o número 11. Geralmente este número representa os recibos de ações de empresas estrangeiras negociadas na bolsa brasileira, os chamados BDRs (Brazilian Deposits Receipts). Além disso, o 11 também representa as Units, que são ativos compostos por mais de um tipo de ação, bem como os fundos de índices, conhecido como ETFs – Exchange Traded Funds.

