function dynamicPropertyAccess(msg, propertyName) {
    return msg.payload[propertyName];
}

let msg = {
    payload: { temperature: 35, humidity: 60 }
};
console.log(dynamicPropertyAccess(msg, "temperature")); 
