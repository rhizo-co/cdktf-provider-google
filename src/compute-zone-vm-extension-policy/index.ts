// https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeZoneVmExtensionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy#deletion_policy ComputeZoneVmExtensionPolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy#description ComputeZoneVmExtensionPolicy#description}
  */
  readonly description?: string;
  /**
  * Name of the resource. Provided by the client when the resource is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy#name ComputeZoneVmExtensionPolicy#name}
  */
  readonly name: string;
  /**
  * Priority of this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy#priority ComputeZoneVmExtensionPolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy#project ComputeZoneVmExtensionPolicy#project}
  */
  readonly project?: string;
  /**
  * Name of the zone for this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy#zone ComputeZoneVmExtensionPolicy#zone}
  */
  readonly zone: string;
  /**
  * extension_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy#extension_policies ComputeZoneVmExtensionPolicy#extension_policies}
  */
  readonly extensionPolicies: ComputeZoneVmExtensionPolicyExtensionPolicies[] | cdktf.IResolvable;
  /**
  * instance_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy#instance_selectors ComputeZoneVmExtensionPolicy#instance_selectors}
  */
  readonly instanceSelectors?: ComputeZoneVmExtensionPolicyInstanceSelectors[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy#timeouts ComputeZoneVmExtensionPolicy#timeouts}
  */
  readonly timeouts?: ComputeZoneVmExtensionPolicyTimeouts;
}
export interface ComputeZoneVmExtensionPolicyExtensionPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy#extension_name ComputeZoneVmExtensionPolicy#extension_name}
  */
  readonly extensionName: string;
  /**
  * The specific version of the extension to install.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy#pinned_version ComputeZoneVmExtensionPolicy#pinned_version}
  */
  readonly pinnedVersion?: string;
  /**
  * String-based configuration data for the extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy#string_config ComputeZoneVmExtensionPolicy#string_config}
  */
  readonly stringConfig?: string;
}

export function computeZoneVmExtensionPolicyExtensionPoliciesToTerraform(struct?: ComputeZoneVmExtensionPolicyExtensionPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extension_name: cdktf.stringToTerraform(struct!.extensionName),
    pinned_version: cdktf.stringToTerraform(struct!.pinnedVersion),
    string_config: cdktf.stringToTerraform(struct!.stringConfig),
  }
}


