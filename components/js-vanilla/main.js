const products = [
  {
    id: "123",
    name: "Produto 1",
    price: 3432,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et harum est consequatur accusamus quis, numquam inventore aspernatur",
    img: "http://lorempixel.com.br/500/800",
  },
  {
    id: "456",
    name: "Produto 2",
    price: 342,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et harum est consequatur accusamus quis, numquam inventore aspernatur",
    img: "http://lorempixel.com.br/500/800",
  },
  {
    id: "789",
    name: "Produto 3",
    price: 293,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et harum est consequatur accusamus quis, numquam inventore aspernatur",
    img: "http://lorempixel.com.br/500/800",
  },
];

function html_product(product, index) {
  return `
    <div class="group relative product">
    <div
      class="min-h-80 aspect-w-1 aspect-h-1 max-w-[300px] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
      <img src=${product.img} alt="Front of men&#039;s Basic Tee in black."
        class="h-full max-w-[300px] object-cover object-center lg:h-full lg:max-w-[300px]">
    </div>
    <div class="mt-4 flex justify-between max-w-[300px]">
      <div>
        <h3 class="text-sm text-gray-700">
          <a href="#">
            
            ${product.name}
          </a>
        </h3>
        <p class="mt-1 text-sm text-gray-500">${product.description}</p>
      </div>
      <p class="text-sm font-medium text-gray-900">R$${product.price}</p>
      </div>
      <button data-index=${index} class="bg-blue-600 rounded-lg w-full h-10 text-white font-bold mt-2 add-btn">Comprar</button>
  </div>
  `;
}

function render_products() {
  html = "";
  products.map((product, index) => (html += html_product(product, index)));

  return html;
}

const item_carrinho = {};

function html_car(product) {
  return `
  <div class="group relative product">
    <div class="flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <a href="#">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${product.name}
          </a>
        </h3>
        <p class="mt-1 text-sm text-gray-500">Preço por Uni: R$${
          product.price
        } | Quant: ${product.quantity}</p>
      </div>
      <p class="text-sm font-medium text-gray-900">R$${
        product.price * product.quantity
      }</p>
    </div>
    <button
      class="bg-red-600 rounded-lg w-full h-10 text-white font-bold mt-2 hover:bg-red-700">Remover</button>
  </div>
  
  `;
}

function render_car() {
  outcome_html = "";
  for (const [_, value] of Object.entries(item_carrinho)) {
    outcome_html += html_car(value);
  }

  document.querySelector(".car").innerHTML = outcome_html;
}

document.body.addEventListener("click", function (event) {
  const element = event.target;

  if (element.classList.contains("add-btn")) {
    const product_index = parseInt(element.getAttribute("data-index"));
    const product = products[product_index];

    if (!item_carrinho[product.id]) {
      item_carrinho[product.id] = product;
      item_carrinho[product.id].quantity = 1;
    }

    render_car();
  }
});

document.querySelector(".store").innerHTML = render_products();
