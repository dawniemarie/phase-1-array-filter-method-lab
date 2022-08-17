function findMatching(drivers, string) {
    const result = drivers.filter(driver => driver === string || driver === string.toLowerCase())
    return result
}

function fuzzyMatch(drivers, string) {
    const result = drivers.filter(driver => driver.startsWith(string))
    return result
}

function matchName(drivers, string) {
    const result = drivers.filter(driver => string === driver.name)
    return result
}

// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.
    //>step 1: create function
    //>step 2: arr and str as arguments
    //>step 3: return each element whose name property matches string argument