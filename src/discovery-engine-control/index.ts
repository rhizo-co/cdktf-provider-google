// https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiscoveryEngineControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * The collection ID. Currently only accepts "default_collection".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#collection_id DiscoveryEngineControl#collection_id}
  */
  readonly collectionId?: string;
  /**
  * The unique id of the control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#control_id DiscoveryEngineControl#control_id}
  */
  readonly controlId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#deletion_policy DiscoveryEngineControl#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The display name of the control. This field must be a UTF-8 encoded
  * string with a length limit of 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#display_name DiscoveryEngineControl#display_name}
  */
  readonly displayName: string;
  /**
  * The engine to add the control to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#engine_id DiscoveryEngineControl#engine_id}
  */
  readonly engineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#id DiscoveryEngineControl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The geographic location where the data store should reside. The value can
  * only be one of "global", "us" and "eu".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#location DiscoveryEngineControl#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#project DiscoveryEngineControl#project}
  */
  readonly project?: string;
  /**
  * The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#solution_type DiscoveryEngineControl#solution_type}
  */
  readonly solutionType: string;
  /**
  * The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#use_cases DiscoveryEngineControl#use_cases}
  */
  readonly useCases?: string[];
  /**
  * boost_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#boost_action DiscoveryEngineControl#boost_action}
  */
  readonly boostAction?: DiscoveryEngineControlBoostAction;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#conditions DiscoveryEngineControl#conditions}
  */
  readonly conditions?: DiscoveryEngineControlConditions[] | cdktf.IResolvable;
  /**
  * filter_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#filter_action DiscoveryEngineControl#filter_action}
  */
  readonly filterAction?: DiscoveryEngineControlFilterAction;
  /**
  * promote_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#promote_action DiscoveryEngineControl#promote_action}
  */
  readonly promoteAction?: DiscoveryEngineControlPromoteAction;
  /**
  * redirect_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#redirect_action DiscoveryEngineControl#redirect_action}
  */
  readonly redirectAction?: DiscoveryEngineControlRedirectAction;
  /**
  * synonyms_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#synonyms_action DiscoveryEngineControl#synonyms_action}
  */
  readonly synonymsAction?: DiscoveryEngineControlSynonymsAction;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#timeouts DiscoveryEngineControl#timeouts}
  */
  readonly timeouts?: DiscoveryEngineControlTimeouts;
}
export interface DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint {
  /**
  * The attribute value of the control point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#attribute_value DiscoveryEngineControl#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * The value between -1 to 1 by which to boost the score if the attributeValue
  * evaluates to the value specified above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#boost_amount DiscoveryEngineControl#boost_amount}
  */
  readonly boostAmount?: number;
}

export function discoveryEngineControlBoostActionInterpolationBoostSpecControlPointToTerraform(struct?: DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference | DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    boost_amount: cdktf.numberToTerraform(struct!.boostAmount),
  }
}


