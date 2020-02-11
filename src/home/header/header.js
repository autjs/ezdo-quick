import e from 'ezdo'
import './header.css'

class Header extends e.Node {
    constructor(callback) {
        super()

        this.addClass('header')
        let ul = new e.Node()
        ul.type = 'ul'

        let arr = [
            'ez 没',
            'ez 有',
            'ez 标',
            'ez 签'
        ]

        arr.forEach((item,index) => {
            let li = new e.Node()
            li.type = 'li'
            li.text = item
            li.index = index
            li.callback = callback
            li.addClass('menu-item')
            ul.add(li)
            li.on('mouseover', this.select, li)
        })
        this.add(ul)
    }

    select(evt) {
        if(this.callback) {
            this.callback(this.index)
        }
    }
}

export default Header