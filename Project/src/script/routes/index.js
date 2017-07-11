var div = document.querySelector('div.main');
var index = {
    name: 'index',
    match: '',
    onBeforeEnter: () => console.log(`onBeforeEnter index`),
    onEnter: () => {
    	div.innerHTML = 'Hello, it is main page!';

    	const loginLink = document.createElement('a');
    	loginLink.innerText = 'войти';
    	loginLink.href = '#/login';

    	div.append(loginLink);
    },
    onLeave: () => console.log('onLeave index')
};

export { index };