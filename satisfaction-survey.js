Ext.define('ExtJSByExample.view.form.Satisfaction', {
    extend: 'Ext.form.Panel',
    xtype: 'form-satisfaction',
    items: [{
                    xtype: 'fieldcontainer',
                    fieldLabel: 'Name',
                    layout: 'hbox',
                    combineErrors: true,
                    defaultType: 'textfield',
                    defaults: {
                        hideLabel: 'true'
                    },
                    items: [{
                        name: 'firstName',
                        fieldLabel: 'First Name',
                        flex: 2,
                        emptyText: 'First',
                        allowBlank: false
                    }, {
                        name: 'lastName',
                        fieldLabel: 'Last Name',
                        flex: 3,
                        margin: '0 0 0 6',
                        emptyText: 'Last',
                        allowBlank: false
                    }]
                }
    ]
});

//Ext.define('ExtJSByExample.view.form.Satisfaction', {
//    extend: 'Ext.form.Panel',
//    xtype: 'form-satisfaction',
//    
//
//    frame: true,
//    title: 'Customer Satisfaction Survey',
//    bodyPadding: 5,
//
//    initComponent: function(){
////        var states = new Ext.data.Store({
////            model: KitchenSink.model.State,
////            proxy: {
////                type: 'memory',
////                reader: {
////                    type: 'array'
////                }
////            },
////            data: KitchenSink.data.DataSets.states
////        });
//
//        Ext.apply(this, {
//            width: 550,
//            fieldDefaults: {
//                labelAlign: 'right',
//                labelWidth: 90,
//                msgTarget: Ext.supports.Touch ? 'side' : 'qtip'
//            },
//
//            items: [{
//                xtype: 'fieldset',
//                title: 'Your Contact Information',
//                defaultType: 'textfield',
//                layout: 'anchor',
//                defaults: {
//                    anchor: '100%'
//                },
//                items: [{
//                    xtype: 'fieldcontainer',
//                    fieldLabel: 'Name',
//                    layout: 'hbox',
//                    combineErrors: true,
//                    defaultType: 'textfield',
//                    defaults: {
//                        hideLabel: 'true'
//                    },
//                    items: [{
//                        name: 'firstName',
//                        fieldLabel: 'First Name',
//                        flex: 2,
//                        emptyText: 'First',
//                        allowBlank: false
//                    }, {
//                        name: 'lastName',
//                        fieldLabel: 'Last Name',
//                        flex: 3,
//                        margin: '0 0 0 6',
//                        emptyText: 'Last',
//                        allowBlank: false
//                    }]
//                }, {
//                    xtype: 'container',
//                    layout: 'hbox',
//                    defaultType: 'textfield',
//                    margin: '0 0 5 0',
//                    items: [{
//                        fieldLabel: 'Email Address',
//                        name: 'email',
//                        vtype: 'email',
//                        flex: 1,
//                        allowBlank: false
//                    }, {
//                        fieldLabel: 'Phone Number',
//                        labelWidth: 100,
//                        name: 'phone',
//                        width: 200,
//                        emptyText: 'xxx-xxx-xxxx',
//                        maskRe: /[\d\-]/,
//                        regex: /^\d{3}-\d{3}-\d{4}$/,
//                        regexText: 'Must be in the format xxx-xxx-xxxx'
//                    }]
//                }]
//            }, {
//                xtype: 'fieldset',
//                title: 'Mailing Address',
//                defaultType: 'textfield',
//                layout: 'anchor',
//                defaults: {
//                    anchor: '100%'
//                },
//                items: [{
//                    labelWidth: 110,
//                    fieldLabel: 'Street Address',
//                    name: 'mailingStreet',
////                    listeners: {
//////                        scope: this
//////                        ,
//////                        change: this.onMailingAddrFieldChange
////                    },
//                    billingFieldName: 'billingStreet',
//                    allowBlank: false
//                }, {
//                    xtype: 'container',
//                    layout: 'hbox',
//                    margin: '0 0 5 0',
//                    items: [{
//                        labelWidth: 110,
//                        xtype: 'textfield',
//                        fieldLabel: 'City',
//                        name: 'mailingCity',
////                        listeners: {
//////                            scope: this,
//////                            change: this.onMailingAddrFieldChange
////                        },
//                        billingFieldName: 'billingCity',
//                        flex: 1,
//                        allowBlank: false
//                    }, {
//                        xtype: 'combobox',
//                        name: 'mailingState',
//                        forceSelection: true,
//                        maxLength: 2,
//                        enforceMaxLength: true,
////                        listeners: {
////                            scope: this,
////                            change: this.onMailingAddrFieldChange
////                        },
//                        billingFieldName: 'billingState',
//                        fieldLabel: 'State',
//                        labelWidth: 50,
//                        width: 115,
//                        listConfig: {
//                            minWidth: null
//                        },
//                        store: states,
//                        valueField: 'abbr',
//                        displayField: 'abbr',
//                        typeAhead: true,
//                        queryMode: 'local',
//                        allowBlank: false
//                    }, {
//                        xtype: 'textfield',
//                        fieldLabel: 'Postal Code',
//                        labelWidth: 80,
//                        name: 'mailingPostalCode',
//                        listeners: {
//                            scope: this,
//                            change: this.onMailingAddrFieldChange
//                        },
//                        billingFieldName: 'billingPostalCode',
//                        width: 160,
//                        allowBlank: false,
//                        maxLength: 10,
//                        enforceMaxLength: true,
//                        maskRe: /[\d\-]/,
//                        regex: /^\d{5}(\-\d{4})?$/,
//                        regexText: 'Must be in the format xxxxx or xxxxx-xxxx'
//                    }]
//                }]
//            }, {
//                xtype: 'fieldset',
//                title: 'Billing Address',
//                layout: 'anchor',
//                defaults: {
//                    anchor: '100%'
//                },
//                items: [{
//                    xtype: 'checkbox',
//                    name: 'billingSameAsMailing',
//                    boxLabel: 'Same as Mailing Address?',
//                    hideLabel: true,
//                    checked: true,
//                    margin: '0 0 10 0',
////                    scope: this,
////                    handler: this.onSameAddressChange
//                }, {
//                    labelWidth: 110,
//                    xtype: 'textfield',
//                    fieldLabel: 'Street Address',
//                    name: 'billingStreet',
//                    style: 'opacity:.3',
//                    disabled: true,
//                    allowBlank: false
//                }, {
//                    xtype: 'container',
//                    layout: 'hbox',
//                    margin: '0 0 5 0',
//                    items: [{
//                        labelWidth: 110,
//                        xtype: 'textfield',
//                        fieldLabel: 'City',
//                        name: 'billingCity',
//                        style: 'opacity:.3',
//                        flex: 1,
//                        disabled: true,
//                        allowBlank: false
//                    }, {
//                        xtype: 'combobox',
//                        name: 'billingState',
//                        maxLength: 2,
//                        enforceMaxLength: true,
//                        style: 'opacity:.3',
//                        fieldLabel: 'State',
//                        labelWidth: 50,
//                        listConfig: {
//                            minWidth: null
//                        },
//                        width: 115,
//                        store: billingStates,
//                        valueField: 'abbr',
//                        displayField: 'abbr',
//                        typeAhead: true,
//                        queryMode: 'local',
//                        disabled: true,
//                        allowBlank: false,
//                        forceSelection: true
//                    }, {
//                        xtype: 'textfield',
//                        fieldLabel: 'Postal Code',
//                        labelWidth: 80,
//                        name: 'billingPostalCode',
//                        style: 'opacity:.3',
//                        width: 160,
//                        disabled: true,
//                        allowBlank: false,
//                        maxLength: 10,
//                        enforceMaxLength: true,
//                        maskRe: /[\d\-]/,
//                        regex: /^\d{5}(\-\d{4})?$/,
//                        regexText: 'Must be in the format xxxxx or xxxxx-xxxx'
//                    }]
//                }]
//            }, {
//                xtype: 'fieldset',
//                title: 'Payment',
//                layout: 'anchor',
//                defaults: {
//                    anchor: '100%'
//                },
//                items: [{
//                    xtype: 'radiogroup',
//                    layout: {
//                        autoFlex: false
//                    },
//                    defaults: {
//                        name: 'ccType',
//                        margin: '0 15 0 0'
//                    },
//                    items: [{
//                        inputValue: 'visa',
//                        boxLabel: 'VISA',
//                        checked: true
//                    }, {
//                        inputValue: 'mastercard',
//                        boxLabel: 'MasterCard'
//                    }, {
//                        inputValue: 'amex',
//                        boxLabel: 'American Express'
//                    }, {
//                        inputValue: 'discover',
//                        boxLabel: 'Discover'
//                    }]
//                }, {
//                    xtype: 'textfield',
//                    name: 'ccName',
//                    fieldLabel: 'Name On Card',
//                    labelWidth: 110,
//                    allowBlank: false
//                }, {
//                    xtype: 'container',
//                    layout: 'hbox',
//                    margin: '0 0 5 0',
//                    items: [{
//                        xtype: 'textfield',
//                        name: 'ccNumber',
//                        fieldLabel: 'Card Number',
//                        labelWidth: 110,
//                        flex: 1,
//                        allowBlank: false,
//                        minLength: 15,
//                        maxLength: 16,
//                        enforceMaxLength: true,
//                        maskRe: /\d/
//                    }, {
//                        xtype: 'fieldcontainer',
//                        fieldLabel: 'Expiration',
//                        labelWidth: 75,
//                        layout: 'hbox',
//                        items: [{
//                            xtype: 'combobox',
//                            name: 'ccExpireMonth',
//                            displayField: 'name',
//                            valueField: 'num',
//                            queryMode: 'local',
//                            emptyText: 'Month',
//                            hideLabel: true,
//                            margin: '0 6 0 0',
//                            store: new Ext.data.Store({
//                                fields: ['name', 'num'],
////                                data: (function() {
////                                    var data = [];
////                                        Ext.Array.forEach(Ext.Date.monthNames, function(name, i) {
////                                        data[i] = {name: name, num: i + 1};
////                                    });
////                                    return data;
////                                })()
////                            }),
//                            width: 100,
//                            allowBlank: false,
//                            forceSelection: true
//                        }, {
//                            xtype: 'numberfield',
//                            name: 'ccExpireYear',
//                            hideLabel: true,
//                            width: 70,
//                            value: new Date().getFullYear(),
//                            minValue: new Date().getFullYear(),
//                            allowBlank: false
//                        }]
//                    }]
//                }]
//            }
//        ],
//
//        buttons: [{
//            text: 'Reset',
////            scope: this,
////            handler: this.onResetClick
//        }, {
//            text: 'Complete Purchase',
//            width: 150,
////            scope: this,
////            handler: this.onCompleteClick
//        }]
//        });
//        this.callParent();
//    });
//
//}
//                                });