export function computeZoneVmExtensionPolicyExtensionPoliciesToHclTerraform(struct?: ComputeZoneVmExtensionPolicyExtensionPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extension_name: {
      value: cdktf.stringToHclTerraform(struct!.extensionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pinned_version: {
      value: cdktf.stringToHclTerraform(struct!.pinnedVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_config: {
      value: cdktf.stringToHclTerraform(struct!.stringConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeZoneVmExtensionPolicyExtensionPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extensionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionName = this._extensionName;
    }
    if (this._pinnedVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinnedVersion = this._pinnedVersion;
    }
    if (this._stringConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringConfig = this._stringConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeZoneVmExtensionPolicyExtensionPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extensionName = undefined;
      this._pinnedVersion = undefined;
      this._stringConfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extensionName = value.extensionName;
      this._pinnedVersion = value.pinnedVersion;
      this._stringConfig = value.stringConfig;
    }
  }

  // extension_name - computed: false, optional: false, required: true
  private _extensionName?: string; 
  public get extensionName() {
    return this.getStringAttribute('extension_name');
  }
  public set extensionName(value: string) {
    this._extensionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionNameInput() {
    return this._extensionName;
  }

  // pinned_version - computed: false, optional: true, required: false
  private _pinnedVersion?: string; 
  public get pinnedVersion() {
    return this.getStringAttribute('pinned_version');
  }
  public set pinnedVersion(value: string) {
    this._pinnedVersion = value;
  }
  public resetPinnedVersion() {
    this._pinnedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinnedVersionInput() {
    return this._pinnedVersion;
  }

  // string_config - computed: false, optional: true, required: false
  private _stringConfig?: string; 
  public get stringConfig() {
    return this.getStringAttribute('string_config');
  }
  public set stringConfig(value: string) {
    this._stringConfig = value;
  }
  public resetStringConfig() {
    this._stringConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringConfigInput() {
    return this._stringConfig;
  }
}

export class ComputeZoneVmExtensionPolicyExtensionPoliciesList extends cdktf.ComplexList {
  public internalValue? : ComputeZoneVmExtensionPolicyExtensionPolicies[] | cdktf.IResolvable

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
  public get(index: number): ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference {
    return new ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector {
  /**
  * A map of key-value pairs representing VM labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy#inclusion_labels ComputeZoneVmExtensionPolicy#inclusion_labels}
  */
  readonly inclusionLabels?: { [key: string]: string };
}

export function computeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorToTerraform(struct?: ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference | ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inclusion_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.inclusionLabels),
  }
}


export function computeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorToHclTerraform(struct?: ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference | ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inclusion_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.inclusionLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inclusionLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionLabels = this._inclusionLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inclusionLabels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inclusionLabels = value.inclusionLabels;
    }
  }

  // inclusion_labels - computed: false, optional: true, required: false
  private _inclusionLabels?: { [key: string]: string }; 
  public get inclusionLabels() {
    return this.getStringMapAttribute('inclusion_labels');
  }
  public set inclusionLabels(value: { [key: string]: string }) {
    this._inclusionLabels = value;
  }
  public resetInclusionLabels() {
    this._inclusionLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionLabelsInput() {
    return this._inclusionLabels;
  }
}
export interface ComputeZoneVmExtensionPolicyInstanceSelectors {
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy#label_selector ComputeZoneVmExtensionPolicy#label_selector}
  */
  readonly labelSelector?: ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector;
}

export function computeZoneVmExtensionPolicyInstanceSelectorsToTerraform(struct?: ComputeZoneVmExtensionPolicyInstanceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: computeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorToTerraform(struct!.labelSelector),
  }
}


export function computeZoneVmExtensionPolicyInstanceSelectorsToHclTerraform(struct?: ComputeZoneVmExtensionPolicyInstanceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: computeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeZoneVmExtensionPolicyInstanceSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeZoneVmExtensionPolicyInstanceSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }
}

export class ComputeZoneVmExtensionPolicyInstanceSelectorsList extends cdktf.ComplexList {
  public internalValue? : ComputeZoneVmExtensionPolicyInstanceSelectors[] | cdktf.IResolvable

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
  public get(index: number): ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference {
    return new ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeZoneVmExtensionPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy#create ComputeZoneVmExtensionPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy#delete ComputeZoneVmExtensionPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy#update ComputeZoneVmExtensionPolicy#update}
  */
  readonly update?: string;
}

export function computeZoneVmExtensionPolicyTimeoutsToTerraform(struct?: ComputeZoneVmExtensionPolicyTimeouts | cdktf.IResolvable): any {
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


export function computeZoneVmExtensionPolicyTimeoutsToHclTerraform(struct?: ComputeZoneVmExtensionPolicyTimeouts | cdktf.IResolvable): any {
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

export class ComputeZoneVmExtensionPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeZoneVmExtensionPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeZoneVmExtensionPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy google_compute_zone_vm_extension_policy}
*/
export class ComputeZoneVmExtensionPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_zone_vm_extension_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeZoneVmExtensionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeZoneVmExtensionPolicy to import
  * @param importFromId The id of the existing ComputeZoneVmExtensionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeZoneVmExtensionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_zone_vm_extension_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/compute_zone_vm_extension_policy google_compute_zone_vm_extension_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeZoneVmExtensionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeZoneVmExtensionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_zone_vm_extension_policy',
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
    this._description = config.description;
    this._name = config.name;
    this._priority = config.priority;
    this._project = config.project;
    this._zone = config.zone;
    this._extensionPolicies.internalValue = config.extensionPolicies;
    this._instanceSelectors.internalValue = config.instanceSelectors;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // managed_by_global - computed: true, optional: false, required: false
  public get managedByGlobal() {
    return this.getBooleanAttribute('managed_by_global');
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // extension_policies - computed: false, optional: false, required: true
  private _extensionPolicies = new ComputeZoneVmExtensionPolicyExtensionPoliciesList(this, "extension_policies", true);
  public get extensionPolicies() {
    return this._extensionPolicies;
  }
  public putExtensionPolicies(value: ComputeZoneVmExtensionPolicyExtensionPolicies[] | cdktf.IResolvable) {
    this._extensionPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionPoliciesInput() {
    return this._extensionPolicies.internalValue;
  }

  // instance_selectors - computed: false, optional: true, required: false
  private _instanceSelectors = new ComputeZoneVmExtensionPolicyInstanceSelectorsList(this, "instance_selectors", false);
  public get instanceSelectors() {
    return this._instanceSelectors;
  }
  public putInstanceSelectors(value: ComputeZoneVmExtensionPolicyInstanceSelectors[] | cdktf.IResolvable) {
    this._instanceSelectors.internalValue = value;
  }
  public resetInstanceSelectors() {
    this._instanceSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSelectorsInput() {
    return this._instanceSelectors.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeZoneVmExtensionPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeZoneVmExtensionPolicyTimeouts) {
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
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      project: cdktf.stringToTerraform(this._project),
      zone: cdktf.stringToTerraform(this._zone),
      extension_policies: cdktf.listMapper(computeZoneVmExtensionPolicyExtensionPoliciesToTerraform, true)(this._extensionPolicies.internalValue),
      instance_selectors: cdktf.listMapper(computeZoneVmExtensionPolicyInstanceSelectorsToTerraform, true)(this._instanceSelectors.internalValue),
      timeouts: computeZoneVmExtensionPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_policies: {
        value: cdktf.listMapperHcl(computeZoneVmExtensionPolicyExtensionPoliciesToHclTerraform, true)(this._extensionPolicies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeZoneVmExtensionPolicyExtensionPoliciesList",
      },
      instance_selectors: {
        value: cdktf.listMapperHcl(computeZoneVmExtensionPolicyInstanceSelectorsToHclTerraform, true)(this._instanceSelectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeZoneVmExtensionPolicyInstanceSelectorsList",
      },
      timeouts: {
        value: computeZoneVmExtensionPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeZoneVmExtensionPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
