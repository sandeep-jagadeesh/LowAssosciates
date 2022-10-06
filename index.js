const fs = require('fs');
const moment = require('moment');

let employeeArr = [];

//reading the file
fs.readFile('EmpTestFile.txt', 'utf8', function(err, data) { 
    if(err){
        console.log("err1",err);
        throw err;
    }else{
        console.log(data);
        let data_arr = data.split('\n'); 
        console.log("data arr", data_arr);
        for (let i = 0; i < data_arr.length; i++){
            console.log(data_arr[i]);
            let values = data_arr[i].split(' ');
            console.log(values[0], ' =', values[1]);
            if(values[0] == 'Employee'){
                createEmployee(values[1]);
            }else if(values[0] == 'Pay'){
                addPayForEmployee(values[1], values[2]);
            }else if(values[0] == 'Time'){
                updateTime(values[1], values[2], values[3]);
                earnedSalary(values[1]);
            }
          }
    }
    console.log("Expected Output", employeeArr);
});


//create employee
function createEmployee(name){
    let setupEmployee = {
        'name' : name
    }
    employeeArr.push(setupEmployee);
}

//adding pay for the employees
function addPayForEmployee(name, pay){ 
    for(let i = 0; i < employeeArr.length; i++){
        if(employeeArr[i].name == name){
            let updateEmployee = {
                'name' : name,
                'pay' : parseFloat(pay)
            }
            employeeArr[i] = updateEmployee;
        }
    }
}

//time worked calculations
function updateTime(name, time1, time2){ 
    for(let i = 0; i < employeeArr.length; i++){
        let stime = moment(time1, 'HH:mm');
        let etime = moment(time2, 'HH:mm');
        let duration = moment.duration(etime.diff(stime));
        let hours = parseFloat(duration.asHours());
        //let minutes = parseInt(duration.asMinutes())-hours*60;

        let hours_worked = 0;
        if(employeeArr[i].hours_worked){
            hours_worked = employeeArr[i].hours_worked + hours;
        }else{
            hours_worked = hours;
        }

        if(employeeArr[i].name == name){
            let updateEmployee = {
                'name' : name,
                'pay' : employeeArr[i].pay, 
                'hours_worked' : hours_worked
            }
            employeeArr[i] = updateEmployee;
        }
    }
}

//final salary earned
function earnedSalary(name){
    for(let i = 0; i < employeeArr.length; i++){
        if(employeeArr[i].name == name && employeeArr[i].hours_worked){
            let earned_salary = employeeArr[i].pay * employeeArr[i].hours_worked;
            let updateEmployee = {
                'name' : name,
                'pay' : employeeArr[i].pay, 
                'hours_worked' : employeeArr[i].hours_worked,
                'earned_salary' : earned_salary
            }
            employeeArr[i] = updateEmployee;
        }
    }
}



