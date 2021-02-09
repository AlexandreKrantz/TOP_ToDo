//import bootstrap
import 'bootstrap';
import './scss/app.scss';

// import your function
import myName from './myName';

function component() {
  const element = document.createElement('div');

  // use your function!
  element.innerHTML = myName('Cody');
  element.classList.add('display-1')
  return element;
}

document.body.appendChild(component());