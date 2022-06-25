import React from 'react';
import {
  AvTimer,
  AccountBox,
  Dashboard,
  CreditCard,
  School,
  Schedule,
  Group,
  LocalHospital,
  LocalPharmacy,
  LocalDrink,
  Assessment,
  Message,
} from '@material-ui/icons';
import IntlMessages from '../../../utils/IntlMessages';
import { Roles } from '../../../../routes/Roles';

export const sidebarNavs = [
  {
    name: <IntlMessages id={'pages.dashboard'} />,
    type: 'item',
    icon: <Dashboard />,
    link: '/dashboard',
  },
  {
    name: <IntlMessages id={'pages.specialisation'} />,
    type: 'item',
    icon: <Group />,
    link: '/specialisation',
  },
  {
    name: <IntlMessages id={'pages.users'} />,
    type: 'item',
    icon: <AccountBox />,
    link: '/users',
  },
  {
    name: <IntlMessages id={'pages.visits'} />,
    type: 'item',
    icon: <LocalHospital />,
    link: '/visits',
  },
  {
    name: <IntlMessages id={'pages.laboratory'} />,
    type: 'item',
    icon: <School />,
    link: '/laboratory',
  },
  {
    name: <IntlMessages id={'pages.pharmacy'} />,
    type: 'item',
    icon: <LocalPharmacy />,
    link: '/pharmacy',
  },
  {
    name: <IntlMessages id={'pages.schedule'} />,
    type: 'item',
    icon: <Schedule />,
    link: '/schedule',
  },
  {
    name: <IntlMessages id={'pages.appointments'} />,
    type: 'item',
    icon: <AvTimer />,
    link: '/appointments',
  },
  {
    name: <IntlMessages id={'pages.vaccine'} />,
    type: 'item',
    icon: <LocalDrink />,
    link: '/vaccine',
  },
  {
    name: <IntlMessages id={'pages.reports'} />,
    type: 'item',
    icon: <Assessment />,
    link: '/reports',
  },
  {
    name: <IntlMessages id={'pages.vitals'} />,
    type: 'item',
    icon: <LocalDrink />,
    link: '/vitals',
  },
];

export const horizontalDefaultNavs = [
  {
    name: <IntlMessages id={'pages.dashboard'} />,
    type: 'item',
    icon: <Dashboard />,
    link: '/dashboard',
  },
];

export const minimalHorizontalMenus = [
  {
    name: <IntlMessages id={'pages.dashboard'} />,
    type: 'item',
    icon: <Dashboard />,
    link: '/dashboard',
  },
];

// Role-defined menus

export const ReceptionistSideBarNavs = [
  {
    name: <IntlMessages id={'pages.dashboard'} />,
    type: 'item',
    icon: <Dashboard />,
    link: '/dashboard',
  },
  {
    name: <IntlMessages id={'pages.specialisation'} />,
    type: 'item',
    icon: <Group />,
    link: '/specialisation',
  },
  {
    name: <IntlMessages id={'pages.patients'} />,
    type: 'item',
    icon: <Group />,
    link: '/patients',
  },
  {
    name: <IntlMessages id={'pages.appointments'} />,
    type: 'item',
    icon: <AvTimer />,
    link: '/appointments',
  },
  {
    name: <IntlMessages id={'pages.visits'} />,
    type: 'item',
    icon: <LocalHospital />,
    link: '/visits',
  },

];

export const NurseSideBarNavs = [
  {
    name: <IntlMessages id={'pages.dashboard'} />,
    type: 'item',
    icon: <Dashboard />,
    link: '/dashboard',
  },
  {
    name: <IntlMessages id={'pages.vitals'} />,
    type: 'item',
    icon: <LocalDrink />,
    link: '/vitals',
  },
  {
    name: <IntlMessages id={'pages.vaccine'} />,
    type: 'item',
    icon: <LocalDrink />,
    link: '/vaccine',
  },
  {
    name: <IntlMessages id={'pages.ghanacard'} />,
    type: 'item',
    icon: <CreditCard />,
    link: '/ghanaCard',
  },
  {
    name: <IntlMessages id={'pages.messages'} />,
    type: 'item',
    icon: <Message />,
    link: '/messages',
  },
];

export const DoctorSideBarNavs = [
  {
    name: <IntlMessages id={'pages.dashboard'} />,
    type: 'item',
    icon: <Dashboard />,
    link: '/dashboard',
  },
  {
    name: <IntlMessages id={'pages.patients'} />,
    type: 'item',
    icon: <Group />,
    link: '/patients',
  },
  {
    name: <IntlMessages id={'pages.schedule'} />,
    type: 'item',
    icon: <Schedule />,
    link: '/schedule',
  },
  {
    name: <IntlMessages id={'pages.reports'} />,
    type: 'item',
    icon: <Assessment />,
    link: '/reports',
  },
  {
    name: <IntlMessages id={'pages.messages'} />,
    type: 'item',
    icon: <Message />,
    link: '/messages',
  },
];

export const LabTechnicianSideBarNavs = [
  {
    name: <IntlMessages id={'pages.dashboard'} />,
    type: 'item',
    icon: <Dashboard />,
    link: '/dashboard',
  },
  {
    name: <IntlMessages id={'pages.patients'} />,
    type: 'item',
    icon: <Group />,
    link: '/patients',
  },
  {
    name: <IntlMessages id={'pages.reports'} />,
    type: 'item',
    icon: <Assessment />,
    link: '/reports',
  },
  {
    name: <IntlMessages id={'pages.messages'} />,
    type: 'item',
    icon: <Message />,
    link: '/messages',
  },
];

export const PharmacistSideBarNavs = [
  {
    name: <IntlMessages id={'pages.dashboard'} />,
    type: 'item',
    icon: <Dashboard />,
    link: '/dashboard',
  },
  {
    name: <IntlMessages id={'pages.patients'} />,
    type: 'item',
    icon: <Group />,
    link: '/patients',
  },
  {
    name: <IntlMessages id={'pages.medicineInventory'} />,
    type: 'item',
    icon: <LocalPharmacy />,
    link: '/medicineInventory',
  },
  {
    name: <IntlMessages id={'pages.messages'} />,
    type: 'item',
    icon: <Message />,
    link: '/messages',
  },
];

export const sideBarNavSelector = userRole => {
  if (userRole === Roles.RECEPTIONIST) {
    return ReceptionistSideBarNavs;
  }
  if (userRole === Roles.NURSE) {
    return NurseSideBarNavs;
  }
  if (userRole === Roles.DOCTOR) {
    return DoctorSideBarNavs;
  }
  if (userRole === Roles.LAB_TECHNICIAN) {
    return LabTechnicianSideBarNavs;
  }
  if (userRole === Roles.PHARMACIST) {
    return PharmacistSideBarNavs;
  }
};
