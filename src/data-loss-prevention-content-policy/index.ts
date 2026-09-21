// https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLossPreventionContentPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#deletion_policy DataLossPreventionContentPolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Display name (max 63 chars).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#display_name DataLossPreventionContentPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#id DataLossPreventionContentPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The parent of the content policy in any of the following formats:
  * 
  * * 'projects/{{project}}/locations/{{location}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#parent DataLossPreventionContentPolicy#parent}
  */
  readonly parent: string;
  /**
  * default_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#default_action DataLossPreventionContentPolicy#default_action}
  */
  readonly defaultAction?: DataLossPreventionContentPolicyDefaultAction;
  /**
  * failed_to_scan_supported_file_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#failed_to_scan_supported_file_type DataLossPreventionContentPolicy#failed_to_scan_supported_file_type}
  */
  readonly failedToScanSupportedFileType?: DataLossPreventionContentPolicyFailedToScanSupportedFileType;
  /**
  * input_too_large block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#input_too_large DataLossPreventionContentPolicy#input_too_large}
  */
  readonly inputTooLarge?: DataLossPreventionContentPolicyInputTooLarge;
  /**
  * inspect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#inspect_config DataLossPreventionContentPolicy#inspect_config}
  */
  readonly inspectConfig?: DataLossPreventionContentPolicyInspectConfig;
  /**
  * logging_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#logging_configs DataLossPreventionContentPolicy#logging_configs}
  */
  readonly loggingConfigs?: DataLossPreventionContentPolicyLoggingConfigs[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#rules DataLossPreventionContentPolicy#rules}
  */
  readonly rules: DataLossPreventionContentPolicyRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#timeouts DataLossPreventionContentPolicy#timeouts}
  */
  readonly timeouts?: DataLossPreventionContentPolicyTimeouts;
  /**
  * unsupported_file_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#unsupported_file_type DataLossPreventionContentPolicy#unsupported_file_type}
  */
  readonly unsupportedFileType?: DataLossPreventionContentPolicyUnsupportedFileType;
}
export interface DataLossPreventionContentPolicyErrorsDetails {
}

export function dataLossPreventionContentPolicyErrorsDetailsToTerraform(struct?: DataLossPreventionContentPolicyErrorsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionContentPolicyErrorsDetailsToHclTerraform(struct?: DataLossPreventionContentPolicyErrorsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionContentPolicyErrorsDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLossPreventionContentPolicyErrorsDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyErrorsDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // details - computed: true, optional: false, required: false
  private _details = new cdktf.StringMapList(this, "details", false);
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataLossPreventionContentPolicyErrorsDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataLossPreventionContentPolicyErrorsDetailsOutputReference {
    return new DataLossPreventionContentPolicyErrorsDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionContentPolicyErrors {
}

export function dataLossPreventionContentPolicyErrorsToTerraform(struct?: DataLossPreventionContentPolicyErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionContentPolicyErrorsToHclTerraform(struct?: DataLossPreventionContentPolicyErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionContentPolicyErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLossPreventionContentPolicyErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  private _details = new DataLossPreventionContentPolicyErrorsDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // extra_info - computed: true, optional: false, required: false
  public get extraInfo() {
    return this.getStringAttribute('extra_info');
  }

  // timestamps - computed: true, optional: false, required: false
  public get timestamps() {
    return this.getListAttribute('timestamps');
  }
}

export class DataLossPreventionContentPolicyErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataLossPreventionContentPolicyErrorsOutputReference {
    return new DataLossPreventionContentPolicyErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionContentPolicyDefaultAction {
  /**
  * If set, the verdict will be returned to the user.
  * Possible values: ["ALLOW", "BLOCK"] Possible values: ["ALLOW", "BLOCK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#return_verdict DataLossPreventionContentPolicy#return_verdict}
  */
  readonly returnVerdict?: string;
}

export function dataLossPreventionContentPolicyDefaultActionToTerraform(struct?: DataLossPreventionContentPolicyDefaultActionOutputReference | DataLossPreventionContentPolicyDefaultAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_verdict: cdktf.stringToTerraform(struct!.returnVerdict),
  }
}


export function dataLossPreventionContentPolicyDefaultActionToHclTerraform(struct?: DataLossPreventionContentPolicyDefaultActionOutputReference | DataLossPreventionContentPolicyDefaultAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    return_verdict: {
      value: cdktf.stringToHclTerraform(struct!.returnVerdict),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyDefaultActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyDefaultAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returnVerdict !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnVerdict = this._returnVerdict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyDefaultAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._returnVerdict = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._returnVerdict = value.returnVerdict;
    }
  }

  // return_verdict - computed: false, optional: true, required: false
  private _returnVerdict?: string; 
  public get returnVerdict() {
    return this.getStringAttribute('return_verdict');
  }
  public set returnVerdict(value: string) {
    this._returnVerdict = value;
  }
  public resetReturnVerdict() {
    this._returnVerdict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnVerdictInput() {
    return this._returnVerdict;
  }
}
export interface DataLossPreventionContentPolicyFailedToScanSupportedFileType {
  /**
  * If set, the verdict will be returned to the user.
  * Possible values: ["ALLOW", "BLOCK"] Possible values: ["ALLOW", "BLOCK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#return_verdict DataLossPreventionContentPolicy#return_verdict}
  */
  readonly returnVerdict?: string;
}

export function dataLossPreventionContentPolicyFailedToScanSupportedFileTypeToTerraform(struct?: DataLossPreventionContentPolicyFailedToScanSupportedFileTypeOutputReference | DataLossPreventionContentPolicyFailedToScanSupportedFileType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_verdict: cdktf.stringToTerraform(struct!.returnVerdict),
  }
}


export function dataLossPreventionContentPolicyFailedToScanSupportedFileTypeToHclTerraform(struct?: DataLossPreventionContentPolicyFailedToScanSupportedFileTypeOutputReference | DataLossPreventionContentPolicyFailedToScanSupportedFileType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    return_verdict: {
      value: cdktf.stringToHclTerraform(struct!.returnVerdict),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyFailedToScanSupportedFileTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyFailedToScanSupportedFileType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returnVerdict !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnVerdict = this._returnVerdict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyFailedToScanSupportedFileType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._returnVerdict = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._returnVerdict = value.returnVerdict;
    }
  }

  // return_verdict - computed: false, optional: true, required: false
  private _returnVerdict?: string; 
  public get returnVerdict() {
    return this.getStringAttribute('return_verdict');
  }
  public set returnVerdict(value: string) {
    this._returnVerdict = value;
  }
  public resetReturnVerdict() {
    this._returnVerdict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnVerdictInput() {
    return this._returnVerdict;
  }
}
export interface DataLossPreventionContentPolicyInputTooLarge {
  /**
  * If set, the verdict will be returned to the user.
  * Possible values: ["ALLOW", "BLOCK"] Possible values: ["ALLOW", "BLOCK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#return_verdict DataLossPreventionContentPolicy#return_verdict}
  */
  readonly returnVerdict?: string;
}

export function dataLossPreventionContentPolicyInputTooLargeToTerraform(struct?: DataLossPreventionContentPolicyInputTooLargeOutputReference | DataLossPreventionContentPolicyInputTooLarge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_verdict: cdktf.stringToTerraform(struct!.returnVerdict),
  }
}


export function dataLossPreventionContentPolicyInputTooLargeToHclTerraform(struct?: DataLossPreventionContentPolicyInputTooLargeOutputReference | DataLossPreventionContentPolicyInputTooLarge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    return_verdict: {
      value: cdktf.stringToHclTerraform(struct!.returnVerdict),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInputTooLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInputTooLarge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returnVerdict !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnVerdict = this._returnVerdict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInputTooLarge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._returnVerdict = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._returnVerdict = value.returnVerdict;
    }
  }

  // return_verdict - computed: false, optional: true, required: false
  private _returnVerdict?: string; 
  public get returnVerdict() {
    return this.getStringAttribute('return_verdict');
  }
  public set returnVerdict(value: string) {
    this._returnVerdict = value;
  }
  public resetReturnVerdict() {
    this._returnVerdict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnVerdictInput() {
    return this._returnVerdict;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePath {
  /**
  * A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#path DataLossPreventionContentPolicy#path}
  */
  readonly path: string;
}

export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePathToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference | DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePathToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference | DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStruct {
  /**
  * Words or phrases defining the dictionary. The dictionary must contain at least one
  * phrase and every phrase must contain at least 2 characters that are letters or digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#words DataLossPreventionContentPolicy#words}
  */
  readonly words: string[];
}

export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStructToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStructOutputReference | DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    words: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.words),
  }
}


export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStructToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStructOutputReference | DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    words: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.words),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._words !== undefined) {
      hasAnyValues = true;
      internalValueResult.words = this._words;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._words = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._words = value.words;
    }
  }

  // words - computed: false, optional: false, required: true
  private _words?: string[]; 
  public get words() {
    return this.getListAttribute('words');
  }
  public set words(value: string[]) {
    this._words = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wordsInput() {
    return this._words;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionary {
  /**
  * cloud_storage_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#cloud_storage_path DataLossPreventionContentPolicy#cloud_storage_path}
  */
  readonly cloudStoragePath?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePath;
  /**
  * word_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#word_list DataLossPreventionContentPolicy#word_list}
  */
  readonly wordList?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStruct;
}

export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryOutputReference | DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_path: dataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePathToTerraform(struct!.cloudStoragePath),
    word_list: dataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStructToTerraform(struct!.wordList),
  }
}


