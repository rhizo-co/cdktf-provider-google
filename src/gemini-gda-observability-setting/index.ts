// https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GeminiGdaObservabilitySettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting#deletion_policy GeminiGdaObservabilitySetting#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Id of the Gda Observability Setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting#gda_observability_setting_id GeminiGdaObservabilitySetting#gda_observability_setting_id}
  */
  readonly gdaObservabilitySettingId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting#id GeminiGdaObservabilitySetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels as key value pairs.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting#labels GeminiGdaObservabilitySetting#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting#location GeminiGdaObservabilitySetting#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting#project GeminiGdaObservabilitySetting#project}
  */
  readonly project?: string;
  /**
  * conversational_analytics_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting#conversational_analytics_setting GeminiGdaObservabilitySetting#conversational_analytics_setting}
  */
  readonly conversationalAnalyticsSetting?: GeminiGdaObservabilitySettingConversationalAnalyticsSetting;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting#timeouts GeminiGdaObservabilitySetting#timeouts}
  */
  readonly timeouts?: GeminiGdaObservabilitySettingTimeouts;
}
export interface GeminiGdaObservabilitySettingConversationalAnalyticsSetting {
  /**
  * Whether to enable feedback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting#feedback_enabled GeminiGdaObservabilitySetting#feedback_enabled}
  */
  readonly feedbackEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting#logging_enabled GeminiGdaObservabilitySetting#logging_enabled}
  */
  readonly loggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting#metrics_enabled GeminiGdaObservabilitySetting#metrics_enabled}
  */
  readonly metricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable traces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting#traces_enabled GeminiGdaObservabilitySetting#traces_enabled}
  */
  readonly tracesEnabled?: boolean | cdktf.IResolvable;
}

export function geminiGdaObservabilitySettingConversationalAnalyticsSettingToTerraform(struct?: GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference | GeminiGdaObservabilitySettingConversationalAnalyticsSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feedback_enabled: cdktf.booleanToTerraform(struct!.feedbackEnabled),
    logging_enabled: cdktf.booleanToTerraform(struct!.loggingEnabled),
    metrics_enabled: cdktf.booleanToTerraform(struct!.metricsEnabled),
    traces_enabled: cdktf.booleanToTerraform(struct!.tracesEnabled),
  }
}


