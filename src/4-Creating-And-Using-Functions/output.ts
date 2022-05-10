import { productsURL } from '../lib';

const prefix = '🐉 ';

type ProductType = {
  id: number;
  name: string;
  icon?: string;
}

export default async function output(id: string) {
  //TODO
}

runTheLearningSamples();

function runTheLearningSamples() {
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`product id=${id} and name=${name}`);
  }
  displayProductInfo(10, 'Basketball');

  console.log(`${prefix} function declaration`);
  console.log(addNumbersDeclaration(7, 11));

  function addNumbersDeclaration(x: number, y: number): number {
    const sum: number = x + y;
    return sum;
  }

  const addNumbersExpression = function(x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }
  
  console.log(`${prefix} function expression`);
  console.log(addNumbersExpression(71, 11));

  const sampleProducts = [
    {
      id: 10, 
      name: 'Pizza slice',
      icon: 'fas fa-pizza-slice',
    },
    {
      id: 20, 
      name: 'Ice cream',
      icon: 'fas fa-ice-cream',
    },
    {
      id: 30, 
      name: 'Cheese',
      icon: 'fas fa-cheese',
    }
  ];

  function getProductNames () {
    return sampleProducts.map(p => p.name);
  }

  console.log(`${prefix} return array`);
  console.log(getProductNames());

  function getProductById(id: number): ProductType | undefined {
    return sampleProducts.find(p => p.id === id);
  }

  console.log(`${prefix} return object`);
  console.log(getProductById(30))

  function displayProducts(products: ProductType[]): void {
    const productNames = products.map(p => {
      const name = p.name.toLowerCase();
      return name;
    });
    const msg = `Sample Products include; ${productNames.join(', ')}`
    console.log(`${prefix} return void`);
    console.log(msg);
  }

  displayProducts(sampleProducts);
}



