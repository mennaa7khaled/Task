function addTimestamp(message) {
    let now = new Date();
    let timestamp = now.toISOString().replace('T', ' ').substring(0, 19);
    message.timestamp = timestamp;
    return message;
}

let message = { temperature: 40 };
console.log(addTimestamp(message));
