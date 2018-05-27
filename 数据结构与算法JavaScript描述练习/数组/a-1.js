class StudentScore {

    constructor () {
        this.storeData = []
    }

    add (name, score) {
        this.storeData.push({name: name, score: score})
    }

    average () {
        if (!this.storeData.length) return
        let sum = this.storeData.reduce((pre, cur) => pre + cur.score, 0)
        return sum / this.storeData.length
    }
}

const student1 = new StudentScore()
student1.add('topul', 100)
student1.add('Aqiu', 90)
student1.add('Only', 80)
student1.add('Xzhu', 70)
student1.add('Qcui', 60)
console.log(student1)
const everage = student1.average()
console.log(everage)
