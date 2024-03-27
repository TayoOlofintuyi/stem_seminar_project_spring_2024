
class Schedule {
  constructor(courseList = []) {
    this.schedule = courseList;
  }

  addCourse(course) {
    this.schedule.push(course);
  }

  getSchedule() {
    return this.schedule;
  }

  removeCourse(courseName) {
    this.schedule = this.schedule.filter(course => course.getName() !== courseName);
  }

  getCourse(courseName) {
    return this.schedule.find(course => course.getName() === courseName);
  }

  // add methods like getcredithours, getdifficulty, etc.
}