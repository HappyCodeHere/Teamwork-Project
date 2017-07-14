import { index } from './routes/index';
import { index as calendar } from './routes/calendar';
import { index as allEvents } from './routes/allEvents';
import { index as certainDay } from './routes/certainDay';
import { index as settings } from './routes/settings';
import { login } from './routes/login';

import Router from './utils/Router';
import EventBus from './utils/EventBus';
import DataBase from './utils/DataBase';

import Header from './components/Header';

import User from './utils/User';

const routes = [index, calendar, allEvents, certainDay, settings, login];

const eventBus = new EventBus();

const API = '';
const db = new DataBase(API);

const user = new User(eventBus);

const header = document.createElement('div');
document.body.append(header);

const mainBlock = document.createElement('div');
mainBlock.classList.add('main');
document.body.append(mainBlock);
new Header(header, eventBus, user).renderHeader();

new Router({routes, eventBus, db, user});
