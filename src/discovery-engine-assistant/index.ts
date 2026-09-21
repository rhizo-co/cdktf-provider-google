// https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiscoveryEngineAssistantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique id of the assistant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#assistant_id DiscoveryEngineAssistant#assistant_id}
  */
  readonly assistantId: string;
  /**
  * The unique id of the collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#collection_id DiscoveryEngineAssistant#collection_id}
  */
  readonly collectionId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#deletion_policy DiscoveryEngineAssistant#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Description for additional information. Expected to be shown on the
  * configuration UI, not to the users of the assistant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#description DiscoveryEngineAssistant#description}
  */
  readonly description?: string;
  /**
  * The assistant display name.
  * 
  * It must be a UTF-8 encoded string with a length limit of 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#display_name DiscoveryEngineAssistant#display_name}
  */
  readonly displayName: string;
  /**
  * The unique id of the engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#engine_id DiscoveryEngineAssistant#engine_id}
  */
  readonly engineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#id DiscoveryEngineAssistant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The geographic location where the data store should reside. The value can
  * only be one of "global", "us" and "eu".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#location DiscoveryEngineAssistant#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#project DiscoveryEngineAssistant#project}
  */
  readonly project?: string;
  /**
  * The type of web grounding to use.
  * The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#web_grounding_type DiscoveryEngineAssistant#web_grounding_type}
  */
  readonly webGroundingType?: string;
  /**
  * customer_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#customer_policy DiscoveryEngineAssistant#customer_policy}
  */
  readonly customerPolicy?: DiscoveryEngineAssistantCustomerPolicy;
  /**
  * generation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#generation_config DiscoveryEngineAssistant#generation_config}
  */
  readonly generationConfig?: DiscoveryEngineAssistantGenerationConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#timeouts DiscoveryEngineAssistant#timeouts}
  */
  readonly timeouts?: DiscoveryEngineAssistantTimeouts;
}
export interface DiscoveryEngineAssistantCustomerPolicyBannedPhrases {
  /**
  * If true, diacritical marks (e.g., accents, umlauts) are ignored when
  * matching banned phrases. For example, "cafe" would match "café".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#ignore_diacritics DiscoveryEngineAssistant#ignore_diacritics}
  */
  readonly ignoreDiacritics?: boolean | cdktf.IResolvable;
  /**
  * Match type for the banned phrase.
  * The supported values: 'SIMPLE_STRING_MATCH', 'WORD_BOUNDARY_STRING_MATCH'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#match_type DiscoveryEngineAssistant#match_type}
  */
  readonly matchType?: string;
  /**
  * The raw string content to be banned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#phrase DiscoveryEngineAssistant#phrase}
  */
  readonly phrase: string;
}

export function discoveryEngineAssistantCustomerPolicyBannedPhrasesToTerraform(struct?: DiscoveryEngineAssistantCustomerPolicyBannedPhrases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_diacritics: cdktf.booleanToTerraform(struct!.ignoreDiacritics),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    phrase: cdktf.stringToTerraform(struct!.phrase),
  }
}


