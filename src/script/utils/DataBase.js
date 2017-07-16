
// const event = {
//   // eventData
// }
//
// const dbModel = {
//   '2017_07': {
//     '01': [event, event, event],
//     '15': [event, event],
//   },
//   '2017_03': {
//     '03': [event],
//   }
// };

class DataBase {
  constructor(API) {

    this.API = API;
  }


  /**
   * Load all events
   * @returns {Promise}
   */
  loadEvents() {
    return new Promise((resolve) => {
      const data = JSON.parse(localStorage.getItem('db')) || [];
      resolve(data);
    })
  }

  /**
   * Add new event
   * @param {Object} eventData - title, description, date, status, comments...
   * @returns {Promise}
   */
  addEvent(eventData) {
    return new Promise((resolve) => {
      const yearAndMonth = eventData.date.substring(0, 7);
      const day = eventData.date.substring(8, 10);
      console.log(yearAndMonth, day);

      const db = JSON.parse(localStorage.getItem('db')) || {};

      // смотри модель выше
      if (db[yearAndMonth]) {
        // если есть день c данными
        if (db[yearAndMonth][day]) {
          // добавить еще одно
          db[yearAndMonth][day].push(eventData);
        } else {
          // создать день
          db[yearAndMonth][day] = [].push(eventData);
        }
      } else {
        db[yearAndMonth] = {[day]: [eventData]}
      }

      console.log(db);

      localStorage.setItem('db', JSON.stringify(db));

      // костыль чтобы заново загрузить данные
      window.location.hash = '#';
      window.location.hash = 'calendar';
      resolve();
    })
  }

  /**
   * Load event by ID
   * @param {String} id - ID of event
   * @returns {Promise}
   */
  loadEvent(id) {

    //   // for (var i = 0; i < localStorage.length; i++) {
    //   //
    //   //
    //   //
    //   //     // do something with localStorage.getItem(localStorage.key(i));
    //   // }
    //
    //   Object.keys(localStorage).forEach(item => {
    //     const data = localStorage.getItem([item]);
    //     console.log(JSON.parse(data));
    //
    //   })


    const fakeData = {
      data: "2017_07_15",
      description:"some description",
      id: "2017-07-14T13:59:53.027Z",
      status: false,
      title: "some title",
    };

    return new Promise((resolve) => {
      resolve(fakeData);
    })
  }

  /**
   * Delete event by ID
   * @param {String} id - ID of event
   * @returns {Promise}
   */
  deleteEvent(id) {

  }

  /**
   * Add new comment
   * @param {Object} commentData - comment data
   * @returns {Promise}
   */
  addComment(commentData) {

  }

  /**
   * Load all event's comments
   * @param {String} eventID
   * @returns {Promise}
   */
  loadComments(eventID) {

  }


}


export default DataBase;
