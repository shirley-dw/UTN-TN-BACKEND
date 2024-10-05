const procesoAsincrono = async (numero) => {
    console.log('Inicia proceso asincrono'+ numero);
};
const testAsyncProcess = async () => {
    setTimeout(() => {
        procesoAsincrono(1);
    }, 1000);
    setTimeout(() => {
        procesoAsincrono(2);
    }, 2000);
    setTimeout(() => {
        procesoAsincrono(3);
    }, 3000);

    return 'termina proceso asincrono';
};
testAsyncProcess()  