import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { aws_ecr as ecr } from 'aws-cdk-lib';
import { aws_batch as batch } from 'aws-cdk-lib';

export class CdkAwsBatchStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // class Vpc (construct)
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2.Vpc.html
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2.CfnVPC.html
    const vpc = new ec2.Vpc( this, 'cdk_aws_batch_vpc',
                                              {
                                                ipAddresses: ec2.IpAddresses.cidr( '10.10.0.0/16' ),
                                                maxAzs: 2,
                                                subnetConfiguration: [
                                                  {
                                                    cidrMask: 24,
                                                    name: 'public-subnet',

                                                    // Subnet Types
                                                    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2-readme.html#subnet-types
                                                    subnetType: ec2.SubnetType.PUBLIC
                                                  }
                                                ]
                                              }
                                            );

    // class CfnPublicRepository
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ecr.CfnPublicRepository.html

    // class CfnComputeEnvironment
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_batch.CfnComputeEnvironment.html

    // class CfnJobDefinition
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_batch.CfnJobDefinition.html

    // class CfnJobQueue
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_batch.CfnJobQueue.html

    // class CfnRule
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_events.CfnRule.html
  }
}
