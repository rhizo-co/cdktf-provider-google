// https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BiglakeIcebergTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the IcebergCatalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#catalog BiglakeIcebergTable#catalog}
  */
  readonly catalog: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#deletion_policy BiglakeIcebergTable#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#id BiglakeIcebergTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#location BiglakeIcebergTable#location}
  */
  readonly location?: string;
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#name BiglakeIcebergTable#name}
  */
  readonly name: string;
  /**
  * The parent namespace of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#namespace BiglakeIcebergTable#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#project BiglakeIcebergTable#project}
  */
  readonly project?: string;
  /**
  * User-defined properties for the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#properties BiglakeIcebergTable#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * partition_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#partition_spec BiglakeIcebergTable#partition_spec}
  */
  readonly partitionSpec?: BiglakeIcebergTablePartitionSpec;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#schema BiglakeIcebergTable#schema}
  */
  readonly schema: BiglakeIcebergTableSchema;
  /**
  * sort_order block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#sort_order BiglakeIcebergTable#sort_order}
  */
  readonly sortOrder?: BiglakeIcebergTableSortOrder;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#timeouts BiglakeIcebergTable#timeouts}
  */
  readonly timeouts?: BiglakeIcebergTableTimeouts;
}
export interface BiglakeIcebergTablePartitionSpecFields {
  /**
  * The name of the partition field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#name BiglakeIcebergTable#name}
  */
  readonly name: string;
  /**
  * The source field ID for the partition field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#source_id BiglakeIcebergTable#source_id}
  */
  readonly sourceId: number;
  /**
  * The transform to apply to the source field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#transform BiglakeIcebergTable#transform}
  */
  readonly transform: string;
}

export function biglakeIcebergTablePartitionSpecFieldsToTerraform(struct?: BiglakeIcebergTablePartitionSpecFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    source_id: cdktf.numberToTerraform(struct!.sourceId),
    transform: cdktf.stringToTerraform(struct!.transform),
  }
}


