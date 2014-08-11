/*global define*/
define(function () {
    'use strict';
    var moduleNameTemplate = 'orodatagrid/js/datagrid/cell/{{type}}-cell',
        types = {
            integer:   'number',
            decimal:   'number',
            percent:   'number',
            currency:  'number'
        };

    return function (type) {
        return moduleNameTemplate.replace('{{type}}', types[type] || type);
    };
});
