class Create {
  constructor(element, db) {
    this.element = element;
    this.db = db;

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();

    const { elements } = event.target;

    const date = `${elements[0].value}_${elements[1].value}_${elements[2].value}`;
    const title = elements[3].value;
    const description = elements[4].value;

    const data = {
      id: new Date(),
      date,
      title,
      description,
      status: false,
    }

    this.db.addEvent(data);
  }

  renderCreate() {

    const html = `
      <h2>Add new event</h2>
      <p>Формат 31_<em>07</em>_2017 а то заглючит</p>
      <form>
        <div class="form-group">
          <label for="">Year</label>
          <input type="text" class="form-control" value="2017">
        </div>
        <div class="form-group">
          <label for="">Month</label>
          <input type="text" class="form-control" value="07">
        </div>
        <div class="form-group">
          <label for="">Day</label>
          <input type="text" class="form-control" value="15">
        </div>
        <div class="form-group">
          <label for="">Title</label>
          <input type="text" class="form-control" value="some title">
        </div>
        <div class="form-group">
          <label for="">Title</label>
          <textarea class="form-control">some description</textarea>
        </div>

        <button type="submit" class="btn btn-warning">Создать</button>
      </form>
    `;

    this.element.innerHTML = html;

    this.element.querySelector('form').addEventListener('submit', this.handleSubmit);
  }
}

export default Create;
