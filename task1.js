function processMessage(message) {
    if (message.temperature > 30) {
        message.status = "High";
    } else {
        message.status = "Normal";
    }
    return message;
}

let sensorMessage = {
    temperature: 32,
    humidity: 45,
    device: "sensor1"
};
console.log(processMessage(sensorMessage));
