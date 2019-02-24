/**
 * podemos decorar nossas funções com o prefixo async, e toda função async pode ser esperada (await).
 * Ou se retornar Promisse pode ser esperada (await).
 */

main();

async function main() {
    var um = await funcaoUm();
    var dois = await funcaoDois();
    var tres = await funcaoTres();

    console.log(um);
    console.log(dois);
    console.log(tres);
}

async function funcaoUm() {
    await sleep(1000);
    return "Um";
}

async function funcaoDois() {
    await sleep(500);
    return "Dois";
}

async function funcaoTres() {
    await sleep(250);
    return "Três";
}

function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}