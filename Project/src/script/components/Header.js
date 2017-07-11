class Header {
	constructor(element) {

		this.element = element;



	}

	renderHeader() {
		const header = `
			<header >
	            <div class="col-md-10"></div>
	            <div class="col-md-2">
	                <p class="lead">Борисевич Глеб <button class="btn btn-default" >Выход</button><p>
	            </div>
	        </header>
        `;

        this.element.innerHTML = header;
	}
}

export default Header;