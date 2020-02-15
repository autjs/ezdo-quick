import ez from 'ezdo'

class Docs extends ez.Node {
    constructor() {
        super()

        this.addClass('page')
        this.text = '很抱歉，文档内容还未编写'
    }
}

export default Docs