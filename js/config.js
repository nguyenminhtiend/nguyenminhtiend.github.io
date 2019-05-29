(function (window) {
  window.env = window.env || {};

  window.env.apiUrl = 'http://ec2-13-228-23-234.ap-southeast-1.compute.amazonaws.com';

  window.env.defaultTimeZoneOffset = 480;//+08:00 
  window.env.addNewItemReference = 'A4 size is 21 x 29.7 cm, A5 size is 14.8 x 21 cm';
  window.env.gBizCodePSSAdhoc = [
    { text: '0-3kg', weightFrom: 0, weightTo: 3, threeHour: 'T001', sameDay: 'T002', nextDay: 'T003' },
    { text: '3-4kg', weightFrom: 3, weightTo: 4, threeHour: 'T004', sameDay: 'T005', nextDay: 'T006' },
    { text: '4-5kg', weightFrom: 4, weightTo: 5, threeHour: 'T007', sameDay: 'T008', nextDay: 'T009' },
    { text: '5-10kg', weightFrom: 5, weightTo: 10, threeHour: 'T010', sameDay: 'T011', nextDay: 'T012' },
    { text: '10-20kg', weightFrom: 10, weightTo: 20, threeHour: 'T013', sameDay: 'T014', nextDay: 'T015' },
    { text: 'above20kg', weightFrom: 20, threeHour: 'T016', sameDay: 'T017', nextDay: 'T018' }
  ];

  window.env.gBizCodePSSFixedRun = [{
    id: 7, label: 'Up to 5kg',
    rows: [
      { text: 'A to 1 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 0, pointTo: 1 },
      { text: 'A to 2 point', twiceDaily: 'F006', daily: 'F006', thricePerWeek: 'F008', weekly: 'F009', projectRun: 'F010', pointFrom: 1, pointTo: 2 },
      { text: 'A to 5 point', twiceDaily: 'F011', daily: 'F012', thricePerWeek: 'F013', weekly: 'F014', projectRun: 'F015', pointFrom: 2, pointTo: 5 },
      { text: 'A to 10 point', twiceDaily: 'F016', daily: 'F017', thricePerWeek: 'F018', weekly: 'F019', projectRun: 'F020', pointFrom: 5, pointTo: 10 },
      { text: 'A to 20 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 10, pointTo: 20 },
      { text: 'A to 50 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 20, pointTo: 50 },
      { text: 'A to 100 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 50, pointTo: 100 },
      { text: 'A to 400 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 100, pointTo: 400 }
    ]
  }, {
    id: 8, label: '5 to 10kg',
    rows: [
      { text: 'A to 1 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 0, pointTo: 1, category: 1 },
      { text: 'A to 2 point', twiceDaily: 'F006', daily: 'F006', thricePerWeek: 'F008', weekly: 'F009', projectRun: 'F010', pointFrom: 1, pointTo: 2 },
      { text: 'A to 5 point', twiceDaily: 'F011', daily: 'F012', thricePerWeek: 'F013', weekly: 'F014', projectRun: 'F015', pointFrom: 2, pointTo: 5 },
      { text: 'A to 10 point', twiceDaily: 'F016', daily: 'F017', thricePerWeek: 'F018', weekly: 'F019', projectRun: 'F020', pointFrom: 5, pointTo: 10 },
      { text: 'A to 20 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 10, pointTo: 20 },
      { text: 'A to 50 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 20, pointTo: 50 },
      { text: 'A to 100 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 50, pointTo: 100 },
      { text: 'A to 400 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 100, pointTo: 400 }
    ]
  }, {
    id: 9, label: '10 to 30kg',
    rows: [
      { text: 'A to 1 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 0, pointTo: 1, category: 1 },
      { text: 'A to 2 point', twiceDaily: 'F006', daily: 'F006', thricePerWeek: 'F008', weekly: 'F009', projectRun: 'F010', pointFrom: 1, pointTo: 2 },
      { text: 'A to 5 point', twiceDaily: 'F011', daily: 'F012', thricePerWeek: 'F013', weekly: 'F014', projectRun: 'F015', pointFrom: 2, pointTo: 5 },
      { text: 'A to 10 point', twiceDaily: 'F016', daily: 'F017', thricePerWeek: 'F018', weekly: 'F019', projectRun: 'F020', pointFrom: 5, pointTo: 10 },
      { text: 'A to 20 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 10, pointTo: 20 },
      { text: 'A to 50 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 20, pointTo: 50 },
      { text: 'A to 100 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 50, pointTo: 100 },
      { text: 'A to 400 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 100, pointTo: 400 }
    ]
  }, {
    id: 10, label: '30 to 60kg',
    rows: [
      { text: 'A to 1 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 0, pointTo: 1, category: 1 },
      { text: 'A to 2 point', twiceDaily: 'F006', daily: 'F006', thricePerWeek: 'F008', weekly: 'F009', projectRun: 'F010', pointFrom: 1, pointTo: 2 },
      { text: 'A to 5 point', twiceDaily: 'F011', daily: 'F012', thricePerWeek: 'F013', weekly: 'F014', projectRun: 'F015', pointFrom: 2, pointTo: 5 },
      { text: 'A to 10 point', twiceDaily: 'F016', daily: 'F017', thricePerWeek: 'F018', weekly: 'F019', projectRun: 'F020', pointFrom: 5, pointTo: 10 },
      { text: 'A to 20 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 10, pointTo: 20 },
      { text: 'A to 50 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 20, pointTo: 50 },
      { text: 'A to 100 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 50, pointTo: 100 },
      { text: 'A to 400 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 100, pointTo: 400 }
    ]
  }, {
    id: 11, label: '60 to 100kg',
    rows: [
      { text: 'A to 1 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 0, pointTo: 1, category: 1 },
      { text: 'A to 2 point', twiceDaily: 'F006', daily: 'F006', thricePerWeek: 'F008', weekly: 'F009', projectRun: 'F010', pointFrom: 1, pointTo: 2 },
      { text: 'A to 5 point', twiceDaily: 'F011', daily: 'F012', thricePerWeek: 'F013', weekly: 'F014', projectRun: 'F015', pointFrom: 2, pointTo: 5 },
      { text: 'A to 10 point', twiceDaily: 'F016', daily: 'F017', thricePerWeek: 'F018', weekly: 'F019', projectRun: 'F020', pointFrom: 5, pointTo: 10 },
      { text: 'A to 20 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 10, pointTo: 20 },
      { text: 'A to 50 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 20, pointTo: 50 },
      { text: 'A to 100 point', twiceDaily: 'F001', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 50, pointTo: 100 },
      { text: 'A to 400 point', twiceDaily: 'F01101', daily: 'F002', thricePerWeek: 'F003', weekly: 'F004', projectRun: 'F005', pointFrom: 100, pointTo: 400 }
    ]
  }];

  window.env.healthCareServiceNote = {
    hCOfficeHour: {
      value: 5,
      display: 'Office Hours',
      notes: [
        'Mon - Fri: 8.30am to 5.30pm <br/> Cut-Off Timing 12.30pm',
        'Sat: 8.30am to 12.00pm <br/> Cut-Off Timing: Fri 5pm'
      ]
    },
    hCOfficeHourExpress: {
      value: 6,
      display: 'Office Hours (Express)',
      notes: ['Same day deliveries that exceed the cut-off timing will be subjected to the express delivery price']
    },
    hCWeekdayEvening: {
      value: 7,
      display: 'After Office Hours',
      notes: [
        'Mon - Fri: 5.30pm to 10.00pm <br/> Cut-Off Timing 5pm',
        'Sat: 12.00pm to 10.00pm <br/> Cut-Off Timing: Fri 5pm'
      ]
    },
    hCWeekdayEveningExpress: {
      value: 8,
      display: 'After Office Hours (Express)',
      notes: ['Same day deliveries that exceed the cut-off timing will be subjected to the express delivery price']
    },
    hCWeekend: { value: 9, display: 'Late Night, Sun & PH', notes: ['Mon - Sat: 10pm onwards', 'Sun & PH'] }
  };

  window.env.defaultFixedRunPricing = [
    {
      weightCategoryId: 7,
      weightCategory: 'Up to 5kg',
      deliveryPointCategories: [
        {
          category: 1,
          label: 'A to 1 point',
          twiceDaily: 14.6,
          daily: 14.9,
          thricePerWeek: 15.5,
          weekly: 15.5,
          projectRun: 16
        },
        {
          category: 2,
          label: 'A to 2 point',
          twiceDaily: 14.2,
          daily: 14.5,
          thricePerWeek: 14.9,
          weekly: 14.9,
          projectRun: 15.5
        },
        {
          category: 3,
          label: 'A to 5 point',
          twiceDaily: 13.8,
          daily: 16.9,
          thricePerWeek: 18.9,
          weekly: 20,
          projectRun: 28.6
        },
        {
          category: 4,
          label: 'A to 10 point',
          twiceDaily: 12.7,
          daily: 15.5,
          thricePerWeek: 16,
          weekly: 16,
          projectRun: 22.2
        },
        {
          category: 5,
          label: 'A to 20 point',
          twiceDaily: 7,
          daily: 12.3,
          thricePerWeek: 12.7,
          weekly: 12.7,
          projectRun: 18.1
        },
        {
          category: 6,
          label: 'A to 50 point',
          twiceDaily: 5.7,
          daily: 7.6,
          thricePerWeek: 7,
          weekly: 7,
          projectRun: 11.8
        },
        {
          category: 7,
          label: 'A to 100 point',
          twiceDaily: 5.2,
          daily: 5.2,
          thricePerWeek: 6.5,
          weekly: 6.5,
          projectRun: 10.2
        },
        { category: 8, label: 'A to 400 point', twiceDaily: 5, daily: 5, thricePerWeek: 6, weekly: 6, projectRun: 8 }
      ]
    },
    {
      weightCategoryId: 8,
      weightCategory: '5 - 10kg',
      deliveryPointCategories: [
        {
          category: 1,
          label: 'A to 1 point',
          twiceDaily: 15.6,
          daily: 15.9,
          thricePerWeek: 16.5,
          weekly: 16.5,
          projectRun: 17
        },
        {
          category: 2,
          label: 'A to 2 point',
          twiceDaily: 15.2,
          daily: 15.5,
          thricePerWeek: 15.9,
          weekly: 15.9,
          projectRun: 16.5
        },
        {
          category: 3,
          label: 'A to 5 point',
          twiceDaily: 14.2,
          daily: 18,
          thricePerWeek: 20,
          weekly: 22,
          projectRun: 29.7
        },
        {
          category: 4,
          label: 'A to 10 point',
          twiceDaily: 13.2,
          daily: 16,
          thricePerWeek: 16.5,
          weekly: 16.5,
          projectRun: 22.7
        },
        {
          category: 5,
          label: 'A to 20 point',
          twiceDaily: 8,
          daily: 13,
          thricePerWeek: 13.8,
          weekly: 13.8,
          projectRun: 18.1
        },
        {
          category: 6,
          label: 'A to 50 point',
          twiceDaily: 6.8,
          daily: 8.7,
          thricePerWeek: 9,
          weekly: 9,
          projectRun: 12.9
        },
        {
          category: 7,
          label: 'A to 100 point',
          twiceDaily: 6.2,
          daily: 6.2,
          thricePerWeek: 7,
          weekly: 7.5,
          projectRun: 10.5
        },
        {
          category: 8,
          label: 'A to 400 point',
          twiceDaily: 5.2,
          daily: 5.2,
          thricePerWeek: 6,
          weekly: 7.2,
          projectRun: 9
        }
      ]
    },
    {
      weightCategoryId: 9,
      weightCategory: '10 - 30kg',
      deliveryPointCategories: [
        {
          category: 1,
          label: 'A to 1 point',
          twiceDaily: 30.1,
          daily: 30.1,
          thricePerWeek: 32.7,
          weekly: 32.7,
          projectRun: 38.1
        },
        {
          category: 2,
          label: 'A to 2 point',
          twiceDaily: 19.3,
          daily: 22.7,
          thricePerWeek: 27.9,
          weekly: 27.9,
          projectRun: 32.9
        },
        {
          category: 3,
          label: 'A to 5 point',
          twiceDaily: 17,
          daily: 21,
          thricePerWeek: 24.1,
          weekly: 24.1,
          projectRun: 27.6
        },
        {
          category: 4,
          label: 'A to 10 point',
          twiceDaily: 16,
          daily: 17.8,
          thricePerWeek: 17.6,
          weekly: 17.6,
          projectRun: 27.4
        },
        {
          category: 5,
          label: 'A to 20 point',
          twiceDaily: 12.4,
          daily: 13.3,
          thricePerWeek: 13,
          weekly: 13,
          projectRun: 20.2
        },
        {
          category: 6,
          label: 'A to 50 point',
          twiceDaily: 11.4,
          daily: 12.7,
          thricePerWeek: 12.7,
          weekly: 12.7,
          projectRun: 17.1
        },
        {
          category: 7,
          label: 'A to 100 point',
          twiceDaily: 7.6,
          daily: 9,
          thricePerWeek: 9.4,
          weekly: 9.4,
          projectRun: 13.9
        },
        {
          category: 8,
          label: 'A to 400 point',
          twiceDaily: 6,
          daily: 7,
          thricePerWeek: 7.5,
          weekly: 7.5,
          projectRun: 11.5
        }
      ]
    },
    {
      weightCategoryId: 10,
      weightCategory: '30 - 60kg',
      deliveryPointCategories: [
        {
          category: 1,
          label: 'A to 1 point',
          twiceDaily: 26.2,
          daily: 30.1,
          thricePerWeek: 32.7,
          weekly: 32.7,
          projectRun: 38.1
        },
        {
          category: 2,
          label: 'A to 2 point',
          twiceDaily: 19.3,
          daily: 22.7,
          thricePerWeek: 27.9,
          weekly: 27.9,
          projectRun: 32.9
        },
        {
          category: 3,
          label: 'A to 5 point',
          twiceDaily: 17,
          daily: 21,
          thricePerWeek: 24.1,
          weekly: 24.1,
          projectRun: 27.6
        },
        {
          category: 4,
          label: 'A to 10 point',
          twiceDaily: 16,
          daily: 17.8,
          thricePerWeek: 17.6,
          weekly: 17.6,
          projectRun: 27.4
        },
        {
          category: 5,
          label: 'A to 20 point',
          twiceDaily: 12.4,
          daily: 13.3,
          thricePerWeek: 13,
          weekly: 13,
          projectRun: 20.2
        },
        {
          category: 6,
          label: 'A to 50 point',
          twiceDaily: 11.4,
          daily: 12.7,
          thricePerWeek: 12.7,
          weekly: 12.7,
          projectRun: 17.1
        },
        {
          category: 7,
          label: 'A to 100 point',
          twiceDaily: 7.6,
          daily: 9,
          thricePerWeek: 9.4,
          weekly: 9.4,
          projectRun: 13.9
        },
        {
          category: 8,
          label: 'A to 400 point',
          twiceDaily: 6,
          daily: 7,
          thricePerWeek: 7.5,
          weekly: 7.5,
          projectRun: 11.5
        }
      ]
    },
    {
      weightCategoryId: 11,
      weightCategory: '60 - 100kg',
      deliveryPointCategories: [
        {
          category: 1,
          label: 'A to 1 point',
          twiceDaily: 40.2,
          daily: 42.3,
          thricePerWeek: 47.6,
          weekly: 47.6,
          projectRun: 64.5
        },
        {
          category: 2,
          label: 'A to 2 point',
          twiceDaily: 27.9,
          daily: 33.1,
          thricePerWeek: 41.5,
          weekly: 41.5,
          projectRun: 54
        },
        {
          category: 3,
          label: 'A to 5 point',
          twiceDaily: 19.8,
          daily: 25.1,
          thricePerWeek: 40.9,
          weekly: 40.9,
          projectRun: 48.6
        },
        {
          category: 4,
          label: 'A to 10 point',
          twiceDaily: 17.7,
          daily: 20.5,
          thricePerWeek: 30.4,
          weekly: 30.4,
          projectRun: 41.3
        },
        {
          category: 5,
          label: 'A to 20 point',
          twiceDaily: 15.6,
          daily: 19,
          thricePerWeek: 23.6,
          weekly: 24.2,
          projectRun: 32.9
        },
        {
          category: 6,
          label: 'A to 50 point',
          twiceDaily: 13.3,
          daily: 14.8,
          thricePerWeek: 20.4,
          weekly: 22.1,
          projectRun: 30.7
        },
        {
          category: 7,
          label: 'A to 100 point',
          twiceDaily: 10,
          daily: 12.7,
          thricePerWeek: 17.3,
          weekly: 19,
          projectRun: 27.6
        },
        {
          category: 8,
          label: 'A to 400 point',
          twiceDaily: 8.8,
          daily: 11.6,
          thricePerWeek: 16.2,
          weekly: 17.9,
          projectRun: 27.6
        }
      ]
    }
  ];

  window.env.footerHTML = [
    '<p>Copyright © ST Logistics Pte Ltd 2019 All rights reserved</p>',
    '<p><a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a></p>'
  ];
})(this);
