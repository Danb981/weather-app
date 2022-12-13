import './style.css';
import { APIController } from './apicontroller';
import { User } from './user';
import { DOMController } from './domcontroller';

const startingUnit = document.querySelector("[name='unit']:checked").value;
const user = new User('Brampton', startingUnit);

APIController.init(user); // pass the user info to the api controller
DOMController.init(user); // pass the user info to the dom controller
