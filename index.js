// Code your solution here
function findMatching(drivers, string) {
    let result = drivers.filter(element => element.toLowerCase() === string.toLowerCase())
    return result
}

function fuzzyMatch(drivers, string) {
    let result = drivers.filter(element => element.startsWith(string))
    return result
}

function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.name === name
    
})
}