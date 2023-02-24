const nbuff = require("node:buffer");

const buff = nbuff.Buffer.alloc(8); // Alocação de memória aonde estou reservando 8 espaços

buff.write("string", "utf-8"); // Inserindo a palavra "string" em utf-8 dentro do espaço alocado

console.log(buff.toJSON());
/* O resultado para JSON será:
  data: [
    115, 116, 114, 105,
    110, 103,   0,   0
  ]
  
  Como foram alocados 8 de espaço e só foi usadoo6, o resto ficará vazio
*/

console.log(buff.toString()); // Decodificando esse dado com a palavra "string"

// -------------------------------------------------------------

const base64 = "RXJnbyBQcm94eQ=="; // "Ergo Proxy" codificado para base64

const decodeBase64 = nbuff.Buffer.from(base64, "base64"); // Codificando o base64 para Buffer

console.log(decodeBase64.toString("utf-8")); // Decodificando o Buffer. Deve printar "Ergo Proxy"

// -------------------------------------------------------------

const arrOfHex = [79, 75, 65, 82, 73, 78]; // Nome "OKARIN" em decimal 

const hexToBuff = nbuff.Buffer.from(arrOfHex, 'utf-8').toString('utf-8') 

console.log(hexToBuff); // Deve printar "OKARIN"
