import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'My Profile',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Job Filters',
    icon: 'nb-search',
    children: [
      {
        title: 'AI',
        link: '/auth/login',
      },
      {
        title: 'IoT',
        link: '/auth/register',
      },
      {
        title: 'Embedded',
        link: '/auth/request-password',
      },
      {
        title: 'Cloud',
        link: '/auth/reset-password',
      },
    ],
  },
];
