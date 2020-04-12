// Your code here
function createEmployeeRecord(recordArray) { //first name, family name, title, and pay rate per hour
  const [firstName, familyName, title, payPerHour] = recordArray
  return {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(arrayOfArrays){
  return arrayOfArrays.map(array => createEmployeeRecord(array))
}

function createTimeInEvent(employee, dateStamp) {
  const [date, time] = dateStamp.split(' ')
  const hour = time.slice(0, 2)
  employee.timeInEvents: {
    type: 'TimeIn',
    hour: hour,
    date: date
  }
  return employee
}
