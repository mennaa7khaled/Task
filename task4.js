function generateGreetingBasedOnTime() {
    let currentHour = new Date().getHours();
    if (currentHour < 12) {
        return "Good Morning";
    } else if (currentHour < 4) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}

console.log(generateGreetingBasedOnTime());
