// import {Employee} from "./employee";

function Employee(id, fullName, department, level) {
    this.employeeId = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    thisimageURL = `../assets/${id}.png`
    this.salary = () => {
        if (this.level.toLowerCase() == "senior") {
            return Math.floor(Math.random() * (2000 - 1500) + 1500)
        } else if (this.level.toLowerCase() == "mid-senior") {
            return Math.floor(Math.random() * (1500 - 1000) + 1000)
        } else if (this.level.toLowerCase() == "junior") {
            return Math.floor(Math.random() * (1000 - 500) + 500)
        }
    }
    this.netSalary = Math.floor(this.salary() * 0.925)
}

let employees = [
    new Employee (1000, "Ghazi Samer", 'Administration', 'Senior'),
    new Employee (1001, "Lana Ali", 'Finance', 'Senior'),
    new Employee (1002, "Tamara Ayoub", 'Marketing', 'Senior'),
    new Employee (1004, "Omar Zaid", 'Development', 'Senior'),
    new Employee (1003, "Safi Walid", 'Administration', 'Mid-Senior'),
    new Employee (1005, "Rana Saleh", 'Development', 'Junior'),
    new Employee (1006, "Hadi Ahmad", 'Finance	', 'Mid-Senior')
]

let main = document.querySelector("main");
let mainContent = '';

Employee.prototype.render = function() {
    let div = document.createElement("div")
    div.innerHTML = `<h2>Employee: ${this.fullName}</h2>
    <h2>Net Salary: ${this.netSalary}</h2>`
    return div;
}

employees.forEach((ele) => {main.appendChild(ele.render())})

