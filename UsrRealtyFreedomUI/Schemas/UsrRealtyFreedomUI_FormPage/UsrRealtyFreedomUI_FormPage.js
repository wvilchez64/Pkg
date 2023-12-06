/* jshint esversion: 11 */
define("UsrRealtyFreedomUI_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealtyFreedomUI"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "b18e8e8f-396b-496c-aa77-d076787a3ffb",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_vbgvufw",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_vbgvufw_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_calAvgPrice",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_ftxsfab_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalculateRealtyAveragePriceProcess",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "RecordIdParameter"
						}
					},
					"icon": "calculator-button-icon"
				},
				"parentName": "Button_vbgvufw",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_RunService",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_l1o1v2w_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceButtonRequest"
					},
					"icon": "database-icon"
				},
				"parentName": "Button_vbgvufw",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_lpjxfx8_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "usr.MyButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_y0sm0p0",
					"labelPosition": "auto",
					"control": "$NumberAttribute_y0sm0p0"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_vu41qoq",
					"labelPosition": "auto",
					"control": "$NumberAttribute_vu41qoq"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCommisionPercent",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrOfferTypeUsrCommisionPercent",
					"control": "$UsrOfferTypeUsrCommisionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrCommision",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_ewambyd",
					"labelPosition": "auto",
					"control": "$NumberAttribute_ewambyd",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_f8aizpb",
					"labelPosition": "auto",
					"control": "$LookupAttribute_f8aizpb",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_wmb27hx",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_wmb27hx_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_kom3q30",
					"labelPosition": "auto",
					"control": "$LookupAttribute_kom3q30",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_y6anpla",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_y6anpla_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrOfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_gw6gvws",
					"labelPosition": "auto",
					"control": "$StringAttribute_gw6gvws",
					"multiline": false,
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrManager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_gdptj43",
					"labelPosition": "auto",
					"control": "$LookupAttribute_gdptj43",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_6pv5pyj",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_6pv5pyj_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrManager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCountry",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.StringAttribute_8x253vt",
					"labelPosition": "auto",
					"control": "$StringAttribute_8x253vt",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_cj9gnzn",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_cj9gnzn_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrCountry",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCity",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_859mt0j",
					"labelPosition": "auto",
					"control": "$LookupAttribute_859mt0j",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_10at1oc",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_10at1oc_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrCity",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_s1npvs7",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_s1npvs7_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_r3alptc",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_s1npvs7",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_mdc5rpv",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_r3alptc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_5vwfx8u",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_5vwfx8u_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisitFreedomUI",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_mdc5rpv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_70zxznr",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_70zxznr_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_o2kzuw2DS"
						}
					}
				},
				"parentName": "FlexContainer_mdc5rpv",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_rl4nj8z",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_rl4nj8z_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_mdc5rpv",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_xqdbhir",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_xqdbhir_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_o2kzuw2"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_rl4nj8z",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_yc01jhc",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_yc01jhc_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisitFreedomUI"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_rl4nj8z",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_nno9pty",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_nno9pty_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_o2kzuw2"
					]
				},
				"parentName": "FlexContainer_mdc5rpv",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_zj4s9dr",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_s1npvs7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_o2kzuw2",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_o2kzuw2",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_o2kzuw2DS_Id",
					"columns": [
						{
							"id": "488676ba-98c7-8978-a70c-f21232aac626",
							"code": "GridDetail_o2kzuw2DS_UsrVisitDateTime",
							"path": "UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_o2kzuw2DS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 152.98513793945312
						},
						{
							"id": "d4aa0e10-e563-2d4a-2307-be01394e6723",
							"code": "GridDetail_o2kzuw2DS_UsrPotentialCustomer",
							"path": "UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_o2kzuw2DS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "9918e1df-d93e-7ef8-7bb4-e3523d8e5f78",
							"code": "GridDetail_o2kzuw2DS_UsrComments",
							"caption": "#ResourceString(GridDetail_o2kzuw2DS_UsrComments)#",
							"dataValueType": 28
						},
						{
							"id": "856015d3-c8c0-f5e8-a137-e9e690248f6e",
							"code": "GridDetail_o2kzuw2DS_UsrManager",
							"path": "UsrManager",
							"caption": "#ResourceString(GridDetail_o2kzuw2DS_UsrManager)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "086bfa59-672d-844d-8801-87ea1ea1d8f4",
							"code": "GridDetail_o2kzuw2DS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(GridDetail_o2kzuw2DS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				},
				"parentName": "GridContainer_zj4s9dr",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"NumberAttribute_ae8dpfl": {
						"modelConfig": {
							"path": "PDS.UsrColumn2"
						}
					},
					"NumberAttribute_vu41qoq": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 10,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"LookupAttribute_f8aizpb": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"LookupAttribute_kom3q30": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"StringAttribute_gw6gvws": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"NumberAttribute_y0sm0p0": {
						"modelConfig": {
							"path": "PDS.UsrPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"StringAttribute_cvee152": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"StringAttribute_7rbw3ww": {
						"modelConfig": {}
					},
					"StringAttribute_8x253vt": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"LookupAttribute_gdptj43": {
						"modelConfig": {
							"path": "PDS.UsrColumn11"
						}
					},
					"LookupAttribute_859mt0j": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"NumberAttribute_ewambyd": {
						"modelConfig": {
							"path": "PDS.UsrCommision"
						}
					},
					"UsrOfferTypeUsrCommisionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommisionPercent"
						}
					},
					"GridDetail_o2kzuw2": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_o2kzuw2DS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrPotentialCustomer"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_o2kzuw2DS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_o2kzuw2DS.UsrVisitDateTime"
									}
								},
								"GridDetail_o2kzuw2DS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_o2kzuw2DS.UsrPotentialCustomer"
									}
								},
								"GridDetail_o2kzuw2DS_UsrComments": {
									"modelConfig": {
										"path": "GridDetail_o2kzuw2DS.UsrComments"
									}
								},
								"GridDetail_o2kzuw2DS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_o2kzuw2DS.UsrManager"
									}
								},
								"GridDetail_o2kzuw2DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_o2kzuw2DS.CreatedOn"
									}
								},
								"GridDetail_o2kzuw2DS_Id": {
									"modelConfig": {
										"path": "GridDetail_o2kzuw2DS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_o2kzuw2DS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealtyFreedomUI",
							"attributes": {
								"UsrOfferTypeUsrCommisionPercent": {
									"path": "UsrOfferType.UsrCommisionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_o2kzuw2DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisitFreedomUI",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrComments": {
									"path": "UsrComments"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.RunWebServiceButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Run web service button works...");

					var typeObject = await request.$context.LookupAttribute_f8aizpb;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;
					}
					// get id from type lookup type object

					var offerTypeObject = await request.$context.LookupAttribute_kom3q30;
					var offerTypeId = "";
					if (offerTypeObject) {
						offerTypeId = offerTypeObject.value;
					}
					// get id from type lookup offer type object

					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();

					/* Specify the URL to retrieve the current rate. Use the coindesk.com external service. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "RealtyService";
					const methodName = "GetTotalAmountByTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
                    //const endpoint = "http://localhost/D5_8.0.8.4758/0/rest/RealtyService/GetTotalAmountByTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						realtyTypeId: typeId,
						realtyOfferTypeId: offerTypeId,
						entityName: "UsrRealtyFreedomUI"
					};
					const response = await httpClientService.post(endpoint, params);
					
					this.console.log("response total price = " + response.body.GetTotalAmountByTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "usr.MyButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.NumberAttribute_y0sm0p0;
					this.console.log("Price = " + price);
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
					/* If the UsrPriceUSD field changes, take the following steps. */
					if (request.attributeName === 'NumberAttribute_y0sm0p0' || 					// if price changed
					   request.attributeName === 'UsrOfferTypeUsrCommisionPercent' ) { 		// or multiplier changed
						var price = await request.$context.NumberAttribute_y0sm0p0;
						var percent = await request.$context.UsrOfferTypeUsrCommisionPercent;
						var commission = price * percent / 100;
						request.$context.NumberAttribute_ewambyd = commission;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});