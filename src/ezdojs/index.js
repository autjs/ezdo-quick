import ez from 'ezdo'
import './style.css'

import Header from './header/'
import Home from './pages/home'
import Docs from './pages/docs'
import Help from './pages/help'
import Temp from './pages/temp'


class EzdoSite extends ez.Node {
    constructor() {
        super()

        let router = new ez.Router()
        
        // main nav
        this.nav = new Header(router)
        this.add(this.nav)

        // main content
        this.content = new ez.Node()
        this.add(this.content)
        this.content.addClass('ez-content')
        // router 需要优化一下
        // 可以做成当前node下的需要node都可接收此属性
        
        router.container = this.content
        router.routers = [
            {name:'home', node: new Home()},
            {name:'temp', node: new Temp()},
            {name:'docs', node: new Docs()},
            {name:'help', node: new Help()}
        ]

        // 
        router.to('home')
    }
}

export default EzdoSite