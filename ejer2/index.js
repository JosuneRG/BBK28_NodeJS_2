//Pasos seguidos:
//Terminal VS code -- Mkdir para crear la carpeta
//cd ejer2
// incializar el proyecto: npm init -y
//En package.json cambiar el name 
//Terminal poner esto: npm install logplease --save-dev
// Y en el package.json. poner en scripts --> "start": "node index.js"
// ejecutar el proyecto --> npm start

const Logger = require('logplease');
const logger = Logger.create('Ejercicio2');

logger.debug("Hola Mundo de Node");
logger.info("Noticias de última hora, Node.js me encanta!!");
logger.warn("Tirando warnings como campeones");
logger.error("Algo no está bien!!!");
