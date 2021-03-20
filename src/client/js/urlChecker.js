function checkForURL(url) {
    var pattern = new RegExp('https?:\\/\\/.+')
    return pattern.test(url);
}

export { checkForURL }
