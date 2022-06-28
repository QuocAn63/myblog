import config from '../config';

// Layouts
import HeaderOnly from '../layouts/HeaderOnly';
import UserLayout from '../layouts/UserLayout';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Discussions from '../pages/Discussions';
import Questions from '../pages/Questions';
import PublishPost from '../pages/PublishPost';
import Post from '../pages/Post';
import User from '../pages/User';
import Tag from '../pages/Tag';
import Search from '../pages/Search';
import Login from '../pages/Login'

const publicRoutes = [
   { path: config.routes.home, component: Home },
   { path: config.routes.about, component: About },
   { path: config.routes.posts, component: Posts },
   { path: config.routes.questions, component: Questions },
   { path: config.routes.discussions, component: Discussions },
   { path: config.routes.publishPost, component: PublishPost, layout: HeaderOnly, SearchOn: false, WideScreen: true },
   { path: config.routes.post, component: Post },
   { path: config.routes.user, component: User, layout: UserLayout },
   { path: config.routes.tag, component: Tag, layout: UserLayout },
   { path: config.routes.search, component: Search, layout: UserLayout },
   { path: config.routes.login, component: Login, layout: null}
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
