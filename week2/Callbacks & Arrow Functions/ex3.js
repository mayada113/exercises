const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};
const logDataFunc = function () {
  console.log(data + " Hello from logdata function")
}
displayData(alert, logData, "I like to party")