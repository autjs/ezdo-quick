import e from '../../puc/lib/index'
import './home.css'

import Header from './header/header'
import Page from './page/page'

class Home extends e.Node {
    constructor() {
        super()
        
        this.addClass('home')

        this.add(new Header(this.select.bind(this)))


        this.pageData = [
            {
                title: 'ezdo.js',
                content: '用来构建用户界面的javascript库,面向对象的语法设计。开发过程中，你将可能忘记标签人存在。和react一样，ezdo.js也推崇单项绑定的设计。越庞大的项目，它的优势也将更加明显'
            },
            {
                title: 'ezdo.js',
                content: '官网建设中...这是 ezdo.js ，这是 ezdo.js 这是 ezdo.js 这是 ezdo.js 这是 ezdo.js 这是 ezdo.js   '
            },
            {
                title: 'ezdo.js',
                content: '为什么要开发这个，其实只是因为目前没工作，太闲.haha'
            },
            {
                title: 'ezdo.js',
                content: '如果使用上有什么问题，或者有什么建议，还有大神需要指教我的。当然有帮我推荐工作的也万分感谢哈哈。微信：LemonMind 。 欢迎大家'
            }
        ]
        this.page = new Page()
        this.add(this.page)
        this.page.show(this.pageData[0])

    }

    select(index) {
        this.page.show(this.pageData[index])
    }
}

export default Home