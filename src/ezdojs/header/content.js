import ez from 'ezdo'

class Content extends ez.Node {
    constructor(router) {
        super()

        this.router = router
        this.addClass('header-content')

        let logo = new ez.Node('span')
        logo.text = 'Ezdo'
        logo.addClass('logo')
        this.add(logo)

        this.nav = new ez.Node('ul')
        this.nav.addClass('main-menu')
        this.add(this.nav)

        this.data.nav.forEach(data => {
            let item = new ez.Node('li')
            item.addClass('main-menu-item')
            item.text = data.name
            item.data = data
            this.nav.add(item)
            item.on('click', this.onSelectMenuItem, this)
        })
    }

    onSelectMenuItem(node) {
        this.router.to(node.data.link)
        setTimeout(() => {
            Prism.highlightAll(document)
        }, 60);
    }

    get data() {
        return {
            nav: [
                { name: '首页', link: 'home' },
                { name: '模板', link: 'temp' },
                { name: '文档', link: 'docs' },
                { name: '帮助', link: 'help' }
            ]
        }
    }
}

export default Content