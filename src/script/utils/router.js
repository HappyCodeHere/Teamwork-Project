class Router {
  constructor(config) {
    this.eventBus = config.eventBus;
    this.routes = config.routes || [];
    this.user = config.user;
    this.db = config.db;

    console.log(this.routes);

    this.init();
  }

  init() {
    console.log('---> router init');
    // 1. Подписать this.handleUrl на изменения url
    window.addEventListener('hashchange', () => this.handleUrl(window.location.hash));
    // 2. Выполнить this.handleUrl
    this.handleUrl(window.location.hash);
  }

  findPreviousActiveRoute() {
    console.log(`---> router findPreviousActiveRoute: ${(this.currentRoute || {}).name}`);
    // Найти роут с которого уходим
    return this.currentRoute;
  }

  findNewActiveRoute(url) {
    // Найти роут на который переходим
    // console.log(this.routes);
    let route = this.routes.find((routeItem) => {
      if (typeof routeItem.match === 'string') {
        return url === routeItem.match;
      } else if (typeof routeItem.match === 'function') {
        return routeItem.match(url);
      } else if (routeItem.match instanceof RegExp) {
        return url.match(routeItem.match);
      }
    });

    console.log(`---> router findNewActiveRoute: ${url} -- ${(route || {}).name}`);
    return route;
  }
  // getRouteParams(route, url) {
  // 	 var params = url.match(route.match) || [];
  //    params.shift();
  //    return params;
  // },
  handleUrl(url) {
    url = url.slice(1);
    // Найти текущий роут
    let previousRoute = this.findPreviousActiveRoute();
    // Найти новый роут
    let newRoute = this.findNewActiveRoute(url);
    // console.log(newRoute);
    // console.log(url);

    // let routeParams = this.getRouteParams(newRoute, url);

    // Если есть роут с которого уходим - выполнить его .onLeave
    Promise.resolve()
      .then(() => previousRoute && previousRoute.onLeave && previousRoute.onLeave(window.location.hash, this.eventBus, this.user, this.db))
      // После этого выполнить .onBeforeEnter для нового активного роута
      .then(() => newRoute && newRoute.onBeforeEnter && newRoute.onBeforeEnter(window.location.hash, this.eventBus, this.user, this.db))
      // После этого выполнить .onEnter для ногового активного роута ( только если с .onBeforeEnter все ок)

      .then(() => newRoute && newRoute.onEnter && newRoute.onEnter(window.location.hash, this.eventBus, this.user, this.db))
      .then(() => {
      		this.currentRoute = newRoute;
      		// this.currentRouteParams = routeParams;
    });
  }
};

export default Router;


// /*
//  Реализовать Router
//
//  создать конструктор
//  обработчик изменения адреса
//  при создании выплнил обработчик изменения адреса
//  научиться определять роут по адресу ( какой роут нужно активировать )
//  находить/сохранять последний активный роут
//  вызвать onLeave
//  вызвать onBeforeEnter
//  вызвать onEnter
//  обрабатывать отсутствие фукнций-хуков
//  поддерживать promise из onBeforeEnter
//  поддерживать promise из onLeave
//  */
// var Router = function (options, eventBus) {
//     this.routes = options.routes;
//     this.eventBus = eventBus;
//     this.init();
//
//     console.log(this.routes);
// };
//
// Router.prototype = {
//     init: function () {
//         window.addEventListener('hashchange', (ev) => this.handleUrl(ev.oldURL.split('#')[1] || '', ev.newURL.split('#')[1]));
//         this.handleUrl(undefined, window.location.hash.slice(1));
//     },
//     getParam: function (newRoute, currentRoute) {
//         var param = newRoute.match(currentRoute.match) || [];
//         return param[1];
//     },
//     handleUrl: function (oldRoute, newRoute) {
//       debugger;
//         var currentRoute = this.routes.find((item) => {
//             if (typeof item.match === 'string') {
//                 return newRoute === item.match;
//             } else if (typeof item.match === 'function') {
//                 return item.match(newRoute);
//             } else if (item.match instanceof RegExp) {
//                 return newRoute.match(item.match);
//             }
//         });
//         if (oldRoute !== undefined) {
//             var previousRoute = this.routes.find((item) => {
//                 if (typeof item.match === 'string') {
//                     return oldRoute === item.match;
//                 } else if (typeof item.match === 'function') {
//                     return item.match(oldRoute);
//                 } else if (item.match instanceof RegExp) {
//                     return oldRoute.match(item.match);
//                 }
//             });
//         }
//         var currentParam = this.getParam(newRoute, currentRoute);
//         console.log(`---> router oldURL: ${oldRoute}`);
//         console.log(`---> router findNewActiveRoute: ${newRoute} -- ${(currentRoute || {}).name}`);
//         Promise.resolve()
//             .then(() => previousRoute && previousRoute.onLeave && previousRoute.onLeave(oldRoute.split('=')[1]))
//             .then(() => currentRoute && currentRoute.onBeforeEnter && currentRoute.onBeforeEnter(currentParam))
//             .then(() => currentRoute && currentRoute.onEnter && currentRoute.onEnter(this.eventBus, currentParam))
//     }
// };
//
// export default Router;
