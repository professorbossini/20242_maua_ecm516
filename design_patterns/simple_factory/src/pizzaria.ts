class Pizza{
  preparar(): void{
    console.log('Preparando a pizza...')
  }

  assar(): void{
    console.log('Assando a pizza...')
  }

  cortar(): void{
    console.log('Cortando a pizza...')
  }

  empacotar(): void{
    console.log('Empacotando a pizza...')
  }
}

class PizzaQuadrada extends Pizza{

}

class PizzaCalabresa extends Pizza{

}

class PizzaQueijo extends Pizza{

}

class SimplePizzaFactory{
  criarPizza (tipo: string): Pizza | null{
    let pizza: Pizza | null = null;
    if (tipo === 'quadrada')
      pizza = new PizzaQuadrada();
    else if (tipo === 'calabresa') {
      pizza = new PizzaCalabresa();
    }
    else if (tipo === 'queijo') {
      pizza = new PizzaQueijo();
    }
    return pizza
  }
}

class PizzaStore{
  // private simplePizzaFactory: SimplePizzaFactory;
  constructor(private simplePizzaFactory: SimplePizzaFactory){
    // this.simplePizzaFactory = simplePizzaFactory;
    
  }
  pedirPizza = (tipo: string): Pizza | null => {
    let pizza = this.simplePizzaFactory.criarPizza(tipo);
    pizza?.preparar();
    pizza?.assar();
    pizza?.cortar();
    pizza?.empacotar();
    return pizza;
  }
}


// const pedirPizza = (tipo: string): Pizza | null => {
  
//   pizza?.preparar();
//   pizza?.assar();
//   pizza?.cortar();
//   pizza?.empacotar();
//   return pizza;
// }