class Pato{

}

class PatoReal extends Pato{

}

class PatoDeCaca extends Pato{

}

class PatoDeBorracha extends Pato{

}

function teste(): void{
  //indesejável, por conta do uso explícito do operador new
  let pato: Pato = new Pato();
}

function qualPato(ocasiao: string): Pato | null{
  let pato: Pato | null = null
  if(ocasiao === "piquenique"){
    pato = new PatoReal();
  }
  else if (ocasiao === "caça"){
    pato = new PatoDeCaca();
  }
  else if (ocasiao === "banheira"){
    pato = new PatoDeBorracha();
  }
  
  return pato
}

let ocasioes: string[] = [
  'piquenique',
  'caça',
  'banheira'
]
//0 <= Math.random < 1
console.log(qualPato(ocasioes[Math.floor(Math.random() * ocasioes.length)]))