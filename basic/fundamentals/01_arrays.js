let words = ['choose', 'statement', 'given', 'chosen'];
let translate = ['escoler', 'declaracao', 'dado', 'escolhido'];

// Tamanho do array
/*
console.log(words.length); 
console.log(`Array translate: ${translate.length}`);
*/

// Acessando index do array
/*
let first = words[0];
let first_* = words['0'];
let last =  translate[translate.length - 1];

console.log(`First: ${first}`);
console.log(`Last: ${last}`);
*/

// Percorrer array
/*
for(let i = 0; i <= words.length; i++) {
  console.log(`${words[i]} = ${translate[i]}`);
}
*/


/*
  forEach -> array.forEach(callback (currentValue [, index [, array]])[,thisArg]);
  => callback = Funcao para executar em cada elemento, recebendo tres argumentos:
    -> currentValue : O valor atual do elemento sendo processado no array.
    -> index(opcional) : O indice do elemento atual sendo processado no array.
    -> array(opcional) : O array que foEach() esta sendo aplicado.
    -> thisArg(opcional) : Valor a ser usado como this quando executar callback. 
*/

/*
translate.forEach(function (item, indice, vaca) {
  console.log(item, indice, vaca)
}) 
*/

translate.forEach((item, index, arr) => {
  console.log({ item: item, index: index, arr: arr });
});

// Adicionando um item no final de um array
/*
console.log(`Array words: ${words}
             length: ${words.length}\n
             Array translate: ${translate}, 
             length: ${translate.length}`
            );

words.push('whose');
translate.push('de quem');

console.log(`Array words: ${words},
             length: ${words.length}\n
             Array translate: ${translate},   
             length: ${translate.length}`
            );

*/

// Adicionando um item no inico do array
/*
console.log(`Array words: ${words}
             length: ${words.length}\n
             Array translate: ${translate}, 
             length: ${translate.length}`
            )

words.unshift('flow');
translate.unshift('fluxo');

console.log(`Array words: ${words}
             length: ${words.length}\n
             Array translate: ${translate}, 
             length: ${translate.length}`
            );
*/

data = [1, 2, 3, 4];
console.log(`Data: ${data} \n Lenght: ${data.length}`);
length = data.unshift(2);
console.log(`Data: ${data} \n Lenght: ${data.length}`);

// Removendo um item no final do array
/*
console.log(`Array words: ${words}
             length: ${words.length}\n
             Array translate: ${translate}, 
             length: ${translate.length}`
            );

words.pop();
translate.pop();

console.log(`Array words: ${words}
             length: ${words.length}\n
             Array translate: ${translate}, 
             length: ${translate.length}`
            );
*/

// Remover do inicio do array
/*
console.log(`Array words: ${words}
             length: ${words.length}\n
             Array translate: ${translate}, 
             length: ${translate.length}`
            );

words.shift();
translate.shift();

console.log(`Array words: ${words}
             length: ${words.length}\n
             Array translate: ${translate}, 
             length: ${translate.length}`
            );
*/

// Procurar o indice de um item no array
/*
console.log(words.indexOf('given'));
*/

// Remover um item pela posicao do indice
/*
let removedItem = translate.splice(translate.indexOf('escolhido'), 1)
console.log(removedItem);
*/

// Remover itens de uma posicao de indice
/*
let itensRemoved = words.splice(words.indexOf('choose'), 3);
console.log(itensRemoved);
*/

// Copiar um array
/*
let copyTranslate = translate.slice();
console.log(`Array copy: [${copyTranslate}]`);
*/

// Array bi-dimensional
/*
let all_words = [
  ['choose', 'statement', 'given', 'chosen'],
  ['escoler', 'declaracao', 'dado', 'escolhido'],
];
console.log(all_words[1][1]);
*/
