import * as cdk from 'aws-cdk-lib';
import { aws_batch as batch } from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * create Batch ComputeEnvironment
 *
 * https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_batch.CfnComputeEnvironment.html
 */
const createComputeEnvironment = (scope: Construct): cdk.aws_batch.CfnComputeEnvironment => {
    const testComputeEnvironmentProps: cdk.aws_batch.CfnComputeEnvironmentProps = {
        type: 'MANAGED',
        
        // the properties below are optional
        computeEnvironmentName: 'test-compute-environment',
        computeResources: {
            maxvCpus: 4,
            subnets: [
                'subnets'
            ],
            type: 'FARGATE',
        
            // the properties below are optional
            // allocationStrategy: 'allocationStrategy',
            bidPercentage: 123,
            desiredvCpus: 123,
            ec2Configuration: [{
            imageType: 'imageType',
        
            // the properties below are optional
            imageIdOverride: 'imageIdOverride',
            imageKubernetesVersion: 'imageKubernetesVersion',
            }],
            ec2KeyPair: 'ec2KeyPair',
            imageId: 'imageId',
            instanceRole: 'instanceRole',
            instanceTypes: ['instanceTypes'],
            launchTemplate: {
            launchTemplateId: 'launchTemplateId',
            launchTemplateName: 'launchTemplateName',
            version: 'version',
            },
            minvCpus: 123,
            placementGroup: 'placementGroup',
            securityGroupIds: ['securityGroupIds'],
            spotIamFleetRole: 'spotIamFleetRole',
            tags: {
            tagsKey: 'tags',
            },
            updateToLatestImageVersion: false,
        },
        eksConfiguration: {
            eksClusterArn: 'eksClusterArn',
            kubernetesNamespace: 'kubernetesNamespace',
        },
        replaceComputeEnvironment: false,
        serviceRole: 'serviceRole',
        state: 'ENABLED',
        tags: {
            tagsKey: 'tags',
        },
        unmanagedvCpus: 123,
        updatePolicy: {
            jobExecutionTimeoutMinutes: 123,
            terminateJobsOnUpdate: false,
        },
    }

    const TestComputeEnvironment = new batch.CfnComputeEnvironment(scope, 'MyCfnComputeEnvironment', testComputeEnvironmentProps);

    return TestComputeEnvironment;
}

export { createComputeEnvironment }
