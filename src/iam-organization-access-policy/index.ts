// https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamOrganizationAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID to use for the access policy, which
  * will become the final component of the access policy's
  * resource name.
  * This value must start with a lowercase letter followed by up to 62
  * lowercase letters, numbers, hyphens, or dots. Pattern,
  * /a-z{2,62}/.
  * This value must be unique among all access policies with the same parent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#access_policy_id IamOrganizationAccessPolicy#access_policy_id}
  */
  readonly accessPolicyId: string;
  /**
  * User defined annotations. See https://google.aip.dev/148#annotations for
  * more details such as format and size limitations
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#annotations IamOrganizationAccessPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#deletion_policy IamOrganizationAccessPolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The description of the access policy. Must be less than
  * or equal to 63 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#display_name IamOrganizationAccessPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#id IamOrganizationAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#location IamOrganizationAccessPolicy#location}
  */
  readonly location: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#organization IamOrganizationAccessPolicy#organization}
  */
  readonly organization: string;
  /**
  * details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#details IamOrganizationAccessPolicy#details}
  */
  readonly details?: IamOrganizationAccessPolicyDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#timeouts IamOrganizationAccessPolicy#timeouts}
  */
  readonly timeouts?: IamOrganizationAccessPolicyTimeouts;
}
export interface IamOrganizationAccessPolicyDetailsRulesConditions {
  /**
  * Textual representation of an expression in Common Expression Language
  * syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#expression IamOrganizationAccessPolicy#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#service IamOrganizationAccessPolicy#service}
  */
  readonly service: string;
}

