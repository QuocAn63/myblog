import config from '../config'

import Home from '../pages/Home'
import About from '../pages/About'
import Posts from '../pages/Posts'

const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.about, component: About},
    {path: config.routes.posts, component: Posts}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }