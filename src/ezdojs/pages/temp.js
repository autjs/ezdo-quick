import ez from 'ezdo'

class Header extends ez.Node {
    constructor() {
        super()

        this.addClass('ez-temp-header')
        

        // this.title = new ez.Node('h3')
        // this.title.text = 'ezdo'
        // this.add(this.title)
        // this.title.addClass('home-header-title')

        let arr = [
            '为了让朋友们更快的了解ezdo，这里也为大家提供了一个简单的小项目。',
            '这个项目就是当前的官方网站的项目源码，有喜欢的朋友可以在下面找到线索'
        ]
        arr.forEach(item => {
            let subTitle = new ez.Node('p')
            subTitle.text = item
            this.add(subTitle)
            subTitle.addClass('ez-temp-header-sub-title')
        })
    }
}

class Temp extends ez.Node {
    constructor() {
        super()

        this.addClass('page')
        
        this.header = new Header()
        this.add(this.header)


        let coder = new ez.Node()
        this.add(coder)

        let arr = [
            'git clone https://github.com/cncod/ezdo-quick',
            'cd ezdo-quick',
            'npm install',
            'npm start'
        ]

        arr.forEach(item => {
            let pre = new ez.Node('pre')
            coder.add(pre)
            let code = new ez.Node('code')
            pre.add(code)
            code.text = item
            pre.addClass('ez-code')
            code.addClass('language-shell')
            coder.add(new ez.Node())
        })
    }
}

export default Temp