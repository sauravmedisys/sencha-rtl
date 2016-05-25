/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 Ext.Loader.setConfig({enabled: true});

Ext.define('rtltest.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
		'Ext.data.*',
		'Ext.tip.QuickTipManager',
		'Ext.form.*',
		'Ext.rtl.*',
        'rtltest.view.main.MainController',
        'rtltest.view.main.MainModel'
		
    ],
    xtype: 'app-main',
    controller: 'main',
    viewModel: {
        type: 'main'
    },
	rtl		: false,
    layout	: {
        type: 'border'
    },
	viewConfig    : {
        listeners     : {
            
        }
    },
	    initComponent : function(){
        var me       = this,
			params   = Ext.urlDecode(window.location.search.substring(1));
		
		console.log("hello init");
		if (params.lang) {
			if(params.lang == 'ar'){
				me.rtl =true;
			}else{
				me.rtl =false;
			}
		}
        me.callParent(arguments);
    },
    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'center',
		defaultType: 'textfield',
        items	:[{
			fieldLabel	: 'Select Language',
			xtype 		: 'combo',
			displayField:'language',
			emptyText	: 'Select a language...',
			store	 	:{
				fields	: ['code', 'language'],
				data 	: [
					{"code":"en", "language":"English"},
					{"code":"ar", "language":"Arabic"}
				]
			},
			listeners	: {
				select	: {
					fn	: function(cb, records) {
						var record = records[0];
						window.location.search = Ext.urlEncode({"lang":record.get("code")});
						
					},
					scope: this
				}
			}
			
		},{
			fieldLabel	: 'User ID',
			name		: 'user',
			emptyText	: 'user id'
			
		}, {
			fieldLabel	: 'Password',
			name		: 'pass',
			emptyText	: 'password',
		}, {
			xtype		: 'button',
			text		: 'check RTL',
			name		: 'remember'
		}]
        
    }],
	onSuccess: function() {
		
		return true;
	},
	
      
});
