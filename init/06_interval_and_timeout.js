/**
 * setTimeout() chamando a função uma única vez. 
 * Enquanto a setInterval() chama a função “infinitamente” sempre no mesmo intervalo de tempo.
 *  Para pausar a função usa-se clearInterval(). Passando como parâmetro o nome do seu intervalo.
 *  
 */
const print_function = () => console.log("print function");

setInterval(print_function, 5000);
setTimeout(print_function, 1000);