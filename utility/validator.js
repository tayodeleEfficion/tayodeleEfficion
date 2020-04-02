const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const mediumPassword = /((?=.*[a-z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{6,}))|((?=.*[A-Z])(?=.*[0-9](?=.{6,})))/
const strongPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

function validateName(name) {
    return /^[a-zA-Z]+$/.test(name);
}

//This function uses a email regex obtained from emailregex.com
function validateEmail(email) {
    return emailRegex.test(email);
}

function validateMediumPassword(password) {
    return mediumPassword.test(password);
}

function validateStrongPassword(password) {
    return strongPassword.test(password);
}

export default {
    validateName: validateName,
    validateEmail: validateEmail,
    validateMediumPassword: validateMediumPassword,
    validateStrongPassword: validateStrongPassword,
};