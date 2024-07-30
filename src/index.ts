import traverse from "@babel/traverse";
import * as parser from "@babel/parser";

import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const dir = readdirSync(`${process.argv[2]}`);
const files = []
for(let i = 0; i < dir.length; i++) {
    const fileExtantion = dir[i].split('.')[dir[i].split('.').length - 1];
    if(fileExtantion === 'morph') {
        files.push(dir[i]);
    }
}

const file = readFileSync(`${process.argv[2]}/${files[0]}`, {encoding: 'utf8'});

const ast = parser.parse(file, { 
    sourceType:'module',
    plugins: ['jsx', 'typescript']
})

traverse.default(ast, {
    JSXElement(path) {
        
        console.log("JSXElement", path.node.openingElement.name);
    }
});