export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryOutputReference | DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_storage_path: {
      value: dataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePathToHclTerraform(struct!.cloudStoragePath),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePathList",
    },
    word_list: {
      value: dataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStructToHclTerraform(struct!.wordList),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudStoragePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStoragePath = this._cloudStoragePath?.internalValue;
    }
    if (this._wordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordList = this._wordList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudStoragePath.internalValue = undefined;
      this._wordList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudStoragePath.internalValue = value.cloudStoragePath;
      this._wordList.internalValue = value.wordList;
    }
  }

  // cloud_storage_path - computed: false, optional: true, required: false
  private _cloudStoragePath = new DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference(this, "cloud_storage_path");
  public get cloudStoragePath() {
    return this._cloudStoragePath;
  }
  public putCloudStoragePath(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePath) {
    this._cloudStoragePath.internalValue = value;
  }
  public resetCloudStoragePath() {
    this._cloudStoragePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStoragePathInput() {
    return this._cloudStoragePath.internalValue;
  }

  // word_list - computed: false, optional: true, required: false
  private _wordList = new DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStructOutputReference(this, "word_list");
  public get wordList() {
    return this._wordList;
  }
  public putWordList(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStruct) {
    this._wordList.internalValue = value;
  }
  public resetWordList() {
    this._wordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordListInput() {
    return this._wordList.internalValue;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#score DataLossPreventionContentPolicy#score}
  */
  readonly score: string;
}

export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScoreToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScoreOutputReference | DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScoreToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScoreOutputReference | DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoType {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names
  * listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#name DataLossPreventionContentPolicy#name}
  */
  readonly name: string;
  /**
  * Version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#version DataLossPreventionContentPolicy#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#sensitivity_score DataLossPreventionContentPolicy#sensitivity_score}
  */
  readonly sensitivityScore?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScore;
}

export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeOutputReference | DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: dataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeOutputReference | DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: dataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegex {
  /**
  * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#group_indexes DataLossPreventionContentPolicy#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression.
  * Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#pattern DataLossPreventionContentPolicy#pattern}
  */
  readonly pattern: string;
}

export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegexToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegexOutputReference | DataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegexToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegexOutputReference | DataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_indexes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.groupIndexes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIndexes = this._groupIndexes;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupIndexes = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupIndexes = value.groupIndexes;
      this._pattern = value.pattern;
    }
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[]; 
  public get groupIndexes() {
    return this.getNumberListAttribute('group_indexes');
  }
  public set groupIndexes(value: number[]) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#score DataLossPreventionContentPolicy#score}
  */
  readonly score: string;
}

export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScoreToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScoreOutputReference | DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScoreToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScoreOutputReference | DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredType {
  /**
  * Resource name of the requested StoredInfoType, for example 'organizations/433245324/storedInfoTypes/432452342'
  * or 'projects/project-id/storedInfoTypes/432452342'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#name DataLossPreventionContentPolicy#name}
  */
  readonly name: string;
}

export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredTypeToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredTypeOutputReference | DataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredTypeToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredTypeOutputReference | DataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateType {
}

export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateTypeToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateTypeOutputReference | DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateTypeToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateTypeOutputReference | DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataLossPreventionContentPolicyInspectConfigCustomInfoTypes {
  /**
  * If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching. Possible values: ["EXCLUSION_TYPE_EXCLUDE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#exclusion_type DataLossPreventionContentPolicy#exclusion_type}
  */
  readonly exclusionType?: string;
  /**
  * Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria
  * specified by the rule. Default value: "VERY_LIKELY" Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#likelihood DataLossPreventionContentPolicy#likelihood}
  */
  readonly likelihood?: string;
  /**
  * dictionary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#dictionary DataLossPreventionContentPolicy#dictionary}
  */
  readonly dictionary?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionary;
  /**
  * info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#info_type DataLossPreventionContentPolicy#info_type}
  */
  readonly infoType: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoType;
  /**
  * regex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#regex DataLossPreventionContentPolicy#regex}
  */
  readonly regex?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegex;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#sensitivity_score DataLossPreventionContentPolicy#sensitivity_score}
  */
  readonly sensitivityScore?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScore;
  /**
  * stored_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#stored_type DataLossPreventionContentPolicy#stored_type}
  */
  readonly storedType?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredType;
  /**
  * surrogate_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#surrogate_type DataLossPreventionContentPolicy#surrogate_type}
  */
  readonly surrogateType?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateType;
}

export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion_type: cdktf.stringToTerraform(struct!.exclusionType),
    likelihood: cdktf.stringToTerraform(struct!.likelihood),
    dictionary: dataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryToTerraform(struct!.dictionary),
    info_type: dataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeToTerraform(struct!.infoType),
    regex: dataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegexToTerraform(struct!.regex),
    sensitivity_score: dataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScoreToTerraform(struct!.sensitivityScore),
    stored_type: dataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredTypeToTerraform(struct!.storedType),
    surrogate_type: dataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateTypeToTerraform(struct!.surrogateType),
  }
}


