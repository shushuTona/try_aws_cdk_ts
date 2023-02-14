import * as cdk from 'aws-cdk-lib';
import { aws_ecr as ecr } from 'aws-cdk-lib';
import { Construct } from 'constructs';
/**
 * create Repository
 *
 * https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ecr.CfnRepository.html
 */
declare const repositoryPolicyText: any;
const createRepository = (scope: Construct): ecr.CfnRepository => {
    const testRepositoryProps: cdk.aws_ecr.CfnRepositoryProps = {
        encryptionConfiguration: {
            encryptionType: 'encryptionType',

            // the properties below are optional
            kmsKey: 'kmsKey',
        },
        imageScanningConfiguration: {
            scanOnPush: false,
        },
        imageTagMutability: 'imageTagMutability',
        lifecyclePolicy: {
            lifecyclePolicyText: 'lifecyclePolicyText',
            registryId: 'registryId',
        },
        repositoryName: 'repositoryName',
        repositoryPolicyText: repositoryPolicyText,
        tags: [{
            key: 'key',
            value: 'value',
        }],
    }

    const TestRepository = new ecr.CfnRepository(scope, 'MyCfnRepository', testRepositoryProps);

    return TestRepository;
}

export { createRepository }
