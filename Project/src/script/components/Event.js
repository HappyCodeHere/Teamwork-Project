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
  }

  /**
   * Render event
   */
  renderEvent() {
    const { title, description, status } = this.eventData;

    const html = `
      <h1>${title}</h1>
      <p>${description}</p>
      <input type="checkbox" checked=${status} />
    `;

    this.element.innerHTML = html;
  }
}

export default Event;
