'use strict'
const fs = require('fs');

exports.execute = function(thePath) {

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

    const linhas = [];
    for (let i=0; i<lines.length; i++) {
        // console.log(lines[i]);
        const fields = lines[i].split(';');
        linhas.push(fields);
    }
    return linhas;
};

/** obtem valor do campo na linha */
exports.getField = function(linhas, index, fieldName) {
    const idx = getIdx(linhas, index, fieldName);
    return linhas[index][idx];
}

/** obtem valor do campo na linha */
exports.setField = function(linhas, index, fieldName, newValue) {
    const idx = getIdx(linhas, index, fieldName);
    linhas[index][idx] = newValue;
}

function getIdx(linhas, index, fieldName) {
    const linha1 = linhas[0];
    const linha = linhas[index];
    let idx = -1;
    for (let i = 0; i < linha1.length; i++) {
        const header = linha1[i];
        if (header === fieldName) {
            idx = i;
            break;
        } 
    }
    if (idx < 0) {
        throw('Nao existe header com este nome = ' + fieldName);
    }
    return idx;
}