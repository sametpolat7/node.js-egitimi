const fs = require('fs');

const path = './employee.json';
const data = {
    "employees": [
        {
            "name": "Employee1 Name",
            "id": 487,
            "salary": "2000$"
        }
    ]
}

// Create
fs.writeFileSync(path, JSON.stringify(data));

// Read
const showFile = fs.readFileSync(path, 'utf8');
console.log(showFile);

// Update
const newEmployee = {
    "name": "Employee2 Name",
    "id": 991,
    "salary": "1700$"
};
data.employees.push(newEmployee);
fs.writeFileSync(path, JSON.stringify(data));

// Delete
fs.unlinkSync(path);