export function discoveryEngineControlBoostActionInterpolationBoostSpecControlPointToHclTerraform(struct?: DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference | DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boost_amount: {
      value: cdktf.numberToHclTerraform(struct!.boostAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    if (this._boostAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.boostAmount = this._boostAmount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributeValue = undefined;
      this._boostAmount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributeValue = value.attributeValue;
      this._boostAmount = value.boostAmount;
    }
  }

  // attribute_value - computed: false, optional: true, required: false
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  public resetAttributeValue() {
    this._attributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // boost_amount - computed: false, optional: true, required: false
  private _boostAmount?: number; 
  public get boostAmount() {
    return this.getNumberAttribute('boost_amount');
  }
  public set boostAmount(value: number) {
    this._boostAmount = value;
  }
  public resetBoostAmount() {
    this._boostAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boostAmountInput() {
    return this._boostAmount;
  }
}
export interface DiscoveryEngineControlBoostActionInterpolationBoostSpec {
  /**
  * The attribute type to be used to determine the boost amount. Possible values: ["NUMERICAL", "FRESHNESS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#attribute_type DiscoveryEngineControl#attribute_type}
  */
  readonly attributeType?: string;
  /**
  * The name of the field whose value will be used to determine the boost amount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#field_name DiscoveryEngineControl#field_name}
  */
  readonly fieldName?: string;
  /**
  * The interpolation type to be applied to connect the control points. Possible values: ["LINEAR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#interpolation_type DiscoveryEngineControl#interpolation_type}
  */
  readonly interpolationType?: string;
  /**
  * control_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#control_point DiscoveryEngineControl#control_point}
  */
  readonly controlPoint?: DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint;
}

export function discoveryEngineControlBoostActionInterpolationBoostSpecToTerraform(struct?: DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference | DiscoveryEngineControlBoostActionInterpolationBoostSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_type: cdktf.stringToTerraform(struct!.attributeType),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    interpolation_type: cdktf.stringToTerraform(struct!.interpolationType),
    control_point: discoveryEngineControlBoostActionInterpolationBoostSpecControlPointToTerraform(struct!.controlPoint),
  }
}


export function discoveryEngineControlBoostActionInterpolationBoostSpecToHclTerraform(struct?: DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference | DiscoveryEngineControlBoostActionInterpolationBoostSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_type: {
      value: cdktf.stringToHclTerraform(struct!.attributeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interpolation_type: {
      value: cdktf.stringToHclTerraform(struct!.interpolationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_point: {
      value: discoveryEngineControlBoostActionInterpolationBoostSpecControlPointToHclTerraform(struct!.controlPoint),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineControlBoostActionInterpolationBoostSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeType = this._attributeType;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._interpolationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpolationType = this._interpolationType;
    }
    if (this._controlPoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPoint = this._controlPoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineControlBoostActionInterpolationBoostSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributeType = undefined;
      this._fieldName = undefined;
      this._interpolationType = undefined;
      this._controlPoint.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributeType = value.attributeType;
      this._fieldName = value.fieldName;
      this._interpolationType = value.interpolationType;
      this._controlPoint.internalValue = value.controlPoint;
    }
  }

  // attribute_type - computed: false, optional: true, required: false
  private _attributeType?: string; 
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }
  public set attributeType(value: string) {
    this._attributeType = value;
  }
  public resetAttributeType() {
    this._attributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypeInput() {
    return this._attributeType;
  }

  // field_name - computed: false, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // interpolation_type - computed: false, optional: true, required: false
  private _interpolationType?: string; 
  public get interpolationType() {
    return this.getStringAttribute('interpolation_type');
  }
  public set interpolationType(value: string) {
    this._interpolationType = value;
  }
  public resetInterpolationType() {
    this._interpolationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpolationTypeInput() {
    return this._interpolationType;
  }

  // control_point - computed: false, optional: true, required: false
  private _controlPoint = new DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference(this, "control_point");
  public get controlPoint() {
    return this._controlPoint;
  }
  public putControlPoint(value: DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint) {
    this._controlPoint.internalValue = value;
  }
  public resetControlPoint() {
    this._controlPoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPointInput() {
    return this._controlPoint.internalValue;
  }
}
export interface DiscoveryEngineControlBoostAction {
  /**
  * The data store to boost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#data_store DiscoveryEngineControl#data_store}
  */
  readonly dataStore: string;
  /**
  * The filter to apply to the search results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#filter DiscoveryEngineControl#filter}
  */
  readonly filter: string;
  /**
  * The fixed boost value to apply to the search results. Positive values will increase the relevance of the results, while negative values will decrease the relevance. The value must be between -100 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#fixed_boost DiscoveryEngineControl#fixed_boost}
  */
  readonly fixedBoost?: number;
  /**
  * interpolation_boost_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#interpolation_boost_spec DiscoveryEngineControl#interpolation_boost_spec}
  */
  readonly interpolationBoostSpec?: DiscoveryEngineControlBoostActionInterpolationBoostSpec;
}

export function discoveryEngineControlBoostActionToTerraform(struct?: DiscoveryEngineControlBoostActionOutputReference | DiscoveryEngineControlBoostAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_store: cdktf.stringToTerraform(struct!.dataStore),
    filter: cdktf.stringToTerraform(struct!.filter),
    fixed_boost: cdktf.numberToTerraform(struct!.fixedBoost),
    interpolation_boost_spec: discoveryEngineControlBoostActionInterpolationBoostSpecToTerraform(struct!.interpolationBoostSpec),
  }
}


export function discoveryEngineControlBoostActionToHclTerraform(struct?: DiscoveryEngineControlBoostActionOutputReference | DiscoveryEngineControlBoostAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_store: {
      value: cdktf.stringToHclTerraform(struct!.dataStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_boost: {
      value: cdktf.numberToHclTerraform(struct!.fixedBoost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interpolation_boost_spec: {
      value: discoveryEngineControlBoostActionInterpolationBoostSpecToHclTerraform(struct!.interpolationBoostSpec),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineControlBoostActionInterpolationBoostSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineControlBoostActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineControlBoostAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStore = this._dataStore;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._fixedBoost !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedBoost = this._fixedBoost;
    }
    if (this._interpolationBoostSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpolationBoostSpec = this._interpolationBoostSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineControlBoostAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataStore = undefined;
      this._filter = undefined;
      this._fixedBoost = undefined;
      this._interpolationBoostSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataStore = value.dataStore;
      this._filter = value.filter;
      this._fixedBoost = value.fixedBoost;
      this._interpolationBoostSpec.internalValue = value.interpolationBoostSpec;
    }
  }

  // data_store - computed: false, optional: false, required: true
  private _dataStore?: string; 
  public get dataStore() {
    return this.getStringAttribute('data_store');
  }
  public set dataStore(value: string) {
    this._dataStore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreInput() {
    return this._dataStore;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // fixed_boost - computed: false, optional: true, required: false
  private _fixedBoost?: number; 
  public get fixedBoost() {
    return this.getNumberAttribute('fixed_boost');
  }
  public set fixedBoost(value: number) {
    this._fixedBoost = value;
  }
  public resetFixedBoost() {
    this._fixedBoost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedBoostInput() {
    return this._fixedBoost;
  }

  // interpolation_boost_spec - computed: false, optional: true, required: false
  private _interpolationBoostSpec = new DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference(this, "interpolation_boost_spec");
  public get interpolationBoostSpec() {
    return this._interpolationBoostSpec;
  }
  public putInterpolationBoostSpec(value: DiscoveryEngineControlBoostActionInterpolationBoostSpec) {
    this._interpolationBoostSpec.internalValue = value;
  }
  public resetInterpolationBoostSpec() {
    this._interpolationBoostSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpolationBoostSpecInput() {
    return this._interpolationBoostSpec.internalValue;
  }
}
export interface DiscoveryEngineControlConditionsActiveTimeRange {
  /**
  * The end time of the active time range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#end_time DiscoveryEngineControl#end_time}
  */
  readonly endTime?: string;
  /**
  * The start time of the active time range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#start_time DiscoveryEngineControl#start_time}
  */
  readonly startTime?: string;
}

export function discoveryEngineControlConditionsActiveTimeRangeToTerraform(struct?: DiscoveryEngineControlConditionsActiveTimeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function discoveryEngineControlConditionsActiveTimeRangeToHclTerraform(struct?: DiscoveryEngineControlConditionsActiveTimeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineControlConditionsActiveTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DiscoveryEngineControlConditionsActiveTimeRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineControlConditionsActiveTimeRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class DiscoveryEngineControlConditionsActiveTimeRangeList extends cdktf.ComplexList {
  public internalValue? : DiscoveryEngineControlConditionsActiveTimeRange[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DiscoveryEngineControlConditionsActiveTimeRangeOutputReference {
    return new DiscoveryEngineControlConditionsActiveTimeRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryEngineControlConditionsQueryTerms {
  /**
  * If true, the query term must be an exact match. Otherwise, the query term can be a partial match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#full_match DiscoveryEngineControl#full_match}
  */
  readonly fullMatch?: boolean | cdktf.IResolvable;
  /**
  * The value of the query term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#value DiscoveryEngineControl#value}
  */
  readonly value?: string;
}

export function discoveryEngineControlConditionsQueryTermsToTerraform(struct?: DiscoveryEngineControlConditionsQueryTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_match: cdktf.booleanToTerraform(struct!.fullMatch),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function discoveryEngineControlConditionsQueryTermsToHclTerraform(struct?: DiscoveryEngineControlConditionsQueryTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full_match: {
      value: cdktf.booleanToHclTerraform(struct!.fullMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineControlConditionsQueryTermsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DiscoveryEngineControlConditionsQueryTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullMatch = this._fullMatch;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineControlConditionsQueryTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fullMatch = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fullMatch = value.fullMatch;
      this._value = value.value;
    }
  }

  // full_match - computed: false, optional: true, required: false
  private _fullMatch?: boolean | cdktf.IResolvable; 
  public get fullMatch() {
    return this.getBooleanAttribute('full_match');
  }
  public set fullMatch(value: boolean | cdktf.IResolvable) {
    this._fullMatch = value;
  }
  public resetFullMatch() {
    this._fullMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullMatchInput() {
    return this._fullMatch;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DiscoveryEngineControlConditionsQueryTermsList extends cdktf.ComplexList {
  public internalValue? : DiscoveryEngineControlConditionsQueryTerms[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DiscoveryEngineControlConditionsQueryTermsOutputReference {
    return new DiscoveryEngineControlConditionsQueryTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryEngineControlConditions {
  /**
  * The regular expression that the query must match for this condition to be met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#query_regex DiscoveryEngineControl#query_regex}
  */
  readonly queryRegex?: string;
  /**
  * active_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#active_time_range DiscoveryEngineControl#active_time_range}
  */
  readonly activeTimeRange?: DiscoveryEngineControlConditionsActiveTimeRange[] | cdktf.IResolvable;
  /**
  * query_terms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#query_terms DiscoveryEngineControl#query_terms}
  */
  readonly queryTerms?: DiscoveryEngineControlConditionsQueryTerms[] | cdktf.IResolvable;
}

export function discoveryEngineControlConditionsToTerraform(struct?: DiscoveryEngineControlConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_regex: cdktf.stringToTerraform(struct!.queryRegex),
    active_time_range: cdktf.listMapper(discoveryEngineControlConditionsActiveTimeRangeToTerraform, true)(struct!.activeTimeRange),
    query_terms: cdktf.listMapper(discoveryEngineControlConditionsQueryTermsToTerraform, true)(struct!.queryTerms),
  }
}


export function discoveryEngineControlConditionsToHclTerraform(struct?: DiscoveryEngineControlConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_regex: {
      value: cdktf.stringToHclTerraform(struct!.queryRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active_time_range: {
      value: cdktf.listMapperHcl(discoveryEngineControlConditionsActiveTimeRangeToHclTerraform, true)(struct!.activeTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineControlConditionsActiveTimeRangeList",
    },
    query_terms: {
      value: cdktf.listMapperHcl(discoveryEngineControlConditionsQueryTermsToHclTerraform, true)(struct!.queryTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineControlConditionsQueryTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineControlConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DiscoveryEngineControlConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryRegex = this._queryRegex;
    }
    if (this._activeTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTimeRange = this._activeTimeRange?.internalValue;
    }
    if (this._queryTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTerms = this._queryTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineControlConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queryRegex = undefined;
      this._activeTimeRange.internalValue = undefined;
      this._queryTerms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queryRegex = value.queryRegex;
      this._activeTimeRange.internalValue = value.activeTimeRange;
      this._queryTerms.internalValue = value.queryTerms;
    }
  }

  // query_regex - computed: false, optional: true, required: false
  private _queryRegex?: string; 
  public get queryRegex() {
    return this.getStringAttribute('query_regex');
  }
  public set queryRegex(value: string) {
    this._queryRegex = value;
  }
  public resetQueryRegex() {
    this._queryRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryRegexInput() {
    return this._queryRegex;
  }

  // active_time_range - computed: false, optional: true, required: false
  private _activeTimeRange = new DiscoveryEngineControlConditionsActiveTimeRangeList(this, "active_time_range", false);
  public get activeTimeRange() {
    return this._activeTimeRange;
  }
  public putActiveTimeRange(value: DiscoveryEngineControlConditionsActiveTimeRange[] | cdktf.IResolvable) {
    this._activeTimeRange.internalValue = value;
  }
  public resetActiveTimeRange() {
    this._activeTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTimeRangeInput() {
    return this._activeTimeRange.internalValue;
  }

  // query_terms - computed: false, optional: true, required: false
  private _queryTerms = new DiscoveryEngineControlConditionsQueryTermsList(this, "query_terms", false);
  public get queryTerms() {
    return this._queryTerms;
  }
  public putQueryTerms(value: DiscoveryEngineControlConditionsQueryTerms[] | cdktf.IResolvable) {
    this._queryTerms.internalValue = value;
  }
  public resetQueryTerms() {
    this._queryTerms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTermsInput() {
    return this._queryTerms.internalValue;
  }
}

export class DiscoveryEngineControlConditionsList extends cdktf.ComplexList {
  public internalValue? : DiscoveryEngineControlConditions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DiscoveryEngineControlConditionsOutputReference {
    return new DiscoveryEngineControlConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryEngineControlFilterAction {
  /**
  * The data store to filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#data_store DiscoveryEngineControl#data_store}
  */
  readonly dataStore: string;
  /**
  * The filter to apply to the search results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#filter DiscoveryEngineControl#filter}
  */
  readonly filter: string;
}

export function discoveryEngineControlFilterActionToTerraform(struct?: DiscoveryEngineControlFilterActionOutputReference | DiscoveryEngineControlFilterAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_store: cdktf.stringToTerraform(struct!.dataStore),
    filter: cdktf.stringToTerraform(struct!.filter),
  }
}


export function discoveryEngineControlFilterActionToHclTerraform(struct?: DiscoveryEngineControlFilterActionOutputReference | DiscoveryEngineControlFilterAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_store: {
      value: cdktf.stringToHclTerraform(struct!.dataStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineControlFilterActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineControlFilterAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStore = this._dataStore;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineControlFilterAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataStore = undefined;
      this._filter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataStore = value.dataStore;
      this._filter = value.filter;
    }
  }

  // data_store - computed: false, optional: false, required: true
  private _dataStore?: string; 
  public get dataStore() {
    return this.getStringAttribute('data_store');
  }
  public set dataStore(value: string) {
    this._dataStore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreInput() {
    return this._dataStore;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }
}
export interface DiscoveryEngineControlPromoteActionSearchLinkPromotion {
  /**
  * The description of the promoted link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#description DiscoveryEngineControl#description}
  */
  readonly description?: string;
  /**
  * The document to promote.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#document DiscoveryEngineControl#document}
  */
  readonly document?: string;
  /**
  * Return promotions for basic site search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#enabled DiscoveryEngineControl#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The image URI of the promoted link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#image_uri DiscoveryEngineControl#image_uri}
  */
  readonly imageUri?: string;
  /**
  * The title of the promoted link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#title DiscoveryEngineControl#title}
  */
  readonly title: string;
  /**
  * The URI to promote.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#uri DiscoveryEngineControl#uri}
  */
  readonly uri?: string;
}

export function discoveryEngineControlPromoteActionSearchLinkPromotionToTerraform(struct?: DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference | DiscoveryEngineControlPromoteActionSearchLinkPromotion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    document: cdktf.stringToTerraform(struct!.document),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    title: cdktf.stringToTerraform(struct!.title),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function discoveryEngineControlPromoteActionSearchLinkPromotionToHclTerraform(struct?: DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference | DiscoveryEngineControlPromoteActionSearchLinkPromotion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document: {
      value: cdktf.stringToHclTerraform(struct!.document),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_uri: {
      value: cdktf.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineControlPromoteActionSearchLinkPromotion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._document !== undefined) {
      hasAnyValues = true;
      internalValueResult.document = this._document;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineControlPromoteActionSearchLinkPromotion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._document = undefined;
      this._enabled = undefined;
      this._imageUri = undefined;
      this._title = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._document = value.document;
      this._enabled = value.enabled;
      this._imageUri = value.imageUri;
      this._title = value.title;
      this._uri = value.uri;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // document - computed: false, optional: true, required: false
  private _document?: string; 
  public get document() {
    return this.getStringAttribute('document');
  }
  public set document(value: string) {
    this._document = value;
  }
  public resetDocument() {
    this._document = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentInput() {
    return this._document;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // image_uri - computed: false, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface DiscoveryEngineControlPromoteAction {
  /**
  * The data store to promote.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#data_store DiscoveryEngineControl#data_store}
  */
  readonly dataStore: string;
  /**
  * search_link_promotion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#search_link_promotion DiscoveryEngineControl#search_link_promotion}
  */
  readonly searchLinkPromotion: DiscoveryEngineControlPromoteActionSearchLinkPromotion;
}

export function discoveryEngineControlPromoteActionToTerraform(struct?: DiscoveryEngineControlPromoteActionOutputReference | DiscoveryEngineControlPromoteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_store: cdktf.stringToTerraform(struct!.dataStore),
    search_link_promotion: discoveryEngineControlPromoteActionSearchLinkPromotionToTerraform(struct!.searchLinkPromotion),
  }
}


export function discoveryEngineControlPromoteActionToHclTerraform(struct?: DiscoveryEngineControlPromoteActionOutputReference | DiscoveryEngineControlPromoteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_store: {
      value: cdktf.stringToHclTerraform(struct!.dataStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_link_promotion: {
      value: discoveryEngineControlPromoteActionSearchLinkPromotionToHclTerraform(struct!.searchLinkPromotion),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineControlPromoteActionSearchLinkPromotionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineControlPromoteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineControlPromoteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStore = this._dataStore;
    }
    if (this._searchLinkPromotion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchLinkPromotion = this._searchLinkPromotion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineControlPromoteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataStore = undefined;
      this._searchLinkPromotion.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataStore = value.dataStore;
      this._searchLinkPromotion.internalValue = value.searchLinkPromotion;
    }
  }

  // data_store - computed: false, optional: false, required: true
  private _dataStore?: string; 
  public get dataStore() {
    return this.getStringAttribute('data_store');
  }
  public set dataStore(value: string) {
    this._dataStore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreInput() {
    return this._dataStore;
  }

  // search_link_promotion - computed: false, optional: false, required: true
  private _searchLinkPromotion = new DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference(this, "search_link_promotion");
  public get searchLinkPromotion() {
    return this._searchLinkPromotion;
  }
  public putSearchLinkPromotion(value: DiscoveryEngineControlPromoteActionSearchLinkPromotion) {
    this._searchLinkPromotion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchLinkPromotionInput() {
    return this._searchLinkPromotion.internalValue;
  }
}
export interface DiscoveryEngineControlRedirectAction {
  /**
  * The URI to redirect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#redirect_uri DiscoveryEngineControl#redirect_uri}
  */
  readonly redirectUri: string;
}

export function discoveryEngineControlRedirectActionToTerraform(struct?: DiscoveryEngineControlRedirectActionOutputReference | DiscoveryEngineControlRedirectAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}


export function discoveryEngineControlRedirectActionToHclTerraform(struct?: DiscoveryEngineControlRedirectActionOutputReference | DiscoveryEngineControlRedirectAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redirect_uri: {
      value: cdktf.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineControlRedirectActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineControlRedirectAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineControlRedirectAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._redirectUri = value.redirectUri;
    }
  }

  // redirect_uri - computed: false, optional: false, required: true
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface DiscoveryEngineControlSynonymsAction {
  /**
  * The synonyms to apply to the search results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#synonyms DiscoveryEngineControl#synonyms}
  */
  readonly synonyms?: string[];
}

export function discoveryEngineControlSynonymsActionToTerraform(struct?: DiscoveryEngineControlSynonymsActionOutputReference | DiscoveryEngineControlSynonymsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    synonyms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.synonyms),
  }
}


export function discoveryEngineControlSynonymsActionToHclTerraform(struct?: DiscoveryEngineControlSynonymsActionOutputReference | DiscoveryEngineControlSynonymsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    synonyms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineControlSynonymsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineControlSynonymsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineControlSynonymsAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._synonyms = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._synonyms = value.synonyms;
    }
  }

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }
}
export interface DiscoveryEngineControlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#create DiscoveryEngineControl#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#delete DiscoveryEngineControl#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#update DiscoveryEngineControl#update}
  */
  readonly update?: string;
}

export function discoveryEngineControlTimeoutsToTerraform(struct?: DiscoveryEngineControlTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function discoveryEngineControlTimeoutsToHclTerraform(struct?: DiscoveryEngineControlTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineControlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryEngineControlTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineControlTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control google_discovery_engine_control}
*/
export class DiscoveryEngineControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiscoveryEngineControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscoveryEngineControl to import
  * @param importFromId The id of the existing DiscoveryEngineControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscoveryEngineControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_control google_discovery_engine_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryEngineControlConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryEngineControlConfig) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_control',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.3.0',
        providerVersionConstraint: '~> 8.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._collectionId = config.collectionId;
    this._controlId = config.controlId;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._engineId = config.engineId;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._solutionType = config.solutionType;
    this._useCases = config.useCases;
    this._boostAction.internalValue = config.boostAction;
    this._conditions.internalValue = config.conditions;
    this._filterAction.internalValue = config.filterAction;
    this._promoteAction.internalValue = config.promoteAction;
    this._redirectAction.internalValue = config.redirectAction;
    this._synonymsAction.internalValue = config.synonymsAction;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection_id - computed: false, optional: true, required: false
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  public resetCollectionId() {
    this._collectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // control_id - computed: false, optional: false, required: true
  private _controlId?: string; 
  public get controlId() {
    return this.getStringAttribute('control_id');
  }
  public set controlId(value: string) {
    this._controlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlIdInput() {
    return this._controlId;
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // engine_id - computed: false, optional: false, required: true
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // solution_type - computed: false, optional: false, required: true
  private _solutionType?: string; 
  public get solutionType() {
    return this.getStringAttribute('solution_type');
  }
  public set solutionType(value: string) {
    this._solutionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get solutionTypeInput() {
    return this._solutionType;
  }

  // use_cases - computed: false, optional: true, required: false
  private _useCases?: string[]; 
  public get useCases() {
    return this.getListAttribute('use_cases');
  }
  public set useCases(value: string[]) {
    this._useCases = value;
  }
  public resetUseCases() {
    this._useCases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCasesInput() {
    return this._useCases;
  }

  // boost_action - computed: false, optional: true, required: false
  private _boostAction = new DiscoveryEngineControlBoostActionOutputReference(this, "boost_action");
  public get boostAction() {
    return this._boostAction;
  }
  public putBoostAction(value: DiscoveryEngineControlBoostAction) {
    this._boostAction.internalValue = value;
  }
  public resetBoostAction() {
    this._boostAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boostActionInput() {
    return this._boostAction.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DiscoveryEngineControlConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DiscoveryEngineControlConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // filter_action - computed: false, optional: true, required: false
  private _filterAction = new DiscoveryEngineControlFilterActionOutputReference(this, "filter_action");
  public get filterAction() {
    return this._filterAction;
  }
  public putFilterAction(value: DiscoveryEngineControlFilterAction) {
    this._filterAction.internalValue = value;
  }
  public resetFilterAction() {
    this._filterAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterActionInput() {
    return this._filterAction.internalValue;
  }

  // promote_action - computed: false, optional: true, required: false
  private _promoteAction = new DiscoveryEngineControlPromoteActionOutputReference(this, "promote_action");
  public get promoteAction() {
    return this._promoteAction;
  }
  public putPromoteAction(value: DiscoveryEngineControlPromoteAction) {
    this._promoteAction.internalValue = value;
  }
  public resetPromoteAction() {
    this._promoteAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promoteActionInput() {
    return this._promoteAction.internalValue;
  }

  // redirect_action - computed: false, optional: true, required: false
  private _redirectAction = new DiscoveryEngineControlRedirectActionOutputReference(this, "redirect_action");
  public get redirectAction() {
    return this._redirectAction;
  }
  public putRedirectAction(value: DiscoveryEngineControlRedirectAction) {
    this._redirectAction.internalValue = value;
  }
  public resetRedirectAction() {
    this._redirectAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectActionInput() {
    return this._redirectAction.internalValue;
  }

  // synonyms_action - computed: false, optional: true, required: false
  private _synonymsAction = new DiscoveryEngineControlSynonymsActionOutputReference(this, "synonyms_action");
  public get synonymsAction() {
    return this._synonymsAction;
  }
  public putSynonymsAction(value: DiscoveryEngineControlSynonymsAction) {
    this._synonymsAction.internalValue = value;
  }
  public resetSynonymsAction() {
    this._synonymsAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsActionInput() {
    return this._synonymsAction.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DiscoveryEngineControlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DiscoveryEngineControlTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collection_id: cdktf.stringToTerraform(this._collectionId),
      control_id: cdktf.stringToTerraform(this._controlId),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      display_name: cdktf.stringToTerraform(this._displayName),
      engine_id: cdktf.stringToTerraform(this._engineId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      solution_type: cdktf.stringToTerraform(this._solutionType),
      use_cases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._useCases),
      boost_action: discoveryEngineControlBoostActionToTerraform(this._boostAction.internalValue),
      conditions: cdktf.listMapper(discoveryEngineControlConditionsToTerraform, true)(this._conditions.internalValue),
      filter_action: discoveryEngineControlFilterActionToTerraform(this._filterAction.internalValue),
      promote_action: discoveryEngineControlPromoteActionToTerraform(this._promoteAction.internalValue),
      redirect_action: discoveryEngineControlRedirectActionToTerraform(this._redirectAction.internalValue),
      synonyms_action: discoveryEngineControlSynonymsActionToTerraform(this._synonymsAction.internalValue),
      timeouts: discoveryEngineControlTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collection_id: {
        value: cdktf.stringToHclTerraform(this._collectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_id: {
        value: cdktf.stringToHclTerraform(this._controlId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktf.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_id: {
        value: cdktf.stringToHclTerraform(this._engineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      solution_type: {
        value: cdktf.stringToHclTerraform(this._solutionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_cases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._useCases),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      boost_action: {
        value: discoveryEngineControlBoostActionToHclTerraform(this._boostAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineControlBoostActionList",
      },
      conditions: {
        value: cdktf.listMapperHcl(discoveryEngineControlConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineControlConditionsList",
      },
      filter_action: {
        value: discoveryEngineControlFilterActionToHclTerraform(this._filterAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineControlFilterActionList",
      },
      promote_action: {
        value: discoveryEngineControlPromoteActionToHclTerraform(this._promoteAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineControlPromoteActionList",
      },
      redirect_action: {
        value: discoveryEngineControlRedirectActionToHclTerraform(this._redirectAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineControlRedirectActionList",
      },
      synonyms_action: {
        value: discoveryEngineControlSynonymsActionToHclTerraform(this._synonymsAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineControlSynonymsActionList",
      },
      timeouts: {
        value: discoveryEngineControlTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DiscoveryEngineControlTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
