module.exports = {
    plugins: [
        'stylelint-scss'
    ],
    'extends': 'stylelint-config-standard',
    rules    : {
        'selector-list-comma-newline-after'            : 'always-multi-line',
        'value-list-comma-newline-after'               : null,
        'font-family-no-missing-generic-family-keyword': null,
        'at-rule-no-unknown'                           : null,
        'scss/at-rule-no-unknown'                      : true,
    }
};
