var login = {
    name: 'login',
    match: 'login',
    onBeforeEnter: () => console.log(`onBeforeEnter login`),
    onEnter: (db) => {

    var div = document.querySelector('div.main');
		div.innerHTML = '';
		div.classList.add('login');

    	const html = `
	    	<div class="container">
          <div class="form-group">
              <label for="usr">Логин:</label>
              <input type="text" class="form-control" id="usr">
          </div>
          <div class="form-group">
              <label for="pwd">Пароль:</label>
              <input type="password" class="form-control" id="pwd">
          </div>
              <button type="button" class="btn btn-default">Вход</button>
	     </div>
    	`

    	div.innerHTML = html;

    	const buttonSubmit = div.querySelector('button');
    	buttonSubmit.addEventListener('click', handleButtonClick);

    	function handleButtonClick() {
    		const login = div.querySelector('#usr').value();
    		const password = div.querySelector('#pwd').value();

    		db.login(login, password)
	    		.then(() => {
	    			window.location.hash = '/calendar';
	    		})
	    		.catch(error => {
	    			// потом отобразить под формой
	    			console.log(error);
	    		})
    	}
    },
    onLeave: () => console.log('onLeave index')
};

export { login };
