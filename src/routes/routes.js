import config from '../config'

// Layouts
import HeaderOnly from '../layouts/HeaderOnly'

// Pages
import Home from '../pages/Home'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Discussions from '../pages/Discussions'
import Questions from '../pages/Questions'
import WritePost from '../pages/WritePost'

const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.about, component: About},
    {path: config.routes.posts, component: Posts},
    {path: config.routes.discussions, component: Discussions},
    {path: config.routes.questions, component: Questions},
    {path: config.routes.writePost, component: WritePost, layout: HeaderOnly, SearchOn: false},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }