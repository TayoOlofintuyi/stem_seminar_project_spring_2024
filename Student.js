/**
 * The file does .......
 * Author: Christiana Wright
 * Date: 2/14/2024
 */

class Student {

    constructor(credits, ex_grad_date, cat_year, gen_eds_left, pursuing_grad, taken_2440, CS_Student, data_certificate) {

        this.credits = credits;
        this.ex_grad_date = ex_grad_date;
        this.cat_year = cat_year;
        this.gen_eds_left = gen_eds_left;
        this.pursuing_grad = pursuing_grad;
        this.taken_2440 = taken_2440;
        this.CS_Student = CS_Student;
        this.data_certificate = data_certificate;
    }

//basic getters

    getCredits() {
        return this.credits;
    }

    getExGradDate() {
        return this.ex_grad_date;
    }

    getCatYear() {
        return this.cat_year;
    }

    getGenEdsLeft() {
        return this.gen_eds_left;
    }

    getPursuingGrad() {
        return this.pursuing_grad;
    }

    getTaken2440() {
        return this.taken_2440;
    }

    getCSStudent() {
        return this.CS_Student;
    }

    getDataCertificate() {
        return this.data_certificate;
    }

//basic setters

    setCredits(value) {
        this.credits = value;
    }

    setExGradDate(value) {
        this.ex_grad_date = value;
    }

    setCatYear(value) {
        this.cat_year = value;
    }

    setGenEdsLeft(value) {
        this.gen_eds_left = value;
    }

    setPursuingGrad(value) {
        this.pursuing_grad = value;
    }

    setTaken2440(value) {
        this.taken_2440 = value;
    }

    setCSStudent(value) {
        this.CS_Student = value;
    }

    setDataCertificate(value) {
        this.data_certificate = value;
    }

    //additional methods


}