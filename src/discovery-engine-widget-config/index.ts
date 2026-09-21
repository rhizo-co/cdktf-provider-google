// https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiscoveryEngineWidgetConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The collection ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#collection_id DiscoveryEngineWidgetConfig#collection_id}
  */
  readonly collectionId?: string;
  /**
  * The engine ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#engine_id DiscoveryEngineWidgetConfig#engine_id}
  */
  readonly engineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#id DiscoveryEngineWidgetConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The geographic location where the data store should reside. The value can
  * only be one of "global", "us" and "eu".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#location DiscoveryEngineWidgetConfig#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#project DiscoveryEngineWidgetConfig#project}
  */
  readonly project?: string;
  /**
  * The unique ID to use for the WidgetConfig. Currently only accepts "default_search_widget_config".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#widget_config_id DiscoveryEngineWidgetConfig#widget_config_id}
  */
  readonly widgetConfigId?: string;
  /**
  * access_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#access_settings DiscoveryEngineWidgetConfig#access_settings}
  */
  readonly accessSettings?: DiscoveryEngineWidgetConfigAccessSettings;
  /**
  * homepage_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#homepage_setting DiscoveryEngineWidgetConfig#homepage_setting}
  */
  readonly homepageSetting?: DiscoveryEngineWidgetConfigHomepageSetting;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#timeouts DiscoveryEngineWidgetConfig#timeouts}
  */
  readonly timeouts?: DiscoveryEngineWidgetConfigTimeouts;
  /**
  * ui_branding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#ui_branding DiscoveryEngineWidgetConfig#ui_branding}
  */
  readonly uiBranding?: DiscoveryEngineWidgetConfigUiBranding;
  /**
  * ui_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#ui_settings DiscoveryEngineWidgetConfig#ui_settings}
  */
  readonly uiSettings?: DiscoveryEngineWidgetConfigUiSettings;
}
export interface DiscoveryEngineWidgetConfigAccessSettings {
  /**
  * Whether public unauthenticated access is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#allow_public_access DiscoveryEngineWidgetConfig#allow_public_access}
  */
  readonly allowPublicAccess?: boolean | cdktf.IResolvable;
  /**
  * List of domains that are allowed to integrate the search widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#allowlisted_domains DiscoveryEngineWidgetConfig#allowlisted_domains}
  */
  readonly allowlistedDomains?: string[];
  /**
  * Whether web app access is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#enable_web_app DiscoveryEngineWidgetConfig#enable_web_app}
  */
  readonly enableWebApp?: boolean | cdktf.IResolvable;
  /**
  * Language code for user interface. Use language tags defined by
  * [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). If unset, the
  * default language code is "en-US".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#language_code DiscoveryEngineWidgetConfig#language_code}
  */
  readonly languageCode?: string;
  /**
  * The workforce identity pool provider used to access the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#workforce_identity_pool_provider DiscoveryEngineWidgetConfig#workforce_identity_pool_provider}
  */
  readonly workforceIdentityPoolProvider?: string;
}

export function discoveryEngineWidgetConfigAccessSettingsToTerraform(struct?: DiscoveryEngineWidgetConfigAccessSettingsOutputReference | DiscoveryEngineWidgetConfigAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_public_access: cdktf.booleanToTerraform(struct!.allowPublicAccess),
    allowlisted_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowlistedDomains),
    enable_web_app: cdktf.booleanToTerraform(struct!.enableWebApp),
    language_code: cdktf.stringToTerraform(struct!.languageCode),
    workforce_identity_pool_provider: cdktf.stringToTerraform(struct!.workforceIdentityPoolProvider),
  }
}


