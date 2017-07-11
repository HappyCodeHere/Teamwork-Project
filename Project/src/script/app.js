import { index } from './routes/index';
import { index as calendar } from './routes/calendar';
import { index as allEvents } from './routes/allEvents';
import { index as certainDay } from './routes/certainDay';
import { index as settings } from './routes/settings';

import Router from './utils/Router';
import EventBus from './utils/EventBus';
import DataBase from './utils/DataBase';

import Header from './components/Header';

import User from './utils/User';

const routes = [index, calendar, allEvents, certainDay, settings];

const eventBus = new EventBus();

const db = new DataBase();

const user = new User();

const header = document.createElement('div');
document.body.append(header);
new Header(header).renderHeader();

new Router(routes, eventBus);

const mainBlock = document.createElement('div');
mainBlock.classList.add('main');
document.body.append(mainBlock);