export function iamOrganizationAccessPolicyDetailsRulesConditionsToTerraform(struct?: IamOrganizationAccessPolicyDetailsRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function iamOrganizationAccessPolicyDetailsRulesConditionsToHclTerraform(struct?: IamOrganizationAccessPolicyDetailsRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IamOrganizationAccessPolicyDetailsRulesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamOrganizationAccessPolicyDetailsRulesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._service = value.service;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class IamOrganizationAccessPolicyDetailsRulesConditionsList extends cdktf.ComplexList {
  public internalValue? : IamOrganizationAccessPolicyDetailsRulesConditions[] | cdktf.IResolvable

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
  public get(index: number): IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference {
    return new IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IamOrganizationAccessPolicyDetailsRulesOperation {
  /**
  * Specifies the permissions that this rule excludes from the set of
  * affected permissions given by 'permissions'. If a permission appears in
  * 'permissions' _and_ in 'excluded_permissions' then it will _not_ be
  * subject to the policy effect.
  * The excluded permissions can be specified using the same syntax as
  * 'permissions'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#excluded_permissions IamOrganizationAccessPolicy#excluded_permissions}
  */
  readonly excludedPermissions?: string[];
  /**
  * The permissions that are explicitly affected by this rule. Each
  * permission uses the format '{service_fqdn}/{resource}.{verb}', where
  * '{service_fqdn}' is the fully qualified domain name for the service.
  * Currently supported permissions are as follows:
  * * 'eventarc.googleapis.com/messageBuses.publish'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#permissions IamOrganizationAccessPolicy#permissions}
  */
  readonly permissions: string[];
}

export function iamOrganizationAccessPolicyDetailsRulesOperationToTerraform(struct?: IamOrganizationAccessPolicyDetailsRulesOperationOutputReference | IamOrganizationAccessPolicyDetailsRulesOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedPermissions),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
  }
}


export function iamOrganizationAccessPolicyDetailsRulesOperationToHclTerraform(struct?: IamOrganizationAccessPolicyDetailsRulesOperationOutputReference | IamOrganizationAccessPolicyDetailsRulesOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedPermissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamOrganizationAccessPolicyDetailsRulesOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamOrganizationAccessPolicyDetailsRulesOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPermissions = this._excludedPermissions;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamOrganizationAccessPolicyDetailsRulesOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedPermissions = undefined;
      this._permissions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedPermissions = value.excludedPermissions;
      this._permissions = value.permissions;
    }
  }

  // excluded_permissions - computed: false, optional: true, required: false
  private _excludedPermissions?: string[]; 
  public get excludedPermissions() {
    return this.getListAttribute('excluded_permissions');
  }
  public set excludedPermissions(value: string[]) {
    this._excludedPermissions = value;
  }
  public resetExcludedPermissions() {
    this._excludedPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPermissionsInput() {
    return this._excludedPermissions;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return this.getListAttribute('permissions');
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}
export interface IamOrganizationAccessPolicyDetailsRules {
  /**
  * Customer specified description of the rule. Must be less than or equal to
  * 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#description IamOrganizationAccessPolicy#description}
  */
  readonly description?: string;
  /**
  * The effect of the rule.
  * Possible values:
  * DENY
  * ALLOW Possible values: ["DENY", "ALLOW"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#effect IamOrganizationAccessPolicy#effect}
  */
  readonly effect: string;
  /**
  * The identities that are excluded from the access policy rule, even if they
  * are listed in the 'principals'. For example, you could add a Google
  * group to the 'principals', then exclude specific users who belong to
  * that group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#excluded_principals IamOrganizationAccessPolicy#excluded_principals}
  */
  readonly excludedPrincipals?: string[];
  /**
  * The identities for which this rule's effect governs using one or more
  * permissions on Google Cloud resources. This field can contain the
  * following values:
  * * 'principal://goog/subject/{email_id}': A specific Google Account.
  * Includes Gmail, Cloud Identity, and Google Workspace user accounts. For
  * example, 'principal://goog/subject/alice@example.com'.
  * * 'principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}':
  * A Google Cloud service account. For example,
  * 'principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com'.
  * * 'principalSet://goog/group/{group_id}': A Google group. For example,
  * 'principalSet://goog/group/admins@example.com'.
  * * 'principalSet://goog/cloudIdentityCustomerId/{customer_id}': All of the
  * principals associated with the specified Google Workspace or Cloud
  * Identity customer ID. For example,
  * 'principalSet://goog/cloudIdentityCustomerId/C01Abc35'.
  * If an identifier that was previously set on a policy is soft deleted, then
  * calls to read that policy will return the identifier with a deleted
  * prefix. Users cannot set identifiers with this syntax.
  * * 'deleted:principal://goog/subject/{email_id}?uid={uid}': A specific
  * Google Account that was deleted recently. For example,
  * 'deleted:principal://goog/subject/alice@example.com?uid=1234567890'. If
  * the Google Account is recovered, this identifier reverts to the standard
  * identifier for a Google Account.
  * * 'deleted:principalSet://goog/group/{group_id}?uid={uid}': A Google group
  * that was deleted recently. For example,
  * 'deleted:principalSet://goog/group/admins@example.com?uid=1234567890'.
  * If the Google group is restored, this identifier reverts to the standard
  * identifier for a Google group.
  * * 'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}?uid={uid}':
  * A Google Cloud service account that was deleted recently. For example,
  * 'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com?uid=1234567890'.
  * If the service account is undeleted, this identifier reverts to the
  * standard identifier for a service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#principals IamOrganizationAccessPolicy#principals}
  */
  readonly principals: string[];
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#conditions IamOrganizationAccessPolicy#conditions}
  */
  readonly conditions?: IamOrganizationAccessPolicyDetailsRulesConditions[] | cdktf.IResolvable;
  /**
  * operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#operation IamOrganizationAccessPolicy#operation}
  */
  readonly operation: IamOrganizationAccessPolicyDetailsRulesOperation;
}

export function iamOrganizationAccessPolicyDetailsRulesToTerraform(struct?: IamOrganizationAccessPolicyDetailsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    effect: cdktf.stringToTerraform(struct!.effect),
    excluded_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedPrincipals),
    principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.principals),
    conditions: cdktf.listMapper(iamOrganizationAccessPolicyDetailsRulesConditionsToTerraform, true)(struct!.conditions),
    operation: iamOrganizationAccessPolicyDetailsRulesOperationToTerraform(struct!.operation),
  }
}


