define([
    'jquery',
    'Magento_Ui/js/lib/core/storage/local'
], function ($, storage) {
    'use strict';
    return function (config, element) {
        let showHtml = function () {
            $(element).html(
                "This is example 4"
            );
        }
        showHtml();
    };
});
