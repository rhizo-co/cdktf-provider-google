// https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The agent version loaded into this environment. Supported formats:
  * - projects/<Project ID>/agent/versions/<Version ID>
  * - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#agent_version DialogflowEnvironment#agent_version}
  */
  readonly agentVersion?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#deletion_policy DialogflowEnvironment#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The developer-provided description for this environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#description DialogflowEnvironment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#environmentid DialogflowEnvironment#environmentid}
  */
  readonly environmentid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#id DialogflowEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#location DialogflowEnvironment#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#project DialogflowEnvironment#project}
  */
  readonly project?: string;
  /**
  * fulfillment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#fulfillment DialogflowEnvironment#fulfillment}
  */
  readonly fulfillment?: DialogflowEnvironmentFulfillment;
  /**
  * text_to_speech_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#text_to_speech_settings DialogflowEnvironment#text_to_speech_settings}
  */
  readonly textToSpeechSettings?: DialogflowEnvironmentTextToSpeechSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#timeouts DialogflowEnvironment#timeouts}
  */
  readonly timeouts?: DialogflowEnvironmentTimeouts;
}
export interface DialogflowEnvironmentFulfillmentFeatures {
  /**
  * The type of the feature that enabled for fulfillment. Possible values: ["TYPE_UNSPECIFIED", "SMALLTALK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#type DialogflowEnvironment#type}
  */
  readonly type: string;
}

