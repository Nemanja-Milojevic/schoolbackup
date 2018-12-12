import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  
    {
    title: 'Navigation',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard'
  },
  {
    title: 'Pages',
    icon: 'nb-locked',
    children: [
      {
        title: 'All Schools',
        link: 'schools',
      },
      {
        title: 'Add school',
        link: 'addschool',
      },
      {
        title: 'All students',
        link: 'students',
      },
      {
        title: 'Add student',
        link: 'addstudent',
      },
      {
        title: 'All classes',
        link: 'classes',
      },
      {
        title: 'Add class',
        link: 'addclass',
      },
      {
        title: 'Add device',
        link: 'adddevice',
      },
      
    ],
  },
];
