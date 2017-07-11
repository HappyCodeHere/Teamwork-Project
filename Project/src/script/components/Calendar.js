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
  constructor(element) {
    this.element = element;
    this.currentDate = '08 июль 2017';
  }

  /**
   * Change month
   */
  changeMonth() {
    // проверить на какую стрелку нажали
    // и добавить или отнять один месяц

    console.log('clicked');
  }

  /**
   * Render calendar header
   */
  renderCalendarHeader() {
    const calendarHeader = `
      <div align="center">
        <button class="btn btn-default">Назад</button>
        <span class="material-design-iconic-font">Июль</span>
        <button class="btn btn-default">Вперед</button>
      </div>
    `;

    this.element.innerHTML += calendarHeader;

    const controlButtons = this.element.querySelector('button');

    for (var i = 0; i < controlButtons.length; i++) {
      controlButtons[i].addEventListener('click', this.changeMonth);
    }
  }

  /**
   * Render calendar
   */
  renderCalendar() {
    const calendar = `
      <table class="table table-bordered table-hover">
        <thead class="table-striped">
        <tr>
            <td>Пнд</td><td>ВТ</td><td>Ср</td><td>Чт</td><td>Пт</td><td>Сб</td><td>Вск</td>
        </tr>
        </thead>
        <tbody >
         <tr class="active">
            <td>
                <span>1</span> <br>
                <span>Заголовок</span>
            </td>
            <td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>
        </tr>
         <tr >
            <td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td>
        </tr>
         <tr class="active">
            <td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td>
        </tr>
         <tr>
            <td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td>
        </tr>
         <tr class="active">
            <td>29</td><td>30</td><td>31</td><td></td><td></td><td></td><td></td>
        </tr>
        </tbody>
    </table>
    `;

    this.element.innerHTML += calendar;
  }

  /**
   * Render calendar header and body
   */
  render() {

    this.renderCalendarHeader();
    this.renderCalendar();
  }
}

export default Calendar;
