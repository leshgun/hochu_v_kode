/**
    * @param {*} obj
    * @param {String} path
    * @param {*} defaultValue
    * 
    * @returns obj[path] || defaultValue
*/
const getObjectProperty = (obj, path, defaultValue) => {
    var np = path.split('.')
    if (!obj[np[0]]) return defaultValue || undefined
    return (np[1] ? getObjectProperty(obj[np[0]], np.slice(1).join('.'), defaultValue) : obj[np[0]])
}
