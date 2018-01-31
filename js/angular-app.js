var NatashaApp = angular.module('NatashaApp', []);

NatashaApp.directive('natashaForm', () => ({
    restrict: 'A',
    controller: NatashaFormController,
    controllerAs: 'natashaFormCtrl'
}));

NatashaApp.directive('natashaMainWrapper', () => ({
    restrict: 'A',
    controller: NatashaMainWrapperController,
    controllerAs: 'natashaMainWrapperCtrl'
}));

function NatashaFormController() {
    const vm = this;

    Object.assign(vm, {
        fruits: [
            {class: 'fruit1 col-xs-8', name: 'апільсінчик', price: 11, amount: 1},
            {class: 'fruit2 col-xs-4', name: 'ківчик', price: 9, amount: 1},
            {class: 'fruit3 col-xs-4', name: 'малинк', price: 10, amount: 1},
            {class: 'fruit4 col-xs-8', name: 'їжівічечка', price: 33, amount: 1},
            {class: 'fruit5 col-xs-12', name: 'бананчк', price: 7, amount: 1}
        ],

        getSelectedFruits,
        getTotalFruitsSum
    });

    function getSelectedFruits() {
        return vm.fruits
            .filter(({checked}) => checked);
    }

    function getTotalFruitsSum() {
        return getSelectedFruits()
            .reduce((sum, fruit) => sum + fruit.amount * fruit.price, 0);
    }
}

function NatashaMainWrapperController() {
    const vm = this;

    Object.assign(vm, {
        fixedMenuItems: [
            {href: '#body', text: 'Home'},
            {href: '#products', text: 'Products'},
            {href: '#service', text: 'Service'},
            {href: '#work', text: 'Work'},
            {href: '#contact', text: 'Contact'}
        ]
    });
}
