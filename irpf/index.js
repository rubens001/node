'use strict'
const fs = require('fs');
const path = require('path');
const lineService = require('./service/lines');

const nmFileDecl = 'declaracao_2018.csv';
const thePathDecl = path.resolve(__dirname + '/dados', nmFileDecl);
const linhasDecl = lineService.execute(thePathDecl);

const nmFileNotas = 'notas_2018_2019.csv';
const thePathNotas = path.resolve(__dirname + '/dados', nmFileNotas);
const linhasNotas = lineService.execute(thePathNotas);

const nmFilePosic = 'declaracao_2018.csv';
const thePathPosic = path.resolve(__dirname + '/dados', nmFilePosic);
const linhasPosic = lineService.execute(thePathPosic);

// for (let i = 0; i < linhasDecl.length; i++) {
//     let linha = '';
//     for (let j = 0; j < linhasDecl[i].length; j++) {
//         const field = linhasDecl[i][j];
//         linha = linha + field + ';';
//     }
//     console.log(linha);
// }

// QTD;ATIVO;DESCRICAO;VALOR
// 155;ABEV3;155 ACOES ABEV3 AMBEV S/A ON EJ;2852,5
// 150;ALPA4;150 ACOES ALPA4 ALPARGATAS PN N1;1200

// const qtd = lines.getField(linhasDecl, 1, 'QTD');
// const ativo = lines.getField(linhasDecl, 1, 'ATIVO');
// const descricao = lines.getField(linhasDecl, 1, 'DESCRICAO');
// const valor = lines.getField(linhasDecl, 1, 'VALOR');

// console.log(qtd, ' | ', ativo, ' | ', descricao, ' | ', valor);

// transforma valores
for (let i = 1; i < linhasNotas.length; i++) {
    let valor = Number(lineService.getField(linhasNotas, i, 'VALOR').replace(',','.'));
    lineService.setField(linhasNotas, i, 'VALOR', valor);
    let ativo = lineService.getField(linhasNotas, i, 'ATIVO').toUpperCase();
    // termina com F - fracionario - retirar
    if (ativo.endsWith('F')) {
        ativo = ativo.substring(0, ativo.length - 1);
    }
    lineService.setField(linhasNotas, i, 'ATIVO', ativo);
    const qtd = Number(lineService.getField(linhasNotas, i, 'QTD'));
    lineService.setField(linhasNotas, i, 'QTD', qtd);
}
for (let i = 1; i < linhasDecl.length; i++) {
    const valor = Number(lineService.getField(linhasDecl, i, 'VALOR').replace(',','.'));
    lineService.setField(linhasDecl, i, 'VALOR', valor);
    const ativo = lineService.getField(linhasDecl, i, 'ATIVO').toUpperCase();
    lineService.setField(linhasDecl, i, 'ATIVO', ativo);
    const qtd = Number(lineService.getField(linhasDecl, i, 'QTD'));
    lineService.setField(linhasDecl, i, 'QTD', qtd);
}
for (let i = 1; i < linhasPosic.length; i++) {
    const valor = Number(lineService.getField(linhasPosic, i, 'VALOR').replace(',','.'));
    lineService.setField(linhasPosic, i, 'VALOR', valor);
    const ativo = lineService.getField(linhasPosic, i, 'ATIVO').toUpperCase();
    lineService.setField(linhasPosic, i, 'ATIVO', ativo);
    const qtd = Number(lineService.getField(linhasPosic, i, 'QTD'));
    lineService.setField(linhasPosic, i, 'QTD', qtd);
}

