/**
 * Creating the skeleton for Course.js
 */
class Course
{// The main variables
credit_hours = 0;
pre_req = {

}
elective = false;
Name = "";
difficulty = 0;
course_type = "";


constructor(courseName, creditHours, difficulty, courseType, elective, preReq = {}) {
this.Name = courseName;
this.credit_hours = creditHours;
this.difficulty = difficulty;
this.course_type = courseType;
this.elective = elective;
this.pre_req = preReq;
}

//basic getters
getCreditHrs(){
return this.credit_hours;
}

getName() {
return this.Name;
}

Course_type() {
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