Ext.define('MyApp.locale.he.Viewport', {
    override: 'Ext.plugin.Viewport',
    requires: 'Ext.rtl.*',
    setCmp: function (cmp) {

        this.callParent([cmp]);

        cmp.rtl = true;
    }    
})