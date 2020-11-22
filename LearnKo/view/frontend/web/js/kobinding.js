define([
    'uiComponent'
], function(Component) {

    return Component.extend({
        initialize: function () {
            this._super();
            this.sayHelloFromTemplate = "This is the binding text from KO template...";
        },
    });
});
