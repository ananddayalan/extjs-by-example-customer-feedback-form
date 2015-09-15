Ext.application({
//    extend: 'Ext.app.Application',
//    views: ['ExtJSByExample.view.form.Satisfaction'],
    name: 'MyApp',

    launch: function () {
        //        Ext.create('Ext.Panel', {
        //            renderTo     : Ext.getBody(),
        //            width        : 300,
        //            bodyPadding  : 10,
        //            title        : 'ExtJS',
        //            html: "Hello"
        //        });
        //        

//        Ext.create('ExtJSByExample.view.form.Satisfaction', {
//            renderTo: Ext.getBody(),
//            width: 300,
//            bodyPadding: 10,
//            title: 'ExtJS'
//        });
    
//     Ext.create('Ext.form.HtmlEditor', {
//         width: 600,
//         height: 200,
//         renderTo: Ext.getBody()
//     });
        
//        
//        Ext.create('Ext.Button', {
//    text: 'My Button',
//             renderTo: Ext.getBody(),
//    menu: [{
//                        text:'Item 1'
//                    },{
//                        text:'Item 2'
//                    },{
//                        text:'Item 3'
//                    }]
//}); 
var months = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"JAN", "name":"January"},
        {"abbr":"FEB", "name":"February"},
        {"abbr":"MAR", "name":"March"},
        {"abbr":"APR", "name":"April"},
        {"abbr":"MAY", "name":"May"},
        {"abbr":"JUN", "name":"June"},
        {"abbr":"JUL", "name":"July"},
        {"abbr":"AUG", "name":"Auguest"},
        {"abbr":"SEP", "name":"September"},
        {"abbr":"OCT", "name":"October"},
        {"abbr":"NOV", "name":"November"},
        {"abbr":"DEC", "name":"December"}
    ]
});
//        Ext.MessageBox.show({
//            title:'Save Changes?',
//            msg: 'Do you want to save the file?',
//            buttons: Ext.MessageBox.YESNO, 
//            fn: function(button){
//                    if('yes'==button)
//                    {
//     
//                    }
//                    else if('no'==button)
//                    {
//                    }
//                } ,
//            icon: Ext.MessageBox.QUESTION
//        }); 
//        
//        Ext.create('Ext.form.ComboBox', {
//    fieldLabel: 'Choose Month',
//    store: months,
//    queryMode: 'local',
//    displayField: 'name',
//    valueField: 'abbr',
//    renderTo: Ext.getBody()
//});
    
//           Ext.create('Ext.form.FieldContainer', {
//               fieldLabel: 'Name',
//               layout: 'hbox',
//               combineErrors: true,
//               defaultType: 'textfield',
//               defaults: {
//                   hideLabel: 'true'
//               },
//               items: [{
//                   name: 'firstName',
//                   fieldLabel: 'First Name',
//                   flex: 2,
//                   emptyText: 'First',
//                   allowBlank: false
//                    }, {
//                   name: 'lastName',
//                   fieldLabel: 'Last Name',
//                   flex: 3,
//                   margin: '0 0 0 6',
//                   emptyText: 'Last',
//                   allowBlank: false
//                    }]
//           });
        
//        Ext.create('Ext.form.field.Number', {
//            renderTo: Ext.getBody(),
//            name: 'Count',
//            fieldLabel: 'Count',
//            value: 0,
//            maxValue: 10,
//            minValue: 0
//        });
//        
//        Ext.create('Ext.Button', {
//            renderTo: Ext.getBody(),
//            text: 'Link Button',
//            href: 'http://www.sencha.com/'
//        });
        
//        Ext.create('Ext.Button', {
//            text: 'My Button',
//            renderTo: Ext.getBody(),
//            menu: [{
//                text: 'Item 1'
//                    }, {
//                text: 'Item 2'
//                    }, {
//                text: 'Item 3'
//                    }]
//        });
        
//        Ext.create('Ext.form.RadioGroup', {
//
//    renderTo: Ext.getBody(),
//     
//        fieldLabel: 'Sex ',
//        vertical: true,
//        columns: 1,
//        items: [
//            { boxLabel: 'Male', name: 'rb', inputValue: '1' },
//            { boxLabel: 'Female', name: 'rb', inputValue: '2' }
//        ]
//
//});

//           Ext.create('Ext.form.HtmlEditor', {
//         width: 800,
//         height: 250,
//         renderTo: Ext.getBody()
//     });
        
//Ext.create('Ext.form.CheckboxGroup', {
//
//    renderTo: Ext.getBody(),
//     
//        fieldLabel: 'Skills ',
//        vertical: true,
//        columns: 1,
//
//        items: [
//            { boxLabel: 'C++', name: 'rb', inputValue: '1' },
//            { boxLabel: '.Net Framework', name: 'rb', inputValue: '2', checked: true },
//            { boxLabel: 'C#', name: 'rb', inputValue: '3' },
//            { boxLabel: 'SQL Server', name: 'rb', inputValue: '4' },
//        ]
//
//});
        
