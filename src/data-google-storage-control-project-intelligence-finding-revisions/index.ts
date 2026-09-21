// https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/data-sources/storage_control_project_intelligence_finding_revisions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the intelligence finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#finding_id DataGoogleStorageControlProjectIntelligenceFindingRevisions#finding_id}
  */
  readonly findingId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#id DataGoogleStorageControlProjectIntelligenceFindingRevisions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the intelligence finding. Currently default value is global and users cannot use for input for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#location DataGoogleStorageControlProjectIntelligenceFindingRevisions#location}
  */
  readonly location?: string;
  /**
  * The maximum number of IntelligenceFindingRevision resources to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#page_size DataGoogleStorageControlProjectIntelligenceFindingRevisions#page_size}
  */
  readonly pageSize?: number;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#project DataGoogleStorageControlProjectIntelligenceFindingRevisions#project}
  */
  readonly project?: string;
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // throttled_requests - computed: true, optional: false, required: false
  public get throttledRequests() {
    return this.getStringAttribute('throttled_requests');
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // top_prefixes - computed: true, optional: false, required: false
  private _topPrefixes = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList(this, "top_prefixes", false);
  public get topPrefixes() {
    return this._topPrefixes;
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError | undefined) {
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

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // contribution - computed: true, optional: false, required: false
  private _contribution = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList(this, "contribution", false);
  public get contribution() {
    return this._contribution;
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // throttled_requests - computed: true, optional: false, required: false
  public get throttledRequests() {
    return this.getStringAttribute('throttled_requests');
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }

  // total_storage_growth_bytes - computed: true, optional: false, required: false
  public get totalStorageGrowthBytes() {
    return this.getStringAttribute('total_storage_growth_bytes');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // top_buckets - computed: true, optional: false, required: false
  private _topBuckets = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList(this, "top_buckets", false);
  public get topBuckets() {
    return this._topBuckets;
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // throttled_requests - computed: true, optional: false, required: false
  public get throttledRequests() {
    return this.getStringAttribute('throttled_requests');
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // top_prefixes - computed: true, optional: false, required: false
  private _topPrefixes = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList(this, "top_prefixes", false);
  public get topPrefixes() {
    return this._topPrefixes;
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError | undefined) {
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

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // contribution - computed: true, optional: false, required: false
  private _contribution = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList(this, "contribution", false);
  public get contribution() {
    return this._contribution;
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // throttled_requests - computed: true, optional: false, required: false
  public get throttledRequests() {
    return this.getStringAttribute('throttled_requests');
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }

  // total_storage_growth_bytes - computed: true, optional: false, required: false
  public get totalStorageGrowthBytes() {
    return this.getStringAttribute('total_storage_growth_bytes');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // top_buckets - computed: true, optional: false, required: false
  private _topBuckets = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList(this, "top_buckets", false);
  public get topBuckets() {
    return this._topBuckets;
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // throttled_requests - computed: true, optional: false, required: false
  public get throttledRequests() {
    return this.getStringAttribute('throttled_requests');
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // top_prefixes - computed: true, optional: false, required: false
  private _topPrefixes = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList(this, "top_prefixes", false);
  public get topPrefixes() {
    return this._topPrefixes;
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError | undefined) {
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

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // contribution - computed: true, optional: false, required: false
  private _contribution = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList(this, "contribution", false);
  public get contribution() {
    return this._contribution;
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // throttled_requests - computed: true, optional: false, required: false
  public get throttledRequests() {
    return this.getStringAttribute('throttled_requests');
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }

  // total_storage_growth_bytes - computed: true, optional: false, required: false
  public get totalStorageGrowthBytes() {
    return this.getStringAttribute('total_storage_growth_bytes');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // top_buckets - computed: true, optional: false, required: false
  private _topBuckets = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList(this, "top_buckets", false);
  public get topBuckets() {
    return this._topBuckets;
  }

  // total_storage_growth_bytes - computed: true, optional: false, required: false
  public get totalStorageGrowthBytes() {
    return this.getStringAttribute('total_storage_growth_bytes');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // throttled_requests - computed: true, optional: false, required: false
  public get throttledRequests() {
    return this.getStringAttribute('throttled_requests');
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // top_prefixes - computed: true, optional: false, required: false
  private _topPrefixes = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList(this, "top_prefixes", false);
  public get topPrefixes() {
    return this._topPrefixes;
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError | undefined) {
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

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // contribution - computed: true, optional: false, required: false
  private _contribution = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList(this, "contribution", false);
  public get contribution() {
    return this._contribution;
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // throttled_requests - computed: true, optional: false, required: false
  public get throttledRequests() {
    return this.getStringAttribute('throttled_requests');
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }

  // total_storage_growth_bytes - computed: true, optional: false, required: false
  public get totalStorageGrowthBytes() {
    return this.getStringAttribute('total_storage_growth_bytes');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // throttled_requests - computed: true, optional: false, required: false
  public get throttledRequests() {
    return this.getStringAttribute('throttled_requests');
  }

  // top_buckets - computed: true, optional: false, required: false
  private _topBuckets = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList(this, "top_buckets", false);
  public get topBuckets() {
    return this._topBuckets;
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // associated_resources - computed: true, optional: false, required: false
  public get associatedResources() {
    return this.getListAttribute('associated_resources');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // coldline_and_archival_storage_operations_spike - computed: true, optional: false, required: false
  private _coldlineAndArchivalStorageOperationsSpike = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList(this, "coldline_and_archival_storage_operations_spike", false);
  public get coldlineAndArchivalStorageOperationsSpike() {
    return this._coldlineAndArchivalStorageOperationsSpike;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // cross_region_egress_spike - computed: true, optional: false, required: false
  private _crossRegionEgressSpike = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList(this, "cross_region_egress_spike", false);
  public get crossRegionEgressSpike() {
    return this._crossRegionEgressSpike;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // observation_period - computed: true, optional: false, required: false
  private _observationPeriod = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList(this, "observation_period", false);
  public get observationPeriod() {
    return this._observationPeriod;
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // storage_growth_above_trend - computed: true, optional: false, required: false
  private _storageGrowthAboveTrend = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList(this, "storage_growth_above_trend", false);
  public get storageGrowthAboveTrend() {
    return this._storageGrowthAboveTrend;
  }

  // target_resource - computed: true, optional: false, required: false
  public get targetResource() {
    return this.getStringAttribute('target_resource');
  }

  // throttled_requests_spike - computed: true, optional: false, required: false
  private _throttledRequestsSpike = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList(this, "throttled_requests_spike", false);
  public get throttledRequestsSpike() {
    return this._throttledRequestsSpike;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // snapshot - computed: true, optional: false, required: false
  private _snapshot = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList(this, "snapshot", false);
  public get snapshot() {
    return this._snapshot;
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/data-sources/storage_control_project_intelligence_finding_revisions google_storage_control_project_intelligence_finding_revisions}
*/
export class DataGoogleStorageControlProjectIntelligenceFindingRevisions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_control_project_intelligence_finding_revisions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleStorageControlProjectIntelligenceFindingRevisions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceFindingRevisions to import
  * @param importFromId The id of the existing DataGoogleStorageControlProjectIntelligenceFindingRevisions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceFindingRevisions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_control_project_intelligence_finding_revisions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.3.0/docs/data-sources/storage_control_project_intelligence_finding_revisions google_storage_control_project_intelligence_finding_revisions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_control_project_intelligence_finding_revisions',
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
    this._findingId = config.findingId;
    this._id = config.id;
    this._location = config.location;
    this._pageSize = config.pageSize;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // finding_id - computed: false, optional: false, required: true
  private _findingId?: string; 
  public get findingId() {
    return this.getStringAttribute('finding_id');
  }
  public set findingId(value: string) {
    this._findingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get findingIdInput() {
    return this._findingId;
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

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
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

  // revisions - computed: true, optional: false, required: false
  private _revisions = new DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList(this, "revisions", false);
  public get revisions() {
    return this._revisions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      finding_id: cdktf.stringToTerraform(this._findingId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      page_size: cdktf.numberToTerraform(this._pageSize),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      finding_id: {
        value: cdktf.stringToHclTerraform(this._findingId),
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
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