export function biglakeIcebergTablePartitionSpecFieldsToHclTerraform(struct?: BiglakeIcebergTablePartitionSpecFields | cdktf.IResolvable): any {
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
    source_id: {
      value: cdktf.numberToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transform: {
      value: cdktf.stringToHclTerraform(struct!.transform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiglakeIcebergTablePartitionSpecFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BiglakeIcebergTablePartitionSpecFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._transform !== undefined) {
      hasAnyValues = true;
      internalValueResult.transform = this._transform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeIcebergTablePartitionSpecFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sourceId = undefined;
      this._transform = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sourceId = value.sourceId;
      this._transform = value.transform;
    }
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getNumberAttribute('field_id');
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

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: number; 
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }
  public set sourceId(value: number) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // transform - computed: false, optional: false, required: true
  private _transform?: string; 
  public get transform() {
    return this.getStringAttribute('transform');
  }
  public set transform(value: string) {
    this._transform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform;
  }
}

export class BiglakeIcebergTablePartitionSpecFieldsList extends cdktf.ComplexList {
  public internalValue? : BiglakeIcebergTablePartitionSpecFields[] | cdktf.IResolvable

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
  public get(index: number): BiglakeIcebergTablePartitionSpecFieldsOutputReference {
    return new BiglakeIcebergTablePartitionSpecFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BiglakeIcebergTablePartitionSpec {
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#fields BiglakeIcebergTable#fields}
  */
  readonly fields: BiglakeIcebergTablePartitionSpecFields[] | cdktf.IResolvable;
}

export function biglakeIcebergTablePartitionSpecToTerraform(struct?: BiglakeIcebergTablePartitionSpecOutputReference | BiglakeIcebergTablePartitionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(biglakeIcebergTablePartitionSpecFieldsToTerraform, true)(struct!.fields),
  }
}


export function biglakeIcebergTablePartitionSpecToHclTerraform(struct?: BiglakeIcebergTablePartitionSpecOutputReference | BiglakeIcebergTablePartitionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(biglakeIcebergTablePartitionSpecFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "BiglakeIcebergTablePartitionSpecFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiglakeIcebergTablePartitionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BiglakeIcebergTablePartitionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeIcebergTablePartitionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields.internalValue = value.fields;
    }
  }

  // spec_id - computed: true, optional: false, required: false
  public get specId() {
    return this.getNumberAttribute('spec_id');
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new BiglakeIcebergTablePartitionSpecFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: BiglakeIcebergTablePartitionSpecFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface BiglakeIcebergTableSchemaFields {
  /**
  * A description of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#doc BiglakeIcebergTable#doc}
  */
  readonly doc?: string;
  /**
  * The unique identifier of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#id BiglakeIcebergTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#name BiglakeIcebergTable#name}
  */
  readonly name: string;
  /**
  * Whether the field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#required BiglakeIcebergTable#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * The type of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#type BiglakeIcebergTable#type}
  */
  readonly type: string;
}

export function biglakeIcebergTableSchemaFieldsToTerraform(struct?: BiglakeIcebergTableSchemaFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    doc: cdktf.stringToTerraform(struct!.doc),
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function biglakeIcebergTableSchemaFieldsToHclTerraform(struct?: BiglakeIcebergTableSchemaFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    doc: {
      value: cdktf.stringToHclTerraform(struct!.doc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class BiglakeIcebergTableSchemaFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BiglakeIcebergTableSchemaFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doc !== undefined) {
      hasAnyValues = true;
      internalValueResult.doc = this._doc;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeIcebergTableSchemaFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doc = undefined;
      this._id = undefined;
      this._name = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doc = value.doc;
      this._id = value.id;
      this._name = value.name;
      this._required = value.required;
      this._type = value.type;
    }
  }

  // doc - computed: false, optional: true, required: false
  private _doc?: string; 
  public get doc() {
    return this.getStringAttribute('doc');
  }
  public set doc(value: string) {
    this._doc = value;
  }
  public resetDoc() {
    this._doc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docInput() {
    return this._doc;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

export class BiglakeIcebergTableSchemaFieldsList extends cdktf.ComplexList {
  public internalValue? : BiglakeIcebergTableSchemaFields[] | cdktf.IResolvable

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
  public get(index: number): BiglakeIcebergTableSchemaFieldsOutputReference {
    return new BiglakeIcebergTableSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BiglakeIcebergTableSchema {
  /**
  * The field IDs that make up the identifier for the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#identifier_field_ids BiglakeIcebergTable#identifier_field_ids}
  */
  readonly identifierFieldIds?: number[];
  /**
  * The type of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#type BiglakeIcebergTable#type}
  */
  readonly type?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#fields BiglakeIcebergTable#fields}
  */
  readonly fields: BiglakeIcebergTableSchemaFields[] | cdktf.IResolvable;
}

export function biglakeIcebergTableSchemaToTerraform(struct?: BiglakeIcebergTableSchemaOutputReference | BiglakeIcebergTableSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier_field_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.identifierFieldIds),
    type: cdktf.stringToTerraform(struct!.type),
    fields: cdktf.listMapper(biglakeIcebergTableSchemaFieldsToTerraform, true)(struct!.fields),
  }
}


export function biglakeIcebergTableSchemaToHclTerraform(struct?: BiglakeIcebergTableSchemaOutputReference | BiglakeIcebergTableSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identifier_field_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.identifierFieldIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktf.listMapperHcl(biglakeIcebergTableSchemaFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "BiglakeIcebergTableSchemaFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiglakeIcebergTableSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BiglakeIcebergTableSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifierFieldIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifierFieldIds = this._identifierFieldIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeIcebergTableSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identifierFieldIds = undefined;
      this._type = undefined;
      this._fields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identifierFieldIds = value.identifierFieldIds;
      this._type = value.type;
      this._fields.internalValue = value.fields;
    }
  }

  // identifier_field_ids - computed: true, optional: true, required: false
  private _identifierFieldIds?: number[]; 
  public get identifierFieldIds() {
    return this.getNumberListAttribute('identifier_field_ids');
  }
  public set identifierFieldIds(value: number[]) {
    this._identifierFieldIds = value;
  }
  public resetIdentifierFieldIds() {
    this._identifierFieldIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierFieldIdsInput() {
    return this._identifierFieldIds;
  }

  // schema_id - computed: true, optional: false, required: false
  public get schemaId() {
    return this.getNumberAttribute('schema_id');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new BiglakeIcebergTableSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: BiglakeIcebergTableSchemaFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface BiglakeIcebergTableSortOrderFields {
  /**
  * The sort direction for the sort field. Possible values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#direction BiglakeIcebergTable#direction}
  */
  readonly direction: string;
  /**
  * The null ordering for the sort field. Possible values: "nulls-first", "nulls-last".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#null_order BiglakeIcebergTable#null_order}
  */
  readonly nullOrder: string;
  /**
  * The source field ID for the sort field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#source_id BiglakeIcebergTable#source_id}
  */
  readonly sourceId: number;
  /**
  * The transform to apply to the source field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#transform BiglakeIcebergTable#transform}
  */
  readonly transform: string;
}

export function biglakeIcebergTableSortOrderFieldsToTerraform(struct?: BiglakeIcebergTableSortOrderFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    null_order: cdktf.stringToTerraform(struct!.nullOrder),
    source_id: cdktf.numberToTerraform(struct!.sourceId),
    transform: cdktf.stringToTerraform(struct!.transform),
  }
}


export function biglakeIcebergTableSortOrderFieldsToHclTerraform(struct?: BiglakeIcebergTableSortOrderFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_order: {
      value: cdktf.stringToHclTerraform(struct!.nullOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_id: {
      value: cdktf.numberToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transform: {
      value: cdktf.stringToHclTerraform(struct!.transform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiglakeIcebergTableSortOrderFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BiglakeIcebergTableSortOrderFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._nullOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullOrder = this._nullOrder;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._transform !== undefined) {
      hasAnyValues = true;
      internalValueResult.transform = this._transform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeIcebergTableSortOrderFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._nullOrder = undefined;
      this._sourceId = undefined;
      this._transform = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._nullOrder = value.nullOrder;
      this._sourceId = value.sourceId;
      this._transform = value.transform;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // null_order - computed: false, optional: false, required: true
  private _nullOrder?: string; 
  public get nullOrder() {
    return this.getStringAttribute('null_order');
  }
  public set nullOrder(value: string) {
    this._nullOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nullOrderInput() {
    return this._nullOrder;
  }

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: number; 
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }
  public set sourceId(value: number) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // transform - computed: false, optional: false, required: true
  private _transform?: string; 
  public get transform() {
    return this.getStringAttribute('transform');
  }
  public set transform(value: string) {
    this._transform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform;
  }
}

export class BiglakeIcebergTableSortOrderFieldsList extends cdktf.ComplexList {
  public internalValue? : BiglakeIcebergTableSortOrderFields[] | cdktf.IResolvable

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
  public get(index: number): BiglakeIcebergTableSortOrderFieldsOutputReference {
    return new BiglakeIcebergTableSortOrderFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BiglakeIcebergTableSortOrder {
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#fields BiglakeIcebergTable#fields}
  */
  readonly fields: BiglakeIcebergTableSortOrderFields[] | cdktf.IResolvable;
}

export function biglakeIcebergTableSortOrderToTerraform(struct?: BiglakeIcebergTableSortOrderOutputReference | BiglakeIcebergTableSortOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(biglakeIcebergTableSortOrderFieldsToTerraform, true)(struct!.fields),
  }
}


export function biglakeIcebergTableSortOrderToHclTerraform(struct?: BiglakeIcebergTableSortOrderOutputReference | BiglakeIcebergTableSortOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(biglakeIcebergTableSortOrderFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "BiglakeIcebergTableSortOrderFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiglakeIcebergTableSortOrderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BiglakeIcebergTableSortOrder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeIcebergTableSortOrder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields.internalValue = value.fields;
    }
  }

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getNumberAttribute('order_id');
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new BiglakeIcebergTableSortOrderFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: BiglakeIcebergTableSortOrderFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface BiglakeIcebergTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#create BiglakeIcebergTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#delete BiglakeIcebergTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#update BiglakeIcebergTable#update}
  */
  readonly update?: string;
}

export function biglakeIcebergTableTimeoutsToTerraform(struct?: BiglakeIcebergTableTimeouts | cdktf.IResolvable): any {
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


export function biglakeIcebergTableTimeoutsToHclTerraform(struct?: BiglakeIcebergTableTimeouts | cdktf.IResolvable): any {
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

export class BiglakeIcebergTableTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BiglakeIcebergTableTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BiglakeIcebergTableTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table google_biglake_iceberg_table}
*/
export class BiglakeIcebergTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_biglake_iceberg_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BiglakeIcebergTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BiglakeIcebergTable to import
  * @param importFromId The id of the existing BiglakeIcebergTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BiglakeIcebergTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_biglake_iceberg_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/resources/biglake_iceberg_table google_biglake_iceberg_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BiglakeIcebergTableConfig
  */
  public constructor(scope: Construct, id: string, config: BiglakeIcebergTableConfig) {
    super(scope, id, {
      terraformResourceType: 'google_biglake_iceberg_table',
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
    this._catalog = config.catalog;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._namespace = config.namespace;
    this._project = config.project;
    this._properties = config.properties;
    this._partitionSpec.internalValue = config.partitionSpec;
    this._schema.internalValue = config.schema;
    this._sortOrder.internalValue = config.sortOrder;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog - computed: false, optional: false, required: true
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
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

  // location - computed: true, optional: true, required: false
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
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

  // properties - computed: true, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // partition_spec - computed: false, optional: true, required: false
  private _partitionSpec = new BiglakeIcebergTablePartitionSpecOutputReference(this, "partition_spec");
  public get partitionSpec() {
    return this._partitionSpec;
  }
  public putPartitionSpec(value: BiglakeIcebergTablePartitionSpec) {
    this._partitionSpec.internalValue = value;
  }
  public resetPartitionSpec() {
    this._partitionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionSpecInput() {
    return this._partitionSpec.internalValue;
  }

  // schema - computed: false, optional: false, required: true
  private _schema = new BiglakeIcebergTableSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: BiglakeIcebergTableSchema) {
    this._schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder = new BiglakeIcebergTableSortOrderOutputReference(this, "sort_order");
  public get sortOrder() {
    return this._sortOrder;
  }
  public putSortOrder(value: BiglakeIcebergTableSortOrder) {
    this._sortOrder.internalValue = value;
  }
  public resetSortOrder() {
    this._sortOrder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BiglakeIcebergTableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BiglakeIcebergTableTimeouts) {
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
      catalog: cdktf.stringToTerraform(this._catalog),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      project: cdktf.stringToTerraform(this._project),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      partition_spec: biglakeIcebergTablePartitionSpecToTerraform(this._partitionSpec.internalValue),
      schema: biglakeIcebergTableSchemaToTerraform(this._schema.internalValue),
      sort_order: biglakeIcebergTableSortOrderToTerraform(this._sortOrder.internalValue),
      timeouts: biglakeIcebergTableTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog: {
        value: cdktf.stringToHclTerraform(this._catalog),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
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
      properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      partition_spec: {
        value: biglakeIcebergTablePartitionSpecToHclTerraform(this._partitionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BiglakeIcebergTablePartitionSpecList",
      },
      schema: {
        value: biglakeIcebergTableSchemaToHclTerraform(this._schema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BiglakeIcebergTableSchemaList",
      },
      sort_order: {
        value: biglakeIcebergTableSortOrderToHclTerraform(this._sortOrder.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BiglakeIcebergTableSortOrderList",
      },
      timeouts: {
        value: biglakeIcebergTableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BiglakeIcebergTableTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