// Loop nas notas de compra-venda
// procura o ativo na declaracao 2018
// se encontrar, soma ou subtrai a QTD e o valor
// se nao encontrar, deveria ser compra, dar um push
for (let i = 1; i < linhasNotas.length; i++) {
    const ativoNota = lineService.getField(linhasNotas, i, 'ATIVO');
    const cvNota = lineService.getField(linhasNotas, i, 'CV'); // compra venda
    const qtdNota = lineService.getField(linhasNotas, i, 'QTD');
    let valorNota = lineService.getField(linhasNotas, i, 'VALOR');
    const descricaoNota = lineService.getField(linhasNotas, i, 'ESPECIFICACAO');

    if (ativoNota == 'ALPA4') {
        console.log('Nota ALPA4 cv=', cvNota, ' qtd=', qtdNota, ' valor=', valorNota);
    }

    // procura o ativo na declaracao 2018
    let encontrou = false;
    for (let j = 1; j < linhasDecl.length; j++) {
        const ativoDcl = lineService.getField(linhasDecl, j, 'ATIVO');
        let valorDcl = lineService.getField(linhasDecl, j, 'VALOR');
        let qtdDcl = lineService.getField(linhasDecl, j, 'QTD');

        if (ativoNota == ativoDcl) { // encontrou

            if (ativoDcl == 'ALPA4') {
                console.log('Decl ALPA4 cv=', cvNota, ' qtd=', qtdDcl, ' valor=', valorDcl);
            }

            if (cvNota == 'C') { // compra
                qtdDcl = qtdDcl + qtdNota;
                valorDcl = valorDcl + valorNota;
            } else { // venda
                // valorDcl = valorDcl - valorNota; // subtrair valor da media !!! - se zero matar ???
                if (qtdDcl <= 0) {
                    throw('deveria ser uma compra - qtd=0 na declaracao ... ativo=' + ativoNota + ' qtd=' + qtdNota + ' valor=' + valorNota);
                }

                const valorVenda = (qtdNota * (valorDcl / qtdDcl)).toFixed(2); // media

                // if (valorNota > valorVenda) {
                //     console.log('### lucro cv=', cvNota, ' ativo=' + ativoDcl + ' qtd=', qtdDcl, ' valor=', valorDcl , ' qtd Nota=', qtdNota, ' valorNota=', valorNota, ' lucro=' + (valorNota - valorVenda).toFixed(2));
                // } else if (valorNota < valorVenda) {
                //     console.log('### preju cv=', cvNota, ' ativo=' + ativoDcl + ' qtd=', qtdDcl, ' valor=', valorDcl , ' qtd Nota=', qtdNota, ' valorNota=', valorNota, ' preju=' + (valorNota - valorVenda).toFixed(2));
                // } else {
                //     console.log('### zerou cv=', cvNota, ' ativo=' + ativoDcl + ' qtd=', qtdDcl, ' valor=', valorDcl , ' qtd Nota=', qtdNota, ' valorNota=', valorNota);
                // }

                valorDcl = valorDcl - valorVenda;
                qtdDcl = qtdDcl - qtdNota;
                if (qtdDcl == 0) {
                    valorDcl = 0;
                }
            }
            lineService.setField(linhasDecl, j, 'QTD', qtdDcl);
            lineService.setField(linhasDecl, j, 'VALOR', valorDcl);
            encontrou = true;

            if (ativoDcl == 'ALPA4') {
                console.log('Decl ALPA4 novo qtd=', qtdDcl, ' novo valor=', valorDcl, valorDcl < 0 ? ' valor negativo' : ' valor positivo');
            }

            break;
        }
    }
    if (!encontrou) {
        if (cvNota == 'V') {
            throw('deveria ser uma compra - nao existe na declaracao ... ativo=' + ativoNota + ' qtd=' + qtdNota + ' valor=' + valorNota);
        }
        const fieldsDcl = []; // QTD	ATIVO	DESCRICAO	VALOR
        fieldsDcl.push(qtdNota); fieldsDcl.push(ativoNota); fieldsDcl.push(descricaoNota); fieldsDcl.push(valorNota);
        linhasDecl.push(fieldsDcl);
    }
}

// lista nova declaracao

// Nome da planilha
const nmCsv = 'novaDcl.csv'
const nmPathCsv = path.resolve(__dirname + '/dados', nmCsv);
// exclui planilha se existir
fs.unlink(nmPathCsv, (error) => { });

for (let i = 0; i < linhasDecl.length; i++) {
    let linha = '';
    for (let j = 0; j < linhasDecl[i].length; j++) {
        const field = linhasDecl[i][j];
        linha = linha + field + ';';
    }
    // console.log(linha);
    fs.appendFile(nmPathCsv, linha + '\n', function (err) {
        if (err) throw err;
      });
}

console.log('### The End');