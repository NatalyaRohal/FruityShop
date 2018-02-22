const FruityShopApp = angular.module('FruityShopApp', []);

FruityShopApp.directive('fruityOrderForm', () => ({
    restrict: 'A',
    controller: FruityOrderFormController,
    controllerAs: 'fruityOrderFormCtrl'
}));

FruityShopApp.directive('fruityMainWrapper', () => ({
    restrict: 'A',
    controller: FruityMainWrapperController,
    controllerAs: 'fruityMainWrapperCtrl'
}));

function FruityOrderFormController() {
    const vm = this;
    const anyInputRegex = /.*/;

    Object.assign(vm, {
        fruits: [
            {class: 'fruit1 col-xs-8', name: 'orange', price: 11, amount: 1},
            {class: 'fruit2 col-xs-4', name: 'kiwi', price: 9, amount: 1},
            {class: 'fruit3 col-xs-4', name: 'raspberry', price: 10, amount: 1},
            {class: 'fruit4 col-xs-8', name: 'khachapuri', price: 33, amount: 1},
            {class: 'fruit5 col-xs-12', name: 'banana', price: 7, amount: 1}
        ],
        formFields: [
            {id: 'name', title: 'Name:', placeholder: 'Your name', regex: anyInputRegex},
            {id: 'city', title: 'City:', placeholder: 'Your city', regex: anyInputRegex},
            {id: 'address', title: 'Address:', placeholder: 'Your address', regex: anyInputRegex},
            {id: 'email', title: 'Email:', placeholder: 'Your email', regex: /^.+@.+\..+$/}
        ],

        getSelectedFruits,
        getTotalFruitsSum,
        getCatalogClasses,
        getTableClasses,
        isAnyFruitSelected
    });

    function getSelectedFruits() {
        return vm.fruits
            .filter(({checked}) => checked);
    }

    function getTotalFruitsSum() {
        return getSelectedFruits()
            .reduce((sum, fruit) => sum + fruit.amount * fruit.price, 0);
    }

    function getCatalogClasses() {
        const onlyFirstVisible = !isAnyFruitSelected() && !vm.orderPerformed;
        const twoColumnsVisible = !onlyFirstVisible && !vm.orderPerformed;
        const threeColumnsVisible = vm.orderPerformed;

        return {
            'col-lg-offset-3 col-md-offset-2 col-lg-6 col-md-8': onlyFirstVisible,
            'col-md-6 col-xs-12': twoColumnsVisible,
            'col-md-3 col-sm-6 col-xs-12': threeColumnsVisible
        };
    }

    function getTableClasses() {
        const twoColumnsVisible = !vm.orderPerformed;
        const threeColumnsVisible = vm.orderPerformed;

        return {
            'col-md-6 col-xs-12': twoColumnsVisible,
            'col-md-3 col-sm-6 col-xs-12': threeColumnsVisible
        };
    }

    function isAnyFruitSelected() {
        return getSelectedFruits().length;
    }
}

function FruityMainWrapperController() {
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
            {img: 'img/970x647/gallery-pic-01-970x647.jpg', title: 'Strawberries', description: 'Management'},
            {img: 'img/970x647/gallery-pic-02-970x647.jpg', title: 'Raspberry', description: 'Developmeny'},
            {img: 'img/970x647/gallery-pic-03-970x647.jpg', title: 'Cherry', description: 'Design'}
        ],
        fullscreenImages: [
            'img/970x647/gallery-pic-01-970x647.jpg',
            'img/970x647/gallery-pic-02-970x647.jpg',
            'img/970x647/gallery-pic-03-970x647.jpg'
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
            {boxClass: 'col-sm-6 col-md-8 margin-b-4', img: 'img/800x400/gallery-pic-01-800x400.jpg', price: 15},
            {boxClass: 'col-md-4 margin-b-4', img: 'img/397x400/gallery-pic-01-397x400.jpg', price: 12},
            {boxClass: 'col-md-4 md-margin-b-4', img: 'img/397x300/gallery-pic-01-397x300.jpg', price: 24},
            {boxClass: 'col-md-4 md-margin-b-4', img: 'img/397x300/gallery-pic-02-397x300.jpg', price: 18},
            {boxClass: 'col-md-4', img: 'img/397x300/gallery-pic-03-397x300.jpg', price: 25}
        ],
        blockquotes: [
            {author: 'Joh Milner', text: ['Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim enum esqudiat dolore.', 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret tempor incididunt dolore magna consequat siad minim aliqua.']},
            {author: 'Alex Clarson', text: ['Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.']}
        ],
        footerMenu: [
            {class: 'col-sm-2 sm-margin-b-30', items: ['Home', 'About', 'Work', 'Contact']},
            {class: 'col-sm-2 sm-margin-b-30', items: ['Twitter','Facebook','Instagram','YouTube']}
        ]
    });
}
