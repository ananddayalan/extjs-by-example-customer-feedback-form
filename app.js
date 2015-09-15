Ext.application({

    name: 'MyApp',
    
    launch: function () {


//
//        Ext.create('Ext.toolbar.Toolbar', {
//            renderTo: document.body,
//            width: 550,
//            items: [
//                {
//                    text: 'My Button'
//                },
//                {
//                    text: 'Split Button',
//                    tooltip: {
//                        text: 'Tooltip info',
//                        title: 'Tip Title'
//                    },
//                    menu: {
//                        items: [{
//                            text: 'Task 1',
//                          //  handler: onItemClick
//                        }, '-', {
//                            text: 'Task 2',
//                          //  handler: onItemClick
//                        }, {
//                            text: 'Task 3',
//                         //   handler: onItemClick
//                        }]
//                    }
//                },
//                '->',
//                {
//                    xtype: 'textfield',
//                    name: 'field1',
//                    emptyText: 'search web site'
//                },
//                '-',
//                'Some Info',
//                {
//                    xtype: 'tbspacer'
//                },
//                {
//                    name: 'Count',
//                    xtype: 'numberfield',
//                    value: 0,
//                    maxValue: 10,
//                    minValue: 0,
//                    width: 60
//                }
//            ]
//        });
        Ext.create('Ext.container.Viewport', { 
            
            /* Viewport is specialized container which represents the browser’s application view area. */

            scrollable: true,
            
            /* We set this scrollable option to make this child component scrollable. Instead of true or false, this option can also take x or y as values to enable only horizontal or vertical scroll alone. */
            
            margin: 20,
            items: [
                {
                    xtype: 'container',
                    
                    layout: {
                        type: 'hbox',
                        align: 'center',
                        pack: 'center'
                    },
                    /* Here we're using hbox layout to arrange  the form panel horizontally in center. */
                    
                    items: [
                        {
                            xtype: 'form',
                            
                            maxWidth: 700,
                            flex: 1,
                            /* We're setting flex to make the form panel to fill the parent container's width and at the same time we're limiting max width of the form by setting maxWidth to 700. */
                            
                            bodyPadding: 20,
                            title: 'Custom Feedback',
                            items: [
                                {
                                    xtype: 'fieldcontainer',  
                                    layout: 'hbox',
                                    
                                    /* Here field container is used with hbox layout to put both the first name and last name under a single label. */
                                    
                                    fieldLabel: 'Name',
                                    combineErrors: true,
                                    
                                    defaultType: 'textfield',
                                    /* By setting defaultType at the container level you can avoid repeating xtype for the child components of this container. So by default all child which doesn't xtype set will default to textfield. */
                                    
                                    defaults: {
                                        allowBlank: false,
                                        flex: 1
                                    },
                                 /* The defaults config allows you to set any config which will be set as default all the child components. Here we're set allowBlank to false to make the fields as required fields, and flex property is set to make to child components to width of the parent field container equally.*/                   
                                    items: [{
                                            name: 'firstName',
                                            emptyText: 'First Name'
                                    },
                                        {
                                            name: 'lastName',
                                            margin: '0 0 0 5',
                                            emptyText: 'Last Name' 
                                        }]
                                },
                                {
                                    xtype: 'datefield',
                                    fieldLabel: 'Date of Birth',
                                    name: 'dob',
                                    maxValue: new Date() /* Prevent entering future date. */
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
                                                url: 'cutomer/feedback',
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
                        }]
                }]

        });

    }
});