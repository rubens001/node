main();

async function main() {
    var um = await funcaoUm();

    console.log(um);
}

async function funcaoUm() {
    await sleep(1000);
    return "Um";
}

function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
  // return new Promise(r => setTimeout(function() { console.log('dentro do sleep 2000'); }, 2000));
}