export function geminiGdaObservabilitySettingConversationalAnalyticsSettingToHclTerraform(struct?: GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference | GeminiGdaObservabilitySettingConversationalAnalyticsSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feedback_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.feedbackEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logging_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.loggingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.metricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    traces_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tracesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiGdaObservabilitySettingConversationalAnalyticsSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feedbackEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedbackEnabled = this._feedbackEnabled;
    }
    if (this._loggingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingEnabled = this._loggingEnabled;
    }
    if (this._metricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsEnabled = this._metricsEnabled;
    }
    if (this._tracesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracesEnabled = this._tracesEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiGdaObservabilitySettingConversationalAnalyticsSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._feedbackEnabled = undefined;
      this._loggingEnabled = undefined;
      this._metricsEnabled = undefined;
      this._tracesEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._feedbackEnabled = value.feedbackEnabled;
      this._loggingEnabled = value.loggingEnabled;
      this._metricsEnabled = value.metricsEnabled;
      this._tracesEnabled = value.tracesEnabled;
    }
  }

  // feedback_enabled - computed: false, optional: true, required: false
  private _feedbackEnabled?: boolean | cdktf.IResolvable; 
  public get feedbackEnabled() {
    return this.getBooleanAttribute('feedback_enabled');
  }
  public set feedbackEnabled(value: boolean | cdktf.IResolvable) {
    this._feedbackEnabled = value;
  }
  public resetFeedbackEnabled() {
    this._feedbackEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedbackEnabledInput() {
    return this._feedbackEnabled;
  }

  // logging_enabled - computed: false, optional: true, required: false
  private _loggingEnabled?: boolean | cdktf.IResolvable; 
  public get loggingEnabled() {
    return this.getBooleanAttribute('logging_enabled');
  }
  public set loggingEnabled(value: boolean | cdktf.IResolvable) {
    this._loggingEnabled = value;
  }
  public resetLoggingEnabled() {
    this._loggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingEnabledInput() {
    return this._loggingEnabled;
  }

  // metrics_enabled - computed: false, optional: true, required: false
  private _metricsEnabled?: boolean | cdktf.IResolvable; 
  public get metricsEnabled() {
    return this.getBooleanAttribute('metrics_enabled');
  }
  public set metricsEnabled(value: boolean | cdktf.IResolvable) {
    this._metricsEnabled = value;
  }
  public resetMetricsEnabled() {
    this._metricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEnabledInput() {
    return this._metricsEnabled;
  }

  // traces_enabled - computed: false, optional: true, required: false
  private _tracesEnabled?: boolean | cdktf.IResolvable; 
  public get tracesEnabled() {
    return this.getBooleanAttribute('traces_enabled');
  }
  public set tracesEnabled(value: boolean | cdktf.IResolvable) {
    this._tracesEnabled = value;
  }
  public resetTracesEnabled() {
    this._tracesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracesEnabledInput() {
    return this._tracesEnabled;
  }
}
export interface GeminiGdaObservabilitySettingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting#create GeminiGdaObservabilitySetting#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting#delete GeminiGdaObservabilitySetting#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting#update GeminiGdaObservabilitySetting#update}
  */
  readonly update?: string;
}

export function geminiGdaObservabilitySettingTimeoutsToTerraform(struct?: GeminiGdaObservabilitySettingTimeouts | cdktf.IResolvable): any {
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


export function geminiGdaObservabilitySettingTimeoutsToHclTerraform(struct?: GeminiGdaObservabilitySettingTimeouts | cdktf.IResolvable): any {
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

export class GeminiGdaObservabilitySettingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GeminiGdaObservabilitySettingTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GeminiGdaObservabilitySettingTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting google_gemini_gda_observability_setting}
*/
export class GeminiGdaObservabilitySetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gemini_gda_observability_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GeminiGdaObservabilitySetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GeminiGdaObservabilitySetting to import
  * @param importFromId The id of the existing GeminiGdaObservabilitySetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GeminiGdaObservabilitySetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_gemini_gda_observability_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/gemini_gda_observability_setting google_gemini_gda_observability_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GeminiGdaObservabilitySettingConfig
  */
  public constructor(scope: Construct, id: string, config: GeminiGdaObservabilitySettingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gemini_gda_observability_setting',
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
    this._gdaObservabilitySettingId = config.gdaObservabilitySettingId;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._conversationalAnalyticsSetting.internalValue = config.conversationalAnalyticsSetting;
    this._timeouts.internalValue = config.timeouts;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // gda_observability_setting_id - computed: false, optional: false, required: true
  private _gdaObservabilitySettingId?: string; 
  public get gdaObservabilitySettingId() {
    return this.getStringAttribute('gda_observability_setting_id');
  }
  public set gdaObservabilitySettingId(value: string) {
    this._gdaObservabilitySettingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gdaObservabilitySettingIdInput() {
    return this._gdaObservabilitySettingId;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // conversational_analytics_setting - computed: false, optional: true, required: false
  private _conversationalAnalyticsSetting = new GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference(this, "conversational_analytics_setting");
  public get conversationalAnalyticsSetting() {
    return this._conversationalAnalyticsSetting;
  }
  public putConversationalAnalyticsSetting(value: GeminiGdaObservabilitySettingConversationalAnalyticsSetting) {
    this._conversationalAnalyticsSetting.internalValue = value;
  }
  public resetConversationalAnalyticsSetting() {
    this._conversationalAnalyticsSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationalAnalyticsSettingInput() {
    return this._conversationalAnalyticsSetting.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GeminiGdaObservabilitySettingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GeminiGdaObservabilitySettingTimeouts) {
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
      gda_observability_setting_id: cdktf.stringToTerraform(this._gdaObservabilitySettingId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      conversational_analytics_setting: geminiGdaObservabilitySettingConversationalAnalyticsSettingToTerraform(this._conversationalAnalyticsSetting.internalValue),
      timeouts: geminiGdaObservabilitySettingTimeoutsToTerraform(this._timeouts.internalValue),
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
      gda_observability_setting_id: {
        value: cdktf.stringToHclTerraform(this._gdaObservabilitySettingId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      conversational_analytics_setting: {
        value: geminiGdaObservabilitySettingConversationalAnalyticsSettingToHclTerraform(this._conversationalAnalyticsSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GeminiGdaObservabilitySettingConversationalAnalyticsSettingList",
      },
      timeouts: {
        value: geminiGdaObservabilitySettingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GeminiGdaObservabilitySettingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
