let star_wars = [
  'Uma nov esperanca',
  'O imperio contra-ataca',
  'O retorno de jedi',
  'Ameaca fantasma',
  'Ataque dos clones',
  'A vinganca dos sith',
  'O despertar da forca',
  'Os ultimos jedi',
  'A ascencao de skywalker',
  'Guerra dos clones',
];

function print(value, index) {
  console.log(`${index} - ${value}`);
}

star_wars.forEach((value, index) => {
  console.log({ index: index, value: value });
});

star_wars.forEach(print);