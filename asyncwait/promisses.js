
main();

function main() {
    funcaoUm().then((data) => {
        console.log(data);
        funcaoDois();
    });
}

function funcaoUm() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Um");
        }, 1000);
    });
}

function funcaoDois() {
    setTimeout(() => {
        console.log("Dois");
    }, 1000);
}