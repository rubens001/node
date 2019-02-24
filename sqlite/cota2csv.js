const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const nmFile = 'COTAHIST_A2019.TXT';
const nmCsv = 'cotasA2019.csv';

const layout = [{name: 'tpReg', start:1, end:2, leng:2},
{name: 'dtPregao', start:3, end:10, leng:8},
{name: 'cdBDI', start:11, end:12, leng:2},
{name: 'cdNegociacao', start:13, end:24, leng:12},
{name: 'tpMercado', start:25, end:27, leng:3},
{name: 'nmEmpresa', start:28, end:39, leng:12},
{name: 'especificacao', start:40, end:49, leng:10},
{name: 'pzTermo', start:50, end:52, leng:3},
{name: 'moeda', start:53, end:56, leng:4},
{name: 'vlAbertura', start:57, end:69, leng:13},
{name: 'vlMax', start:70, end:82, leng:13},
{name: 'vlMin', start:83, end:95, leng:13},
{name: 'vlMedio', start:96, end:108, leng:13},
{name: 'vlFecha', start:109, end:121, leng:13},
{name: 'vlMelhorCompra', start:122, end:134, leng:13},
{name: 'vlMelhorVenda', start:135, end:147, leng:13},
{name: 'qtNegociacao', start:148, end:152, leng:5},
{name: 'qtTitulo', start:153, end:170, leng:18},
{name: 'volumeTot', start:171, end:188, leng:18},
{name: 'preExe', start:189, end:201, leng:13},
{name: 'indOpc', start:202, end:202, leng:1},
{name: 'dtVencimento', start:203, end:210, leng:8},
{name: 'ftCotacao', start:211, end:217, leng:7},
{name: 'ptExe', start:218, end:230, leng:13},
{name: 'cdISIN', start:231, end:242, leng:12},
{name: 'noDistr', start:243, end:245, leng:3}];

// const thePath = '/home/oem/Documents/projetos/node/sqlite/dados/COTAHIST_A2019.TXT'; // path.resolve(__dirname + '/dados', 'COTAHIST_A2019.TXT');
const thePath = path.resolve(__dirname + '/dados', nmFile);

console.log('thePath=', thePath);

if (fs.existsSync(thePath)) {
    console.log('exists=true');
} else {
    throw('file not found');
}

var lines = fs.readFileSync(thePath, 'utf-8')
    .split('\n')
    .filter(Boolean);

if (lines.length < 1) {
    throw('blank file');
}

// Nome da planilha
const nmPathCsv = path.resolve(__dirname + '/dados', nmCsv);
// exclui planilha se existir
fs.unlink(nmPathCsv, (error) => { });

// header
const headCsv = 'dtPregao;cdBDI;cdNegociacao;tpMercado;nmEmpresa;especificacao;pzTermo;moeda;vlAbertura;vlMax;vlMin;vlMedio;vlFecha;vlMelhorCompra;qtNegociacao;qtTitulo;volumeTot;preExe;indOpc;dtVencimento;ftCotacao;ptExe;cdISIN;noDistr\n';
fs.appendFile(nmPathCsv, headCsv, function (err) {
    if (err) throw err;
  });

for (let i=0; i<lines.length; i++) {
    // ignora header e trailer
    if (field(lines[i], 'tpReg') !== '01' ) {
        continue;
    }
    const record = getRecord(lines[i]);
    // filtra mercado a vista
    if (record.tpMercado != 10) {
        continue;
    }
    
    const lineCsv = record.dtPregao + ';' + record.cdBDI + ';' + record.cdNegociacao +
    ';' + record.tpMercado + ';' + record.nmEmpresa + ';' + record.especificacao +
    ';' + record.pzTermo + ';' + record.moeda + ';' + record.vlAbertura +
    ';' + record.vlMax + ';' + record.vlMin + ';' + record.vlMedio +
    ';' + record.vlFecha + ';' + record.vlMelhorCompra + ';' + record.qtNegociacao +
    ';' + record.qtTitulo + ';' + record.volumeTot + ';' + record.preExe +
    ';' + record.indOpc + ';' + record.dtVencimento + ';' + record.ftCotacao +
    ';' + record.ptExe + ';' + record.cdISIN + ';' + record.noDistr + '\n';
    fs.appendFile(nmPathCsv, lineCsv, function (err) {
        if (err) throw err;
      });
}

/*
const layout = [{name: 'tpReg', start:1, end:2, leng:2},
{name: 'dtPregao', start:3, end:10, leng:8},
{name: 'cdNegociacao', start:13, end:24, leng:12},

const exemplo = '012019010202AALR3       010ALLIAR      ON      NM   R$  000000000133100000000013500000000001325000000000133300000000013250000000001320000000000132500856000000000000264200000000000352396200000000000000009999123100000010000000000000BRAALRACNOR6100';
console.log(field(exemplo,'dtPregao'));
console.log(field(exemplo,'cdNegociacao'));

const record = getRecord(exemplo);
console.log(record);
console.log('vlFecha=',record.vlFecha / 100);
*/


/*
fs.appendFile('cotas.csv', 'data to append', function (err) {
  if (err) throw err;
});
*/

// const layout = [{name: 'tpReg', start:1, end:2, leng:2},

function field(line, name) {
    let cpo = layout.filter(obj => {
        return obj.name === name;
    })[0];
    return line.substring(cpo.start-1, cpo.end).trim();
}

function getRecord(line) {
    const rec = {};
    rec.dtPregao = field(line,'dtPregao');
    rec.cdBDI = field(line,'cdBDI');
    rec.cdNegociacao = field(line,'cdNegociacao');
    rec.tpMercado = field(line,'tpMercado');
    rec.nmEmpresa = field(line,'nmEmpresa');
    rec.especificacao = field(line,'especificacao');
    rec.pzTermo = field(line,'pzTermo');
    rec.moeda = field(line,'moeda');
    rec.vlAbertura = field(line,'vlAbertura');
    rec.vlMax = field(line,'vlMax');
    rec.vlMin = field(line,'vlMin');
    rec.vlMedio = field(line,'vlMedio');
    rec.vlFecha = field(line,'vlFecha');
    rec.vlMelhorCompra = field(line,'vlMelhorCompra');
    rec.vlMelhorVenda = field(line,'vlMelhorVenda');
    rec.qtNegociacao = field(line,'qtNegociacao');
    rec.qtTitulo = field(line,'qtTitulo');
    rec.volumeTot = field(line,'volumeTot');
    rec.preExe = field(line,'preExe');
    rec.indOpc = field(line,'indOpc');
    rec.dtVencimento = field(line,'dtVencimento');
    rec.ftCotacao = field(line,'ftCotacao');
    rec.ptExe = field(line,'ptExe');
    rec.cdISIN = field(line,'cdISIN');
    rec.noDistr = field(line,'noDistr');

    return rec;
}