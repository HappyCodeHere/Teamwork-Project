var index = {
    name: 'index',
    match: '',
    onBeforeEnter: () => console.log(`onBeforeEnter index`),
    onEnter: () => {
      var div = document.querySelector('div.main');
    	div.innerHTML = 'Hello, it is main page!';

    	const loginLink = document.createElement('a');
    	loginLink.innerText = 'войти';
    	loginLink.href = '#login';

    	const calendarLink = document.createElement('a');
    	calendarLink.innerText = 'календарь';
    	calendarLink.href = '#calendar';

    	div.append(loginLink, calendarLink);
    },
    onLeave: () => console.log('onLeave index')
};

export { index };
