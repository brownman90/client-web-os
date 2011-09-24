/**
 * @class Viewport
 * @extends Ext.container.Viewport
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Desktop viewport widget
 */
Ext.define('Kebab.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.viewport',

    id: 'viewport',
    
    requires : [
        'Kebab.library.layout.FitAll'
    ],

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            layout:'fitall'
        });

        me.callParent(arguments);
    }
});