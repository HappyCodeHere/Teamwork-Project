import Calendar from '../components/Calendar';

var index = {
    name: 'calendar',
    match: '',
    onBeforeEnter: () => console.log(`onBeforeEnter index`),
    onEnter: (db) => {

    	db.load()
	    	.then(() => {

	    	})
	    	.catch(error => {

	    	})


    	var div = document.querySelector('div.main');

    	const calendarDiv = document.createElement('div');
    	div.append(calendarDiv);

    	const calendar = new Calendar(calendarDiv).renderCalendar();

    },
    onLeave: () => console.log('onLeave index')
};

export { index };