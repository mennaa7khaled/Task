function combineSensorData(sensor1, sensor2) {
    return {
        temperature: sensor1.temperature,
        humidity: sensor2.humidity
    };
}

// Example
let sensor1 = { temperature: 40 };
let sensor2 = { humidity: 70 };
console.log(combineSensorData(sensor1, sensor2));
