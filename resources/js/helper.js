export const getParam = (name, url) => {
    if (!url) url = location.href
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
    let regexS = '[\\?&]' + name + '=([^&#]*)'
    let regex = new RegExp(regexS)
    let results = regex.exec(url)
    return results == null ? null : results[1]
}
export const fileSize = (value, type = 'normal') => {
    const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let l = 0,
        n = parseInt(value, 10) || 0
    while (n >= 1024 && ++l) {
        n = n / 1024
    }
    if (type !== 'normal') {
        return {
            size: n.toFixed(n < 10 && l > 0 ? 1 : 0),
            name: units[l],
        }
    }
    return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]
}
