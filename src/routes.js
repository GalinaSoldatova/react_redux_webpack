import News from './pages/news';
import Profile from './pages/profile';
import Login from './pages/login';
import Home from './pages/home';

//List of routes
export const routes = [
  {
    isNavBar: true,
    isExact: true,
    path: '/',
    name: 'Главная',
    component: Home
  },
  {
    isNavBar: true,
    path: '/news',
    name: 'Новости',
    component: News
  },
  {
    isNavBar: true,
    path: '/profile',
    name: 'Профиль',
    component: Profile,
    isPrivate: true
  },
  {
    path: '/login',
    name: 'Вход',
    component: Login
  }
];