export function dataLossPreventionContentPolicyInspectConfigCustomInfoTypesToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion_type: {
      value: cdktf.stringToHclTerraform(struct!.exclusionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    likelihood: {
      value: cdktf.stringToHclTerraform(struct!.likelihood),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dictionary: {
      value: dataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryToHclTerraform(struct!.dictionary),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryList",
    },
    info_type: {
      value: dataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeToHclTerraform(struct!.infoType),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeList",
    },
    regex: {
      value: dataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegexToHclTerraform(struct!.regex),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegexList",
    },
    sensitivity_score: {
      value: dataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScoreList",
    },
    stored_type: {
      value: dataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredTypeToHclTerraform(struct!.storedType),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredTypeList",
    },
    surrogate_type: {
      value: dataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateTypeToHclTerraform(struct!.surrogateType),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigCustomInfoTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigCustomInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionType = this._exclusionType;
    }
    if (this._likelihood !== undefined) {
      hasAnyValues = true;
      internalValueResult.likelihood = this._likelihood;
    }
    if (this._dictionary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionary = this._dictionary?.internalValue;
    }
    if (this._infoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoType = this._infoType?.internalValue;
    }
    if (this._regex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex?.internalValue;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    if (this._storedType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storedType = this._storedType?.internalValue;
    }
    if (this._surrogateType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.surrogateType = this._surrogateType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionType = undefined;
      this._likelihood = undefined;
      this._dictionary.internalValue = undefined;
      this._infoType.internalValue = undefined;
      this._regex.internalValue = undefined;
      this._sensitivityScore.internalValue = undefined;
      this._storedType.internalValue = undefined;
      this._surrogateType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionType = value.exclusionType;
      this._likelihood = value.likelihood;
      this._dictionary.internalValue = value.dictionary;
      this._infoType.internalValue = value.infoType;
      this._regex.internalValue = value.regex;
      this._sensitivityScore.internalValue = value.sensitivityScore;
      this._storedType.internalValue = value.storedType;
      this._surrogateType.internalValue = value.surrogateType;
    }
  }

  // exclusion_type - computed: false, optional: true, required: false
  private _exclusionType?: string; 
  public get exclusionType() {
    return this.getStringAttribute('exclusion_type');
  }
  public set exclusionType(value: string) {
    this._exclusionType = value;
  }
  public resetExclusionType() {
    this._exclusionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionTypeInput() {
    return this._exclusionType;
  }

  // likelihood - computed: false, optional: true, required: false
  private _likelihood?: string; 
  public get likelihood() {
    return this.getStringAttribute('likelihood');
  }
  public set likelihood(value: string) {
    this._likelihood = value;
  }
  public resetLikelihood() {
    this._likelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get likelihoodInput() {
    return this._likelihood;
  }

  // dictionary - computed: false, optional: true, required: false
  private _dictionary = new DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryOutputReference(this, "dictionary");
  public get dictionary() {
    return this._dictionary;
  }
  public putDictionary(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionary) {
    this._dictionary.internalValue = value;
  }
  public resetDictionary() {
    this._dictionary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary.internalValue;
  }

  // info_type - computed: false, optional: false, required: true
  private _infoType = new DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeOutputReference(this, "info_type");
  public get infoType() {
    return this._infoType;
  }
  public putInfoType(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoType) {
    this._infoType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeInput() {
    return this._infoType.internalValue;
  }

  // regex - computed: false, optional: true, required: false
  private _regex = new DataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegexOutputReference(this, "regex");
  public get regex() {
    return this._regex;
  }
  public putRegex(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegex) {
    this._regex.internalValue = value;
  }
  public resetRegex() {
    this._regex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex.internalValue;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }

  // stored_type - computed: false, optional: true, required: false
  private _storedType = new DataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredTypeOutputReference(this, "stored_type");
  public get storedType() {
    return this._storedType;
  }
  public putStoredType(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredType) {
    this._storedType.internalValue = value;
  }
  public resetStoredType() {
    this._storedType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedTypeInput() {
    return this._storedType.internalValue;
  }

  // surrogate_type - computed: false, optional: true, required: false
  private _surrogateType = new DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateTypeOutputReference(this, "surrogate_type");
  public get surrogateType() {
    return this._surrogateType;
  }
  public putSurrogateType(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateType) {
    this._surrogateType.internalValue = value;
  }
  public resetSurrogateType() {
    this._surrogateType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surrogateTypeInput() {
    return this._surrogateType.internalValue;
  }
}

export class DataLossPreventionContentPolicyInspectConfigCustomInfoTypesList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionContentPolicyInspectConfigCustomInfoTypes[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionContentPolicyInspectConfigCustomInfoTypesOutputReference {
    return new DataLossPreventionContentPolicyInspectConfigCustomInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#score DataLossPreventionContentPolicy#score}
  */
  readonly score: string;
}

export function dataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScoreToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScoreOutputReference | DataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function dataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScoreToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScoreOutputReference | DataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigInfoTypes {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
  * at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#name DataLossPreventionContentPolicy#name}
  */
  readonly name: string;
  /**
  * Version of the information type to use. By default, the version is set to stable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#version DataLossPreventionContentPolicy#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#sensitivity_score DataLossPreventionContentPolicy#sensitivity_score}
  */
  readonly sensitivityScore?: DataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScore;
}

export function dataLossPreventionContentPolicyInspectConfigInfoTypesToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: dataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function dataLossPreventionContentPolicyInspectConfigInfoTypesToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: dataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigInfoTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new DataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: DataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}

export class DataLossPreventionContentPolicyInspectConfigInfoTypesList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionContentPolicyInspectConfigInfoTypes[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionContentPolicyInspectConfigInfoTypesOutputReference {
    return new DataLossPreventionContentPolicyInspectConfigInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#score DataLossPreventionContentPolicy#score}
  */
  readonly score: string;
}

export function dataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreOutputReference | DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function dataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreOutputReference | DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoType {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
  * at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#name DataLossPreventionContentPolicy#name}
  */
  readonly name: string;
  /**
  * Version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#version DataLossPreventionContentPolicy#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#sensitivity_score DataLossPreventionContentPolicy#sensitivity_score}
  */
  readonly sensitivityScore?: DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore;
}

export function dataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference | DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: dataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function dataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference | DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: dataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoType {
  /**
  * Max findings limit for the given infoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#max_findings DataLossPreventionContentPolicy#max_findings}
  */
  readonly maxFindings: number;
  /**
  * info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#info_type DataLossPreventionContentPolicy#info_type}
  */
  readonly infoType?: DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoType;
}

export function dataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_findings: cdktf.numberToTerraform(struct!.maxFindings),
    info_type: dataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeToTerraform(struct!.infoType),
  }
}


export function dataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_findings: {
      value: cdktf.numberToHclTerraform(struct!.maxFindings),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    info_type: {
      value: dataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeToHclTerraform(struct!.infoType),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFindings !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFindings = this._maxFindings;
    }
    if (this._infoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoType = this._infoType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxFindings = undefined;
      this._infoType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxFindings = value.maxFindings;
      this._infoType.internalValue = value.infoType;
    }
  }

  // max_findings - computed: false, optional: false, required: true
  private _maxFindings?: number; 
  public get maxFindings() {
    return this.getNumberAttribute('max_findings');
  }
  public set maxFindings(value: number) {
    this._maxFindings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFindingsInput() {
    return this._maxFindings;
  }

  // info_type - computed: false, optional: true, required: false
  private _infoType = new DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference(this, "info_type");
  public get infoType() {
    return this._infoType;
  }
  public putInfoType(value: DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoType) {
    this._infoType.internalValue = value;
  }
  public resetInfoType() {
    this._infoType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeInput() {
    return this._infoType.internalValue;
  }
}

export class DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoType[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference {
    return new DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionContentPolicyInspectConfigLimits {
  /**
  * Max number of findings that will be returned for each item scanned. The maximum returned is 2000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#max_findings_per_item DataLossPreventionContentPolicy#max_findings_per_item}
  */
  readonly maxFindingsPerItem: number;
  /**
  * Max number of findings that will be returned per request/job. The maximum returned is 2000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#max_findings_per_request DataLossPreventionContentPolicy#max_findings_per_request}
  */
  readonly maxFindingsPerRequest: number;
  /**
  * max_findings_per_info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#max_findings_per_info_type DataLossPreventionContentPolicy#max_findings_per_info_type}
  */
  readonly maxFindingsPerInfoType?: DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoType[] | cdktf.IResolvable;
}

export function dataLossPreventionContentPolicyInspectConfigLimitsToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigLimitsOutputReference | DataLossPreventionContentPolicyInspectConfigLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_findings_per_item: cdktf.numberToTerraform(struct!.maxFindingsPerItem),
    max_findings_per_request: cdktf.numberToTerraform(struct!.maxFindingsPerRequest),
    max_findings_per_info_type: cdktf.listMapper(dataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeToTerraform, true)(struct!.maxFindingsPerInfoType),
  }
}


export function dataLossPreventionContentPolicyInspectConfigLimitsToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigLimitsOutputReference | DataLossPreventionContentPolicyInspectConfigLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_findings_per_item: {
      value: cdktf.numberToHclTerraform(struct!.maxFindingsPerItem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_findings_per_request: {
      value: cdktf.numberToHclTerraform(struct!.maxFindingsPerRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_findings_per_info_type: {
      value: cdktf.listMapperHcl(dataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeToHclTerraform, true)(struct!.maxFindingsPerInfoType),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFindingsPerItem !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFindingsPerItem = this._maxFindingsPerItem;
    }
    if (this._maxFindingsPerRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFindingsPerRequest = this._maxFindingsPerRequest;
    }
    if (this._maxFindingsPerInfoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFindingsPerInfoType = this._maxFindingsPerInfoType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxFindingsPerItem = undefined;
      this._maxFindingsPerRequest = undefined;
      this._maxFindingsPerInfoType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxFindingsPerItem = value.maxFindingsPerItem;
      this._maxFindingsPerRequest = value.maxFindingsPerRequest;
      this._maxFindingsPerInfoType.internalValue = value.maxFindingsPerInfoType;
    }
  }

  // max_findings_per_item - computed: false, optional: false, required: true
  private _maxFindingsPerItem?: number; 
  public get maxFindingsPerItem() {
    return this.getNumberAttribute('max_findings_per_item');
  }
  public set maxFindingsPerItem(value: number) {
    this._maxFindingsPerItem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFindingsPerItemInput() {
    return this._maxFindingsPerItem;
  }

  // max_findings_per_request - computed: false, optional: false, required: true
  private _maxFindingsPerRequest?: number; 
  public get maxFindingsPerRequest() {
    return this.getNumberAttribute('max_findings_per_request');
  }
  public set maxFindingsPerRequest(value: number) {
    this._maxFindingsPerRequest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFindingsPerRequestInput() {
    return this._maxFindingsPerRequest;
  }

  // max_findings_per_info_type - computed: false, optional: true, required: false
  private _maxFindingsPerInfoType = new DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeList(this, "max_findings_per_info_type", false);
  public get maxFindingsPerInfoType() {
    return this._maxFindingsPerInfoType;
  }
  public putMaxFindingsPerInfoType(value: DataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoType[] | cdktf.IResolvable) {
    this._maxFindingsPerInfoType.internalValue = value;
  }
  public resetMaxFindingsPerInfoType() {
    this._maxFindingsPerInfoType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFindingsPerInfoTypeInput() {
    return this._maxFindingsPerInfoType.internalValue;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoType {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
  * at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#name DataLossPreventionContentPolicy#name}
  */
  readonly name: string;
  /**
  * Version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#version DataLossPreventionContentPolicy#version}
  */
  readonly version?: string;
}

export function dataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoTypeToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoTypeOutputReference | DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoTypeToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoTypeOutputReference | DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoType {
  /**
  * Only returns findings equal or above this threshold. See https://cloud.google.com/dlp/docs/likelihood for more info. Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#min_likelihood DataLossPreventionContentPolicy#min_likelihood}
  */
  readonly minLikelihood: string;
  /**
  * info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#info_type DataLossPreventionContentPolicy#info_type}
  */
  readonly infoType?: DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoType;
}

export function dataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_likelihood: cdktf.stringToTerraform(struct!.minLikelihood),
    info_type: dataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoTypeToTerraform(struct!.infoType),
  }
}


export function dataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_likelihood: {
      value: cdktf.stringToHclTerraform(struct!.minLikelihood),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info_type: {
      value: dataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoTypeToHclTerraform(struct!.infoType),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minLikelihood !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLikelihood = this._minLikelihood;
    }
    if (this._infoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoType = this._infoType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minLikelihood = undefined;
      this._infoType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minLikelihood = value.minLikelihood;
      this._infoType.internalValue = value.infoType;
    }
  }

  // min_likelihood - computed: false, optional: false, required: true
  private _minLikelihood?: string; 
  public get minLikelihood() {
    return this.getStringAttribute('min_likelihood');
  }
  public set minLikelihood(value: string) {
    this._minLikelihood = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minLikelihoodInput() {
    return this._minLikelihood;
  }

  // info_type - computed: false, optional: true, required: false
  private _infoType = new DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoTypeOutputReference(this, "info_type");
  public get infoType() {
    return this._infoType;
  }
  public putInfoType(value: DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoType) {
    this._infoType.internalValue = value;
  }
  public resetInfoType() {
    this._infoType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeInput() {
    return this._infoType.internalValue;
  }
}

export class DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoType[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeOutputReference {
    return new DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#score DataLossPreventionContentPolicy#score}
  */
  readonly score: string;
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScoreToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScoreOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScoreToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScoreOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypes {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
  * at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#name DataLossPreventionContentPolicy#name}
  */
  readonly name: string;
  /**
  * Version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#version DataLossPreventionContentPolicy#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#sensitivity_score DataLossPreventionContentPolicy#sensitivity_score}
  */
  readonly sensitivityScore?: DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScore;
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: dataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: dataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypes[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesOutputReference {
    return new DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath {
  /**
  * A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#path DataLossPreventionContentPolicy#path}
  */
  readonly path: string;
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct {
  /**
  * Words or phrases defining the dictionary. The dictionary must contain at least one
  * phrase and every phrase must contain at least 2 characters that are letters or digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#words DataLossPreventionContentPolicy#words}
  */
  readonly words: string[];
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    words: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.words),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    words: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.words),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._words !== undefined) {
      hasAnyValues = true;
      internalValueResult.words = this._words;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._words = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._words = value.words;
    }
  }

  // words - computed: false, optional: false, required: true
  private _words?: string[]; 
  public get words() {
    return this.getListAttribute('words');
  }
  public set words(value: string[]) {
    this._words = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wordsInput() {
    return this._words;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionary {
  /**
  * cloud_storage_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#cloud_storage_path DataLossPreventionContentPolicy#cloud_storage_path}
  */
  readonly cloudStoragePath?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath;
  /**
  * word_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#word_list DataLossPreventionContentPolicy#word_list}
  */
  readonly wordList?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct;
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_path: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathToTerraform(struct!.cloudStoragePath),
    word_list: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructToTerraform(struct!.wordList),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_storage_path: {
      value: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathToHclTerraform(struct!.cloudStoragePath),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathList",
    },
    word_list: {
      value: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructToHclTerraform(struct!.wordList),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudStoragePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStoragePath = this._cloudStoragePath?.internalValue;
    }
    if (this._wordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordList = this._wordList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudStoragePath.internalValue = undefined;
      this._wordList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudStoragePath.internalValue = value.cloudStoragePath;
      this._wordList.internalValue = value.wordList;
    }
  }

  // cloud_storage_path - computed: false, optional: true, required: false
  private _cloudStoragePath = new DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference(this, "cloud_storage_path");
  public get cloudStoragePath() {
    return this._cloudStoragePath;
  }
  public putCloudStoragePath(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath) {
    this._cloudStoragePath.internalValue = value;
  }
  public resetCloudStoragePath() {
    this._cloudStoragePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStoragePathInput() {
    return this._cloudStoragePath.internalValue;
  }

  // word_list - computed: false, optional: true, required: false
  private _wordList = new DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructOutputReference(this, "word_list");
  public get wordList() {
    return this._wordList;
  }
  public putWordList(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct) {
    this._wordList.internalValue = value;
  }
  public resetWordList() {
    this._wordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordListInput() {
    return this._wordList.internalValue;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex {
  /**
  * The index of the submatch to extract as findings. When not specified,
  * the entire match is returned. No more than 3 may be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#group_indexes DataLossPreventionContentPolicy#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression. Its syntax
  * (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#pattern DataLossPreventionContentPolicy#pattern}
  */
  readonly pattern: string;
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_indexes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.groupIndexes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIndexes = this._groupIndexes;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupIndexes = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupIndexes = value.groupIndexes;
      this._pattern = value.pattern;
    }
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[]; 
  public get groupIndexes() {
    return this.getNumberListAttribute('group_indexes');
  }
  public set groupIndexes(value: number[]) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity {
  /**
  * Number of characters after the finding to consider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#window_after DataLossPreventionContentPolicy#window_after}
  */
  readonly windowAfter?: number;
  /**
  * Number of characters before the finding to consider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#window_before DataLossPreventionContentPolicy#window_before}
  */
  readonly windowBefore?: number;
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window_after: cdktf.numberToTerraform(struct!.windowAfter),
    window_before: cdktf.numberToTerraform(struct!.windowBefore),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window_after: {
      value: cdktf.numberToHclTerraform(struct!.windowAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_before: {
      value: cdktf.numberToHclTerraform(struct!.windowBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._windowAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowAfter = this._windowAfter;
    }
    if (this._windowBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowBefore = this._windowBefore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._windowAfter = undefined;
      this._windowBefore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._windowAfter = value.windowAfter;
      this._windowBefore = value.windowBefore;
    }
  }

  // window_after - computed: false, optional: true, required: false
  private _windowAfter?: number; 
  public get windowAfter() {
    return this.getNumberAttribute('window_after');
  }
  public set windowAfter(value: number) {
    this._windowAfter = value;
  }
  public resetWindowAfter() {
    this._windowAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowAfterInput() {
    return this._windowAfter;
  }

  // window_before - computed: false, optional: true, required: false
  private _windowBefore?: number; 
  public get windowBefore() {
    return this.getNumberAttribute('window_before');
  }
  public set windowBefore(value: number) {
    this._windowBefore = value;
  }
  public resetWindowBefore() {
    this._windowBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowBeforeInput() {
    return this._windowBefore;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotword {
  /**
  * hotword_regex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#hotword_regex DataLossPreventionContentPolicy#hotword_regex}
  */
  readonly hotwordRegex: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex;
  /**
  * proximity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#proximity DataLossPreventionContentPolicy#proximity}
  */
  readonly proximity: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity;
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hotword_regex: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexToTerraform(struct!.hotwordRegex),
    proximity: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityToTerraform(struct!.proximity),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hotword_regex: {
      value: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexToHclTerraform(struct!.hotwordRegex),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexList",
    },
    proximity: {
      value: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityToHclTerraform(struct!.proximity),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hotwordRegex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotwordRegex = this._hotwordRegex?.internalValue;
    }
    if (this._proximity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proximity = this._proximity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hotwordRegex.internalValue = undefined;
      this._proximity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hotwordRegex.internalValue = value.hotwordRegex;
      this._proximity.internalValue = value.proximity;
    }
  }

  // hotword_regex - computed: false, optional: false, required: true
  private _hotwordRegex = new DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexOutputReference(this, "hotword_regex");
  public get hotwordRegex() {
    return this._hotwordRegex;
  }
  public putHotwordRegex(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex) {
    this._hotwordRegex.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hotwordRegexInput() {
    return this._hotwordRegex.internalValue;
  }

  // proximity - computed: false, optional: false, required: true
  private _proximity = new DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityOutputReference(this, "proximity");
  public get proximity() {
    return this._proximity;
  }
  public putProximity(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity) {
    this._proximity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityInput() {
    return this._proximity.internalValue;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#score DataLossPreventionContentPolicy#score}
  */
  readonly score: string;
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
  * at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#name DataLossPreventionContentPolicy#name}
  */
  readonly name: string;
  /**
  * Version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#version DataLossPreventionContentPolicy#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#sensitivity_score DataLossPreventionContentPolicy#sensitivity_score}
  */
  readonly sensitivityScore?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore;
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference {
    return new DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes {
  /**
  * info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#info_types DataLossPreventionContentPolicy#info_types}
  */
  readonly infoTypes: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes[] | cdktf.IResolvable;
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_types: cdktf.listMapper(dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesToTerraform, true)(struct!.infoTypes),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info_types: {
      value: cdktf.listMapperHcl(dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesToHclTerraform, true)(struct!.infoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypes = this._infoTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._infoTypes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._infoTypes.internalValue = value.infoTypes;
    }
  }

  // info_types - computed: false, optional: false, required: true
  private _infoTypes = new DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList(this, "info_types", false);
  public get infoTypes() {
    return this._infoTypes;
  }
  public putInfoTypes(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes[] | cdktf.IResolvable) {
    this._infoTypes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes.internalValue;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegex {
  /**
  * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#group_indexes DataLossPreventionContentPolicy#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression.
  * Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#pattern DataLossPreventionContentPolicy#pattern}
  */
  readonly pattern: string;
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegexToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegexOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegexToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegexOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_indexes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.groupIndexes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIndexes = this._groupIndexes;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupIndexes = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupIndexes = value.groupIndexes;
      this._pattern = value.pattern;
    }
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[]; 
  public get groupIndexes() {
    return this.getNumberListAttribute('group_indexes');
  }
  public set groupIndexes(value: number[]) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRule {
  /**
  * How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType Possible values: ["MATCHING_TYPE_FULL_MATCH", "MATCHING_TYPE_PARTIAL_MATCH", "MATCHING_TYPE_INVERSE_MATCH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#matching_type DataLossPreventionContentPolicy#matching_type}
  */
  readonly matchingType: string;
  /**
  * dictionary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#dictionary DataLossPreventionContentPolicy#dictionary}
  */
  readonly dictionary?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionary;
  /**
  * exclude_by_hotword block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#exclude_by_hotword DataLossPreventionContentPolicy#exclude_by_hotword}
  */
  readonly excludeByHotword?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotword;
  /**
  * exclude_info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#exclude_info_types DataLossPreventionContentPolicy#exclude_info_types}
  */
  readonly excludeInfoTypes?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes;
  /**
  * regex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#regex DataLossPreventionContentPolicy#regex}
  */
  readonly regex?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegex;
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matching_type: cdktf.stringToTerraform(struct!.matchingType),
    dictionary: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryToTerraform(struct!.dictionary),
    exclude_by_hotword: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordToTerraform(struct!.excludeByHotword),
    exclude_info_types: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesToTerraform(struct!.excludeInfoTypes),
    regex: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegexToTerraform(struct!.regex),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matching_type: {
      value: cdktf.stringToHclTerraform(struct!.matchingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dictionary: {
      value: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryToHclTerraform(struct!.dictionary),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryList",
    },
    exclude_by_hotword: {
      value: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordToHclTerraform(struct!.excludeByHotword),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordList",
    },
    exclude_info_types: {
      value: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesToHclTerraform(struct!.excludeInfoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesList",
    },
    regex: {
      value: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegexToHclTerraform(struct!.regex),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegexList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingType = this._matchingType;
    }
    if (this._dictionary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionary = this._dictionary?.internalValue;
    }
    if (this._excludeByHotword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeByHotword = this._excludeByHotword?.internalValue;
    }
    if (this._excludeInfoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeInfoTypes = this._excludeInfoTypes?.internalValue;
    }
    if (this._regex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchingType = undefined;
      this._dictionary.internalValue = undefined;
      this._excludeByHotword.internalValue = undefined;
      this._excludeInfoTypes.internalValue = undefined;
      this._regex.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchingType = value.matchingType;
      this._dictionary.internalValue = value.dictionary;
      this._excludeByHotword.internalValue = value.excludeByHotword;
      this._excludeInfoTypes.internalValue = value.excludeInfoTypes;
      this._regex.internalValue = value.regex;
    }
  }

  // matching_type - computed: false, optional: false, required: true
  private _matchingType?: string; 
  public get matchingType() {
    return this.getStringAttribute('matching_type');
  }
  public set matchingType(value: string) {
    this._matchingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingTypeInput() {
    return this._matchingType;
  }

  // dictionary - computed: false, optional: true, required: false
  private _dictionary = new DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference(this, "dictionary");
  public get dictionary() {
    return this._dictionary;
  }
  public putDictionary(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionary) {
    this._dictionary.internalValue = value;
  }
  public resetDictionary() {
    this._dictionary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary.internalValue;
  }

  // exclude_by_hotword - computed: false, optional: true, required: false
  private _excludeByHotword = new DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordOutputReference(this, "exclude_by_hotword");
  public get excludeByHotword() {
    return this._excludeByHotword;
  }
  public putExcludeByHotword(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotword) {
    this._excludeByHotword.internalValue = value;
  }
  public resetExcludeByHotword() {
    this._excludeByHotword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeByHotwordInput() {
    return this._excludeByHotword.internalValue;
  }

  // exclude_info_types - computed: false, optional: true, required: false
  private _excludeInfoTypes = new DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference(this, "exclude_info_types");
  public get excludeInfoTypes() {
    return this._excludeInfoTypes;
  }
  public putExcludeInfoTypes(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes) {
    this._excludeInfoTypes.internalValue = value;
  }
  public resetExcludeInfoTypes() {
    this._excludeInfoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInfoTypesInput() {
    return this._excludeInfoTypes.internalValue;
  }

  // regex - computed: false, optional: true, required: false
  private _regex = new DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegexOutputReference(this, "regex");
  public get regex() {
    return this._regex;
  }
  public putRegex(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegex) {
    this._regex.internalValue = value;
  }
  public resetRegex() {
    this._regex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex.internalValue;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegex {
  /**
  * The index of the submatch to extract as findings. When not specified,
  * the entire match is returned. No more than 3 may be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#group_indexes DataLossPreventionContentPolicy#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression. Its syntax
  * (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#pattern DataLossPreventionContentPolicy#pattern}
  */
  readonly pattern: string;
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegexToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegexToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_indexes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.groupIndexes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIndexes = this._groupIndexes;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupIndexes = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupIndexes = value.groupIndexes;
      this._pattern = value.pattern;
    }
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[]; 
  public get groupIndexes() {
    return this.getNumberListAttribute('group_indexes');
  }
  public set groupIndexes(value: number[]) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment {
  /**
  * Set the likelihood of a finding to a fixed value. Either this or relative_likelihood can be set. Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#fixed_likelihood DataLossPreventionContentPolicy#fixed_likelihood}
  */
  readonly fixedLikelihood?: string;
  /**
  * Increase or decrease the likelihood by the specified number of levels. For example,
  * if a finding would be POSSIBLE without the detection rule and relativeLikelihood is 1,
  * then it is upgraded to LIKELY, while a value of -1 would downgrade it to UNLIKELY.
  * Likelihood may never drop below VERY_UNLIKELY or exceed VERY_LIKELY, so applying an
  * adjustment of 1 followed by an adjustment of -1 when base likelihood is VERY_LIKELY
  * will result in a final likelihood of LIKELY. Either this or fixed_likelihood can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#relative_likelihood DataLossPreventionContentPolicy#relative_likelihood}
  */
  readonly relativeLikelihood?: number;
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_likelihood: cdktf.stringToTerraform(struct!.fixedLikelihood),
    relative_likelihood: cdktf.numberToTerraform(struct!.relativeLikelihood),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_likelihood: {
      value: cdktf.stringToHclTerraform(struct!.fixedLikelihood),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_likelihood: {
      value: cdktf.numberToHclTerraform(struct!.relativeLikelihood),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedLikelihood !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedLikelihood = this._fixedLikelihood;
    }
    if (this._relativeLikelihood !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeLikelihood = this._relativeLikelihood;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedLikelihood = undefined;
      this._relativeLikelihood = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedLikelihood = value.fixedLikelihood;
      this._relativeLikelihood = value.relativeLikelihood;
    }
  }

  // fixed_likelihood - computed: false, optional: true, required: false
  private _fixedLikelihood?: string; 
  public get fixedLikelihood() {
    return this.getStringAttribute('fixed_likelihood');
  }
  public set fixedLikelihood(value: string) {
    this._fixedLikelihood = value;
  }
  public resetFixedLikelihood() {
    this._fixedLikelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedLikelihoodInput() {
    return this._fixedLikelihood;
  }

  // relative_likelihood - computed: false, optional: true, required: false
  private _relativeLikelihood?: number; 
  public get relativeLikelihood() {
    return this.getNumberAttribute('relative_likelihood');
  }
  public set relativeLikelihood(value: number) {
    this._relativeLikelihood = value;
  }
  public resetRelativeLikelihood() {
    this._relativeLikelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeLikelihoodInput() {
    return this._relativeLikelihood;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximity {
  /**
  * Number of characters after the finding to consider. Either this or window_before must be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#window_after DataLossPreventionContentPolicy#window_after}
  */
  readonly windowAfter?: number;
  /**
  * Number of characters before the finding to consider. Either this or window_after must be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#window_before DataLossPreventionContentPolicy#window_before}
  */
  readonly windowBefore?: number;
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximityToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximityOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window_after: cdktf.numberToTerraform(struct!.windowAfter),
    window_before: cdktf.numberToTerraform(struct!.windowBefore),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximityToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximityOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window_after: {
      value: cdktf.numberToHclTerraform(struct!.windowAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_before: {
      value: cdktf.numberToHclTerraform(struct!.windowBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._windowAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowAfter = this._windowAfter;
    }
    if (this._windowBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowBefore = this._windowBefore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._windowAfter = undefined;
      this._windowBefore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._windowAfter = value.windowAfter;
      this._windowBefore = value.windowBefore;
    }
  }

  // window_after - computed: false, optional: true, required: false
  private _windowAfter?: number; 
  public get windowAfter() {
    return this.getNumberAttribute('window_after');
  }
  public set windowAfter(value: number) {
    this._windowAfter = value;
  }
  public resetWindowAfter() {
    this._windowAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowAfterInput() {
    return this._windowAfter;
  }

  // window_before - computed: false, optional: true, required: false
  private _windowBefore?: number; 
  public get windowBefore() {
    return this.getNumberAttribute('window_before');
  }
  public set windowBefore(value: number) {
    this._windowBefore = value;
  }
  public resetWindowBefore() {
    this._windowBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowBeforeInput() {
    return this._windowBefore;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRule {
  /**
  * hotword_regex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#hotword_regex DataLossPreventionContentPolicy#hotword_regex}
  */
  readonly hotwordRegex: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegex;
  /**
  * likelihood_adjustment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#likelihood_adjustment DataLossPreventionContentPolicy#likelihood_adjustment}
  */
  readonly likelihoodAdjustment: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment;
  /**
  * proximity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#proximity DataLossPreventionContentPolicy#proximity}
  */
  readonly proximity: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximity;
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hotword_regex: dataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegexToTerraform(struct!.hotwordRegex),
    likelihood_adjustment: dataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentToTerraform(struct!.likelihoodAdjustment),
    proximity: dataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximityToTerraform(struct!.proximity),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleOutputReference | DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hotword_regex: {
      value: dataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegexToHclTerraform(struct!.hotwordRegex),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegexList",
    },
    likelihood_adjustment: {
      value: dataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentToHclTerraform(struct!.likelihoodAdjustment),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentList",
    },
    proximity: {
      value: dataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximityToHclTerraform(struct!.proximity),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hotwordRegex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotwordRegex = this._hotwordRegex?.internalValue;
    }
    if (this._likelihoodAdjustment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.likelihoodAdjustment = this._likelihoodAdjustment?.internalValue;
    }
    if (this._proximity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proximity = this._proximity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hotwordRegex.internalValue = undefined;
      this._likelihoodAdjustment.internalValue = undefined;
      this._proximity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hotwordRegex.internalValue = value.hotwordRegex;
      this._likelihoodAdjustment.internalValue = value.likelihoodAdjustment;
      this._proximity.internalValue = value.proximity;
    }
  }

  // hotword_regex - computed: false, optional: false, required: true
  private _hotwordRegex = new DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference(this, "hotword_regex");
  public get hotwordRegex() {
    return this._hotwordRegex;
  }
  public putHotwordRegex(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegex) {
    this._hotwordRegex.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hotwordRegexInput() {
    return this._hotwordRegex.internalValue;
  }

  // likelihood_adjustment - computed: false, optional: false, required: true
  private _likelihoodAdjustment = new DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference(this, "likelihood_adjustment");
  public get likelihoodAdjustment() {
    return this._likelihoodAdjustment;
  }
  public putLikelihoodAdjustment(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment) {
    this._likelihoodAdjustment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get likelihoodAdjustmentInput() {
    return this._likelihoodAdjustment.internalValue;
  }

  // proximity - computed: false, optional: false, required: true
  private _proximity = new DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximityOutputReference(this, "proximity");
  public get proximity() {
    return this._proximity;
  }
  public putProximity(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximity) {
    this._proximity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityInput() {
    return this._proximity.internalValue;
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSetRules {
  /**
  * exclusion_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#exclusion_rule DataLossPreventionContentPolicy#exclusion_rule}
  */
  readonly exclusionRule?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRule;
  /**
  * hotword_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#hotword_rule DataLossPreventionContentPolicy#hotword_rule}
  */
  readonly hotwordRule?: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRule;
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion_rule: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleToTerraform(struct!.exclusionRule),
    hotword_rule: dataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleToTerraform(struct!.hotwordRule),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetRulesToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion_rule: {
      value: dataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleToHclTerraform(struct!.exclusionRule),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleList",
    },
    hotword_rule: {
      value: dataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleToHclTerraform(struct!.hotwordRule),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSetRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionRule = this._exclusionRule?.internalValue;
    }
    if (this._hotwordRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotwordRule = this._hotwordRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSetRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionRule.internalValue = undefined;
      this._hotwordRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionRule.internalValue = value.exclusionRule;
      this._hotwordRule.internalValue = value.hotwordRule;
    }
  }

  // exclusion_rule - computed: false, optional: true, required: false
  private _exclusionRule = new DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleOutputReference(this, "exclusion_rule");
  public get exclusionRule() {
    return this._exclusionRule;
  }
  public putExclusionRule(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRule) {
    this._exclusionRule.internalValue = value;
  }
  public resetExclusionRule() {
    this._exclusionRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionRuleInput() {
    return this._exclusionRule.internalValue;
  }

  // hotword_rule - computed: false, optional: true, required: false
  private _hotwordRule = new DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleOutputReference(this, "hotword_rule");
  public get hotwordRule() {
    return this._hotwordRule;
  }
  public putHotwordRule(value: DataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRule) {
    this._hotwordRule.internalValue = value;
  }
  public resetHotwordRule() {
    this._hotwordRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotwordRuleInput() {
    return this._hotwordRule.internalValue;
  }
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetRulesList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionContentPolicyInspectConfigRuleSetRules[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionContentPolicyInspectConfigRuleSetRulesOutputReference {
    return new DataLossPreventionContentPolicyInspectConfigRuleSetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionContentPolicyInspectConfigRuleSet {
  /**
  * info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#info_types DataLossPreventionContentPolicy#info_types}
  */
  readonly infoTypes: DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypes[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#rules DataLossPreventionContentPolicy#rules}
  */
  readonly rules: DataLossPreventionContentPolicyInspectConfigRuleSetRules[] | cdktf.IResolvable;
}

export function dataLossPreventionContentPolicyInspectConfigRuleSetToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_types: cdktf.listMapper(dataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesToTerraform, true)(struct!.infoTypes),
    rules: cdktf.listMapper(dataLossPreventionContentPolicyInspectConfigRuleSetRulesToTerraform, true)(struct!.rules),
  }
}


export function dataLossPreventionContentPolicyInspectConfigRuleSetToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigRuleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info_types: {
      value: cdktf.listMapperHcl(dataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesToHclTerraform, true)(struct!.infoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesList",
    },
    rules: {
      value: cdktf.listMapperHcl(dataLossPreventionContentPolicyInspectConfigRuleSetRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionContentPolicyInspectConfigRuleSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypes = this._infoTypes?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfigRuleSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._infoTypes.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._infoTypes.internalValue = value.infoTypes;
      this._rules.internalValue = value.rules;
    }
  }

  // info_types - computed: false, optional: false, required: true
  private _infoTypes = new DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesList(this, "info_types", false);
  public get infoTypes() {
    return this._infoTypes;
  }
  public putInfoTypes(value: DataLossPreventionContentPolicyInspectConfigRuleSetInfoTypes[] | cdktf.IResolvable) {
    this._infoTypes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DataLossPreventionContentPolicyInspectConfigRuleSetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataLossPreventionContentPolicyInspectConfigRuleSetRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class DataLossPreventionContentPolicyInspectConfigRuleSetList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionContentPolicyInspectConfigRuleSet[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionContentPolicyInspectConfigRuleSetOutputReference {
    return new DataLossPreventionContentPolicyInspectConfigRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionContentPolicyInspectConfig {
  /**
  * List of options defining data content to scan. If empty, text, images, and other content will be included. Possible values: ["CONTENT_TEXT", "CONTENT_IMAGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#content_options DataLossPreventionContentPolicy#content_options}
  */
  readonly contentOptions?: string[];
  /**
  * When true, excludes type information of the findings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#exclude_info_types DataLossPreventionContentPolicy#exclude_info_types}
  */
  readonly excludeInfoTypes?: boolean | cdktf.IResolvable;
  /**
  * When true, a contextual quote from the data that triggered a finding is included in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#include_quote DataLossPreventionContentPolicy#include_quote}
  */
  readonly includeQuote?: boolean | cdktf.IResolvable;
  /**
  * Only returns findings equal or above this threshold. See https://cloud.google.com/dlp/docs/likelihood for more info Default value: "POSSIBLE" Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#min_likelihood DataLossPreventionContentPolicy#min_likelihood}
  */
  readonly minLikelihood?: string;
  /**
  * custom_info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#custom_info_types DataLossPreventionContentPolicy#custom_info_types}
  */
  readonly customInfoTypes?: DataLossPreventionContentPolicyInspectConfigCustomInfoTypes[] | cdktf.IResolvable;
  /**
  * info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#info_types DataLossPreventionContentPolicy#info_types}
  */
  readonly infoTypes?: DataLossPreventionContentPolicyInspectConfigInfoTypes[] | cdktf.IResolvable;
  /**
  * limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#limits DataLossPreventionContentPolicy#limits}
  */
  readonly limits?: DataLossPreventionContentPolicyInspectConfigLimits;
  /**
  * min_likelihood_per_info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#min_likelihood_per_info_type DataLossPreventionContentPolicy#min_likelihood_per_info_type}
  */
  readonly minLikelihoodPerInfoType?: DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoType[] | cdktf.IResolvable;
  /**
  * rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#rule_set DataLossPreventionContentPolicy#rule_set}
  */
  readonly ruleSet?: DataLossPreventionContentPolicyInspectConfigRuleSet[] | cdktf.IResolvable;
}

export function dataLossPreventionContentPolicyInspectConfigToTerraform(struct?: DataLossPreventionContentPolicyInspectConfigOutputReference | DataLossPreventionContentPolicyInspectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentOptions),
    exclude_info_types: cdktf.booleanToTerraform(struct!.excludeInfoTypes),
    include_quote: cdktf.booleanToTerraform(struct!.includeQuote),
    min_likelihood: cdktf.stringToTerraform(struct!.minLikelihood),
    custom_info_types: cdktf.listMapper(dataLossPreventionContentPolicyInspectConfigCustomInfoTypesToTerraform, true)(struct!.customInfoTypes),
    info_types: cdktf.listMapper(dataLossPreventionContentPolicyInspectConfigInfoTypesToTerraform, true)(struct!.infoTypes),
    limits: dataLossPreventionContentPolicyInspectConfigLimitsToTerraform(struct!.limits),
    min_likelihood_per_info_type: cdktf.listMapper(dataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeToTerraform, true)(struct!.minLikelihoodPerInfoType),
    rule_set: cdktf.listMapper(dataLossPreventionContentPolicyInspectConfigRuleSetToTerraform, true)(struct!.ruleSet),
  }
}


export function dataLossPreventionContentPolicyInspectConfigToHclTerraform(struct?: DataLossPreventionContentPolicyInspectConfigOutputReference | DataLossPreventionContentPolicyInspectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_info_types: {
      value: cdktf.booleanToHclTerraform(struct!.excludeInfoTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_quote: {
      value: cdktf.booleanToHclTerraform(struct!.includeQuote),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_likelihood: {
      value: cdktf.stringToHclTerraform(struct!.minLikelihood),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_info_types: {
      value: cdktf.listMapperHcl(dataLossPreventionContentPolicyInspectConfigCustomInfoTypesToHclTerraform, true)(struct!.customInfoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigCustomInfoTypesList",
    },
    info_types: {
      value: cdktf.listMapperHcl(dataLossPreventionContentPolicyInspectConfigInfoTypesToHclTerraform, true)(struct!.infoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigInfoTypesList",
    },
    limits: {
      value: dataLossPreventionContentPolicyInspectConfigLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigLimitsList",
    },
    min_likelihood_per_info_type: {
      value: cdktf.listMapperHcl(dataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeToHclTerraform, true)(struct!.minLikelihoodPerInfoType),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeList",
    },
    rule_set: {
      value: cdktf.listMapperHcl(dataLossPreventionContentPolicyInspectConfigRuleSetToHclTerraform, true)(struct!.ruleSet),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyInspectConfigRuleSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyInspectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyInspectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentOptions = this._contentOptions;
    }
    if (this._excludeInfoTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeInfoTypes = this._excludeInfoTypes;
    }
    if (this._includeQuote !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeQuote = this._includeQuote;
    }
    if (this._minLikelihood !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLikelihood = this._minLikelihood;
    }
    if (this._customInfoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customInfoTypes = this._customInfoTypes?.internalValue;
    }
    if (this._infoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypes = this._infoTypes?.internalValue;
    }
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._minLikelihoodPerInfoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLikelihoodPerInfoType = this._minLikelihoodPerInfoType?.internalValue;
    }
    if (this._ruleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSet = this._ruleSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyInspectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentOptions = undefined;
      this._excludeInfoTypes = undefined;
      this._includeQuote = undefined;
      this._minLikelihood = undefined;
      this._customInfoTypes.internalValue = undefined;
      this._infoTypes.internalValue = undefined;
      this._limits.internalValue = undefined;
      this._minLikelihoodPerInfoType.internalValue = undefined;
      this._ruleSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentOptions = value.contentOptions;
      this._excludeInfoTypes = value.excludeInfoTypes;
      this._includeQuote = value.includeQuote;
      this._minLikelihood = value.minLikelihood;
      this._customInfoTypes.internalValue = value.customInfoTypes;
      this._infoTypes.internalValue = value.infoTypes;
      this._limits.internalValue = value.limits;
      this._minLikelihoodPerInfoType.internalValue = value.minLikelihoodPerInfoType;
      this._ruleSet.internalValue = value.ruleSet;
    }
  }

  // content_options - computed: false, optional: true, required: false
  private _contentOptions?: string[]; 
  public get contentOptions() {
    return this.getListAttribute('content_options');
  }
  public set contentOptions(value: string[]) {
    this._contentOptions = value;
  }
  public resetContentOptions() {
    this._contentOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentOptionsInput() {
    return this._contentOptions;
  }

  // exclude_info_types - computed: false, optional: true, required: false
  private _excludeInfoTypes?: boolean | cdktf.IResolvable; 
  public get excludeInfoTypes() {
    return this.getBooleanAttribute('exclude_info_types');
  }
  public set excludeInfoTypes(value: boolean | cdktf.IResolvable) {
    this._excludeInfoTypes = value;
  }
  public resetExcludeInfoTypes() {
    this._excludeInfoTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInfoTypesInput() {
    return this._excludeInfoTypes;
  }

  // include_quote - computed: false, optional: true, required: false
  private _includeQuote?: boolean | cdktf.IResolvable; 
  public get includeQuote() {
    return this.getBooleanAttribute('include_quote');
  }
  public set includeQuote(value: boolean | cdktf.IResolvable) {
    this._includeQuote = value;
  }
  public resetIncludeQuote() {
    this._includeQuote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeQuoteInput() {
    return this._includeQuote;
  }

  // min_likelihood - computed: false, optional: true, required: false
  private _minLikelihood?: string; 
  public get minLikelihood() {
    return this.getStringAttribute('min_likelihood');
  }
  public set minLikelihood(value: string) {
    this._minLikelihood = value;
  }
  public resetMinLikelihood() {
    this._minLikelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLikelihoodInput() {
    return this._minLikelihood;
  }

  // custom_info_types - computed: false, optional: true, required: false
  private _customInfoTypes = new DataLossPreventionContentPolicyInspectConfigCustomInfoTypesList(this, "custom_info_types", false);
  public get customInfoTypes() {
    return this._customInfoTypes;
  }
  public putCustomInfoTypes(value: DataLossPreventionContentPolicyInspectConfigCustomInfoTypes[] | cdktf.IResolvable) {
    this._customInfoTypes.internalValue = value;
  }
  public resetCustomInfoTypes() {
    this._customInfoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInfoTypesInput() {
    return this._customInfoTypes.internalValue;
  }

  // info_types - computed: false, optional: true, required: false
  private _infoTypes = new DataLossPreventionContentPolicyInspectConfigInfoTypesList(this, "info_types", false);
  public get infoTypes() {
    return this._infoTypes;
  }
  public putInfoTypes(value: DataLossPreventionContentPolicyInspectConfigInfoTypes[] | cdktf.IResolvable) {
    this._infoTypes.internalValue = value;
  }
  public resetInfoTypes() {
    this._infoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new DataLossPreventionContentPolicyInspectConfigLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataLossPreventionContentPolicyInspectConfigLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // min_likelihood_per_info_type - computed: false, optional: true, required: false
  private _minLikelihoodPerInfoType = new DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeList(this, "min_likelihood_per_info_type", false);
  public get minLikelihoodPerInfoType() {
    return this._minLikelihoodPerInfoType;
  }
  public putMinLikelihoodPerInfoType(value: DataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoType[] | cdktf.IResolvable) {
    this._minLikelihoodPerInfoType.internalValue = value;
  }
  public resetMinLikelihoodPerInfoType() {
    this._minLikelihoodPerInfoType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLikelihoodPerInfoTypeInput() {
    return this._minLikelihoodPerInfoType.internalValue;
  }

  // rule_set - computed: false, optional: true, required: false
  private _ruleSet = new DataLossPreventionContentPolicyInspectConfigRuleSetList(this, "rule_set", false);
  public get ruleSet() {
    return this._ruleSet;
  }
  public putRuleSet(value: DataLossPreventionContentPolicyInspectConfigRuleSet[] | cdktf.IResolvable) {
    this._ruleSet.internalValue = value;
  }
  public resetRuleSet() {
    this._ruleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetInput() {
    return this._ruleSet.internalValue;
  }
}
export interface DataLossPreventionContentPolicyLoggingConfigsLogToBigQuery {
  /**
  * The dataset ID of the BigQuery table to log to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#dataset_id DataLossPreventionContentPolicy#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The project ID of the BigQuery table to log to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#project_id DataLossPreventionContentPolicy#project_id}
  */
  readonly projectId: string;
  /**
  * The table ID of the BigQuery table to log to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#table_id DataLossPreventionContentPolicy#table_id}
  */
  readonly tableId: string;
}

export function dataLossPreventionContentPolicyLoggingConfigsLogToBigQueryToTerraform(struct?: DataLossPreventionContentPolicyLoggingConfigsLogToBigQueryOutputReference | DataLossPreventionContentPolicyLoggingConfigsLogToBigQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}


export function dataLossPreventionContentPolicyLoggingConfigsLogToBigQueryToHclTerraform(struct?: DataLossPreventionContentPolicyLoggingConfigsLogToBigQueryOutputReference | DataLossPreventionContentPolicyLoggingConfigsLogToBigQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyLoggingConfigsLogToBigQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyLoggingConfigsLogToBigQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyLoggingConfigsLogToBigQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._tableId = value.tableId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}
export interface DataLossPreventionContentPolicyLoggingConfigs {
  /**
  * log_to_big_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#log_to_big_query DataLossPreventionContentPolicy#log_to_big_query}
  */
  readonly logToBigQuery?: DataLossPreventionContentPolicyLoggingConfigsLogToBigQuery;
}

export function dataLossPreventionContentPolicyLoggingConfigsToTerraform(struct?: DataLossPreventionContentPolicyLoggingConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_to_big_query: dataLossPreventionContentPolicyLoggingConfigsLogToBigQueryToTerraform(struct!.logToBigQuery),
  }
}


export function dataLossPreventionContentPolicyLoggingConfigsToHclTerraform(struct?: DataLossPreventionContentPolicyLoggingConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_to_big_query: {
      value: dataLossPreventionContentPolicyLoggingConfigsLogToBigQueryToHclTerraform(struct!.logToBigQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyLoggingConfigsLogToBigQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyLoggingConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionContentPolicyLoggingConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logToBigQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logToBigQuery = this._logToBigQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyLoggingConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logToBigQuery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logToBigQuery.internalValue = value.logToBigQuery;
    }
  }

  // log_to_big_query - computed: false, optional: true, required: false
  private _logToBigQuery = new DataLossPreventionContentPolicyLoggingConfigsLogToBigQueryOutputReference(this, "log_to_big_query");
  public get logToBigQuery() {
    return this._logToBigQuery;
  }
  public putLogToBigQuery(value: DataLossPreventionContentPolicyLoggingConfigsLogToBigQuery) {
    this._logToBigQuery.internalValue = value;
  }
  public resetLogToBigQuery() {
    this._logToBigQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logToBigQueryInput() {
    return this._logToBigQuery.internalValue;
  }
}

export class DataLossPreventionContentPolicyLoggingConfigsList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionContentPolicyLoggingConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionContentPolicyLoggingConfigsOutputReference {
    return new DataLossPreventionContentPolicyLoggingConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionContentPolicyRulesAction {
  /**
  * If set, the verdict will be returned to the user.
  * Possible values: ["ALLOW", "BLOCK"] Possible values: ["ALLOW", "BLOCK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#return_verdict DataLossPreventionContentPolicy#return_verdict}
  */
  readonly returnVerdict?: string;
}

export function dataLossPreventionContentPolicyRulesActionToTerraform(struct?: DataLossPreventionContentPolicyRulesActionOutputReference | DataLossPreventionContentPolicyRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_verdict: cdktf.stringToTerraform(struct!.returnVerdict),
  }
}


export function dataLossPreventionContentPolicyRulesActionToHclTerraform(struct?: DataLossPreventionContentPolicyRulesActionOutputReference | DataLossPreventionContentPolicyRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    return_verdict: {
      value: cdktf.stringToHclTerraform(struct!.returnVerdict),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returnVerdict !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnVerdict = this._returnVerdict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._returnVerdict = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._returnVerdict = value.returnVerdict;
    }
  }

  // return_verdict - computed: false, optional: true, required: false
  private _returnVerdict?: string; 
  public get returnVerdict() {
    return this.getStringAttribute('return_verdict');
  }
  public set returnVerdict(value: string) {
    this._returnVerdict = value;
  }
  public resetReturnVerdict() {
    this._returnVerdict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnVerdictInput() {
    return this._returnVerdict;
  }
}
export interface DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoType {
}

export function dataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoTypeToTerraform(struct?: DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoTypeOutputReference | DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoTypeToHclTerraform(struct?: DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoTypeOutputReference | DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypes {
  /**
  * List of info type names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#info_type_names DataLossPreventionContentPolicy#info_type_names}
  */
  readonly infoTypeNames: string[];
}

export function dataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypesToTerraform(struct?: DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypesOutputReference | DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_type_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.infoTypeNames),
  }
}


export function dataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypesToHclTerraform(struct?: DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypesOutputReference | DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info_type_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.infoTypeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infoTypeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypeNames = this._infoTypeNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._infoTypeNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._infoTypeNames = value.infoTypeNames;
    }
  }

  // info_type_names - computed: false, optional: false, required: true
  private _infoTypeNames?: string[]; 
  public get infoTypeNames() {
    return this.getListAttribute('info_type_names');
  }
  public set infoTypeNames(value: string[]) {
    this._infoTypeNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeNamesInput() {
    return this._infoTypeNames;
  }
}
export interface DataLossPreventionContentPolicyRulesConditionsInfoTypeCondition {
  /**
  * The minimum number of findings required for this condition to be met. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#min_count DataLossPreventionContentPolicy#min_count}
  */
  readonly minCount?: number;
  /**
  * any_info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#any_info_type DataLossPreventionContentPolicy#any_info_type}
  */
  readonly anyInfoType?: DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoType;
  /**
  * info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#info_types DataLossPreventionContentPolicy#info_types}
  */
  readonly infoTypes?: DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypes;
}

export function dataLossPreventionContentPolicyRulesConditionsInfoTypeConditionToTerraform(struct?: DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionOutputReference | DataLossPreventionContentPolicyRulesConditionsInfoTypeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_count: cdktf.numberToTerraform(struct!.minCount),
    any_info_type: dataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoTypeToTerraform(struct!.anyInfoType),
    info_types: dataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypesToTerraform(struct!.infoTypes),
  }
}


export function dataLossPreventionContentPolicyRulesConditionsInfoTypeConditionToHclTerraform(struct?: DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionOutputReference | DataLossPreventionContentPolicyRulesConditionsInfoTypeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_count: {
      value: cdktf.numberToHclTerraform(struct!.minCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    any_info_type: {
      value: dataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoTypeToHclTerraform(struct!.anyInfoType),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoTypeList",
    },
    info_types: {
      value: dataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypesToHclTerraform(struct!.infoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyRulesConditionsInfoTypeCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    if (this._anyInfoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyInfoType = this._anyInfoType?.internalValue;
    }
    if (this._infoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypes = this._infoTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyRulesConditionsInfoTypeCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minCount = undefined;
      this._anyInfoType.internalValue = undefined;
      this._infoTypes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minCount = value.minCount;
      this._anyInfoType.internalValue = value.anyInfoType;
      this._infoTypes.internalValue = value.infoTypes;
    }
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // any_info_type - computed: false, optional: true, required: false
  private _anyInfoType = new DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoTypeOutputReference(this, "any_info_type");
  public get anyInfoType() {
    return this._anyInfoType;
  }
  public putAnyInfoType(value: DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoType) {
    this._anyInfoType.internalValue = value;
  }
  public resetAnyInfoType() {
    this._anyInfoType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInfoTypeInput() {
    return this._anyInfoType.internalValue;
  }

  // info_types - computed: false, optional: true, required: false
  private _infoTypes = new DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypesOutputReference(this, "info_types");
  public get infoTypes() {
    return this._infoTypes;
  }
  public putInfoTypes(value: DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypes) {
    this._infoTypes.internalValue = value;
  }
  public resetInfoTypes() {
    this._infoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes.internalValue;
  }
}
export interface DataLossPreventionContentPolicyRulesConditions {
  /**
  * info_type_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#info_type_condition DataLossPreventionContentPolicy#info_type_condition}
  */
  readonly infoTypeCondition?: DataLossPreventionContentPolicyRulesConditionsInfoTypeCondition;
}

export function dataLossPreventionContentPolicyRulesConditionsToTerraform(struct?: DataLossPreventionContentPolicyRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_type_condition: dataLossPreventionContentPolicyRulesConditionsInfoTypeConditionToTerraform(struct!.infoTypeCondition),
  }
}


export function dataLossPreventionContentPolicyRulesConditionsToHclTerraform(struct?: DataLossPreventionContentPolicyRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info_type_condition: {
      value: dataLossPreventionContentPolicyRulesConditionsInfoTypeConditionToHclTerraform(struct!.infoTypeCondition),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyRulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionContentPolicyRulesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infoTypeCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypeCondition = this._infoTypeCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyRulesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._infoTypeCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._infoTypeCondition.internalValue = value.infoTypeCondition;
    }
  }

  // info_type_condition - computed: false, optional: true, required: false
  private _infoTypeCondition = new DataLossPreventionContentPolicyRulesConditionsInfoTypeConditionOutputReference(this, "info_type_condition");
  public get infoTypeCondition() {
    return this._infoTypeCondition;
  }
  public putInfoTypeCondition(value: DataLossPreventionContentPolicyRulesConditionsInfoTypeCondition) {
    this._infoTypeCondition.internalValue = value;
  }
  public resetInfoTypeCondition() {
    this._infoTypeCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeConditionInput() {
    return this._infoTypeCondition.internalValue;
  }
}

export class DataLossPreventionContentPolicyRulesConditionsList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionContentPolicyRulesConditions[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionContentPolicyRulesConditionsOutputReference {
    return new DataLossPreventionContentPolicyRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionContentPolicyRules {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#action DataLossPreventionContentPolicy#action}
  */
  readonly action: DataLossPreventionContentPolicyRulesAction;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#conditions DataLossPreventionContentPolicy#conditions}
  */
  readonly conditions?: DataLossPreventionContentPolicyRulesConditions[] | cdktf.IResolvable;
}

export function dataLossPreventionContentPolicyRulesToTerraform(struct?: DataLossPreventionContentPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataLossPreventionContentPolicyRulesActionToTerraform(struct!.action),
    conditions: cdktf.listMapper(dataLossPreventionContentPolicyRulesConditionsToTerraform, true)(struct!.conditions),
  }
}


export function dataLossPreventionContentPolicyRulesToHclTerraform(struct?: DataLossPreventionContentPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataLossPreventionContentPolicyRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyRulesActionList",
    },
    conditions: {
      value: cdktf.listMapperHcl(dataLossPreventionContentPolicyRulesConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionContentPolicyRulesConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionContentPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._conditions.internalValue = value.conditions;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new DataLossPreventionContentPolicyRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataLossPreventionContentPolicyRulesAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataLossPreventionContentPolicyRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataLossPreventionContentPolicyRulesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class DataLossPreventionContentPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionContentPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionContentPolicyRulesOutputReference {
    return new DataLossPreventionContentPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionContentPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#create DataLossPreventionContentPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#delete DataLossPreventionContentPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#update DataLossPreventionContentPolicy#update}
  */
  readonly update?: string;
}

export function dataLossPreventionContentPolicyTimeoutsToTerraform(struct?: DataLossPreventionContentPolicyTimeouts | cdktf.IResolvable): any {
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


export function dataLossPreventionContentPolicyTimeoutsToHclTerraform(struct?: DataLossPreventionContentPolicyTimeouts | cdktf.IResolvable): any {
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

export class DataLossPreventionContentPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLossPreventionContentPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataLossPreventionContentPolicyTimeouts | cdktf.IResolvable | undefined) {
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
export interface DataLossPreventionContentPolicyUnsupportedFileType {
  /**
  * If set, the verdict will be returned to the user.
  * Possible values: ["ALLOW", "BLOCK"] Possible values: ["ALLOW", "BLOCK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#return_verdict DataLossPreventionContentPolicy#return_verdict}
  */
  readonly returnVerdict?: string;
}

export function dataLossPreventionContentPolicyUnsupportedFileTypeToTerraform(struct?: DataLossPreventionContentPolicyUnsupportedFileTypeOutputReference | DataLossPreventionContentPolicyUnsupportedFileType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_verdict: cdktf.stringToTerraform(struct!.returnVerdict),
  }
}


export function dataLossPreventionContentPolicyUnsupportedFileTypeToHclTerraform(struct?: DataLossPreventionContentPolicyUnsupportedFileTypeOutputReference | DataLossPreventionContentPolicyUnsupportedFileType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    return_verdict: {
      value: cdktf.stringToHclTerraform(struct!.returnVerdict),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionContentPolicyUnsupportedFileTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionContentPolicyUnsupportedFileType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returnVerdict !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnVerdict = this._returnVerdict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionContentPolicyUnsupportedFileType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._returnVerdict = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._returnVerdict = value.returnVerdict;
    }
  }

  // return_verdict - computed: false, optional: true, required: false
  private _returnVerdict?: string; 
  public get returnVerdict() {
    return this.getStringAttribute('return_verdict');
  }
  public set returnVerdict(value: string) {
    this._returnVerdict = value;
  }
  public resetReturnVerdict() {
    this._returnVerdict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnVerdictInput() {
    return this._returnVerdict;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy google_data_loss_prevention_content_policy}
*/
export class DataLossPreventionContentPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_loss_prevention_content_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLossPreventionContentPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLossPreventionContentPolicy to import
  * @param importFromId The id of the existing DataLossPreventionContentPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLossPreventionContentPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_data_loss_prevention_content_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/data_loss_prevention_content_policy google_data_loss_prevention_content_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLossPreventionContentPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataLossPreventionContentPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_loss_prevention_content_policy',
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
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._parent = config.parent;
    this._defaultAction.internalValue = config.defaultAction;
    this._failedToScanSupportedFileType.internalValue = config.failedToScanSupportedFileType;
    this._inputTooLarge.internalValue = config.inputTooLarge;
    this._inspectConfig.internalValue = config.inspectConfig;
    this._loggingConfigs.internalValue = config.loggingConfigs;
    this._rules.internalValue = config.rules;
    this._timeouts.internalValue = config.timeouts;
    this._unsupportedFileType.internalValue = config.unsupportedFileType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new DataLossPreventionContentPolicyErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // default_action - computed: false, optional: true, required: false
  private _defaultAction = new DataLossPreventionContentPolicyDefaultActionOutputReference(this, "default_action");
  public get defaultAction() {
    return this._defaultAction;
  }
  public putDefaultAction(value: DataLossPreventionContentPolicyDefaultAction) {
    this._defaultAction.internalValue = value;
  }
  public resetDefaultAction() {
    this._defaultAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction.internalValue;
  }

  // failed_to_scan_supported_file_type - computed: false, optional: true, required: false
  private _failedToScanSupportedFileType = new DataLossPreventionContentPolicyFailedToScanSupportedFileTypeOutputReference(this, "failed_to_scan_supported_file_type");
  public get failedToScanSupportedFileType() {
    return this._failedToScanSupportedFileType;
  }
  public putFailedToScanSupportedFileType(value: DataLossPreventionContentPolicyFailedToScanSupportedFileType) {
    this._failedToScanSupportedFileType.internalValue = value;
  }
  public resetFailedToScanSupportedFileType() {
    this._failedToScanSupportedFileType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedToScanSupportedFileTypeInput() {
    return this._failedToScanSupportedFileType.internalValue;
  }

  // input_too_large - computed: false, optional: true, required: false
  private _inputTooLarge = new DataLossPreventionContentPolicyInputTooLargeOutputReference(this, "input_too_large");
  public get inputTooLarge() {
    return this._inputTooLarge;
  }
  public putInputTooLarge(value: DataLossPreventionContentPolicyInputTooLarge) {
    this._inputTooLarge.internalValue = value;
  }
  public resetInputTooLarge() {
    this._inputTooLarge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTooLargeInput() {
    return this._inputTooLarge.internalValue;
  }

  // inspect_config - computed: false, optional: true, required: false
  private _inspectConfig = new DataLossPreventionContentPolicyInspectConfigOutputReference(this, "inspect_config");
  public get inspectConfig() {
    return this._inspectConfig;
  }
  public putInspectConfig(value: DataLossPreventionContentPolicyInspectConfig) {
    this._inspectConfig.internalValue = value;
  }
  public resetInspectConfig() {
    this._inspectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectConfigInput() {
    return this._inspectConfig.internalValue;
  }

  // logging_configs - computed: false, optional: true, required: false
  private _loggingConfigs = new DataLossPreventionContentPolicyLoggingConfigsList(this, "logging_configs", false);
  public get loggingConfigs() {
    return this._loggingConfigs;
  }
  public putLoggingConfigs(value: DataLossPreventionContentPolicyLoggingConfigs[] | cdktf.IResolvable) {
    this._loggingConfigs.internalValue = value;
  }
  public resetLoggingConfigs() {
    this._loggingConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigsInput() {
    return this._loggingConfigs.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DataLossPreventionContentPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataLossPreventionContentPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataLossPreventionContentPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataLossPreventionContentPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // unsupported_file_type - computed: false, optional: true, required: false
  private _unsupportedFileType = new DataLossPreventionContentPolicyUnsupportedFileTypeOutputReference(this, "unsupported_file_type");
  public get unsupportedFileType() {
    return this._unsupportedFileType;
  }
  public putUnsupportedFileType(value: DataLossPreventionContentPolicyUnsupportedFileType) {
    this._unsupportedFileType.internalValue = value;
  }
  public resetUnsupportedFileType() {
    this._unsupportedFileType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedFileTypeInput() {
    return this._unsupportedFileType.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      parent: cdktf.stringToTerraform(this._parent),
      default_action: dataLossPreventionContentPolicyDefaultActionToTerraform(this._defaultAction.internalValue),
      failed_to_scan_supported_file_type: dataLossPreventionContentPolicyFailedToScanSupportedFileTypeToTerraform(this._failedToScanSupportedFileType.internalValue),
      input_too_large: dataLossPreventionContentPolicyInputTooLargeToTerraform(this._inputTooLarge.internalValue),
      inspect_config: dataLossPreventionContentPolicyInspectConfigToTerraform(this._inspectConfig.internalValue),
      logging_configs: cdktf.listMapper(dataLossPreventionContentPolicyLoggingConfigsToTerraform, true)(this._loggingConfigs.internalValue),
      rules: cdktf.listMapper(dataLossPreventionContentPolicyRulesToTerraform, true)(this._rules.internalValue),
      timeouts: dataLossPreventionContentPolicyTimeoutsToTerraform(this._timeouts.internalValue),
      unsupported_file_type: dataLossPreventionContentPolicyUnsupportedFileTypeToTerraform(this._unsupportedFileType.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_action: {
        value: dataLossPreventionContentPolicyDefaultActionToHclTerraform(this._defaultAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLossPreventionContentPolicyDefaultActionList",
      },
      failed_to_scan_supported_file_type: {
        value: dataLossPreventionContentPolicyFailedToScanSupportedFileTypeToHclTerraform(this._failedToScanSupportedFileType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLossPreventionContentPolicyFailedToScanSupportedFileTypeList",
      },
      input_too_large: {
        value: dataLossPreventionContentPolicyInputTooLargeToHclTerraform(this._inputTooLarge.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLossPreventionContentPolicyInputTooLargeList",
      },
      inspect_config: {
        value: dataLossPreventionContentPolicyInspectConfigToHclTerraform(this._inspectConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLossPreventionContentPolicyInspectConfigList",
      },
      logging_configs: {
        value: cdktf.listMapperHcl(dataLossPreventionContentPolicyLoggingConfigsToHclTerraform, true)(this._loggingConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLossPreventionContentPolicyLoggingConfigsList",
      },
      rules: {
        value: cdktf.listMapperHcl(dataLossPreventionContentPolicyRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLossPreventionContentPolicyRulesList",
      },
      timeouts: {
        value: dataLossPreventionContentPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataLossPreventionContentPolicyTimeouts",
      },
      unsupported_file_type: {
        value: dataLossPreventionContentPolicyUnsupportedFileTypeToHclTerraform(this._unsupportedFileType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLossPreventionContentPolicyUnsupportedFileTypeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
