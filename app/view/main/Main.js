/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('rtltest.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
		'Ext.rtl.*',
        'rtltest.view.main.MainController',
        'rtltest.view.main.MainModel'
		
    ],
    xtype: 'app-main',
	//rtl: true,
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'center',
		defaultType: 'textfield',
        items	:[{
			fieldLabel: 'User ID',
			name: 'user',
			emptyText: 'user id'
			
		}, {
			fieldLabel: 'Password',
			name: 'pass',
			emptyText: 'password',
		}, {
			xtype: 'button',
			text: 'check RTL',
			name: 'remember'
		}]
        
    }]
});
