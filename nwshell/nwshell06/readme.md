# Node Web Shell Project

instalacao do driver mongo havia problema e sol:
```sh
$ sudo apt-get install libkrb5-dev
```

- execução do serviço passou a receber resultado via callBack (showReturn) permitindo tratamento de retorno de chamadas assíncronas.
- instalação de "request".
- retorno de err no callBack
- tratamento de retorno null/undefined

- no index.html
function objStr(obj) {
	if (obj===null||obj===undefined){return obj;}
- No app.js
// loop object items turning functions into strings
function objFunc(obj) {
  if (obj===null||obj===undefined){return obj;}
