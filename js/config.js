(function (window) {

    window.env = window.env || {};

    window.env.apiUrl = 'http://ec2-52-77-214-252.ap-southeast-1.compute.amazonaws.com';

    window.env.addNewItemReference = 'A4 size is 21 x 29.7 cm, A5 size is 14.8 x 21 cm';
    window.env.defaultFixedRunPricing = [
        {
            weightCategoryId: 7,
            weightCategory: 'Up to 5kg',
            deliveryPointCategories: [
                {category: 1, label: 'A to 1 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 2, label: 'A to 2 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 3, label: 'A to 5 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 4, label: 'A to 10 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 5, label: 'A to 20 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 6, label: 'A to 50 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 7, label: 'A to 100 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 8, label: 'A to 400 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5}
            ]
        },
        {
            weightCategoryId: 8,
            weightCategory: '5 - 10kg',
            deliveryPointCategories: [
                {category: 1, label: 'A to 1 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 2, label: 'A to 2 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 3, label: 'A to 5 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 4, label: 'A to 10 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 5, label: 'A to 20 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 6, label: 'A to 50 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 7, label: 'A to 100 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 8, label: 'A to 400 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5}
            ]
        },
        {
            weightCategoryId: 9,
            weightCategory: '10 - 30kg',
            deliveryPointCategories: [
                {category: 1, label: 'A to 1 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 2, label: 'A to 2 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 3, label: 'A to 5 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 4, label: 'A to 10 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 5, label: 'A to 20 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 6, label: 'A to 50 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 7, label: 'A to 100 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 8, label: 'A to 400 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5}
            ]
        },
        {
            weightCategoryId: 10,
            weightCategory: '30 - 60kg',
            deliveryPointCategories: [
                {category: 1, label: 'A to 1 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 2, label: 'A to 2 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 3, label: 'A to 5 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 4, label: 'A to 10 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 5, label: 'A to 20 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 6, label: 'A to 50 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 7, label: 'A to 100 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 8, label: 'A to 400 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5}
            ]
        },
        {
            weightCategoryId: 11,
            weightCategory: '60 - 100kg',
            deliveryPointCategories: [
                {category: 1, label: 'A to 1 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 2, label: 'A to 2 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 3, label: 'A to 5 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 4, label: 'A to 10 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 5, label: 'A to 20 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 6, label: 'A to 50 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 7, label: 'A to 100 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5},
                {category: 8, label: 'A to 400 point', twiceDaily: 1, daily: 2, thricePerWeek: 3, weekly: 4, projectRun: 5}
            ]
        }
    ];

    window.env.footerHTML = [
        '<p>Copyright © ST Logistics Pte Ltd 2017 All rights reservedN</p>',
        '<p><a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a></p>'
    ];

})(this);
