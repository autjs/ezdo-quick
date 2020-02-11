import e from './../../../puc/lib/index'
import './page.css'

class Page extends e.Node {
    constructor(){
        super()
        
        this.addClass('page')

        this.title = new e.Node()
        this.title.addClass('title')
        this.add(this.title)

        this.content = new e.Node()
        this.content.addClass('content')
        this.add(this.content)
    }
    show(data) {
        this.title.text = data.title
        this.content.text = data.content
    }
}

export default Page