// Isso é uma forma de escrever o teste:

//test("teste de test", callbackFunction);

//function callbackFunction() {
//console.log("esta função está sendo chamada?");
//}

// Mas, atualmente se escreve assim:

// test("Testando o Test Runner", () => {
// console.log("e agora?");
// });

// test("testando outra condição do sistema", () => {
// console.log("esse é o teste 2");
// });

test("Espero que 1 seja 1", () => {
  expect(2).toBe(1);
});
