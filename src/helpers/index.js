export const isVoidObject = (obj) => {
    return !Object
        .values(obj)
        .filter(value => {
            if (value === "" || value === [] || value === null || value === undefined) {
                return false
            }
            return true
        })
        .length
}