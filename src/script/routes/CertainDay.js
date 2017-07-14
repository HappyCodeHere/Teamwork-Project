// import Event from '../components/Event';


var index = {
    name: 'certainDay',
    match: (url) => url.substring(9, 14) === 'event',
    onBeforeEnter: (url, eventBus, user, db) => {
      if (user.isUserLogin === false) {
        window.location.hash = '#login';
      }
    },
    onEnter: (url, eventBus, user, db) => {
      var div = document.querySelector('div.main');
      div.innerHTML = '';

      let id = 123;

      db.loadEvent(id)
	    	.then(data => {
          var div = document.querySelector('div.main');
          div.innerHTML = '';

          const eventDiv = document.createElement('div');

          // new Event(eventDiv, data).renderEvent();
          div.append(eventDiv);

          const { title, description, status } = data;

          const html = `
          <div>
            <h2>Info about event</h2>
            <h3>${title}</h3>
            <p>${description}</p>
            <input type="checkbox" checked=${status}>
            <span>Done: ${status ? 'yes': 'no'}</span>
          </div>
          `;

          eventDiv.innerHTML = html;
	    	})
	    	.catch(error => {
          // отобразить ошибку
	    	})



    },
    onLeave: () => console.log('onLeave index')
};

export { index };
