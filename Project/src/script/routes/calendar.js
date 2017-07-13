import Calendar from '../components/Calendar';

var index = {
    name: 'calendar',
    match: 'calendar',
    onBeforeEnter: () => console.log(`onBeforeEnter index`),
    onEnter: (url, eventBus, user, db) => {

    	db.loadEvents()
	    	.then(() => {
          console.log('HERE');
          var div = document.querySelector('div.main');
          div.innerHTML = '';

        	const calendarDiv = document.createElement('div');
        	div.append(calendarDiv);

        	const calendar = new Calendar(calendarDiv).renderCalendar();

	    	})
	    	.catch(error => {
          // отобразить ошибку
	    	})




    },
    onLeave: () => console.log('onLeave index')
};

export { index };
