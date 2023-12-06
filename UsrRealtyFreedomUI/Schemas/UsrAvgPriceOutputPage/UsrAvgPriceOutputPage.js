define("UsrAvgPriceOutputPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
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
				"name": "GeneralInfoTab",
				"values": {
					"type": "crt.TabContainer"
				}
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTab",
				"properties": [
					"rows",
					"columns",
					"gap"
				]
			},
			{
				"operation": "insert",
				"name": "GridContainer_c2a6gob",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large"
					},
					"items": []
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_daak8te",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_0ngko6z",
					"labelPosition": "auto",
					"control": "$NumberAttribute_0ngko6z",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_c2a6gob",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_vhxhoxi",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 7
					},
					"type": "crt.Input",
					"label": "#ResourceString(Input_vhxhoxi_label)#",
					"labelPosition": "auto",
					"control": "$StringAttribute_xfl1upd",
					"multiline": false,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_c2a6gob",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"NumberAttribute_0ngko6z": {
						"modelConfig": {
							"path": "PageParameters.UsrIntegerParameter1"
						}
					},
					"StringAttribute_xfl1upd": {
						"modelConfig": {
							"path": "PageParameters.UsrTextParameter1"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});