const URL_REGEX = new RegExp('^(https?:\\/\\/)?' + // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
    '(\\#[-a-z\\d_]*)?$', 'i');

export const getMillisecondsFromTime = (time) => {
    return time * 60 * 1000;
}


export const getClenUrl = (badUrl) => {
    if (!URL_REGEX.test(badUrl)) {
        return
    }
    const goodUrl = new URL(badUrl);
    if (goodUrl) {
        return goodUrl.origin
    }
    return badUrl;
}

export const getUrlWithoutProtocol = (badUrl) => {
    if (!URL_REGEX.test(badUrl)) {
        return
    }
    const goodUrl = new URL(badUrl);
    console.log(goodUrl)
    if (goodUrl) {
        return goodUrl.hostname
    }
    return "";
}