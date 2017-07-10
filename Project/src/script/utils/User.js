/**
 * Class representing a user
 * @class
 */
 class User {
   /**
    * Create a user
    * @constructor
    */
   constructor() {
     this.isUserLogin = false;
   }
   /**
    * Login user
    * @param {String} name - Username
    * @param {String} password - User password
    * @returns {Promise} Returns promise
    */
   login(name, password) {
     // if true - isUserLogin = true
     // if not registered - create new user
   }

   /**
    * Logout user
    */
   logout() {
     // isUserLogin = false;
   }
 }

 export default User;
