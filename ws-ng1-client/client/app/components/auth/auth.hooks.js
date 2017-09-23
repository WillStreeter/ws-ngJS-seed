export const httpInterceptor = ($q, $localStorage, $rootScope) => {
  'ngInject';

  let setAuthHeader = (config) => {
    if ($localStorage.token) {
      config.headers.Authorization = 'JWT ' + $localStorage.token;
    }
    return config;
  }

  let handleFailedResponse = (rejection) => {
    let error = null;
    if (rejection.status === 401) {
      error = "unauthorized";
      rejection = null;
    }
    else if (rejection.status === -1) {
      error = "noconnection";
    }

    error && $rootScope.$emit(error);
    return $q.reject(rejection);
  }

  return {
    // automatically attach JWT Authorization header
    request: setAuthHeader,
    // Handle response errors
    responseError: handleFailedResponse
  }
}

export const errorHookRunBlock = ($rootScope, $state, $mdDialog, $localStorage) => {
  "ngInject";

  $rootScope.$on('unauthorized', () => {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Web token is expired')
        .textContent('You will be logged out.')
        .ok('OK')
    ).then(() => {
      delete $localStorage.token;
      delete $localStorage.authData;
      $state.transitionTo('auth');
    });
  });

  $rootScope.$on('noconnection', () => {
    $mdDialog.show(
      $mdDialog.alert()
        .title('No connection')
        .textContent('Please check your internet connection.')
        .ok('OK')
    );
  });
}

export const authHookRunBlock = ($transitions, $state, AuthService) => {
  // If state requires authentication but user isn't logged in
  // she will be redirected to the login page
  'ngInject';

  let requiresAuthCriteria = {
    to: (state) =>{
          // if(state.data){
          //  console.log('authHookRunBlock CONSOLE BLOCK state = ', state.data.requiresAuth)
          // }
         return  state.data && state.data.requiresAuth
    }
  };

  let redirectToLogin = (transition) => {
    if (!AuthService.isAuthenticated) {
      return $state.target('auth.login', undefined, { location: false });
    }
  };

  $transitions.onBefore(requiresAuthCriteria, redirectToLogin, { priority: 10 });
}

export const permissionHookRunBlock = ($transitions, $state, AuthService) => {
  // If youser tries to load the state she doesn't have permissions to
  // (for example user tries to load hotel edit page)
  // then she will be redirected to corresponded home state
  'ngInject';
  let requiresPermissionCriteria = {
    to: (state) => {

          //
          // if(state.data){
          //  console.log('permissionHookRunBlock CONSOLE BLOCK state = ', state.data.requiresPermission)
          // }
         state.data && !!state.data.requiresPermission
    }
  };

  let redirectToHome = (transition, $state) => {
    if (!!$state.data) {


           console.log('redirectToHome CONSOLE BLOCK state = ', $state)
      if (AuthService.userType !== $state.data.requiresPermission) {
        let state = transition.router.stateService;
        return state.target(AuthService.userType, undefined, { location: true });
      }
    }
  };

  $transitions.onEnter(requiresPermissionCriteria, redirectToHome, { priority: 10 });
}