export function discoveryEngineAssistantCustomerPolicyBannedPhrasesToHclTerraform(struct?: DiscoveryEngineAssistantCustomerPolicyBannedPhrases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_diacritics: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreDiacritics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phrase: {
      value: cdktf.stringToHclTerraform(struct!.phrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryEngineAssistantCustomerPolicyBannedPhrases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreDiacritics !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDiacritics = this._ignoreDiacritics;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._phrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.phrase = this._phrase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineAssistantCustomerPolicyBannedPhrases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreDiacritics = undefined;
      this._matchType = undefined;
      this._phrase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreDiacritics = value.ignoreDiacritics;
      this._matchType = value.matchType;
      this._phrase = value.phrase;
    }
  }

  // ignore_diacritics - computed: false, optional: true, required: false
  private _ignoreDiacritics?: boolean | cdktf.IResolvable; 
  public get ignoreDiacritics() {
    return this.getBooleanAttribute('ignore_diacritics');
  }
  public set ignoreDiacritics(value: boolean | cdktf.IResolvable) {
    this._ignoreDiacritics = value;
  }
  public resetIgnoreDiacritics() {
    this._ignoreDiacritics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDiacriticsInput() {
    return this._ignoreDiacritics;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // phrase - computed: false, optional: false, required: true
  private _phrase?: string; 
  public get phrase() {
    return this.getStringAttribute('phrase');
  }
  public set phrase(value: string) {
    this._phrase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phraseInput() {
    return this._phrase;
  }
}

export class DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList extends cdktf.ComplexList {
  public internalValue? : DiscoveryEngineAssistantCustomerPolicyBannedPhrases[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference {
    return new DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryEngineAssistantCustomerPolicyModelArmorConfig {
  /**
  * Defines the failure mode for Model Armor sanitization.
  * The supported values: 'FAIL_OPEN', 'FAIL_CLOSED'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#failure_mode DiscoveryEngineAssistant#failure_mode}
  */
  readonly failureMode?: string;
  /**
  * The resource name of the Model Armor template for sanitizing assistant
  * responses. Format:
  * 'projects/{project}/locations/{location}/templates/{template_id}'
  * 
  * If not specified, no sanitization will be applied to the assistant
  * response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#response_template DiscoveryEngineAssistant#response_template}
  */
  readonly responseTemplate: string;
  /**
  * The resource name of the Model Armor template for sanitizing user
  * prompts. Format:
  * 'projects/{project}/locations/{location}/templates/{template_id}'
  * 
  * If not specified, no sanitization will be applied to the user prompt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#user_prompt_template DiscoveryEngineAssistant#user_prompt_template}
  */
  readonly userPromptTemplate: string;
}

export function discoveryEngineAssistantCustomerPolicyModelArmorConfigToTerraform(struct?: DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference | DiscoveryEngineAssistantCustomerPolicyModelArmorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_mode: cdktf.stringToTerraform(struct!.failureMode),
    response_template: cdktf.stringToTerraform(struct!.responseTemplate),
    user_prompt_template: cdktf.stringToTerraform(struct!.userPromptTemplate),
  }
}


export function discoveryEngineAssistantCustomerPolicyModelArmorConfigToHclTerraform(struct?: DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference | DiscoveryEngineAssistantCustomerPolicyModelArmorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_mode: {
      value: cdktf.stringToHclTerraform(struct!.failureMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_template: {
      value: cdktf.stringToHclTerraform(struct!.responseTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_prompt_template: {
      value: cdktf.stringToHclTerraform(struct!.userPromptTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineAssistantCustomerPolicyModelArmorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureMode = this._failureMode;
    }
    if (this._responseTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTemplate = this._responseTemplate;
    }
    if (this._userPromptTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPromptTemplate = this._userPromptTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineAssistantCustomerPolicyModelArmorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureMode = undefined;
      this._responseTemplate = undefined;
      this._userPromptTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureMode = value.failureMode;
      this._responseTemplate = value.responseTemplate;
      this._userPromptTemplate = value.userPromptTemplate;
    }
  }

  // failure_mode - computed: false, optional: true, required: false
  private _failureMode?: string; 
  public get failureMode() {
    return this.getStringAttribute('failure_mode');
  }
  public set failureMode(value: string) {
    this._failureMode = value;
  }
  public resetFailureMode() {
    this._failureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureModeInput() {
    return this._failureMode;
  }

  // response_template - computed: false, optional: false, required: true
  private _responseTemplate?: string; 
  public get responseTemplate() {
    return this.getStringAttribute('response_template');
  }
  public set responseTemplate(value: string) {
    this._responseTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTemplateInput() {
    return this._responseTemplate;
  }

  // user_prompt_template - computed: false, optional: false, required: true
  private _userPromptTemplate?: string; 
  public get userPromptTemplate() {
    return this.getStringAttribute('user_prompt_template');
  }
  public set userPromptTemplate(value: string) {
    this._userPromptTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPromptTemplateInput() {
    return this._userPromptTemplate;
  }
}
export interface DiscoveryEngineAssistantCustomerPolicy {
  /**
  * banned_phrases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#banned_phrases DiscoveryEngineAssistant#banned_phrases}
  */
  readonly bannedPhrases?: DiscoveryEngineAssistantCustomerPolicyBannedPhrases[] | cdktf.IResolvable;
  /**
  * model_armor_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#model_armor_config DiscoveryEngineAssistant#model_armor_config}
  */
  readonly modelArmorConfig?: DiscoveryEngineAssistantCustomerPolicyModelArmorConfig;
}

export function discoveryEngineAssistantCustomerPolicyToTerraform(struct?: DiscoveryEngineAssistantCustomerPolicyOutputReference | DiscoveryEngineAssistantCustomerPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    banned_phrases: cdktf.listMapper(discoveryEngineAssistantCustomerPolicyBannedPhrasesToTerraform, true)(struct!.bannedPhrases),
    model_armor_config: discoveryEngineAssistantCustomerPolicyModelArmorConfigToTerraform(struct!.modelArmorConfig),
  }
}


export function discoveryEngineAssistantCustomerPolicyToHclTerraform(struct?: DiscoveryEngineAssistantCustomerPolicyOutputReference | DiscoveryEngineAssistantCustomerPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    banned_phrases: {
      value: cdktf.listMapperHcl(discoveryEngineAssistantCustomerPolicyBannedPhrasesToHclTerraform, true)(struct!.bannedPhrases),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList",
    },
    model_armor_config: {
      value: discoveryEngineAssistantCustomerPolicyModelArmorConfigToHclTerraform(struct!.modelArmorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineAssistantCustomerPolicyModelArmorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineAssistantCustomerPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineAssistantCustomerPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bannedPhrases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannedPhrases = this._bannedPhrases?.internalValue;
    }
    if (this._modelArmorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelArmorConfig = this._modelArmorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineAssistantCustomerPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bannedPhrases.internalValue = undefined;
      this._modelArmorConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bannedPhrases.internalValue = value.bannedPhrases;
      this._modelArmorConfig.internalValue = value.modelArmorConfig;
    }
  }

  // banned_phrases - computed: false, optional: true, required: false
  private _bannedPhrases = new DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList(this, "banned_phrases", false);
  public get bannedPhrases() {
    return this._bannedPhrases;
  }
  public putBannedPhrases(value: DiscoveryEngineAssistantCustomerPolicyBannedPhrases[] | cdktf.IResolvable) {
    this._bannedPhrases.internalValue = value;
  }
  public resetBannedPhrases() {
    this._bannedPhrases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannedPhrasesInput() {
    return this._bannedPhrases.internalValue;
  }

  // model_armor_config - computed: false, optional: true, required: false
  private _modelArmorConfig = new DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference(this, "model_armor_config");
  public get modelArmorConfig() {
    return this._modelArmorConfig;
  }
  public putModelArmorConfig(value: DiscoveryEngineAssistantCustomerPolicyModelArmorConfig) {
    this._modelArmorConfig.internalValue = value;
  }
  public resetModelArmorConfig() {
    this._modelArmorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelArmorConfigInput() {
    return this._modelArmorConfig.internalValue;
  }
}
export interface DiscoveryEngineAssistantGenerationConfigSystemInstruction {
  /**
  * Additional system instruction that will be added to the default system instruction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#additional_system_instruction DiscoveryEngineAssistant#additional_system_instruction}
  */
  readonly additionalSystemInstruction?: string;
}

export function discoveryEngineAssistantGenerationConfigSystemInstructionToTerraform(struct?: DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference | DiscoveryEngineAssistantGenerationConfigSystemInstruction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_system_instruction: cdktf.stringToTerraform(struct!.additionalSystemInstruction),
  }
}


export function discoveryEngineAssistantGenerationConfigSystemInstructionToHclTerraform(struct?: DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference | DiscoveryEngineAssistantGenerationConfigSystemInstruction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_system_instruction: {
      value: cdktf.stringToHclTerraform(struct!.additionalSystemInstruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineAssistantGenerationConfigSystemInstruction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalSystemInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalSystemInstruction = this._additionalSystemInstruction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineAssistantGenerationConfigSystemInstruction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalSystemInstruction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalSystemInstruction = value.additionalSystemInstruction;
    }
  }

  // additional_system_instruction - computed: false, optional: true, required: false
  private _additionalSystemInstruction?: string; 
  public get additionalSystemInstruction() {
    return this.getStringAttribute('additional_system_instruction');
  }
  public set additionalSystemInstruction(value: string) {
    this._additionalSystemInstruction = value;
  }
  public resetAdditionalSystemInstruction() {
    this._additionalSystemInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSystemInstructionInput() {
    return this._additionalSystemInstruction;
  }
}
export interface DiscoveryEngineAssistantGenerationConfig {
  /**
  * The default language to use for the generation of the assistant response.
  * Use an ISO 639-1 language code such as 'en'.
  * If not specified, the language will be automatically detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#default_language DiscoveryEngineAssistant#default_language}
  */
  readonly defaultLanguage?: string;
  /**
  * system_instruction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#system_instruction DiscoveryEngineAssistant#system_instruction}
  */
  readonly systemInstruction?: DiscoveryEngineAssistantGenerationConfigSystemInstruction;
}

export function discoveryEngineAssistantGenerationConfigToTerraform(struct?: DiscoveryEngineAssistantGenerationConfigOutputReference | DiscoveryEngineAssistantGenerationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_language: cdktf.stringToTerraform(struct!.defaultLanguage),
    system_instruction: discoveryEngineAssistantGenerationConfigSystemInstructionToTerraform(struct!.systemInstruction),
  }
}


export function discoveryEngineAssistantGenerationConfigToHclTerraform(struct?: DiscoveryEngineAssistantGenerationConfigOutputReference | DiscoveryEngineAssistantGenerationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_language: {
      value: cdktf.stringToHclTerraform(struct!.defaultLanguage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_instruction: {
      value: discoveryEngineAssistantGenerationConfigSystemInstructionToHclTerraform(struct!.systemInstruction),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineAssistantGenerationConfigSystemInstructionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineAssistantGenerationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineAssistantGenerationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLanguage = this._defaultLanguage;
    }
    if (this._systemInstruction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemInstruction = this._systemInstruction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineAssistantGenerationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultLanguage = undefined;
      this._systemInstruction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultLanguage = value.defaultLanguage;
      this._systemInstruction.internalValue = value.systemInstruction;
    }
  }

  // default_language - computed: false, optional: true, required: false
  private _defaultLanguage?: string; 
  public get defaultLanguage() {
    return this.getStringAttribute('default_language');
  }
  public set defaultLanguage(value: string) {
    this._defaultLanguage = value;
  }
  public resetDefaultLanguage() {
    this._defaultLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLanguageInput() {
    return this._defaultLanguage;
  }

  // system_instruction - computed: false, optional: true, required: false
  private _systemInstruction = new DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference(this, "system_instruction");
  public get systemInstruction() {
    return this._systemInstruction;
  }
  public putSystemInstruction(value: DiscoveryEngineAssistantGenerationConfigSystemInstruction) {
    this._systemInstruction.internalValue = value;
  }
  public resetSystemInstruction() {
    this._systemInstruction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemInstructionInput() {
    return this._systemInstruction.internalValue;
  }
}
export interface DiscoveryEngineAssistantTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#create DiscoveryEngineAssistant#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#delete DiscoveryEngineAssistant#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#update DiscoveryEngineAssistant#update}
  */
  readonly update?: string;
}

export function discoveryEngineAssistantTimeoutsToTerraform(struct?: DiscoveryEngineAssistantTimeouts | cdktf.IResolvable): any {
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


export function discoveryEngineAssistantTimeoutsToHclTerraform(struct?: DiscoveryEngineAssistantTimeouts | cdktf.IResolvable): any {
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

export class DiscoveryEngineAssistantTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryEngineAssistantTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DiscoveryEngineAssistantTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant google_discovery_engine_assistant}
*/
export class DiscoveryEngineAssistant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_assistant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiscoveryEngineAssistant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscoveryEngineAssistant to import
  * @param importFromId The id of the existing DiscoveryEngineAssistant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscoveryEngineAssistant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_assistant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_assistant google_discovery_engine_assistant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryEngineAssistantConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryEngineAssistantConfig) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_assistant',
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
    this._assistantId = config.assistantId;
    this._collectionId = config.collectionId;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._engineId = config.engineId;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._webGroundingType = config.webGroundingType;
    this._customerPolicy.internalValue = config.customerPolicy;
    this._generationConfig.internalValue = config.generationConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assistant_id - computed: false, optional: false, required: true
  private _assistantId?: string; 
  public get assistantId() {
    return this.getStringAttribute('assistant_id');
  }
  public set assistantId(value: string) {
    this._assistantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assistantIdInput() {
    return this._assistantId;
  }

  // collection_id - computed: false, optional: false, required: true
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
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

  // web_grounding_type - computed: false, optional: true, required: false
  private _webGroundingType?: string; 
  public get webGroundingType() {
    return this.getStringAttribute('web_grounding_type');
  }
  public set webGroundingType(value: string) {
    this._webGroundingType = value;
  }
  public resetWebGroundingType() {
    this._webGroundingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webGroundingTypeInput() {
    return this._webGroundingType;
  }

  // customer_policy - computed: false, optional: true, required: false
  private _customerPolicy = new DiscoveryEngineAssistantCustomerPolicyOutputReference(this, "customer_policy");
  public get customerPolicy() {
    return this._customerPolicy;
  }
  public putCustomerPolicy(value: DiscoveryEngineAssistantCustomerPolicy) {
    this._customerPolicy.internalValue = value;
  }
  public resetCustomerPolicy() {
    this._customerPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerPolicyInput() {
    return this._customerPolicy.internalValue;
  }

  // generation_config - computed: false, optional: true, required: false
  private _generationConfig = new DiscoveryEngineAssistantGenerationConfigOutputReference(this, "generation_config");
  public get generationConfig() {
    return this._generationConfig;
  }
  public putGenerationConfig(value: DiscoveryEngineAssistantGenerationConfig) {
    this._generationConfig.internalValue = value;
  }
  public resetGenerationConfig() {
    this._generationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationConfigInput() {
    return this._generationConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DiscoveryEngineAssistantTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DiscoveryEngineAssistantTimeouts) {
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
      assistant_id: cdktf.stringToTerraform(this._assistantId),
      collection_id: cdktf.stringToTerraform(this._collectionId),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      engine_id: cdktf.stringToTerraform(this._engineId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      web_grounding_type: cdktf.stringToTerraform(this._webGroundingType),
      customer_policy: discoveryEngineAssistantCustomerPolicyToTerraform(this._customerPolicy.internalValue),
      generation_config: discoveryEngineAssistantGenerationConfigToTerraform(this._generationConfig.internalValue),
      timeouts: discoveryEngineAssistantTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assistant_id: {
        value: cdktf.stringToHclTerraform(this._assistantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collection_id: {
        value: cdktf.stringToHclTerraform(this._collectionId),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      web_grounding_type: {
        value: cdktf.stringToHclTerraform(this._webGroundingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_policy: {
        value: discoveryEngineAssistantCustomerPolicyToHclTerraform(this._customerPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineAssistantCustomerPolicyList",
      },
      generation_config: {
        value: discoveryEngineAssistantGenerationConfigToHclTerraform(this._generationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineAssistantGenerationConfigList",
      },
      timeouts: {
        value: discoveryEngineAssistantTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DiscoveryEngineAssistantTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
