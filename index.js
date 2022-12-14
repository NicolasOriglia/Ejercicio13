import { suma, multiplica } from './matematicas/controller.js';
import chalk from 'chalk';

const totalSuma = suma(1,2);
const totalMultiple = multiplica(4,5)
console.log(totalSuma);
console.log(chalk.green(totalMultiple));