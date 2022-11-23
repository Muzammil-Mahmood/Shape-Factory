/*
changing  methods
*/

class Student {
    constructor(name, grades) {
        this.name = name;
        this.grades = grades;
    }

    setAverage() {
        let sum = 0;
        if(this.grades.length > 0) {
            for (let i = 0; i < this.grades.length; i++) {
                sum += this.grades[i];
            }
            this._avg = sum / this.grades.length;
        } else {
            throw new TypeError('student has no grades');
        }
        return this;
    }
    getAverage() {
        return this._avg.toPrecision(3);
    }

    print() {
        console.log(this.getAverage());
    }
}

const grades = [87.5, 98, 92.5, 93];
const student = new Student('Martin jones', grades);
student.setAverage().print();