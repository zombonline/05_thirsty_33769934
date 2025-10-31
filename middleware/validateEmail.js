const ERRORS = {
    EMPTY: 'Input should not be empty.',
    TOO_LONG: 'Input too long.',

    EMAIL_INVALID: 'Input is not a valid email address.',
    EMAIL_MISSING_LOCAL: 'Input is missing local part.',
    EMAIL_MISSING_DOMAIN: 'Input is missing domain part.',
    EMAIL_LOCAL_TOO_LONG: 'Input local part is too long.',  
    EMAIL_DOMAIN_TOO_LONG: 'Input domain part is too long.',
    EMAIL_CONSEC_PERIOD: 'Input contains consecutive periods.',
    EMAIL_NO_ASPERAND: 'Input should contain an "@" symbol.',
};

function validateEmail(val){
    const regRfc5322 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const local = val.substring(0, val.lastIndexOf('@'));
    const domain = val.substring(val.lastIndexOf('@')+1);
    const checks = [
        { condition: () => val.length < 1, error: new Error(ERRORS.EMPTY) },
        { condition: () => val.length > 320, error: new Error(ERRORS.TOO_LONG) },
        { condition: () => !val.includes('@'), error: new Error(ERRORS.EMAIL_NO_ASPERAND) },
        { condition: () => local.length < 1, error: new Error(ERRORS.EMAIL_MISSING_LOCAL) },
        { condition: () => domain.length < 1, error: new Error(ERRORS.EMAIL_MISSING_DOMAIN) },
        { condition: () => local.length > 64, error: new Error(ERRORS.EMAIL_LOCAL_TOO_LONG) },
        { condition: () => domain.length > 255, error: new Error(ERRORS.EMAIL_DOMAIN_TOO_LONG) },
        { condition: () => val.includes('..'), error: new Error(ERRORS.EMAIL_CONSEC_PERIOD) },
        { condition: () => !regRfc5322.test(val), error: new Error(ERRORS.EMAIL_INVALID) }, 
    ];
    checks.forEach(check => {
        if(check.condition()){
            throw check.error;
        }
    });
    return true;
};

module.exports = validateEmail;