export function discoveryEngineWidgetConfigAccessSettingsToHclTerraform(struct?: DiscoveryEngineWidgetConfigAccessSettingsOutputReference | DiscoveryEngineWidgetConfigAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_public_access: {
      value: cdktf.booleanToHclTerraform(struct!.allowPublicAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowlisted_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowlistedDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_web_app: {
      value: cdktf.booleanToHclTerraform(struct!.enableWebApp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    language_code: {
      value: cdktf.stringToHclTerraform(struct!.languageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workforce_identity_pool_provider: {
      value: cdktf.stringToHclTerraform(struct!.workforceIdentityPoolProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineWidgetConfigAccessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineWidgetConfigAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPublicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPublicAccess = this._allowPublicAccess;
    }
    if (this._allowlistedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlistedDomains = this._allowlistedDomains;
    }
    if (this._enableWebApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWebApp = this._enableWebApp;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._workforceIdentityPoolProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.workforceIdentityPoolProvider = this._workforceIdentityPoolProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineWidgetConfigAccessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowPublicAccess = undefined;
      this._allowlistedDomains = undefined;
      this._enableWebApp = undefined;
      this._languageCode = undefined;
      this._workforceIdentityPoolProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowPublicAccess = value.allowPublicAccess;
      this._allowlistedDomains = value.allowlistedDomains;
      this._enableWebApp = value.enableWebApp;
      this._languageCode = value.languageCode;
      this._workforceIdentityPoolProvider = value.workforceIdentityPoolProvider;
    }
  }

  // allow_public_access - computed: false, optional: true, required: false
  private _allowPublicAccess?: boolean | cdktf.IResolvable; 
  public get allowPublicAccess() {
    return this.getBooleanAttribute('allow_public_access');
  }
  public set allowPublicAccess(value: boolean | cdktf.IResolvable) {
    this._allowPublicAccess = value;
  }
  public resetAllowPublicAccess() {
    this._allowPublicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPublicAccessInput() {
    return this._allowPublicAccess;
  }

  // allowlisted_domains - computed: false, optional: true, required: false
  private _allowlistedDomains?: string[]; 
  public get allowlistedDomains() {
    return this.getListAttribute('allowlisted_domains');
  }
  public set allowlistedDomains(value: string[]) {
    this._allowlistedDomains = value;
  }
  public resetAllowlistedDomains() {
    this._allowlistedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistedDomainsInput() {
    return this._allowlistedDomains;
  }

  // enable_web_app - computed: false, optional: true, required: false
  private _enableWebApp?: boolean | cdktf.IResolvable; 
  public get enableWebApp() {
    return this.getBooleanAttribute('enable_web_app');
  }
  public set enableWebApp(value: boolean | cdktf.IResolvable) {
    this._enableWebApp = value;
  }
  public resetEnableWebApp() {
    this._enableWebApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWebAppInput() {
    return this._enableWebApp;
  }

  // language_code - computed: false, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // workforce_identity_pool_provider - computed: false, optional: true, required: false
  private _workforceIdentityPoolProvider?: string; 
  public get workforceIdentityPoolProvider() {
    return this.getStringAttribute('workforce_identity_pool_provider');
  }
  public set workforceIdentityPoolProvider(value: string) {
    this._workforceIdentityPoolProvider = value;
  }
  public resetWorkforceIdentityPoolProvider() {
    this._workforceIdentityPoolProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workforceIdentityPoolProviderInput() {
    return this._workforceIdentityPoolProvider;
  }
}
export interface DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon {
  /**
  * Image URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#url DiscoveryEngineWidgetConfig#url}
  */
  readonly url?: string;
}

export function discoveryEngineWidgetConfigHomepageSettingShortcutsIconToTerraform(struct?: DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference | DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function discoveryEngineWidgetConfigHomepageSettingShortcutsIconToHclTerraform(struct?: DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference | DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DiscoveryEngineWidgetConfigHomepageSettingShortcuts {
  /**
  * Destination URL of shortcut.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#destination_uri DiscoveryEngineWidgetConfig#destination_uri}
  */
  readonly destinationUri?: string;
  /**
  * Title of the shortcut.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#title DiscoveryEngineWidgetConfig#title}
  */
  readonly title?: string;
  /**
  * icon block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#icon DiscoveryEngineWidgetConfig#icon}
  */
  readonly icon?: DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon;
}

export function discoveryEngineWidgetConfigHomepageSettingShortcutsToTerraform(struct?: DiscoveryEngineWidgetConfigHomepageSettingShortcuts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_uri: cdktf.stringToTerraform(struct!.destinationUri),
    title: cdktf.stringToTerraform(struct!.title),
    icon: discoveryEngineWidgetConfigHomepageSettingShortcutsIconToTerraform(struct!.icon),
  }
}


export function discoveryEngineWidgetConfigHomepageSettingShortcutsToHclTerraform(struct?: DiscoveryEngineWidgetConfigHomepageSettingShortcuts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_uri: {
      value: cdktf.stringToHclTerraform(struct!.destinationUri),
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
    icon: {
      value: discoveryEngineWidgetConfigHomepageSettingShortcutsIconToHclTerraform(struct!.icon),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryEngineWidgetConfigHomepageSettingShortcuts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationUri = this._destinationUri;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._icon?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineWidgetConfigHomepageSettingShortcuts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationUri = undefined;
      this._title = undefined;
      this._icon.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationUri = value.destinationUri;
      this._title = value.title;
      this._icon.internalValue = value.icon;
    }
  }

  // destination_uri - computed: false, optional: true, required: false
  private _destinationUri?: string; 
  public get destinationUri() {
    return this.getStringAttribute('destination_uri');
  }
  public set destinationUri(value: string) {
    this._destinationUri = value;
  }
  public resetDestinationUri() {
    this._destinationUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationUriInput() {
    return this._destinationUri;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // icon - computed: false, optional: true, required: false
  private _icon = new DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference(this, "icon");
  public get icon() {
    return this._icon;
  }
  public putIcon(value: DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon) {
    this._icon.internalValue = value;
  }
  public resetIcon() {
    this._icon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon.internalValue;
  }
}

export class DiscoveryEngineWidgetConfigHomepageSettingShortcutsList extends cdktf.ComplexList {
  public internalValue? : DiscoveryEngineWidgetConfigHomepageSettingShortcuts[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference {
    return new DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryEngineWidgetConfigHomepageSetting {
  /**
  * shortcuts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#shortcuts DiscoveryEngineWidgetConfig#shortcuts}
  */
  readonly shortcuts?: DiscoveryEngineWidgetConfigHomepageSettingShortcuts[] | cdktf.IResolvable;
}

export function discoveryEngineWidgetConfigHomepageSettingToTerraform(struct?: DiscoveryEngineWidgetConfigHomepageSettingOutputReference | DiscoveryEngineWidgetConfigHomepageSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shortcuts: cdktf.listMapper(discoveryEngineWidgetConfigHomepageSettingShortcutsToTerraform, true)(struct!.shortcuts),
  }
}


export function discoveryEngineWidgetConfigHomepageSettingToHclTerraform(struct?: DiscoveryEngineWidgetConfigHomepageSettingOutputReference | DiscoveryEngineWidgetConfigHomepageSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shortcuts: {
      value: cdktf.listMapperHcl(discoveryEngineWidgetConfigHomepageSettingShortcutsToHclTerraform, true)(struct!.shortcuts),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineWidgetConfigHomepageSettingShortcutsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineWidgetConfigHomepageSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineWidgetConfigHomepageSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shortcuts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortcuts = this._shortcuts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineWidgetConfigHomepageSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shortcuts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shortcuts.internalValue = value.shortcuts;
    }
  }

  // shortcuts - computed: false, optional: true, required: false
  private _shortcuts = new DiscoveryEngineWidgetConfigHomepageSettingShortcutsList(this, "shortcuts", false);
  public get shortcuts() {
    return this._shortcuts;
  }
  public putShortcuts(value: DiscoveryEngineWidgetConfigHomepageSettingShortcuts[] | cdktf.IResolvable) {
    this._shortcuts.internalValue = value;
  }
  public resetShortcuts() {
    this._shortcuts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortcutsInput() {
    return this._shortcuts.internalValue;
  }
}
export interface DiscoveryEngineWidgetConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#create DiscoveryEngineWidgetConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#delete DiscoveryEngineWidgetConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#update DiscoveryEngineWidgetConfig#update}
  */
  readonly update?: string;
}

export function discoveryEngineWidgetConfigTimeoutsToTerraform(struct?: DiscoveryEngineWidgetConfigTimeouts | cdktf.IResolvable): any {
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


export function discoveryEngineWidgetConfigTimeoutsToHclTerraform(struct?: DiscoveryEngineWidgetConfigTimeouts | cdktf.IResolvable): any {
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

export class DiscoveryEngineWidgetConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryEngineWidgetConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DiscoveryEngineWidgetConfigTimeouts | cdktf.IResolvable | undefined) {
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
export interface DiscoveryEngineWidgetConfigUiBrandingLogo {
  /**
  * Image URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#url DiscoveryEngineWidgetConfig#url}
  */
  readonly url?: string;
}

export function discoveryEngineWidgetConfigUiBrandingLogoToTerraform(struct?: DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference | DiscoveryEngineWidgetConfigUiBrandingLogo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function discoveryEngineWidgetConfigUiBrandingLogoToHclTerraform(struct?: DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference | DiscoveryEngineWidgetConfigUiBrandingLogo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineWidgetConfigUiBrandingLogo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineWidgetConfigUiBrandingLogo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DiscoveryEngineWidgetConfigUiBranding {
  /**
  * logo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#logo DiscoveryEngineWidgetConfig#logo}
  */
  readonly logo?: DiscoveryEngineWidgetConfigUiBrandingLogo;
}

export function discoveryEngineWidgetConfigUiBrandingToTerraform(struct?: DiscoveryEngineWidgetConfigUiBrandingOutputReference | DiscoveryEngineWidgetConfigUiBranding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logo: discoveryEngineWidgetConfigUiBrandingLogoToTerraform(struct!.logo),
  }
}


export function discoveryEngineWidgetConfigUiBrandingToHclTerraform(struct?: DiscoveryEngineWidgetConfigUiBrandingOutputReference | DiscoveryEngineWidgetConfigUiBranding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logo: {
      value: discoveryEngineWidgetConfigUiBrandingLogoToHclTerraform(struct!.logo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineWidgetConfigUiBrandingLogoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineWidgetConfigUiBrandingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineWidgetConfigUiBranding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logo = this._logo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineWidgetConfigUiBranding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logo.internalValue = value.logo;
    }
  }

  // logo - computed: false, optional: true, required: false
  private _logo = new DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference(this, "logo");
  public get logo() {
    return this._logo;
  }
  public putLogo(value: DiscoveryEngineWidgetConfigUiBrandingLogo) {
    this._logo.internalValue = value;
  }
  public resetLogo() {
    this._logo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo.internalValue;
  }
}
export interface DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField {
  /**
  * The field name that end users will see.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#display_name DiscoveryEngineWidgetConfig#display_name}
  */
  readonly displayName?: string;
  /**
  * Registered field name. The format is 'field.abc'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#field DiscoveryEngineWidgetConfig#field}
  */
  readonly field: string;
}

export function discoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldToTerraform(struct?: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    field: cdktf.stringToTerraform(struct!.field),
  }
}


export function discoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldToHclTerraform(struct?: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField | cdktf.IResolvable): any {
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
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._field = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._field = value.field;
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

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }
}

export class DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList extends cdktf.ComplexList {
  public internalValue? : DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference {
    return new DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap {
  /**
  *  Possible values: ["MOBILE", "DESKTOP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#device_visibility DiscoveryEngineWidgetConfig#device_visibility}
  */
  readonly deviceVisibility?: string[];
  /**
  * The template to customize how the field is displayed.
  * An example value would be a string that looks like: "Price: {value}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#display_template DiscoveryEngineWidgetConfig#display_template}
  */
  readonly displayTemplate?: string;
  /**
  * Registered field name. The format is 'field.abc'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#field DiscoveryEngineWidgetConfig#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#ui_component DiscoveryEngineWidgetConfig#ui_component}
  */
  readonly uiComponent: string;
}

export function discoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapToTerraform(struct?: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_visibility: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceVisibility),
    display_template: cdktf.stringToTerraform(struct!.displayTemplate),
    field: cdktf.stringToTerraform(struct!.field),
    ui_component: cdktf.stringToTerraform(struct!.uiComponent),
  }
}


export function discoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapToHclTerraform(struct?: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_visibility: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceVisibility),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    display_template: {
      value: cdktf.stringToHclTerraform(struct!.displayTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ui_component: {
      value: cdktf.stringToHclTerraform(struct!.uiComponent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceVisibility = this._deviceVisibility;
    }
    if (this._displayTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayTemplate = this._displayTemplate;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._uiComponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.uiComponent = this._uiComponent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceVisibility = undefined;
      this._displayTemplate = undefined;
      this._field = undefined;
      this._uiComponent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceVisibility = value.deviceVisibility;
      this._displayTemplate = value.displayTemplate;
      this._field = value.field;
      this._uiComponent = value.uiComponent;
    }
  }

  // device_visibility - computed: false, optional: true, required: false
  private _deviceVisibility?: string[]; 
  public get deviceVisibility() {
    return this.getListAttribute('device_visibility');
  }
  public set deviceVisibility(value: string[]) {
    this._deviceVisibility = value;
  }
  public resetDeviceVisibility() {
    this._deviceVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVisibilityInput() {
    return this._deviceVisibility;
  }

  // display_template - computed: false, optional: true, required: false
  private _displayTemplate?: string; 
  public get displayTemplate() {
    return this.getStringAttribute('display_template');
  }
  public set displayTemplate(value: string) {
    this._displayTemplate = value;
  }
  public resetDisplayTemplate() {
    this._displayTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayTemplateInput() {
    return this._displayTemplate;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // ui_component - computed: false, optional: false, required: true
  private _uiComponent?: string; 
  public get uiComponent() {
    return this.getStringAttribute('ui_component');
  }
  public set uiComponent(value: string) {
    this._uiComponent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uiComponentInput() {
    return this._uiComponent;
  }
}

export class DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList extends cdktf.ComplexList {
  public internalValue? : DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference {
    return new DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs {
  /**
  * The name of the data store. It should be data store resource name. Format:
  * 'projects/{project}/locations/{location}/collections/{collectionId}/dataStores/{dataStoreId}'.
  * For APIs under 'WidgetService', such as [WidgetService.LookUpWidgetConfig][],
  * the project number and location part is erased in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#name DiscoveryEngineWidgetConfig#name}
  */
  readonly name?: string;
  /**
  * facet_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#facet_field DiscoveryEngineWidgetConfig#facet_field}
  */
  readonly facetField?: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField[] | cdktf.IResolvable;
  /**
  * fields_ui_components_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#fields_ui_components_map DiscoveryEngineWidgetConfig#fields_ui_components_map}
  */
  readonly fieldsUiComponentsMap?: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap[] | cdktf.IResolvable;
}

export function discoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsToTerraform(struct?: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    facet_field: cdktf.listMapper(discoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldToTerraform, true)(struct!.facetField),
    fields_ui_components_map: cdktf.listMapper(discoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapToTerraform, true)(struct!.fieldsUiComponentsMap),
  }
}


export function discoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsToHclTerraform(struct?: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs | cdktf.IResolvable): any {
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
    facet_field: {
      value: cdktf.listMapperHcl(discoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldToHclTerraform, true)(struct!.facetField),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList",
    },
    fields_ui_components_map: {
      value: cdktf.listMapperHcl(discoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapToHclTerraform, true)(struct!.fieldsUiComponentsMap),
      isBlock: true,
      type: "set",
      storageClassType: "DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._facetField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.facetField = this._facetField?.internalValue;
    }
    if (this._fieldsUiComponentsMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsUiComponentsMap = this._fieldsUiComponentsMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._facetField.internalValue = undefined;
      this._fieldsUiComponentsMap.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._facetField.internalValue = value.facetField;
      this._fieldsUiComponentsMap.internalValue = value.fieldsUiComponentsMap;
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

  // facet_field - computed: false, optional: true, required: false
  private _facetField = new DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList(this, "facet_field", false);
  public get facetField() {
    return this._facetField;
  }
  public putFacetField(value: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField[] | cdktf.IResolvable) {
    this._facetField.internalValue = value;
  }
  public resetFacetField() {
    this._facetField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetFieldInput() {
    return this._facetField.internalValue;
  }

  // fields_ui_components_map - computed: false, optional: true, required: false
  private _fieldsUiComponentsMap = new DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList(this, "fields_ui_components_map", true);
  public get fieldsUiComponentsMap() {
    return this._fieldsUiComponentsMap;
  }
  public putFieldsUiComponentsMap(value: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap[] | cdktf.IResolvable) {
    this._fieldsUiComponentsMap.internalValue = value;
  }
  public resetFieldsUiComponentsMap() {
    this._fieldsUiComponentsMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsUiComponentsMapInput() {
    return this._fieldsUiComponentsMap.internalValue;
  }
}

export class DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList extends cdktf.ComplexList {
  public internalValue? : DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference {
    return new DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig {
  /**
  * Whether generated answer contains suggested related questions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#disable_related_questions DiscoveryEngineWidgetConfig#disable_related_questions}
  */
  readonly disableRelatedQuestions?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to filter out queries that are adversarial.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#ignore_adversarial_query DiscoveryEngineWidgetConfig#ignore_adversarial_query}
  */
  readonly ignoreAdversarialQuery?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to filter out queries that are not relevant to the content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#ignore_low_relevant_content DiscoveryEngineWidgetConfig#ignore_low_relevant_content}
  */
  readonly ignoreLowRelevantContent?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to filter out queries that are not answer-seeking.
  * The default value is 'false'. No answer is returned if the search query
  * is classified as a non-answer seeking query.
  * If this field is set to 'true', we skip generating answers for
  * non-answer seeking queries and return fallback messages instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#ignore_non_answer_seeking_query DiscoveryEngineWidgetConfig#ignore_non_answer_seeking_query}
  */
  readonly ignoreNonAnswerSeekingQuery?: boolean | cdktf.IResolvable;
  /**
  * Source of image returned in the answer. Possible values: ["ALL_AVAILABLE_SOURCES", "CORPUS_IMAGE_ONLY", "FIGURE_GENERATION_ONLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#image_source DiscoveryEngineWidgetConfig#image_source}
  */
  readonly imageSource?: string;
  /**
  * Language code for Summary. Use language tags defined by
  * [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This
  * is an experimental feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#language_code DiscoveryEngineWidgetConfig#language_code}
  */
  readonly languageCode?: string;
  /**
  * Max rephrase steps. The max number is 5 steps. If not set or
  * set to < 1, it will be set to 1 by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#max_rephrase_steps DiscoveryEngineWidgetConfig#max_rephrase_steps}
  */
  readonly maxRephraseSteps?: number;
  /**
  * Text at the beginning of the prompt that instructs the model that generates the answer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#model_prompt_preamble DiscoveryEngineWidgetConfig#model_prompt_preamble}
  */
  readonly modelPromptPreamble?: string;
  /**
  * The model version used to generate the answer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#model_version DiscoveryEngineWidgetConfig#model_version}
  */
  readonly modelVersion?: string;
  /**
  * The number of top results to generate the answer from. Up to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#result_count DiscoveryEngineWidgetConfig#result_count}
  */
  readonly resultCount?: number;
}

export function discoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigToTerraform(struct?: DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference | DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_related_questions: cdktf.booleanToTerraform(struct!.disableRelatedQuestions),
    ignore_adversarial_query: cdktf.booleanToTerraform(struct!.ignoreAdversarialQuery),
    ignore_low_relevant_content: cdktf.booleanToTerraform(struct!.ignoreLowRelevantContent),
    ignore_non_answer_seeking_query: cdktf.booleanToTerraform(struct!.ignoreNonAnswerSeekingQuery),
    image_source: cdktf.stringToTerraform(struct!.imageSource),
    language_code: cdktf.stringToTerraform(struct!.languageCode),
    max_rephrase_steps: cdktf.numberToTerraform(struct!.maxRephraseSteps),
    model_prompt_preamble: cdktf.stringToTerraform(struct!.modelPromptPreamble),
    model_version: cdktf.stringToTerraform(struct!.modelVersion),
    result_count: cdktf.numberToTerraform(struct!.resultCount),
  }
}


export function discoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigToHclTerraform(struct?: DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference | DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_related_questions: {
      value: cdktf.booleanToHclTerraform(struct!.disableRelatedQuestions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_adversarial_query: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreAdversarialQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_low_relevant_content: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreLowRelevantContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_non_answer_seeking_query: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreNonAnswerSeekingQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_source: {
      value: cdktf.stringToHclTerraform(struct!.imageSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language_code: {
      value: cdktf.stringToHclTerraform(struct!.languageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_rephrase_steps: {
      value: cdktf.numberToHclTerraform(struct!.maxRephraseSteps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_prompt_preamble: {
      value: cdktf.stringToHclTerraform(struct!.modelPromptPreamble),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_version: {
      value: cdktf.stringToHclTerraform(struct!.modelVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_count: {
      value: cdktf.numberToHclTerraform(struct!.resultCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableRelatedQuestions !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRelatedQuestions = this._disableRelatedQuestions;
    }
    if (this._ignoreAdversarialQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreAdversarialQuery = this._ignoreAdversarialQuery;
    }
    if (this._ignoreLowRelevantContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreLowRelevantContent = this._ignoreLowRelevantContent;
    }
    if (this._ignoreNonAnswerSeekingQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreNonAnswerSeekingQuery = this._ignoreNonAnswerSeekingQuery;
    }
    if (this._imageSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSource = this._imageSource;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._maxRephraseSteps !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRephraseSteps = this._maxRephraseSteps;
    }
    if (this._modelPromptPreamble !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelPromptPreamble = this._modelPromptPreamble;
    }
    if (this._modelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelVersion = this._modelVersion;
    }
    if (this._resultCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultCount = this._resultCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableRelatedQuestions = undefined;
      this._ignoreAdversarialQuery = undefined;
      this._ignoreLowRelevantContent = undefined;
      this._ignoreNonAnswerSeekingQuery = undefined;
      this._imageSource = undefined;
      this._languageCode = undefined;
      this._maxRephraseSteps = undefined;
      this._modelPromptPreamble = undefined;
      this._modelVersion = undefined;
      this._resultCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableRelatedQuestions = value.disableRelatedQuestions;
      this._ignoreAdversarialQuery = value.ignoreAdversarialQuery;
      this._ignoreLowRelevantContent = value.ignoreLowRelevantContent;
      this._ignoreNonAnswerSeekingQuery = value.ignoreNonAnswerSeekingQuery;
      this._imageSource = value.imageSource;
      this._languageCode = value.languageCode;
      this._maxRephraseSteps = value.maxRephraseSteps;
      this._modelPromptPreamble = value.modelPromptPreamble;
      this._modelVersion = value.modelVersion;
      this._resultCount = value.resultCount;
    }
  }

  // disable_related_questions - computed: false, optional: true, required: false
  private _disableRelatedQuestions?: boolean | cdktf.IResolvable; 
  public get disableRelatedQuestions() {
    return this.getBooleanAttribute('disable_related_questions');
  }
  public set disableRelatedQuestions(value: boolean | cdktf.IResolvable) {
    this._disableRelatedQuestions = value;
  }
  public resetDisableRelatedQuestions() {
    this._disableRelatedQuestions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRelatedQuestionsInput() {
    return this._disableRelatedQuestions;
  }

  // ignore_adversarial_query - computed: false, optional: true, required: false
  private _ignoreAdversarialQuery?: boolean | cdktf.IResolvable; 
  public get ignoreAdversarialQuery() {
    return this.getBooleanAttribute('ignore_adversarial_query');
  }
  public set ignoreAdversarialQuery(value: boolean | cdktf.IResolvable) {
    this._ignoreAdversarialQuery = value;
  }
  public resetIgnoreAdversarialQuery() {
    this._ignoreAdversarialQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAdversarialQueryInput() {
    return this._ignoreAdversarialQuery;
  }

  // ignore_low_relevant_content - computed: false, optional: true, required: false
  private _ignoreLowRelevantContent?: boolean | cdktf.IResolvable; 
  public get ignoreLowRelevantContent() {
    return this.getBooleanAttribute('ignore_low_relevant_content');
  }
  public set ignoreLowRelevantContent(value: boolean | cdktf.IResolvable) {
    this._ignoreLowRelevantContent = value;
  }
  public resetIgnoreLowRelevantContent() {
    this._ignoreLowRelevantContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreLowRelevantContentInput() {
    return this._ignoreLowRelevantContent;
  }

  // ignore_non_answer_seeking_query - computed: false, optional: true, required: false
  private _ignoreNonAnswerSeekingQuery?: boolean | cdktf.IResolvable; 
  public get ignoreNonAnswerSeekingQuery() {
    return this.getBooleanAttribute('ignore_non_answer_seeking_query');
  }
  public set ignoreNonAnswerSeekingQuery(value: boolean | cdktf.IResolvable) {
    this._ignoreNonAnswerSeekingQuery = value;
  }
  public resetIgnoreNonAnswerSeekingQuery() {
    this._ignoreNonAnswerSeekingQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNonAnswerSeekingQueryInput() {
    return this._ignoreNonAnswerSeekingQuery;
  }

  // image_source - computed: false, optional: true, required: false
  private _imageSource?: string; 
  public get imageSource() {
    return this.getStringAttribute('image_source');
  }
  public set imageSource(value: string) {
    this._imageSource = value;
  }
  public resetImageSource() {
    this._imageSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSourceInput() {
    return this._imageSource;
  }

  // language_code - computed: false, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // max_rephrase_steps - computed: false, optional: true, required: false
  private _maxRephraseSteps?: number; 
  public get maxRephraseSteps() {
    return this.getNumberAttribute('max_rephrase_steps');
  }
  public set maxRephraseSteps(value: number) {
    this._maxRephraseSteps = value;
  }
  public resetMaxRephraseSteps() {
    this._maxRephraseSteps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRephraseStepsInput() {
    return this._maxRephraseSteps;
  }

  // model_prompt_preamble - computed: false, optional: true, required: false
  private _modelPromptPreamble?: string; 
  public get modelPromptPreamble() {
    return this.getStringAttribute('model_prompt_preamble');
  }
  public set modelPromptPreamble(value: string) {
    this._modelPromptPreamble = value;
  }
  public resetModelPromptPreamble() {
    this._modelPromptPreamble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPromptPreambleInput() {
    return this._modelPromptPreamble;
  }

  // model_version - computed: false, optional: true, required: false
  private _modelVersion?: string; 
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }
  public set modelVersion(value: string) {
    this._modelVersion = value;
  }
  public resetModelVersion() {
    this._modelVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelVersionInput() {
    return this._modelVersion;
  }

  // result_count - computed: false, optional: true, required: false
  private _resultCount?: number; 
  public get resultCount() {
    return this.getNumberAttribute('result_count');
  }
  public set resultCount(value: number) {
    this._resultCount = value;
  }
  public resetResultCount() {
    this._resultCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultCountInput() {
    return this._resultCount;
  }
}
export interface DiscoveryEngineWidgetConfigUiSettings {
  /**
  * The default ordering for search results if specified.
  * Used to set SearchRequest#orderBy on applicable requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#default_search_request_order_by DiscoveryEngineWidgetConfig#default_search_request_order_by}
  */
  readonly defaultSearchRequestOrderBy?: string;
  /**
  * If set to true, the widget will not collect user events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#disable_user_events_collection DiscoveryEngineWidgetConfig#disable_user_events_collection}
  */
  readonly disableUserEventsCollection?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to enable autocomplete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#enable_autocomplete DiscoveryEngineWidgetConfig#enable_autocomplete}
  */
  readonly enableAutocomplete?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the widget will enable the create agent button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#enable_create_agent_button DiscoveryEngineWidgetConfig#enable_create_agent_button}
  */
  readonly enableCreateAgentButton?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the widget will enable people search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#enable_people_search DiscoveryEngineWidgetConfig#enable_people_search}
  */
  readonly enablePeopleSearch?: boolean | cdktf.IResolvable;
  /**
  * Turn on or off collecting the search result quality feedback from end users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#enable_quality_feedback DiscoveryEngineWidgetConfig#enable_quality_feedback}
  */
  readonly enableQualityFeedback?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable safe search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#enable_safe_search DiscoveryEngineWidgetConfig#enable_safe_search}
  */
  readonly enableSafeSearch?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable search-as-you-type behavior for the search widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#enable_search_as_you_type DiscoveryEngineWidgetConfig#enable_search_as_you_type}
  */
  readonly enableSearchAsYouType?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the widget will enable visual content summary on applicable
  * search requests. Only used by healthcare search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#enable_visual_content_summary DiscoveryEngineWidgetConfig#enable_visual_content_summary}
  */
  readonly enableVisualContentSummary?: boolean | cdktf.IResolvable;
  /**
  * Describes widget (or web app) interaction type Possible values: ["SEARCH_ONLY", "SEARCH_WITH_ANSWER", "SEARCH_WITH_FOLLOW_UPS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#interaction_type DiscoveryEngineWidgetConfig#interaction_type}
  */
  readonly interactionType?: string;
  /**
  * Controls whether result extract is display and how (snippet or extractive answer).
  * Default to no result if unspecified. Possible values: ["SNIPPET", "EXTRACTIVE_ANSWER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#result_description_type DiscoveryEngineWidgetConfig#result_description_type}
  */
  readonly resultDescriptionType?: string;
  /**
  * data_store_ui_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#data_store_ui_configs DiscoveryEngineWidgetConfig#data_store_ui_configs}
  */
  readonly dataStoreUiConfigs?: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs[] | cdktf.IResolvable;
  /**
  * generative_answer_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#generative_answer_config DiscoveryEngineWidgetConfig#generative_answer_config}
  */
  readonly generativeAnswerConfig?: DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig;
}

export function discoveryEngineWidgetConfigUiSettingsToTerraform(struct?: DiscoveryEngineWidgetConfigUiSettingsOutputReference | DiscoveryEngineWidgetConfigUiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_search_request_order_by: cdktf.stringToTerraform(struct!.defaultSearchRequestOrderBy),
    disable_user_events_collection: cdktf.booleanToTerraform(struct!.disableUserEventsCollection),
    enable_autocomplete: cdktf.booleanToTerraform(struct!.enableAutocomplete),
    enable_create_agent_button: cdktf.booleanToTerraform(struct!.enableCreateAgentButton),
    enable_people_search: cdktf.booleanToTerraform(struct!.enablePeopleSearch),
    enable_quality_feedback: cdktf.booleanToTerraform(struct!.enableQualityFeedback),
    enable_safe_search: cdktf.booleanToTerraform(struct!.enableSafeSearch),
    enable_search_as_you_type: cdktf.booleanToTerraform(struct!.enableSearchAsYouType),
    enable_visual_content_summary: cdktf.booleanToTerraform(struct!.enableVisualContentSummary),
    interaction_type: cdktf.stringToTerraform(struct!.interactionType),
    result_description_type: cdktf.stringToTerraform(struct!.resultDescriptionType),
    data_store_ui_configs: cdktf.listMapper(discoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsToTerraform, true)(struct!.dataStoreUiConfigs),
    generative_answer_config: discoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigToTerraform(struct!.generativeAnswerConfig),
  }
}


export function discoveryEngineWidgetConfigUiSettingsToHclTerraform(struct?: DiscoveryEngineWidgetConfigUiSettingsOutputReference | DiscoveryEngineWidgetConfigUiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_search_request_order_by: {
      value: cdktf.stringToHclTerraform(struct!.defaultSearchRequestOrderBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_user_events_collection: {
      value: cdktf.booleanToHclTerraform(struct!.disableUserEventsCollection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_autocomplete: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutocomplete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_create_agent_button: {
      value: cdktf.booleanToHclTerraform(struct!.enableCreateAgentButton),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_people_search: {
      value: cdktf.booleanToHclTerraform(struct!.enablePeopleSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_quality_feedback: {
      value: cdktf.booleanToHclTerraform(struct!.enableQualityFeedback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_safe_search: {
      value: cdktf.booleanToHclTerraform(struct!.enableSafeSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_search_as_you_type: {
      value: cdktf.booleanToHclTerraform(struct!.enableSearchAsYouType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_visual_content_summary: {
      value: cdktf.booleanToHclTerraform(struct!.enableVisualContentSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interaction_type: {
      value: cdktf.stringToHclTerraform(struct!.interactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_description_type: {
      value: cdktf.stringToHclTerraform(struct!.resultDescriptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_store_ui_configs: {
      value: cdktf.listMapperHcl(discoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsToHclTerraform, true)(struct!.dataStoreUiConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList",
    },
    generative_answer_config: {
      value: discoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigToHclTerraform(struct!.generativeAnswerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineWidgetConfigUiSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineWidgetConfigUiSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSearchRequestOrderBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSearchRequestOrderBy = this._defaultSearchRequestOrderBy;
    }
    if (this._disableUserEventsCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUserEventsCollection = this._disableUserEventsCollection;
    }
    if (this._enableAutocomplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutocomplete = this._enableAutocomplete;
    }
    if (this._enableCreateAgentButton !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCreateAgentButton = this._enableCreateAgentButton;
    }
    if (this._enablePeopleSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePeopleSearch = this._enablePeopleSearch;
    }
    if (this._enableQualityFeedback !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableQualityFeedback = this._enableQualityFeedback;
    }
    if (this._enableSafeSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSafeSearch = this._enableSafeSearch;
    }
    if (this._enableSearchAsYouType !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSearchAsYouType = this._enableSearchAsYouType;
    }
    if (this._enableVisualContentSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVisualContentSummary = this._enableVisualContentSummary;
    }
    if (this._interactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.interactionType = this._interactionType;
    }
    if (this._resultDescriptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultDescriptionType = this._resultDescriptionType;
    }
    if (this._dataStoreUiConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreUiConfigs = this._dataStoreUiConfigs?.internalValue;
    }
    if (this._generativeAnswerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generativeAnswerConfig = this._generativeAnswerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineWidgetConfigUiSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSearchRequestOrderBy = undefined;
      this._disableUserEventsCollection = undefined;
      this._enableAutocomplete = undefined;
      this._enableCreateAgentButton = undefined;
      this._enablePeopleSearch = undefined;
      this._enableQualityFeedback = undefined;
      this._enableSafeSearch = undefined;
      this._enableSearchAsYouType = undefined;
      this._enableVisualContentSummary = undefined;
      this._interactionType = undefined;
      this._resultDescriptionType = undefined;
      this._dataStoreUiConfigs.internalValue = undefined;
      this._generativeAnswerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSearchRequestOrderBy = value.defaultSearchRequestOrderBy;
      this._disableUserEventsCollection = value.disableUserEventsCollection;
      this._enableAutocomplete = value.enableAutocomplete;
      this._enableCreateAgentButton = value.enableCreateAgentButton;
      this._enablePeopleSearch = value.enablePeopleSearch;
      this._enableQualityFeedback = value.enableQualityFeedback;
      this._enableSafeSearch = value.enableSafeSearch;
      this._enableSearchAsYouType = value.enableSearchAsYouType;
      this._enableVisualContentSummary = value.enableVisualContentSummary;
      this._interactionType = value.interactionType;
      this._resultDescriptionType = value.resultDescriptionType;
      this._dataStoreUiConfigs.internalValue = value.dataStoreUiConfigs;
      this._generativeAnswerConfig.internalValue = value.generativeAnswerConfig;
    }
  }

  // default_search_request_order_by - computed: false, optional: true, required: false
  private _defaultSearchRequestOrderBy?: string; 
  public get defaultSearchRequestOrderBy() {
    return this.getStringAttribute('default_search_request_order_by');
  }
  public set defaultSearchRequestOrderBy(value: string) {
    this._defaultSearchRequestOrderBy = value;
  }
  public resetDefaultSearchRequestOrderBy() {
    this._defaultSearchRequestOrderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSearchRequestOrderByInput() {
    return this._defaultSearchRequestOrderBy;
  }

  // disable_user_events_collection - computed: false, optional: true, required: false
  private _disableUserEventsCollection?: boolean | cdktf.IResolvable; 
  public get disableUserEventsCollection() {
    return this.getBooleanAttribute('disable_user_events_collection');
  }
  public set disableUserEventsCollection(value: boolean | cdktf.IResolvable) {
    this._disableUserEventsCollection = value;
  }
  public resetDisableUserEventsCollection() {
    this._disableUserEventsCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUserEventsCollectionInput() {
    return this._disableUserEventsCollection;
  }

  // enable_autocomplete - computed: false, optional: true, required: false
  private _enableAutocomplete?: boolean | cdktf.IResolvable; 
  public get enableAutocomplete() {
    return this.getBooleanAttribute('enable_autocomplete');
  }
  public set enableAutocomplete(value: boolean | cdktf.IResolvable) {
    this._enableAutocomplete = value;
  }
  public resetEnableAutocomplete() {
    this._enableAutocomplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutocompleteInput() {
    return this._enableAutocomplete;
  }

  // enable_create_agent_button - computed: false, optional: true, required: false
  private _enableCreateAgentButton?: boolean | cdktf.IResolvable; 
  public get enableCreateAgentButton() {
    return this.getBooleanAttribute('enable_create_agent_button');
  }
  public set enableCreateAgentButton(value: boolean | cdktf.IResolvable) {
    this._enableCreateAgentButton = value;
  }
  public resetEnableCreateAgentButton() {
    this._enableCreateAgentButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCreateAgentButtonInput() {
    return this._enableCreateAgentButton;
  }

  // enable_people_search - computed: false, optional: true, required: false
  private _enablePeopleSearch?: boolean | cdktf.IResolvable; 
  public get enablePeopleSearch() {
    return this.getBooleanAttribute('enable_people_search');
  }
  public set enablePeopleSearch(value: boolean | cdktf.IResolvable) {
    this._enablePeopleSearch = value;
  }
  public resetEnablePeopleSearch() {
    this._enablePeopleSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePeopleSearchInput() {
    return this._enablePeopleSearch;
  }

  // enable_quality_feedback - computed: false, optional: true, required: false
  private _enableQualityFeedback?: boolean | cdktf.IResolvable; 
  public get enableQualityFeedback() {
    return this.getBooleanAttribute('enable_quality_feedback');
  }
  public set enableQualityFeedback(value: boolean | cdktf.IResolvable) {
    this._enableQualityFeedback = value;
  }
  public resetEnableQualityFeedback() {
    this._enableQualityFeedback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableQualityFeedbackInput() {
    return this._enableQualityFeedback;
  }

  // enable_safe_search - computed: false, optional: true, required: false
  private _enableSafeSearch?: boolean | cdktf.IResolvable; 
  public get enableSafeSearch() {
    return this.getBooleanAttribute('enable_safe_search');
  }
  public set enableSafeSearch(value: boolean | cdktf.IResolvable) {
    this._enableSafeSearch = value;
  }
  public resetEnableSafeSearch() {
    this._enableSafeSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSafeSearchInput() {
    return this._enableSafeSearch;
  }

  // enable_search_as_you_type - computed: false, optional: true, required: false
  private _enableSearchAsYouType?: boolean | cdktf.IResolvable; 
  public get enableSearchAsYouType() {
    return this.getBooleanAttribute('enable_search_as_you_type');
  }
  public set enableSearchAsYouType(value: boolean | cdktf.IResolvable) {
    this._enableSearchAsYouType = value;
  }
  public resetEnableSearchAsYouType() {
    this._enableSearchAsYouType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSearchAsYouTypeInput() {
    return this._enableSearchAsYouType;
  }

  // enable_visual_content_summary - computed: false, optional: true, required: false
  private _enableVisualContentSummary?: boolean | cdktf.IResolvable; 
  public get enableVisualContentSummary() {
    return this.getBooleanAttribute('enable_visual_content_summary');
  }
  public set enableVisualContentSummary(value: boolean | cdktf.IResolvable) {
    this._enableVisualContentSummary = value;
  }
  public resetEnableVisualContentSummary() {
    this._enableVisualContentSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVisualContentSummaryInput() {
    return this._enableVisualContentSummary;
  }

  // interaction_type - computed: false, optional: true, required: false
  private _interactionType?: string; 
  public get interactionType() {
    return this.getStringAttribute('interaction_type');
  }
  public set interactionType(value: string) {
    this._interactionType = value;
  }
  public resetInteractionType() {
    this._interactionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactionTypeInput() {
    return this._interactionType;
  }

  // result_description_type - computed: false, optional: true, required: false
  private _resultDescriptionType?: string; 
  public get resultDescriptionType() {
    return this.getStringAttribute('result_description_type');
  }
  public set resultDescriptionType(value: string) {
    this._resultDescriptionType = value;
  }
  public resetResultDescriptionType() {
    this._resultDescriptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultDescriptionTypeInput() {
    return this._resultDescriptionType;
  }

  // data_store_ui_configs - computed: false, optional: true, required: false
  private _dataStoreUiConfigs = new DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList(this, "data_store_ui_configs", false);
  public get dataStoreUiConfigs() {
    return this._dataStoreUiConfigs;
  }
  public putDataStoreUiConfigs(value: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs[] | cdktf.IResolvable) {
    this._dataStoreUiConfigs.internalValue = value;
  }
  public resetDataStoreUiConfigs() {
    this._dataStoreUiConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreUiConfigsInput() {
    return this._dataStoreUiConfigs.internalValue;
  }

  // generative_answer_config - computed: false, optional: true, required: false
  private _generativeAnswerConfig = new DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference(this, "generative_answer_config");
  public get generativeAnswerConfig() {
    return this._generativeAnswerConfig;
  }
  public putGenerativeAnswerConfig(value: DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig) {
    this._generativeAnswerConfig.internalValue = value;
  }
  public resetGenerativeAnswerConfig() {
    this._generativeAnswerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeAnswerConfigInput() {
    return this._generativeAnswerConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config google_discovery_engine_widget_config}
*/
export class DiscoveryEngineWidgetConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_widget_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiscoveryEngineWidgetConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscoveryEngineWidgetConfig to import
  * @param importFromId The id of the existing DiscoveryEngineWidgetConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscoveryEngineWidgetConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_widget_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/discovery_engine_widget_config google_discovery_engine_widget_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryEngineWidgetConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryEngineWidgetConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_widget_config',
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
    this._engineId = config.engineId;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._widgetConfigId = config.widgetConfigId;
    this._accessSettings.internalValue = config.accessSettings;
    this._homepageSetting.internalValue = config.homepageSetting;
    this._timeouts.internalValue = config.timeouts;
    this._uiBranding.internalValue = config.uiBranding;
    this._uiSettings.internalValue = config.uiSettings;
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

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
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

  // widget_config_id - computed: false, optional: true, required: false
  private _widgetConfigId?: string; 
  public get widgetConfigId() {
    return this.getStringAttribute('widget_config_id');
  }
  public set widgetConfigId(value: string) {
    this._widgetConfigId = value;
  }
  public resetWidgetConfigId() {
    this._widgetConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetConfigIdInput() {
    return this._widgetConfigId;
  }

  // access_settings - computed: false, optional: true, required: false
  private _accessSettings = new DiscoveryEngineWidgetConfigAccessSettingsOutputReference(this, "access_settings");
  public get accessSettings() {
    return this._accessSettings;
  }
  public putAccessSettings(value: DiscoveryEngineWidgetConfigAccessSettings) {
    this._accessSettings.internalValue = value;
  }
  public resetAccessSettings() {
    this._accessSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSettingsInput() {
    return this._accessSettings.internalValue;
  }

  // homepage_setting - computed: false, optional: true, required: false
  private _homepageSetting = new DiscoveryEngineWidgetConfigHomepageSettingOutputReference(this, "homepage_setting");
  public get homepageSetting() {
    return this._homepageSetting;
  }
  public putHomepageSetting(value: DiscoveryEngineWidgetConfigHomepageSetting) {
    this._homepageSetting.internalValue = value;
  }
  public resetHomepageSetting() {
    this._homepageSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homepageSettingInput() {
    return this._homepageSetting.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DiscoveryEngineWidgetConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DiscoveryEngineWidgetConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // ui_branding - computed: false, optional: true, required: false
  private _uiBranding = new DiscoveryEngineWidgetConfigUiBrandingOutputReference(this, "ui_branding");
  public get uiBranding() {
    return this._uiBranding;
  }
  public putUiBranding(value: DiscoveryEngineWidgetConfigUiBranding) {
    this._uiBranding.internalValue = value;
  }
  public resetUiBranding() {
    this._uiBranding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiBrandingInput() {
    return this._uiBranding.internalValue;
  }

  // ui_settings - computed: false, optional: true, required: false
  private _uiSettings = new DiscoveryEngineWidgetConfigUiSettingsOutputReference(this, "ui_settings");
  public get uiSettings() {
    return this._uiSettings;
  }
  public putUiSettings(value: DiscoveryEngineWidgetConfigUiSettings) {
    this._uiSettings.internalValue = value;
  }
  public resetUiSettings() {
    this._uiSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiSettingsInput() {
    return this._uiSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collection_id: cdktf.stringToTerraform(this._collectionId),
      engine_id: cdktf.stringToTerraform(this._engineId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      widget_config_id: cdktf.stringToTerraform(this._widgetConfigId),
      access_settings: discoveryEngineWidgetConfigAccessSettingsToTerraform(this._accessSettings.internalValue),
      homepage_setting: discoveryEngineWidgetConfigHomepageSettingToTerraform(this._homepageSetting.internalValue),
      timeouts: discoveryEngineWidgetConfigTimeoutsToTerraform(this._timeouts.internalValue),
      ui_branding: discoveryEngineWidgetConfigUiBrandingToTerraform(this._uiBranding.internalValue),
      ui_settings: discoveryEngineWidgetConfigUiSettingsToTerraform(this._uiSettings.internalValue),
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
      widget_config_id: {
        value: cdktf.stringToHclTerraform(this._widgetConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_settings: {
        value: discoveryEngineWidgetConfigAccessSettingsToHclTerraform(this._accessSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineWidgetConfigAccessSettingsList",
      },
      homepage_setting: {
        value: discoveryEngineWidgetConfigHomepageSettingToHclTerraform(this._homepageSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineWidgetConfigHomepageSettingList",
      },
      timeouts: {
        value: discoveryEngineWidgetConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DiscoveryEngineWidgetConfigTimeouts",
      },
      ui_branding: {
        value: discoveryEngineWidgetConfigUiBrandingToHclTerraform(this._uiBranding.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineWidgetConfigUiBrandingList",
      },
      ui_settings: {
        value: discoveryEngineWidgetConfigUiSettingsToHclTerraform(this._uiSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineWidgetConfigUiSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
