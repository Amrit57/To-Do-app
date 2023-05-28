import _ from 'lodash';
import hello from './home.js'

function component() {
  const element = hello();
  console.log('hehehe')
  return element;
}

document.body.appendChild(component());