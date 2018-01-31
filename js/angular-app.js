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
        ],
        sliderLatestProducts: [
            {img: 'img/970x647/01.jpg', title: 'Strawberries', description: 'Management'},
            {img: 'img/970x647/02.jpg', title: 'Raspberry', description: 'Developmeny'},
            {img: 'img/970x647/03.jpg', title: 'Cherry', description: 'Design'}
        ],
        fullscreenImages: [
            'img/970x647/01.jpg',
            'img/970x647/03.jpg'
        ],
        gridItems: [
            [
                {icon: 'icon-chemistry', title: 'Fresh berries', description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor'},
                {wrapperClass: 'bg-color-base wow fadeInDown', textClass: 'color-white', icon: 'color-white icon-screen-tablet', title: 'Sale', description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor'},
                {icon: 'icon-badge', title: 'Fresh berries', description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor'}
            ],
            [
                {icon: 'icon-notebook', title: 'Sale', description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor'},
                {icon: 'icon-speedometer', title: 'Fresh berries', description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor'},
                {icon: 'icon-badge', title: 'Sale', description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor'}
            ]
        ],
        fruitsWithPopup: [
            {boxClass: 'col-sm-6 col-md-8 margin-b-4', img: 'img/800x400/01.jpg', price: 15},
            {boxClass: 'col-md-4 margin-b-4', img: 'img/397x400/01.jpg', price: 12},
            {boxClass: 'col-md-4 md-margin-b-4', img: 'img/397x300/01.jpg', price: 24},
            {boxClass: 'col-md-4 md-margin-b-4', img: 'img/397x300/02.jpg', price: 18},
            {boxClass: 'col-md-4', img: 'img/397x300/03.jpg', price: 25}
        ],
        blockquotes: [
            {author: 'Joh Milner', text: ['Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim enum esqudiat dolore.', 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret tempor incididunt dolore magna consequat siad minim aliqua.']},
            {author: 'Alex Clarson', text: ['Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.']}
        ],
        footerMenu: [
            {class: 'col-sm-2 sm-margin-b-30', items: ['Home', 'About', 'Work', 'Contact']},
            {class: 'col-sm-2 sm-margin-b-30', items: ['Twitter','Facebook','Instagram','YouTube']},
            {class: 'col-sm-3', items: ['Subscribe to Our Newsletter', 'Privacy Policy', 'Terms &amp; Conditions']}
        ]
    });
}
