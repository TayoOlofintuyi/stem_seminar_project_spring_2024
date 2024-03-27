/**
 * Creating the skeleton for Course.js
 */

//  make a constructor for the course

export class Course {
    constructor(name = "", credit_hours = 0, course_type = "", difficulty = 0) {
        this.name = name;
        this.credit_hours = credit_hours;
        this.course_type = course_type;
        this.difficulty = difficulty;
    }


// The main variables

// let elective = false;
// let Name = "";
// let difficulty = 0;
// let course_type = "";

//basic getters
 getCreditHrs(){
    return this.credit_hours;
}

 getName() {
    return this.Name;
}

 getCourse_type() {
    return this.course_type;
}
 getDifficulty() {
     return this.difficulty;
}

//basic setters
 setName(value) {
    this.Name = value;
}

 setCourseType(value) {
    this.course_type = value;
}

 setDifficulty(value) {
    this.difficulty = value;
}

setCreditHours(value) {
    this.credit_hours = value;
}
}