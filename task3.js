function filterSensorData(value, threshold) {
    return value >= threshold ? value : null;
}

console.log(filterSensorData(18, 20));  
console.log(filterSensorData(22, 20)); 
