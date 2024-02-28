/**
 * Creating the skeleton for Course.js
 */

//  make a constructor for the course

function Course(name, credit_hours, course_type, difficulty) {
    this.name = name;
    this.credit_hours = credit_hours;
    this.course_type = course_type;
    this.difficulty = difficulty;
}



// The main variables
let credit_hours = 0;
let pre_req = {

}
let elective = false;
let Name = "";
let difficulty = 0;
let course_type = "";

//basic getters
function getCreditHrs(){
    return this.credit_hours;
}

function getName() {
    return this.Name;
}

function getCourse_type() {
    return this.course_type;
}
function getDifficulty() {
     return this.difficulty;
}

//basic setters
function setName(value) {
    this.Name = value;
}

function setCourseType(value) {
    this.course_type = value;
}

function setDifficulty(value) {
    this.difficulty = value;
}

function setCreditHours(value) {
    this.credit_hours = value;
}