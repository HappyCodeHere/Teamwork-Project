var login = {
    name: 'login',
    match: 'login',
    onBeforeEnter: () => console.log(`onBeforeEnter login`),
    onEnter: (url, eventBus, user, db) => {

    var div = document.querySelector('div.main');
		div.innerHTML = '';
		div.classList.add('login');

    	const html = `
      <div class="container">
          <form class="form-horizontal">
<div class="form-group">
  <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
  <div class="col-sm-10">
    <input type="text" class="form-control" id="inputEmail3" placeholder="Email">
  </div>
</div>
<div class="form-group">
  <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
  <div class="col-sm-10">
    <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
  </div>
</div>
<div class="form-group">
  <div class="col-sm-offset-2 col-sm-10">
    <div class="checkbox">
      <label>
        <input type="checkbox"> Добавлять события
      </label>
      <br>
      <label>
        <input type="checkbox"> Удалять события
      </label>
         <br>
        <label>
        <input type="checkbox"> Добавлять коментарии
      </label>
        <br>
        <label>
        <input type="checkbox"> Удалять коментарии
      </label>
    </div>
  </div>
</div>
<div class="form-group">
  <div class="col-sm-offset-2 col-sm-10">
    <button type="submit" class="btn btn-default">Сохранить</button>
    <button type="submit" class="btn btn-default">Назад</button>
  </div>
</div>
</form>
      </div>

    	`

    	div.innerHTML = html;

    	const buttonSubmit = div.querySelector('button');
    	buttonSubmit.addEventListener('click', handleButtonClick);

    	function handleButtonClick() {
    		const login = div.querySelector('#inputEmail3').value;
    		const password = div.querySelector('#inputPassword3').value;

    		user.login(login, password)
	    		.then(() => {
	    			window.location.hash = 'calendar';
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


// <div class="container">
//   <div class="form-group">
//       <label for="usr">Логин:</label>
//       <input type="text" class="form-control" id="usr">
//   </div>
//   <div class="form-group">
//       <label for="pwd">Пароль:</label>
//       <input type="password" class="form-control" id="pwd">
//   </div>
//       <button type="button" class="btn btn-default">Вход</button>
// </div>
