import ez from 'ezdo'
import './style.css'

import Router from './../router/'
import Header from './header/'
import Home from './pages/home'
import Docs from './pages/docs'
import Help from './pages/help'


class EzdoSite extends ez.Node {
    constructor() {
        super()

        let router = new Router()
        
        // main nav
        this.nav = new Header(router)
        this.add(this.nav)

        // main content
        this.content = new ez.Node()
        this.add(this.content)

        // router 需要优化一下
        // 可以做成当前node下的需要node都可接收此属性
        
        router.container = this.content
        router.routers = [
            {name:'home', node: new Home()},
            {name:'docs', node: new Docs()},
            {name:'help', node: new Help()}
        ]

        // 
        router.to('home')
    }
}

export default EzdoSite