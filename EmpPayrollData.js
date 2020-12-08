class EmployeePayrollData {
    // Property
    id;
    salary;
    // constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    // getter and setter method
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name)) this._name = name;
        else throw 'Name is  in Incorrect format!';
    }
    // method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", startDate = " + empDate;
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Kalyan", 3000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 2;
employeePayrollData.name = "Keerthi";
console.log(employeePayrollData.toString());
let newEmployeePayrollData = new EmployeePayrollData(1, "Smith", 3000, 'M', new Date());
console.log(newEmployeePayrollData.toString());
try {
    newEmployeePayrollData.name = "rohit";
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}