export function dialogflowEnvironmentFulfillmentFeaturesToTerraform(struct?: DialogflowEnvironmentFulfillmentFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dialogflowEnvironmentFulfillmentFeaturesToHclTerraform(struct?: DialogflowEnvironmentFulfillmentFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowEnvironmentFulfillmentFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowEnvironmentFulfillmentFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowEnvironmentFulfillmentFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DialogflowEnvironmentFulfillmentFeaturesList extends cdktf.ComplexList {
  public internalValue? : DialogflowEnvironmentFulfillmentFeatures[] | cdktf.IResolvable

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
  public get(index: number): DialogflowEnvironmentFulfillmentFeaturesOutputReference {
    return new DialogflowEnvironmentFulfillmentFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowEnvironmentFulfillmentGenericWebService {
  /**
  * The password for HTTP Basic authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#password DialogflowEnvironment#password}
  */
  readonly password?: string;
  /**
  * The HTTP request headers to send together with fulfillment requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#request_headers DialogflowEnvironment#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * The fulfillment URI for receiving POST requests. It must use https protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#uri DialogflowEnvironment#uri}
  */
  readonly uri: string;
  /**
  * The user name for HTTP Basic authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#username DialogflowEnvironment#username}
  */
  readonly username?: string;
}

export function dialogflowEnvironmentFulfillmentGenericWebServiceToTerraform(struct?: DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference | DialogflowEnvironmentFulfillmentGenericWebService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestHeaders),
    uri: cdktf.stringToTerraform(struct!.uri),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dialogflowEnvironmentFulfillmentGenericWebServiceToHclTerraform(struct?: DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference | DialogflowEnvironmentFulfillmentGenericWebService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowEnvironmentFulfillmentGenericWebService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowEnvironmentFulfillmentGenericWebService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._requestHeaders = undefined;
      this._uri = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._requestHeaders = value.requestHeaders;
      this._uri = value.uri;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DialogflowEnvironmentFulfillment {
  /**
  * The human-readable name of the fulfillment, unique within the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#display_name DialogflowEnvironment#display_name}
  */
  readonly displayName?: string;
  /**
  * The unique identifier of the fulfillment. Supports the following formats:
  * - projects/<Project ID>/agent/fulfillment
  * - projects/<Project ID>/locations/<Location ID>/agent/fulfillment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#name DialogflowEnvironment#name}
  */
  readonly name?: string;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#features DialogflowEnvironment#features}
  */
  readonly features?: DialogflowEnvironmentFulfillmentFeatures[] | cdktf.IResolvable;
  /**
  * generic_web_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#generic_web_service DialogflowEnvironment#generic_web_service}
  */
  readonly genericWebService?: DialogflowEnvironmentFulfillmentGenericWebService;
}

export function dialogflowEnvironmentFulfillmentToTerraform(struct?: DialogflowEnvironmentFulfillmentOutputReference | DialogflowEnvironmentFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    name: cdktf.stringToTerraform(struct!.name),
    features: cdktf.listMapper(dialogflowEnvironmentFulfillmentFeaturesToTerraform, true)(struct!.features),
    generic_web_service: dialogflowEnvironmentFulfillmentGenericWebServiceToTerraform(struct!.genericWebService),
  }
}


export function dialogflowEnvironmentFulfillmentToHclTerraform(struct?: DialogflowEnvironmentFulfillmentOutputReference | DialogflowEnvironmentFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    features: {
      value: cdktf.listMapperHcl(dialogflowEnvironmentFulfillmentFeaturesToHclTerraform, true)(struct!.features),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowEnvironmentFulfillmentFeaturesList",
    },
    generic_web_service: {
      value: dialogflowEnvironmentFulfillmentGenericWebServiceToHclTerraform(struct!.genericWebService),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowEnvironmentFulfillmentGenericWebServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowEnvironmentFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowEnvironmentFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._features?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features?.internalValue;
    }
    if (this._genericWebService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.genericWebService = this._genericWebService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowEnvironmentFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._name = undefined;
      this._features.internalValue = undefined;
      this._genericWebService.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._name = value.name;
      this._features.internalValue = value.features;
      this._genericWebService.internalValue = value.genericWebService;
    }
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // features - computed: false, optional: true, required: false
  private _features = new DialogflowEnvironmentFulfillmentFeaturesList(this, "features", false);
  public get features() {
    return this._features;
  }
  public putFeatures(value: DialogflowEnvironmentFulfillmentFeatures[] | cdktf.IResolvable) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // generic_web_service - computed: false, optional: true, required: false
  private _genericWebService = new DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference(this, "generic_web_service");
  public get genericWebService() {
    return this._genericWebService;
  }
  public putGenericWebService(value: DialogflowEnvironmentFulfillmentGenericWebService) {
    this._genericWebService.internalValue = value;
  }
  public resetGenericWebService() {
    this._genericWebService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericWebServiceInput() {
    return this._genericWebService.internalValue;
  }
}
export interface DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice {
  /**
  * The name of the voice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#name DialogflowEnvironment#name}
  */
  readonly name?: string;
  /**
  * The preferred gender of the voice. Possible values: ["SSML_VOICE_GENDER_UNSPECIFIED", "SSML_VOICE_GENDER_MALE", "SSML_VOICE_GENDER_FEMALE", "SSML_VOICE_GENDER_NEUTRAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#ssml_gender DialogflowEnvironment#ssml_gender}
  */
  readonly ssmlGender?: string;
}

export function dialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceToTerraform(struct?: DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference | DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ssml_gender: cdktf.stringToTerraform(struct!.ssmlGender),
  }
}


export function dialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceToHclTerraform(struct?: DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference | DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice): any {
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
    ssml_gender: {
      value: cdktf.stringToHclTerraform(struct!.ssmlGender),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ssmlGender !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlGender = this._ssmlGender;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._ssmlGender = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._ssmlGender = value.ssmlGender;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ssml_gender - computed: false, optional: true, required: false
  private _ssmlGender?: string; 
  public get ssmlGender() {
    return this.getStringAttribute('ssml_gender');
  }
  public set ssmlGender(value: string) {
    this._ssmlGender = value;
  }
  public resetSsmlGender() {
    this._ssmlGender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlGenderInput() {
    return this._ssmlGender;
  }
}
export interface DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs {
  /**
  * An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. Effects are applied on top of each other in the order they are given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#effects_profile_id DialogflowEnvironment#effects_profile_id}
  */
  readonly effectsProfileId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#language DialogflowEnvironment#language}
  */
  readonly language: string;
  /**
  * Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#pitch DialogflowEnvironment#pitch}
  */
  readonly pitch?: number;
  /**
  * Speaking rate/speed, in the range [0.25, 4.0].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#speaking_rate DialogflowEnvironment#speaking_rate}
  */
  readonly speakingRate?: number;
  /**
  * Volume gain (in dB) of the normal native volume supported by the specific voice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#volume_gain_db DialogflowEnvironment#volume_gain_db}
  */
  readonly volumeGainDb?: number;
  /**
  * voice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#voice DialogflowEnvironment#voice}
  */
  readonly voice?: DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice;
}

export function dialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsToTerraform(struct?: DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effects_profile_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.effectsProfileId),
    language: cdktf.stringToTerraform(struct!.language),
    pitch: cdktf.numberToTerraform(struct!.pitch),
    speaking_rate: cdktf.numberToTerraform(struct!.speakingRate),
    volume_gain_db: cdktf.numberToTerraform(struct!.volumeGainDb),
    voice: dialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceToTerraform(struct!.voice),
  }
}


export function dialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsToHclTerraform(struct?: DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effects_profile_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.effectsProfileId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pitch: {
      value: cdktf.numberToHclTerraform(struct!.pitch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    speaking_rate: {
      value: cdktf.numberToHclTerraform(struct!.speakingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_gain_db: {
      value: cdktf.numberToHclTerraform(struct!.volumeGainDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    voice: {
      value: dialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceToHclTerraform(struct!.voice),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effectsProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectsProfileId = this._effectsProfileId;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._pitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pitch = this._pitch;
    }
    if (this._speakingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.speakingRate = this._speakingRate;
    }
    if (this._volumeGainDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGainDb = this._volumeGainDb;
    }
    if (this._voice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.voice = this._voice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effectsProfileId = undefined;
      this._language = undefined;
      this._pitch = undefined;
      this._speakingRate = undefined;
      this._volumeGainDb = undefined;
      this._voice.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effectsProfileId = value.effectsProfileId;
      this._language = value.language;
      this._pitch = value.pitch;
      this._speakingRate = value.speakingRate;
      this._volumeGainDb = value.volumeGainDb;
      this._voice.internalValue = value.voice;
    }
  }

  // effects_profile_id - computed: false, optional: true, required: false
  private _effectsProfileId?: string[]; 
  public get effectsProfileId() {
    return this.getListAttribute('effects_profile_id');
  }
  public set effectsProfileId(value: string[]) {
    this._effectsProfileId = value;
  }
  public resetEffectsProfileId() {
    this._effectsProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectsProfileIdInput() {
    return this._effectsProfileId;
  }

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // pitch - computed: false, optional: true, required: false
  private _pitch?: number; 
  public get pitch() {
    return this.getNumberAttribute('pitch');
  }
  public set pitch(value: number) {
    this._pitch = value;
  }
  public resetPitch() {
    this._pitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pitchInput() {
    return this._pitch;
  }

  // speaking_rate - computed: false, optional: true, required: false
  private _speakingRate?: number; 
  public get speakingRate() {
    return this.getNumberAttribute('speaking_rate');
  }
  public set speakingRate(value: number) {
    this._speakingRate = value;
  }
  public resetSpeakingRate() {
    this._speakingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speakingRateInput() {
    return this._speakingRate;
  }

  // volume_gain_db - computed: false, optional: true, required: false
  private _volumeGainDb?: number; 
  public get volumeGainDb() {
    return this.getNumberAttribute('volume_gain_db');
  }
  public set volumeGainDb(value: number) {
    this._volumeGainDb = value;
  }
  public resetVolumeGainDb() {
    this._volumeGainDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGainDbInput() {
    return this._volumeGainDb;
  }

  // voice - computed: false, optional: true, required: false
  private _voice = new DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference(this, "voice");
  public get voice() {
    return this._voice;
  }
  public putVoice(value: DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice) {
    this._voice.internalValue = value;
  }
  public resetVoice() {
    this._voice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceInput() {
    return this._voice.internalValue;
  }
}

export class DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList extends cdktf.ComplexList {
  public internalValue? : DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs[] | cdktf.IResolvable

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
  public get(index: number): DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference {
    return new DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowEnvironmentTextToSpeechSettings {
  /**
  * Indicates whether text to speech is enabled. Even when this field is false, other settings in this proto are still retained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#enable_text_to_speech DialogflowEnvironment#enable_text_to_speech}
  */
  readonly enableTextToSpeech?: boolean | cdktf.IResolvable;
  /**
  * Audio encoding of the synthesized audio content. Possible values: ["OUTPUT_AUDIO_ENCODING_UNSPECIFIED", "OUTPUT_AUDIO_ENCODING_LINEAR_16", "OUTPUT_AUDIO_ENCODING_MP3", "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS", "OUTPUT_AUDIO_ENCODING_OGG_OPUS", "OUTPUT_AUDIO_ENCODING_MULAW", "OUTPUT_AUDIO_ENCODING_ALAW"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#output_audio_encoding DialogflowEnvironment#output_audio_encoding}
  */
  readonly outputAudioEncoding?: string;
  /**
  * The synthesis sample rate (in hertz) for this audio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#sample_rate_hertz DialogflowEnvironment#sample_rate_hertz}
  */
  readonly sampleRateHertz?: number;
  /**
  * synthesize_speech_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#synthesize_speech_configs DialogflowEnvironment#synthesize_speech_configs}
  */
  readonly synthesizeSpeechConfigs?: DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs[] | cdktf.IResolvable;
}

export function dialogflowEnvironmentTextToSpeechSettingsToTerraform(struct?: DialogflowEnvironmentTextToSpeechSettingsOutputReference | DialogflowEnvironmentTextToSpeechSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_text_to_speech: cdktf.booleanToTerraform(struct!.enableTextToSpeech),
    output_audio_encoding: cdktf.stringToTerraform(struct!.outputAudioEncoding),
    sample_rate_hertz: cdktf.numberToTerraform(struct!.sampleRateHertz),
    synthesize_speech_configs: cdktf.listMapper(dialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsToTerraform, true)(struct!.synthesizeSpeechConfigs),
  }
}


export function dialogflowEnvironmentTextToSpeechSettingsToHclTerraform(struct?: DialogflowEnvironmentTextToSpeechSettingsOutputReference | DialogflowEnvironmentTextToSpeechSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_text_to_speech: {
      value: cdktf.booleanToHclTerraform(struct!.enableTextToSpeech),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_audio_encoding: {
      value: cdktf.stringToHclTerraform(struct!.outputAudioEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_rate_hertz: {
      value: cdktf.numberToHclTerraform(struct!.sampleRateHertz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    synthesize_speech_configs: {
      value: cdktf.listMapperHcl(dialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsToHclTerraform, true)(struct!.synthesizeSpeechConfigs),
      isBlock: true,
      type: "set",
      storageClassType: "DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowEnvironmentTextToSpeechSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowEnvironmentTextToSpeechSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableTextToSpeech !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTextToSpeech = this._enableTextToSpeech;
    }
    if (this._outputAudioEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAudioEncoding = this._outputAudioEncoding;
    }
    if (this._sampleRateHertz !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRateHertz = this._sampleRateHertz;
    }
    if (this._synthesizeSpeechConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synthesizeSpeechConfigs = this._synthesizeSpeechConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowEnvironmentTextToSpeechSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableTextToSpeech = undefined;
      this._outputAudioEncoding = undefined;
      this._sampleRateHertz = undefined;
      this._synthesizeSpeechConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableTextToSpeech = value.enableTextToSpeech;
      this._outputAudioEncoding = value.outputAudioEncoding;
      this._sampleRateHertz = value.sampleRateHertz;
      this._synthesizeSpeechConfigs.internalValue = value.synthesizeSpeechConfigs;
    }
  }

  // enable_text_to_speech - computed: false, optional: true, required: false
  private _enableTextToSpeech?: boolean | cdktf.IResolvable; 
  public get enableTextToSpeech() {
    return this.getBooleanAttribute('enable_text_to_speech');
  }
  public set enableTextToSpeech(value: boolean | cdktf.IResolvable) {
    this._enableTextToSpeech = value;
  }
  public resetEnableTextToSpeech() {
    this._enableTextToSpeech = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTextToSpeechInput() {
    return this._enableTextToSpeech;
  }

  // output_audio_encoding - computed: false, optional: true, required: false
  private _outputAudioEncoding?: string; 
  public get outputAudioEncoding() {
    return this.getStringAttribute('output_audio_encoding');
  }
  public set outputAudioEncoding(value: string) {
    this._outputAudioEncoding = value;
  }
  public resetOutputAudioEncoding() {
    this._outputAudioEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputAudioEncodingInput() {
    return this._outputAudioEncoding;
  }

  // sample_rate_hertz - computed: false, optional: true, required: false
  private _sampleRateHertz?: number; 
  public get sampleRateHertz() {
    return this.getNumberAttribute('sample_rate_hertz');
  }
  public set sampleRateHertz(value: number) {
    this._sampleRateHertz = value;
  }
  public resetSampleRateHertz() {
    this._sampleRateHertz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateHertzInput() {
    return this._sampleRateHertz;
  }

  // synthesize_speech_configs - computed: false, optional: true, required: false
  private _synthesizeSpeechConfigs = new DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList(this, "synthesize_speech_configs", true);
  public get synthesizeSpeechConfigs() {
    return this._synthesizeSpeechConfigs;
  }
  public putSynthesizeSpeechConfigs(value: DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs[] | cdktf.IResolvable) {
    this._synthesizeSpeechConfigs.internalValue = value;
  }
  public resetSynthesizeSpeechConfigs() {
    this._synthesizeSpeechConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synthesizeSpeechConfigsInput() {
    return this._synthesizeSpeechConfigs.internalValue;
  }
}
export interface DialogflowEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#create DialogflowEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#delete DialogflowEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#update DialogflowEnvironment#update}
  */
  readonly update?: string;
}

export function dialogflowEnvironmentTimeoutsToTerraform(struct?: DialogflowEnvironmentTimeouts | cdktf.IResolvable): any {
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


export function dialogflowEnvironmentTimeoutsToHclTerraform(struct?: DialogflowEnvironmentTimeouts | cdktf.IResolvable): any {
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

export class DialogflowEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DialogflowEnvironmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowEnvironmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment google_dialogflow_environment}
*/
export class DialogflowEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DialogflowEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DialogflowEnvironment to import
  * @param importFromId The id of the existing DialogflowEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DialogflowEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_environment google_dialogflow_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_environment',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.1',
        providerVersionConstraint: '~> 7.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentVersion = config.agentVersion;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._environmentid = config.environmentid;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._fulfillment.internalValue = config.fulfillment;
    this._textToSpeechSettings.internalValue = config.textToSpeechSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_version - computed: false, optional: true, required: false
  private _agentVersion?: string; 
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }
  public set agentVersion(value: string) {
    this._agentVersion = value;
  }
  public resetAgentVersion() {
    this._agentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentVersionInput() {
    return this._agentVersion;
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

  // environmentid - computed: false, optional: false, required: true
  private _environmentid?: string; 
  public get environmentid() {
    return this.getStringAttribute('environmentid');
  }
  public set environmentid(value: string) {
    this._environmentid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentidInput() {
    return this._environmentid;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // fulfillment - computed: false, optional: true, required: false
  private _fulfillment = new DialogflowEnvironmentFulfillmentOutputReference(this, "fulfillment");
  public get fulfillment() {
    return this._fulfillment;
  }
  public putFulfillment(value: DialogflowEnvironmentFulfillment) {
    this._fulfillment.internalValue = value;
  }
  public resetFulfillment() {
    this._fulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fulfillmentInput() {
    return this._fulfillment.internalValue;
  }

  // text_to_speech_settings - computed: false, optional: true, required: false
  private _textToSpeechSettings = new DialogflowEnvironmentTextToSpeechSettingsOutputReference(this, "text_to_speech_settings");
  public get textToSpeechSettings() {
    return this._textToSpeechSettings;
  }
  public putTextToSpeechSettings(value: DialogflowEnvironmentTextToSpeechSettings) {
    this._textToSpeechSettings.internalValue = value;
  }
  public resetTextToSpeechSettings() {
    this._textToSpeechSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textToSpeechSettingsInput() {
    return this._textToSpeechSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowEnvironmentTimeouts) {
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
      agent_version: cdktf.stringToTerraform(this._agentVersion),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      environmentid: cdktf.stringToTerraform(this._environmentid),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      fulfillment: dialogflowEnvironmentFulfillmentToTerraform(this._fulfillment.internalValue),
      text_to_speech_settings: dialogflowEnvironmentTextToSpeechSettingsToTerraform(this._textToSpeechSettings.internalValue),
      timeouts: dialogflowEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_version: {
        value: cdktf.stringToHclTerraform(this._agentVersion),
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
      environmentid: {
        value: cdktf.stringToHclTerraform(this._environmentid),
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
      fulfillment: {
        value: dialogflowEnvironmentFulfillmentToHclTerraform(this._fulfillment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowEnvironmentFulfillmentList",
      },
      text_to_speech_settings: {
        value: dialogflowEnvironmentTextToSpeechSettingsToHclTerraform(this._textToSpeechSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowEnvironmentTextToSpeechSettingsList",
      },
      timeouts: {
        value: dialogflowEnvironmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DialogflowEnvironmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
