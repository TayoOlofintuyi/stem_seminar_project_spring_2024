class Bulletin {
  constructor(coursesList = {}, bulletinJSON = "") {
    // courses is dict with the course as the key and the priority(int) as the value
    this.coursesList = coursesList;
    this.read(bulletinJSON);
    this.assignAllPriority();
  }

  read(bulletinJSON) {
    // look up how to read a JSON file in JavaScript
    // Read the bulletin file, and store the courses in the coursesList with a priority of 1
    
    if (bulletinJSON !== "") {
      this.courses = bulletinJSON;
    }
    else {
      console.log("No bulletin file provided.");
    }
  }

  getCourse(course) {
    // Return the course with the given course code

  }

  assignPriority(course, priority = 1) {
    // Assign a priority to the course with the given course code

    if (this.coursesList[course] > priority)
    {
        priority = this.coursesList[course];
    }
    else
    {
        this.coursesList[course] = priority;
    }
     
    for (let prereq in this.coursesList[course].prerequisites) {
      this.assignPriority(prereq, priority + 1);
    }
  }

  assignAllPriority() {
    // Assign a priority to all courses
    for (let course in this.coursesList) {
      this.assignPriority(course);
    }
  }
}