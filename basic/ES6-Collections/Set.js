// União
{
  const conjunto1 = [1, "hello", false, 100];
  const conjunto2 = ["hello", true, 1, 200];

  const set = new Set([...conjunto1, ...conjunto2]);
  console.log(set);
}

// Interseção
{
  const conjunto1 = new Set([1, "hello", false, 100]);
  const conjunto2 = new Set(["hello", true, 1, 200]);

  const inter = new Set([...conjunto1].filter((valor) => conjunto2.has(valor)));
  console.log(inter);
}

// Diferença
{
  const conjunto1 = new Set([1, "hello", false, 100]);
  const conjunto2 = new Set(["hello", true, 1, 200]);

  const dif = new Set([...conjunto1].filter((valor) => !conjunto2.has(valor)));
  console.log(dif);
}
