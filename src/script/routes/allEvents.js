import Event from '../components/Event';

// const eventFakeData = {
//   title: 'Some title',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//   status: false,
// }

var index = {
    name: 'allEvents',
    match: 'calendar/list',
    onBeforeEnter: (url, eventBus, user, db) => {
      if (user.isUserLogin === false) {
        window.location.hash = '#login';
      }
      console.log(`onBeforeEnter allEvents`)
    },
    onEnter: (url, eventBus, user, db) => {
      var div = document.querySelector('div.main');
      div.innerHTML = '';


      db.loadEvents()
	    	.then((data) => {

          div.innerHTML = '<h2>All events</h2>';


          Object.keys(data).forEach((item, i) => {
            const eventDiv = document.createElement('div');
            if (i === 0) {
              // next event
              eventDiv.style.backgroundColor = 'orange';
            }
            new Event(eventDiv, data[item]).renderEvent();
            div.append(eventDiv);

          })
	    	})
	    	.catch(error => {
          div.innerHTML = '<h2>All events error</h2>';

	    	})



    },
    onLeave: () => console.log('onLeave index')
};

export { index };
