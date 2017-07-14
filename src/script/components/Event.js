/**
 * Class representing a event
 * @class
 */
class Event {
  /**
   * Create a event
   * @constructor
   * @param {Object} element - DOM element
   * @param {Object} eventData - Event data
   */
  constructor(element, eventData) {
    this.element = element;
    this.eventData = eventData;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {

    // если чекбокс то никуда не переходим
    if (event.target.matches('input')) {
      return;
    }
    window.location.hash = `#calendar/event=${this.eventData.id}`;
  }

  /**
   * Render event
   */
  renderEvent() {
    const { title, description, status } = this.eventData;

    const html = `
    <div class="event" style="cursor: pointer">
      <h1>${title}</h1>
      <p>${description}</p>
      <input type="checkbox" checked=${status} />
    </div>
    `;

    this.element.innerHTML += html;
    this.element.querySelector('.event').addEventListener('click', this.handleClick);
  }
}

export default Event;
