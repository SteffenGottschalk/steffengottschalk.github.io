(function (sg, jQuery, undefined) {
    'use strict';

    jQuery('document').ready(function () {
        jQuery('body').samplePlugin();
    });
}(window.sg = window.sh || {}, jQuery));

/* global Modernizr */
(function (jQuery, window, document, undefined) {
    'use strict';

    // Create the defaults once
    var pluginname = 'samplePlugin',
    defaults = {
        propertyName: 'value'
    };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.$el = jQuery(element);
        this.metadata = this.$el.data('plugin-options');
        this.options = jQuery.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginname;
        this.init();
    }

    Plugin.prototype.init = function () {
        // console.log('pluginname:' + pluginname);        
    };

    Plugin.prototype.destroy = function () {
        this.$el.removeData();
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    jQuery.fn[pluginname] = function (options) {
        return this.each(function () {
            if (!jQuery.data(this, 'plugin_' + pluginname)) {
                jQuery.data(this, 'plugin_' + pluginname,
        new Plugin(this, options));
            }
        });
    };
})(jQuery, window, document);
