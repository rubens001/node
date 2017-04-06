NodeJs + Typescript

Refs :
http://brianflove.com/2016/03/29/typescript-express-node-js/
https://basarat.gitbooks.io/typescript/docs/quick/nodejs.html?q=

# instru
npm install typescript --save
npm install @types/node --save

node ./node_modules/typescript/lib/tsc --init

npm start
P : [nodemon] failed to start process, "./node_modules/.bin/ts-node" exec not found
R : npm install ts-node --save

P : ts-node Cannot find module 'typestyle'
npm install typestyle

# Bonus: Live compile + run
npm install nodemon --save-dev

Let's explicitly tell ts-node where to look for types by editing tsconfig.json:
{
  "compilerOptions": {
    ...
    "typeRoots": ["node_modules/@types"]
  }
}

No package.json :
"scripts": {
    "start": "npm run build:live",
    "build:live": "nodemon --exec ./node_modules/.bin/ts-node -- ./index.ts"
  },

# tsconfig.json
have compilerOptions: "outDir": "lib" and "declaration": true
** This generates declaration and js files in the lib folder

# package.json
"main": "lib/index" < This tells NodeJS to load lib/index.js
"typings": "lib/index" < This tells TypeScript to load lib/index.d.ts

# MORE:
If you package depends on other TypeScript authored packages, put them in dependencies/devDependencies/peerDependencies just like you would with raw JS packages.
If you package depends on other JavaScript authored packages and you want to use it type safely in your project, put their types e.g. @types/foo in devDependencies. JavaScript types should be managed out of bound from the main NPM streams. The JavaScript ecosystem breaks types without semantic versioning too commonly, so if your users need types for these they should install the @types/foo version that works for them.

# deps
npm install express --save
npm install body-parser --save

# inicializacao
npm install
npm start

# instalado
"@types/node": "^7.0.12" ==> para resolver reclamação dos tipos primitivos quando startava
"ts-node": "^3.0.2",     ==> para poder executar node server interpretando ts
