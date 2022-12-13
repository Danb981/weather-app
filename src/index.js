import './style.css';
import { APIController } from './apicontroller';
import { User } from './user';

const user = new User('Toronto', 'metric');
APIController.init(user); // pass the user info to the api controller

// user.changePreferredUnit('imperial');

// APIController.getCityWeather('Brampton');
// APIController.getCityWeather('Cidaris'); // 404
