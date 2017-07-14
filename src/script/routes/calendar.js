import Calendar from '../components/Calendar';
import Create from '../components/Create';
import Event from '../components/Event';

var index = {
    name: 'calendar',
    match: 'calendar',
    onBeforeEnter: (url, eventBus, user, db) => {
      if (user.isUserLogin === false) {
        window.location.hash = '#login';
      }

      console.log(`onBeforeEnter index`)
    },
    onEnter: (url, eventBus, user, db) => {

    	db.loadEvents('2017_07')
	    	.then(data => {


          var div = document.querySelector('div.main');
          div.innerHTML = '';

        	const calendarDiv = document.createElement('div');
        	div.append(calendarDiv);

          eventBus.on('calendar:changed', (yearAndMonth) => {

            if (data[yearAndMonth]) {

              Object.keys(data[yearAndMonth]).forEach(item0 => {

                // удаляем все события что были
                const events = document.querySelectorAll('.event');
                events.forEach(item => {
                  item.remove();
                })

                // все события в тот день
                data[yearAndMonth][item0].forEach((item, i) => {
                    // const day = document.createElement('div');

                  const arr = yearAndMonth.split('_');
                  const cl = document.querySelector(`.d${item0}_${arr[1]}_${arr[0]}`);


                  // что вообще твориться))
                  if (cl) {
                    new Event(cl, item).renderEvent();
                  }
                })
              })
            }
          })

          new Calendar(calendarDiv, eventBus).render();
          const createBlock = document.createElement('div');
          div.append(createBlock);

          new Create(createBlock, db).renderCreate();


  	    })
	    	.catch(error => {
          // отобразить ошибку
	    	})
    },
    onLeave: () => console.log('onLeave index')
};

export { index };
