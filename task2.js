function convertString(inputString) {
    let result = inputString.toUpperCase();
    if (result.length > 10) {
        result = result.substring(0, 10) + "(truncated)";
    }
    return result;
}

console.log(convertString("NodeJstaskstringmanipulation"));
