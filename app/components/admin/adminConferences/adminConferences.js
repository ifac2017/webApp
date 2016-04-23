/**
 * @ngdoc directive
 * @name webapp.directive:wa-admin-conferences
 * @restrict E
 * @description Admin conferences manager component.
 */
angular.module('webapp').component('waAdminConferences', {
    controller: 'AdminConferencesCtrl',
    bindings: {
        $router: '<'
    },
    $routeConfig: [
      {path: '/create', name:'AdminConferencesCreate', component: 'waAdminConferencesCreate', useAsDefault: true},
      {path: '/edit/:id', name:'AdminConferencesEdit', component: 'waAdminConferencesEdit'}
    ],
    templateUrl: ['$element', function($element) {
        angular.element($element).addClass('layout-column')
        return 'adminConferences.html'
    }],
    $canActivate: ['AuthService', '$rootRouter', function(AuthService, $rootRouter) {
        return AuthService.requireAdminAuth()
        .then(function(){
          return true
        })
        .catch(function(error){
          $rootRouter.navigate(['Login'])
          return false
        })
    }]
})
