class Header {
	constructor(element, eventBus, user) {
		this.element = element;
		this.eventBus = eventBus;
		this.user = user;

		this.eventBus.on('user:login', (status) => {
			console.log(status);
			this.renderHeader();
		});

		this.logout = this.logout.bind(this);
	}

	logout() {
		console.log('here');
		this.user.logout();
	}



	renderHeader() {
		console.log('render');
		const header = `
			<header >
	        <div class="col-md-10"></div>
	        <div class="col-md-2">
					<a href="#" class="btn btn-default" >На главную</a>
					${this.user.isUserLogin === true ?
					'<p class="lead">Борисевич Глеб <a class="btn exit btn-default" >Выход</a><p>'
					:
					'<p class="lead"><a href="#login" class="btn btn-default" >Вход</a><p>'
				}
	        </div>
					<a href="#calendar/list">Список всех событий</a>
	    </header>
    `;

    this.element.innerHTML = header;

		if (this.user.isUserLogin) {
			this.element.querySelector('.exit').addEventListener('click', this.logout);

		}

	}
}

export default Header;
