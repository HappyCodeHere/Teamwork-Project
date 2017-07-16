// const userModel = [
//   {
//     name: 'Bob',
//     password: '123456',
//   },
//   {
//     name: 'Alex',
//     password: '111111',
//   }
// ]


/**
 * Class representing a user
 * @class
 */
 class User {
   /**
    * Create a user
    * @constructor
    */
   constructor(eventBus) {
     this.isUserLogin = false;

     this.eventBus = eventBus;
   }
   /**
    * Login user
    * @param {String} name - Username
    * @param {String} password - User password
    * @returns {Promise} Returns promise
    */
   login(name, password) {
     return new Promise((resolve) => {
       let users = localStorage.getItem('user');
       users = JSON.parse(users) || [];

       users.forEach(item => {
         if (item.name === name && item.password === password) {
           this.eventBus.trigger('user:login', true);
           this.isUserLogin = true;
           console.log('login', name);
           resolve();
           return;
         }
       });

       // if not registered



       if (!this.isUserLogin) {
         console.log('will register');
         this.register(name, password);
       }
     })
   }

   /**
    * Register user
    * @param {String} name - Username
    * @param {String} password - User password
    * @returns {Promise} Returns promise
    */
   register(name, password) {
     return new Promise((resolve) => {
       let users = localStorage.getItem('user');
       users = JSON.parse(users) || [];

       users.push({
         name,
         password,
       });

       localStorage.setItem('user', JSON.stringify(users));

       this.isUserLogin = true;
       this.eventBus.trigger('user:login', true);
       resolve();
     })
   }



   /**
    * Logout user
    */
   logout() {
     return new Promise((resolve) => {
       this.isUserLogin = false;
       window.location.hash = '#';
       this.eventBus.trigger('user:login', false);
       resolve();
     })
   }
 }

 export default User;
