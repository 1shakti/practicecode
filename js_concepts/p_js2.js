import { Animals, Cat} from './p_export_js2.js';

let animal = new Animals('cat',4);
console.log(`${animal.type} ${animal.legs}`);
let cat = new Cat('Cat', 4);

cat.makeNoise();

console.log(cat.metaData);