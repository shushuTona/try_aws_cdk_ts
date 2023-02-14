import * as cdk from 'aws-cdk-lib';
import { aws_batch as batch } from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * create JobQueue
 *
 * https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_batch.CfnJobQueue.html
 */
const createJobQueue = (scope: Construct): cdk.aws_batch.CfnJobQueue => {
    const testJobQueueProps: cdk.aws_batch.CfnJobQueueProps = {
        computeEnvironmentOrder: [{
            computeEnvironment: 'computeEnvironment',
            order: 123,
        }],
        priority: 123,

        // the properties below are optional
        jobQueueName: 'jobQueueName',
        schedulingPolicyArn: 'schedulingPolicyArn',
        state: 'state',
        tags: {
            tagsKey: 'tags',
        },
    };

    const TestJobQueue = new batch.CfnJobQueue(scope, 'MyCfnJobQueue', testJobQueueProps);

    return TestJobQueue;
}

export { createJobQueue }
