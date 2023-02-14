import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Vpc, IpAddresses, SubnetType } from 'aws-cdk-lib/aws-ec2';
import { aws_ecr as ecr } from 'aws-cdk-lib';

import { createComputeEnvironment } from '../resources/computeEnvironment';
import { createJobDefinition } from '../resources/jobDefinition';
import { createJobQueue } from '../resources/jobQueue';
import { createRepository } from '../resources/repository';

export class CdkAwsBatchStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // CREATE VPC
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2.Vpc.html
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2.CfnVPC.html
    const vpc = new Vpc( this, 'cdk_aws_batch_vpc',
                            {
                              ipAddresses: IpAddresses.cidr( '10.10.0.0/16' ),
                              maxAzs: 3,
                              subnetConfiguration: [
                                {
                                  cidrMask: 24,
                                  name: 'public-subnet',

                                  // Subnet Types
                                  // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2-readme.html#subnet-types
                                  subnetType: SubnetType.PUBLIC
                                }
                              ]
                            }
                          );

    // create ECR repository
    const TestRepository = createRepository(this);

    // create batch ComputeEnvironment
    const TestComputeEnvironment = createComputeEnvironment(this);

    // create JobDefinition
    const TestJobDefinition = createJobDefinition(this);

    // class CfnJobQueue
    const TestJobQueue = createJobQueue(this);

    // class CfnRule
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_events.CfnRule.html
  }
}
