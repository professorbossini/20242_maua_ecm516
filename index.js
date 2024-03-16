

// function eAgora(){
//   let cont = 1
//   function f1(){
//     console.log(cont)
//     cont++
//   }
//   cont++
//   function f2(){
//     console.log(cont)
//   }
//   cont++
//   return {f1, f2, cont}
// }

// const resultado = eAgora()
// resultado.f1()
// resultado.f2()
// resultado.f1()
// resultado.f1()
// console.log(resultado.cont)

// function g(){
//   // let a;
//   // return f
// }
// function g(){
//   function f(){
//     return f
//   }
// }
// f()()()

// function f(funcao) {
//   funcao()
// }

// function g(){
//   function outraFuncao(){
//     console.log("Fui criada por g")
//     // return () => {console.log('pois é...'); return () => console.log('vai longe..')}
//     return outraFuncao
//   }
//   return outraFuncao()
// }
// g()()

// const f2 = (a) => {
//   if (a > 1)
//     return a + f2(a - 1)
//   return 1
// }
// console.log(f2(10))
// const resultadoDaG = g()
// resultadoDaG()
// console.log(resultadoDaG)


// let umaFuncao = function(){
//   console.log("Fui armazenada em uma variavel")
// }
// umaFuncao()

//https://outro.com.br:5000


// app.use(cors())

//GET https://www.exemplo.com.br:5000/pessoas
// app.get('/pessoas', (req, res) => {
//   res.send('fweçaljfewa')
// })

// interface Runnable{public void run();}

// class Teste implements Runnable{
//   public void run(){
//     System.out.println("Oi")
//   }
// }

// new Thread(new Teste()).start();


// Runnable r = () -> {System.out.println("Oi")}

// new Thread(r).start();

// class Teste{

//   public void m(){
//     final int a = 2;
//     Runnable r = () -> System.out.println(a);

//   }
// }

// function fabricaDeSaudacoes(saudacao, nome){
//   function aux(){
//     console.log(`${saudacao}, ${nome}`)
//   }
//   return aux
// }

// function executa(f){
//   f()
// }
// executa(() => console.log('oifewafweaf'))

// let f1 = fabricaDeSaudacoes('oi', 'João')
// let f2 = fabricaDeSaudacoes ('Tchau', 'Joao')
// f1()
// f2()

// function g(a, b){
//   console.log(a, b)
// }

// (n) => 2 * n
// const dobro = n => 2 * n
// console.log(dobro(2))

// const teste = () => console.log('oi')()
// teste()

// //arrow functions
// // () => console.log('oi'); console.log('oi')
// // a => {console.log(a)}
// // () => {}
// // const triplo = function(n = 5){
// //   return n * 3
// // }
// // console.log(triplo(6))
// // console.log(triplo())
// // console.log(triplo(y = 6))
// // console.log(y)
// // const dobro = function (n){
// //   return 2 * n
// // }
// // console.log(dobro(7))

// public class Pessoa{
//   public void andar(){
//     var resultado = comer();
//     var teste = comer;
//   }

//   public void comer(){
//     MeuTeste t = () -> {System.out.println("Oi")}
//   }
// }

// interface MeuTeste{
//   public void meuMetodo();
// }

// // function soma(a = 5, b = 5){
// //   // if (a > 0 && b > 0)
// //   console.log(a, b)
// //   return a + b
// // }

// // console.log(soma(2, 3))
// // console.log(soma(-2, 1))
// // console.log(soma(2, 4))

// // function soma(a, b){
// //   return a + b
// // }
// // const res = soma(2, 3)
// // console.log(res)

// // int soma(int a, int b){
// //   return a + b;
// // }

// // function hello(){
// //   console.log('oi')
// // }

// // hello()
// // function hello(nome){
// //   console.log(`Olá, ${nome}`)
// // }
// // hello('João')

// // v2 = [2, "abc", true]
// // console.log(v2)

// // for (let i = 0; i < v2.length; i++)
// //   console.log(v2[i])

// // v1 = []
// // v1[0] = 3.4
// // v1[10] = 2
// // v1[2] = "abc"
// // console.log(v1.length)
// // var v = new int[10];


// // []
// // if (null){console.log('oi')}
// // console.log([] == [])
// // console.log([] == false)
// // console.log(null == undefined)
// // console.log (null == null)
// // console.log(1 == [-1])
// // console.log(true == 1)
// // console.log( null >= 0)
// // let a = new Girafa();
// // let b = new Macaco();

// // let p1 = new Pessoa('V')
// // let p2 = new Pessoa('V')

// // if (p1 === p2)

// // console.log('1' === '1')
// // != !==
// // console.log(1 === '1')
// // console.log (1 === 1)
// // console.log(1 == '1')
// // console.log(1 == 1)

// //coerção explícita
// // const n1 = 2
// // const n2 = '3'
// // const n4 = n1 + Number(n2)
// // console.log(n4)


// //coerção implícita
// // const n3 = n1 + n2
// // console.log(n3)

// //  idade = 18
// // console.log(`Oi, ${nome}`)
// // let nome = 'João' //içamento (hoist)
// // if (idade >= 18){
// //   console.log(`Parabéns, ${nome}. Você pode dirigir.`)
// // }
// // console.log(`Até logo, ${nome}`)


// // var linguagem = "Javascript"
// // console.log(`Aprendendo ${linguagem}`)
// // var linguagem = "Java"
// // console.log(`Aprendendo ${linguagem}`)

// // var a = 2
// // a = 3
// //const, let e var
// // const idade = 19
// // console.log(idade)
// // idade = 20
// // idade.falar()
// // const nome = "José"
// // const sobrenome = 'Silva'
// // const nomeFinal = `Mendes`
// //não pode (reatribuição de constante)
// //nome = "Ana"
// // int a = 2;
// // a = "Ana";
// // a.falar();
// // String b = "abc";
