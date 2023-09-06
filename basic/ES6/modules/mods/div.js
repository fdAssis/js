export default function div(a, b) {
  if (b !== 0) {
    return a / b;
  }

  throw "Não é possivel dividir por zero.";
}
