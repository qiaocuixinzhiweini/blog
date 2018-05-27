class arrObj {

    constructor () {
        this.storeData = []
    }

    add (item) {
        this.storeData.push(item)
        return this
    }

    connect () {
        return this.storeData.reduce((prev, cur) => prev + cur)
    }
}

const arr = new arrObj()
arr.add('t').add('o').add('p').add('u').add('l')
console.log(arr.connect())