export function iamOrganizationAccessPolicyDetailsRulesToHclTerraform(struct?: IamOrganizationAccessPolicyDetailsRules | cdktf.IResolvable): any {
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
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    excluded_principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedPrincipals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.principals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conditions: {
      value: cdktf.listMapperHcl(iamOrganizationAccessPolicyDetailsRulesConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "set",
      storageClassType: "IamOrganizationAccessPolicyDetailsRulesConditionsList",
    },
    operation: {
      value: iamOrganizationAccessPolicyDetailsRulesOperationToHclTerraform(struct!.operation),
      isBlock: true,
      type: "list",
      storageClassType: "IamOrganizationAccessPolicyDetailsRulesOperationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamOrganizationAccessPolicyDetailsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IamOrganizationAccessPolicyDetailsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._excludedPrincipals !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPrincipals = this._excludedPrincipals;
    }
    if (this._principals !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._operation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamOrganizationAccessPolicyDetailsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._effect = undefined;
      this._excludedPrincipals = undefined;
      this._principals = undefined;
      this._conditions.internalValue = undefined;
      this._operation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._effect = value.effect;
      this._excludedPrincipals = value.excludedPrincipals;
      this._principals = value.principals;
      this._conditions.internalValue = value.conditions;
      this._operation.internalValue = value.operation;
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

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // excluded_principals - computed: false, optional: true, required: false
  private _excludedPrincipals?: string[]; 
  public get excludedPrincipals() {
    return this.getListAttribute('excluded_principals');
  }
  public set excludedPrincipals(value: string[]) {
    this._excludedPrincipals = value;
  }
  public resetExcludedPrincipals() {
    this._excludedPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPrincipalsInput() {
    return this._excludedPrincipals;
  }

  // principals - computed: false, optional: false, required: true
  private _principals?: string[]; 
  public get principals() {
    return this.getListAttribute('principals');
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new IamOrganizationAccessPolicyDetailsRulesConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: IamOrganizationAccessPolicyDetailsRulesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // operation - computed: false, optional: false, required: true
  private _operation = new IamOrganizationAccessPolicyDetailsRulesOperationOutputReference(this, "operation");
  public get operation() {
    return this._operation;
  }
  public putOperation(value: IamOrganizationAccessPolicyDetailsRulesOperation) {
    this._operation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation.internalValue;
  }
}

export class IamOrganizationAccessPolicyDetailsRulesList extends cdktf.ComplexList {
  public internalValue? : IamOrganizationAccessPolicyDetailsRules[] | cdktf.IResolvable

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
  public get(index: number): IamOrganizationAccessPolicyDetailsRulesOutputReference {
    return new IamOrganizationAccessPolicyDetailsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IamOrganizationAccessPolicyDetails {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#rules IamOrganizationAccessPolicy#rules}
  */
  readonly rules: IamOrganizationAccessPolicyDetailsRules[] | cdktf.IResolvable;
}

export function iamOrganizationAccessPolicyDetailsToTerraform(struct?: IamOrganizationAccessPolicyDetailsOutputReference | IamOrganizationAccessPolicyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(iamOrganizationAccessPolicyDetailsRulesToTerraform, true)(struct!.rules),
  }
}


export function iamOrganizationAccessPolicyDetailsToHclTerraform(struct?: IamOrganizationAccessPolicyDetailsOutputReference | IamOrganizationAccessPolicyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(iamOrganizationAccessPolicyDetailsRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "IamOrganizationAccessPolicyDetailsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamOrganizationAccessPolicyDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamOrganizationAccessPolicyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamOrganizationAccessPolicyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new IamOrganizationAccessPolicyDetailsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: IamOrganizationAccessPolicyDetailsRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface IamOrganizationAccessPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#create IamOrganizationAccessPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#delete IamOrganizationAccessPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#update IamOrganizationAccessPolicy#update}
  */
  readonly update?: string;
}

export function iamOrganizationAccessPolicyTimeoutsToTerraform(struct?: IamOrganizationAccessPolicyTimeouts | cdktf.IResolvable): any {
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


export function iamOrganizationAccessPolicyTimeoutsToHclTerraform(struct?: IamOrganizationAccessPolicyTimeouts | cdktf.IResolvable): any {
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

export class IamOrganizationAccessPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamOrganizationAccessPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IamOrganizationAccessPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy google_iam_organization_access_policy}
*/
export class IamOrganizationAccessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_organization_access_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamOrganizationAccessPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamOrganizationAccessPolicy to import
  * @param importFromId The id of the existing IamOrganizationAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamOrganizationAccessPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_iam_organization_access_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/iam_organization_access_policy google_iam_organization_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamOrganizationAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: IamOrganizationAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_organization_access_policy',
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
    this._accessPolicyId = config.accessPolicyId;
    this._annotations = config.annotations;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._organization = config.organization;
    this._details.internalValue = config.details;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy_id - computed: false, optional: false, required: true
  private _accessPolicyId?: string; 
  public get accessPolicyId() {
    return this.getStringAttribute('access_policy_id');
  }
  public set accessPolicyId(value: string) {
    this._accessPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyIdInput() {
    return this._accessPolicyId;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // details - computed: false, optional: true, required: false
  private _details = new IamOrganizationAccessPolicyDetailsOutputReference(this, "details");
  public get details() {
    return this._details;
  }
  public putDetails(value: IamOrganizationAccessPolicyDetails) {
    this._details.internalValue = value;
  }
  public resetDetails() {
    this._details.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IamOrganizationAccessPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IamOrganizationAccessPolicyTimeouts) {
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
      access_policy_id: cdktf.stringToTerraform(this._accessPolicyId),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      organization: cdktf.stringToTerraform(this._organization),
      details: iamOrganizationAccessPolicyDetailsToTerraform(this._details.internalValue),
      timeouts: iamOrganizationAccessPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policy_id: {
        value: cdktf.stringToHclTerraform(this._accessPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      details: {
        value: iamOrganizationAccessPolicyDetailsToHclTerraform(this._details.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamOrganizationAccessPolicyDetailsList",
      },
      timeouts: {
        value: iamOrganizationAccessPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IamOrganizationAccessPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