//                Ext.create('Ext.form.FieldContainer', {
//            renderTo: Ext.getBody(),
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
//                        emptyText: 'First Name',
//                        allowBlank: false
//                    }, {
//                        name: 'lastName',
//                        fieldLabel: 'Last Name',
//                        flex: 3,
//                        margin: '0 0 0 5',
//                        emptyText: 'Last Name',
//                        allowBlank: false
//                    }]
//                    }
//        );
        
//        Ext.create('Ext.form.FieldContainer', {
//            renderTo: Ext.getBody(),
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
//                        emptyText: 'First Name',
//                        allowBlank: false
//                    }, {
//                        name: 'lastName',
//                        fieldLabel: 'Last Name',
//                        flex: 3,
//                        margin: '0 0 0 5',
//                        emptyText: 'Last Name',
//                        allowBlank: false
//                    }]
//                    }
//        );
        Ext.create('Ext.Panel', {
        renderTo: Ext.getBody(),
        width: 600,
        bodyPadding: 10,
        title: 'Custom Feedback',
        items: [
            {
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
                    emptyText: 'First Name',
                    allowBlank: false
                    }, {
                    name: 'lastName',
                    fieldLabel: 'Last Name',
                    flex: 3,
                    margin: '0 0 0 5',
                    emptyText: 'Last Name',
                    allowBlank: false
                    }]
                    },
            {

                xtype: 'datefield',
                anchor: '100%',
                fieldLabel: 'Date of Birth',
                name: 'dob',
                maxValue: new Date()

                },
            {
                fieldLabel: 'Email Address',
                name: 'email',
                vtype: 'email',
                xtype: 'textfield',
                allowBlank: false
                    },
            {
                fieldLabel: 'Phone Number',
                xtype: 'textfield',
                labelWidth: 100,
                name: 'phone',
                width: 200,
                emptyText: 'xxx-xxx-xxxx',
                maskRe: /[\d\-]/,
                regex: /^\d{3}-\d{3}-\d{4}$/,
                regexText: 'The format must be xxx-xxx-xxxx'
                    },
            {
                xtype: 'numberfield',
                name: 'productsPurchased',
                fieldLabel: 'How many times have you purchased our product?',
                value: 0,
                maxValue: 1000,
                minValue: 0
                },
            {
                xtype: 'radiogroup',
                fieldLabel: 'How satisfied with our service?',
                vertical: true,
                columns: 1,
                items: [
                    {
                        boxLabel: 'Very satisfied',
                        name: 'rb',
                        inputValue: '1'
                        },
                    {
                        boxLabel: 'Satisfied',
                        name: 'rb',
                        inputValue: '2'
                        },
                    {
                        boxLabel: 'Didn\'t care',
                        name: 'rb',
                        inputValue: '3'
                        },
                    {
                        boxLabel: 'Dissatisfied',
                        name: 'rb',
                        inputValue: '4'
                        },
                    {
                        boxLabel: 'Very Dissatisfied',
                        name: 'rb',
                        inputValue: '5'
                        }
                    ]

                },
            {
                xtype: 'checkboxgroup',
                fieldLabel: 'Which of these words would you use to describe our products? Select all that apply',
                vertical: true,
                columns: 1,
                items: [
                    {
                        boxLabel: 'Reliable',
                        name: 'ch',
                        inputValue: '1'
                        },
                    {
                        boxLabel: 'High quality',
                        name: 'ch',
                        inputValue: '2'
                        },
                    {
                        boxLabel: 'Good value for money',
                        name: 'ch',
                        inputValue: '3'
                        },
                    {
                        boxLabel: 'Overpriced',
                        name: 'ch',
                        inputValue: '4'
                        },
                    {
                        boxLabel: 'Poor quality',
                        name: 'ch',
                        inputValue: '5'
                        }
                    ]

                },
            {
                xtype: 'radiogroup',
                fieldLabel: 'How likely is it that you would recommend this company to a friend or colleague?',
                vertical: false,
                defaults: {
                    padding: 20
                },
                //columns: 1,
                items: [
                    {
                        boxLabel: '1',
                        name: 'recommend',
                        inputValue: '1'
                        },
                    {
                        boxLabel: '2',
                        name: 'recommend',
                        inputValue: '2'
                        },
                    {
                        boxLabel: '3',
                        name: 'recommend',
                        inputValue: '3'
                        },
                    {
                        boxLabel: '4',
                        name: 'recommend',
                        inputValue: '4'
                        },
                    {
                        boxLabel: '5',
                        name: 'recommend',
                        inputValue: '5'
                        }
                    ]
                },
                {
                    xtype: 'textareafield',
                    fieldLabel: 'Comments',
                    labelAlign: 'top',
                    name: 'comments',
                    width: 400,
                    height: 100
                    }
                ],

            buttons: [
                        {
                            text: 'Submit',
                            handler: function () {
                                var form = this.up('form').getForm();
                                if (form.isValid()) {
                                    form.submit({
                                        success: function () {
                                         
                                        },
                                        failure: function () {
                                            
                                        }
                                    });
                                } else {
                                    Ext.Msg.alert('Error', 'Fix the errors in the form')
                                }
                            }
                        }
                    ]

                });

            }
        });