/**
 * Class representing a calendar
 * @class
 */
class Calendar {
  /**
   * Create a calendar object
   * @constructor
   * @param {Object} element - DOM element
   */
  constructor(element, eventBus) {
    this.element = element;
    this.currentDate = new Date();
    this.eventBus = eventBus;


    this.changeMonth = this.changeMonth.bind(this);
  }

  /**
   * Change month
   */
  changeMonth(event) {
    // проверить на какую стрелку нажали
    // и добавить или отнять один месяц

    if(event.target.classList[0] !== 'btn-control') return;
      var num;
      event.target.classList[1] === 'btn-forward' ? num = 1 : num = -1
      this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() + num));









    this.render();
  }

  /**
   * Render calendar header
   */
  renderCalendarHeader() {
    const calendarHeader = `
      <div align="center">
        <button class="btn-control btn-back btn btn-default">Назад</button>
        <span class="material-design-iconic-font">${this.currentDate.getMonth()  < 9 ? '0' + (this.currentDate.getMonth() + 1) : this.currentDate.getMonth() + 1}</span>
        <button class="btn-control btn-forward btn btn-default">Вперед</button>
      </div>
    `;

    this.element.innerHTML += calendarHeader;

    const controlButtons = this.element.querySelectorAll('button');

    for (var i = 0; i < controlButtons.length; i++) {
      controlButtons[i].addEventListener('click', this.changeMonth);
    }
  }


  /**
   * Render calendar
   */
  // renderCalendar() {

    renderCalendar() {
    const self = this;
    // dateMont = [2017, 7];

    const dateMont = [];

    let mont = this.currentDate.getMonth();
    let yer = this.currentDate.getFullYear();
    dateMont.push(yer);
    dateMont.push(mont + 1);

    console.log(dateMont);

    var year = dateMont[0];
    var month = dateMont[1];
    const createCalendar = (id, year, month) => {
      // var elem = document.getElementById(id);
      var mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
      var d = new Date(year, mon);
      var table = `<table class="table table-bordered table-hover"><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>`;
      // заполнить первый ряд от понедельника
      // и до дня, с которого начинается месяц
      // * * * | 1  2  3  4
      for (var i = 0; i < getDay(d); i++) {
        table += "<td></td>";
      }
      // ячейки календаря с датами
      while (d.getMonth() == mon) {
        table += `<td class="d${d.getDate()}_${month < 10 ? '0' + month : month}_${year}">${d.getDate()}</td>`;

       if (getDay(d) % 7 == 6) {
          // вс, последний день - перевод строки
          table += "</tr><tr>";
        }
        d.setDate(d.getDate() + 1);
      }
      // добить таблицу пустыми ячейками, если нужно
      if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
          table += "<td></td>";
        }
      }

      // закрыть таблицу
      table += "</tr></table>";
      // только одно присваивание innerHTML
      const div = document.createElement('div');
      div.innerHTML = table;
      self.element.append(div);
    }

   function getDay(date) {
      // получить номер дня недели, от 0(пн) до 6(вс)
      var day = date.getDay();
      if (day == 0) day = 7;
      return day - 1;
    }

   createCalendar("calendar", year, month);
    // document
    //   .querySelector("table")
    //   .addEventListener("dblclick", () => this.addCaption(event));
    // document
    //   .querySelector("table")
    //   .addEventListener("click", () => this.delCaption(event));
    return dateMont;
  }


    // const calendar = `
    //   <table class="table table-bordered table-hover">
    //     <thead class="table-striped">
    //     <tr>
    //         <td>Пнд</td><td>ВТ</td><td>Ср</td><td>Чт</td><td>Пт</td><td>Сб</td><td>Вск</td>
    //     </tr>
    //     </thead>
    //     <tbody >
    //      <tr class="active">
    //         <td>
    //             <span>1</span> <br>
    //             <span>Заголовок</span>
    //         </td>
    //         <td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>
    //     </tr>
    //      <tr >
    //         <td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td>
    //     </tr>
    //      <tr class="active">
    //         <td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td>
    //     </tr>
    //      <tr>
    //         <td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td>
    //     </tr>
    //      <tr class="active">
    //         <td>29</td><td>30</td><td>31</td><td></td><td></td><td></td><td></td>
    //     </tr>
    //     </tbody>
    // </table>
    // `;
    //
    // this.element.innerHTML += calendar;
  // }

  /**
   * Render calendar header and body
   */
  render() {
    this.element.innerHTML = '';

    this.renderCalendarHeader();
    this.renderCalendar();

    let mont = this.currentDate.getMonth() + 1;
    let yer = this.currentDate.getFullYear();
    this.eventBus.trigger('calendar:changed', `${yer}_${mont < 10 ? '0' + mont : mont}`);
  }
}

export default Calendar;
