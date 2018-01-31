var NatashaApp = angular.module('NatashaApp', []);

NatashaApp.directive('natashaForm', function() {
  return {
    restrict: 'A',
    controller: NatashaFormController,
    controllerAs: 'natashaFormCtrl'
  };
});

function NatashaFormController() {
  const vm = this;
  
  vm.amount = 1;
  
  vm.fruits = [
    {class: 'fruit1 col-xs-8', name: 'апільсінчик', price: 11, amount: 1},
    {class: 'fruit2 col-xs-4', name: 'ківчик', price: 9, amount: 1},
    {class: 'fruit3 col-xs-4', name: 'малинк', price: 10, amount: 1},
    {class: 'fruit4 col-xs-8', name: 'їжівічечка', price: 33, amount: 1},
    {class: 'fruit5 col-xs-12', name: 'бананчк', price: 7, amount: 1}
  ];
  
  vm.poluchiElementy = () => vm.fruits
        .filter(({checked}) => checked);
  
  vm.poschitaySumuPlis = () => vm.poluchiElementy()
      .reduce((acc, curr) => acc + curr.amount * curr.price, 0);
}

