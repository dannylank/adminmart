import { NavItem } from './nav-item/nav-item';

  export const navItems: NavItem[] = [
    {
      navCap: 'Home',
    },
    {
      displayName: 'Dashboard',
      iconName: 'layout-dashboard',
      route: '/dashboard',
    },
    {
      navCap: 'Admin',
    },
    {
      displayName: 'Crear',
      iconName: 'database-plus',
      route: '/admin/crear',
    },
    {
      displayName: 'Editar',
      iconName: 'edit',
      route: '/admin/editar',
    },
  ];
