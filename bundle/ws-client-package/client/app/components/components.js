import auth     from './auth/auth.module';
import customer from './customer/customer.module';

let components = angular.module('app.components', [
  auth,
  customer
])
.name;

export default components;
