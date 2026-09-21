// https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VertexAiRagCorpusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#deletion_policy VertexAiRagCorpus#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Optional. The description of the RagCorpus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#description VertexAiRagCorpus#description}
  */
  readonly description?: string;
  /**
  * Required. The display name of the RagCorpus. The name can be up to 128
  * characters long and can consist of any UTF-8 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#display_name VertexAiRagCorpus#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#id VertexAiRagCorpus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#project VertexAiRagCorpus#project}
  */
  readonly project?: string;
  /**
  * The region of the RagCorpus. eg europe-west4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#region VertexAiRagCorpus#region}
  */
  readonly region: string;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#encryption_spec VertexAiRagCorpus#encryption_spec}
  */
  readonly encryptionSpec?: VertexAiRagCorpusEncryptionSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#timeouts VertexAiRagCorpus#timeouts}
  */
  readonly timeouts?: VertexAiRagCorpusTimeouts;
  /**
  * vector_db_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#vector_db_config VertexAiRagCorpus#vector_db_config}
  */
  readonly vectorDbConfig?: VertexAiRagCorpusVectorDbConfig;
}
export interface VertexAiRagCorpusCorpusStatus {
}

export function vertexAiRagCorpusCorpusStatusToTerraform(struct?: VertexAiRagCorpusCorpusStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vertexAiRagCorpusCorpusStatusToHclTerraform(struct?: VertexAiRagCorpusCorpusStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiRagCorpusCorpusStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VertexAiRagCorpusCorpusStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusCorpusStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_status - computed: true, optional: false, required: false
  public get errorStatus() {
    return this.getStringAttribute('error_status');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class VertexAiRagCorpusCorpusStatusList extends cdktf.ComplexList {

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
  public get(index: number): VertexAiRagCorpusCorpusStatusOutputReference {
    return new VertexAiRagCorpusCorpusStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiRagCorpusEncryptionSpec {
  /**
  * Required. The Cloud KMS resource identifier of the customer managed
  * encryption key used to protect the resource. Has the form:
  * projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
  * The key needs to be in the same region as where the resource is
  * created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#kms_key_name VertexAiRagCorpus#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function vertexAiRagCorpusEncryptionSpecToTerraform(struct?: VertexAiRagCorpusEncryptionSpecOutputReference | VertexAiRagCorpusEncryptionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function vertexAiRagCorpusEncryptionSpecToHclTerraform(struct?: VertexAiRagCorpusEncryptionSpecOutputReference | VertexAiRagCorpusEncryptionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagCorpusEncryptionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusEncryptionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface VertexAiRagCorpusTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#create VertexAiRagCorpus#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#delete VertexAiRagCorpus#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#update VertexAiRagCorpus#update}
  */
  readonly update?: string;
}

export function vertexAiRagCorpusTimeoutsToTerraform(struct?: VertexAiRagCorpusTimeouts | cdktf.IResolvable): any {
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


export function vertexAiRagCorpusTimeoutsToHclTerraform(struct?: VertexAiRagCorpusTimeouts | cdktf.IResolvable): any {
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

export class VertexAiRagCorpusTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiRagCorpusTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VertexAiRagCorpusTimeouts | cdktf.IResolvable | undefined) {
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
export interface VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint {
  /**
  * Required. The endpoint resource name. Format:
  * projects/{project}/locations/{location}/publishers/{publisher}/models/{model}
  * or projects/{project}/locations/{location}/endpoints/{endpoint}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#endpoint VertexAiRagCorpus#endpoint}
  */
  readonly endpoint: string;
}

export function vertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointToTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference | VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}


export function vertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointToHclTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference | VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // model_version_id - computed: true, optional: false, required: false
  public get modelVersionId() {
    return this.getStringAttribute('model_version_id');
  }
}
export interface VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig {
  /**
  * vertex_prediction_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#vertex_prediction_endpoint VertexAiRagCorpus#vertex_prediction_endpoint}
  */
  readonly vertexPredictionEndpoint?: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint;
}

export function vertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigToTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference | VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vertex_prediction_endpoint: vertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointToTerraform(struct!.vertexPredictionEndpoint),
  }
}


export function vertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigToHclTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference | VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vertex_prediction_endpoint: {
      value: vertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointToHclTerraform(struct!.vertexPredictionEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vertexPredictionEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vertexPredictionEndpoint = this._vertexPredictionEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vertexPredictionEndpoint.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vertexPredictionEndpoint.internalValue = value.vertexPredictionEndpoint;
    }
  }

  // vertex_prediction_endpoint - computed: false, optional: true, required: false
  private _vertexPredictionEndpoint = new VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference(this, "vertex_prediction_endpoint");
  public get vertexPredictionEndpoint() {
    return this._vertexPredictionEndpoint;
  }
  public putVertexPredictionEndpoint(value: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint) {
    this._vertexPredictionEndpoint.internalValue = value;
  }
  public resetVertexPredictionEndpoint() {
    this._vertexPredictionEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vertexPredictionEndpointInput() {
    return this._vertexPredictionEndpoint.internalValue;
  }
}
export interface VertexAiRagCorpusVectorDbConfigRagManagedDbAnn {
  /**
  * Number of leaf nodes in the tree-based structure. Default value is 500.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#leaf_count VertexAiRagCorpus#leaf_count}
  */
  readonly leafCount?: number;
  /**
  * The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#tree_depth VertexAiRagCorpus#tree_depth}
  */
  readonly treeDepth?: number;
}

export function vertexAiRagCorpusVectorDbConfigRagManagedDbAnnToTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference | VertexAiRagCorpusVectorDbConfigRagManagedDbAnn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    leaf_count: cdktf.numberToTerraform(struct!.leafCount),
    tree_depth: cdktf.numberToTerraform(struct!.treeDepth),
  }
}


export function vertexAiRagCorpusVectorDbConfigRagManagedDbAnnToHclTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference | VertexAiRagCorpusVectorDbConfigRagManagedDbAnn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    leaf_count: {
      value: cdktf.numberToHclTerraform(struct!.leafCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tree_depth: {
      value: cdktf.numberToHclTerraform(struct!.treeDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusVectorDbConfigRagManagedDbAnn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leafCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.leafCount = this._leafCount;
    }
    if (this._treeDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.treeDepth = this._treeDepth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusVectorDbConfigRagManagedDbAnn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._leafCount = undefined;
      this._treeDepth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._leafCount = value.leafCount;
      this._treeDepth = value.treeDepth;
    }
  }

  // leaf_count - computed: true, optional: true, required: false
  private _leafCount?: number; 
  public get leafCount() {
    return this.getNumberAttribute('leaf_count');
  }
  public set leafCount(value: number) {
    this._leafCount = value;
  }
  public resetLeafCount() {
    this._leafCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafCountInput() {
    return this._leafCount;
  }

  // tree_depth - computed: true, optional: true, required: false
  private _treeDepth?: number; 
  public get treeDepth() {
    return this.getNumberAttribute('tree_depth');
  }
  public set treeDepth(value: number) {
    this._treeDepth = value;
  }
  public resetTreeDepth() {
    this._treeDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treeDepthInput() {
    return this._treeDepth;
  }
}
export interface VertexAiRagCorpusVectorDbConfigRagManagedDbKnn {
}

export function vertexAiRagCorpusVectorDbConfigRagManagedDbKnnToTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference | VertexAiRagCorpusVectorDbConfigRagManagedDbKnn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vertexAiRagCorpusVectorDbConfigRagManagedDbKnnToHclTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference | VertexAiRagCorpusVectorDbConfigRagManagedDbKnn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusVectorDbConfigRagManagedDbKnn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusVectorDbConfigRagManagedDbKnn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface VertexAiRagCorpusVectorDbConfigRagManagedDb {
  /**
  * ann block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#ann VertexAiRagCorpus#ann}
  */
  readonly ann?: VertexAiRagCorpusVectorDbConfigRagManagedDbAnn;
  /**
  * knn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#knn VertexAiRagCorpus#knn}
  */
  readonly knn?: VertexAiRagCorpusVectorDbConfigRagManagedDbKnn;
}

export function vertexAiRagCorpusVectorDbConfigRagManagedDbToTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference | VertexAiRagCorpusVectorDbConfigRagManagedDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ann: vertexAiRagCorpusVectorDbConfigRagManagedDbAnnToTerraform(struct!.ann),
    knn: vertexAiRagCorpusVectorDbConfigRagManagedDbKnnToTerraform(struct!.knn),
  }
}


export function vertexAiRagCorpusVectorDbConfigRagManagedDbToHclTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference | VertexAiRagCorpusVectorDbConfigRagManagedDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ann: {
      value: vertexAiRagCorpusVectorDbConfigRagManagedDbAnnToHclTerraform(struct!.ann),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagCorpusVectorDbConfigRagManagedDbAnnList",
    },
    knn: {
      value: vertexAiRagCorpusVectorDbConfigRagManagedDbKnnToHclTerraform(struct!.knn),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagCorpusVectorDbConfigRagManagedDbKnnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusVectorDbConfigRagManagedDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ann?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ann = this._ann?.internalValue;
    }
    if (this._knn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knn = this._knn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusVectorDbConfigRagManagedDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ann.internalValue = undefined;
      this._knn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ann.internalValue = value.ann;
      this._knn.internalValue = value.knn;
    }
  }

  // ann - computed: false, optional: true, required: false
  private _ann = new VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference(this, "ann");
  public get ann() {
    return this._ann;
  }
  public putAnn(value: VertexAiRagCorpusVectorDbConfigRagManagedDbAnn) {
    this._ann.internalValue = value;
  }
  public resetAnn() {
    this._ann.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annInput() {
    return this._ann.internalValue;
  }

  // knn - computed: false, optional: true, required: false
  private _knn = new VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference(this, "knn");
  public get knn() {
    return this._knn;
  }
  public putKnn(value: VertexAiRagCorpusVectorDbConfigRagManagedDbKnn) {
    this._knn.internalValue = value;
  }
  public resetKnn() {
    this._knn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knnInput() {
    return this._knn.internalValue;
  }
}
export interface VertexAiRagCorpusVectorDbConfig {
  /**
  * rag_embedding_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#rag_embedding_model_config VertexAiRagCorpus#rag_embedding_model_config}
  */
  readonly ragEmbeddingModelConfig?: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig;
  /**
  * rag_managed_db block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#rag_managed_db VertexAiRagCorpus#rag_managed_db}
  */
  readonly ragManagedDb?: VertexAiRagCorpusVectorDbConfigRagManagedDb;
}

export function vertexAiRagCorpusVectorDbConfigToTerraform(struct?: VertexAiRagCorpusVectorDbConfigOutputReference | VertexAiRagCorpusVectorDbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rag_embedding_model_config: vertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigToTerraform(struct!.ragEmbeddingModelConfig),
    rag_managed_db: vertexAiRagCorpusVectorDbConfigRagManagedDbToTerraform(struct!.ragManagedDb),
  }
}


export function vertexAiRagCorpusVectorDbConfigToHclTerraform(struct?: VertexAiRagCorpusVectorDbConfigOutputReference | VertexAiRagCorpusVectorDbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rag_embedding_model_config: {
      value: vertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigToHclTerraform(struct!.ragEmbeddingModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigList",
    },
    rag_managed_db: {
      value: vertexAiRagCorpusVectorDbConfigRagManagedDbToHclTerraform(struct!.ragManagedDb),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagCorpusVectorDbConfigRagManagedDbList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagCorpusVectorDbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusVectorDbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ragEmbeddingModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ragEmbeddingModelConfig = this._ragEmbeddingModelConfig?.internalValue;
    }
    if (this._ragManagedDb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ragManagedDb = this._ragManagedDb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusVectorDbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ragEmbeddingModelConfig.internalValue = undefined;
      this._ragManagedDb.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ragEmbeddingModelConfig.internalValue = value.ragEmbeddingModelConfig;
      this._ragManagedDb.internalValue = value.ragManagedDb;
    }
  }

  // rag_embedding_model_config - computed: false, optional: true, required: false
  private _ragEmbeddingModelConfig = new VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference(this, "rag_embedding_model_config");
  public get ragEmbeddingModelConfig() {
    return this._ragEmbeddingModelConfig;
  }
  public putRagEmbeddingModelConfig(value: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig) {
    this._ragEmbeddingModelConfig.internalValue = value;
  }
  public resetRagEmbeddingModelConfig() {
    this._ragEmbeddingModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ragEmbeddingModelConfigInput() {
    return this._ragEmbeddingModelConfig.internalValue;
  }

  // rag_managed_db - computed: false, optional: true, required: false
  private _ragManagedDb = new VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference(this, "rag_managed_db");
  public get ragManagedDb() {
    return this._ragManagedDb;
  }
  public putRagManagedDb(value: VertexAiRagCorpusVectorDbConfigRagManagedDb) {
    this._ragManagedDb.internalValue = value;
  }
  public resetRagManagedDb() {
    this._ragManagedDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ragManagedDbInput() {
    return this._ragManagedDb.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus google_vertex_ai_rag_corpus}
*/
export class VertexAiRagCorpus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_rag_corpus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VertexAiRagCorpus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiRagCorpus to import
  * @param importFromId The id of the existing VertexAiRagCorpus that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiRagCorpus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_rag_corpus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/vertex_ai_rag_corpus google_vertex_ai_rag_corpus} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiRagCorpusConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiRagCorpusConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_rag_corpus',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._project = config.project;
    this._region = config.region;
    this._encryptionSpec.internalValue = config.encryptionSpec;
    this._timeouts.internalValue = config.timeouts;
    this._vectorDbConfig.internalValue = config.vectorDbConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // corpus_status - computed: true, optional: false, required: false
  private _corpusStatus = new VertexAiRagCorpusCorpusStatusList(this, "corpus_status", false);
  public get corpusStatus() {
    return this._corpusStatus;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new VertexAiRagCorpusEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: VertexAiRagCorpusEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiRagCorpusTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiRagCorpusTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vector_db_config - computed: false, optional: true, required: false
  private _vectorDbConfig = new VertexAiRagCorpusVectorDbConfigOutputReference(this, "vector_db_config");
  public get vectorDbConfig() {
    return this._vectorDbConfig;
  }
  public putVectorDbConfig(value: VertexAiRagCorpusVectorDbConfig) {
    this._vectorDbConfig.internalValue = value;
  }
  public resetVectorDbConfig() {
    this._vectorDbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorDbConfigInput() {
    return this._vectorDbConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      encryption_spec: vertexAiRagCorpusEncryptionSpecToTerraform(this._encryptionSpec.internalValue),
      timeouts: vertexAiRagCorpusTimeoutsToTerraform(this._timeouts.internalValue),
      vector_db_config: vertexAiRagCorpusVectorDbConfigToTerraform(this._vectorDbConfig.internalValue),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_spec: {
        value: vertexAiRagCorpusEncryptionSpecToHclTerraform(this._encryptionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiRagCorpusEncryptionSpecList",
      },
      timeouts: {
        value: vertexAiRagCorpusTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiRagCorpusTimeouts",
      },
      vector_db_config: {
        value: vertexAiRagCorpusVectorDbConfigToHclTerraform(this._vectorDbConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiRagCorpusVectorDbConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
