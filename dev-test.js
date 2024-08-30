
// import 
const Block = require("./block");
const Blockchain = require("./blockchain");
/***  Test der Block-Funktionalität  */

// const block = new Block("aktuelle zeit","hash1","hash2","Blockdaten");
// console.log(block.toString());
// console.log(Block.genesis().toString());

// const testBlock = Block.mineBlock(Block.genesis(),"Banke an Kasse 1000,-");
// console.log(testBlock.toString());
/***  Test der Blockchain-Funktionalität  */
const chain = new Blockchain();
console.log(chain);

chain.addBlock("1034,98€ von Sven");
console.log(chain);

chain.addBlock("890,01€ an Evy");
console.log(chain);

chain.addBlock("20,00€ von Evy, 75,00 € an Marius");
console.log(chain);
