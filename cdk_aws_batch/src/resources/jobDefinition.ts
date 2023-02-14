import * as cdk from 'aws-cdk-lib';
import { aws_batch as batch } from 'aws-cdk-lib';
import { Construct } from 'constructs';

declare const limits: any;
declare const options: any;
declare const parameters: any;
declare const requests: any;
declare const tags: any;

/**
 * create JobDefinition
 *
 * https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_batch.CfnJobDefinition.html
 */
const createJobDefinition = (scope: Construct): cdk.aws_batch.CfnJobDefinition => {
    const testJobDefinitionProps: cdk.aws_batch.CfnJobDefinitionProps = {
        type: 'type',
      
        // the properties below are optional
        containerProperties: {
            image: 'image',
      
            // the properties below are optional
            command: ['command'],
            environment: [{
                name: 'name',
                value: 'value',
            }],
            executionRoleArn: 'executionRoleArn',
            fargatePlatformConfiguration: {
                platformVersion: 'platformVersion',
            },
            instanceType: 'instanceType',
            jobRoleArn: 'jobRoleArn',
            linuxParameters: {
            devices: [{
                containerPath: 'containerPath',
                hostPath: 'hostPath',
                permissions: ['permissions'],
            }],
            initProcessEnabled: false,
            maxSwap: 123,
            sharedMemorySize: 123,
            swappiness: 123,
            tmpfs: [{
                containerPath: 'containerPath',
                size: 123,
        
                // the properties below are optional
                mountOptions: ['mountOptions'],
            }],
            },
            logConfiguration: {
            logDriver: 'logDriver',
        
            // the properties below are optional
            options: options,
            secretOptions: [{
                name: 'name',
                valueFrom: 'valueFrom',
            }],
            },
            memory: 123,
            mountPoints: [{
                containerPath: 'containerPath',
                readOnly: false,
                sourceVolume: 'sourceVolume',
            }],
            networkConfiguration: {
            assignPublicIp: 'assignPublicIp',
            },
            privileged: false,
            readonlyRootFilesystem: false,
            resourceRequirements: [{
                type: 'type',
                value: 'value',
            }],
            secrets: [{
                name: 'name',
                valueFrom: 'valueFrom',
            }],
            ulimits: [{
                hardLimit: 123,
                name: 'name',
                softLimit: 123,
            }],
            user: 'user',
            vcpus: 123,
            volumes: [{
                efsVolumeConfiguration: {
                    fileSystemId: 'fileSystemId',
            
                    // the properties below are optional
                    authorizationConfig: {
                    accessPointId: 'accessPointId',
                    iam: 'iam',
                    },
                    rootDirectory: 'rootDirectory',
                    transitEncryption: 'transitEncryption',
                    transitEncryptionPort: 123,
                },
                host: {
                    sourcePath: 'sourcePath',
                },
                name: 'name',
            }],
        },
        eksProperties: {
            podProperties: {
                containers: [{
                    image: 'image',

                    // the properties below are optional
                    args: ['args'],
                    command: ['command'],
                    env: [{
                        name: 'name',
                
                        // the properties below are optional
                        value: 'value',
                    }],
                    imagePullPolicy: 'imagePullPolicy',
                    name: 'name',
                    resources: {
                        limits: limits,
                        requests: requests,
                    },
                    securityContext: {
                        privileged: false,
                        readOnlyRootFilesystem: false,
                        runAsGroup: 123,
                        runAsNonRoot: false,
                        runAsUser: 123,
                    },
                    volumeMounts: [{
                        mountPath: 'mountPath',
                        name: 'name',
                        readOnly: false,
                    }],
                }],
                dnsPolicy: 'dnsPolicy',
                hostNetwork: false,
                serviceAccountName: 'serviceAccountName',
                volumes: [{
                    name: 'name',
        
                    // the properties below are optional
                    emptyDir: {
                        medium: 'medium',
                        sizeLimit: 'sizeLimit',
                    },
                    hostPath: {
                        path: 'path',
                    },
                    secret: {
                        name: 'name',
                        valueFrom: 'valueFrom',
                    },
                }],
            },
        },
        jobDefinitionName: 'jobDefinitionName',
        nodeProperties: {
            mainNode: 123,
            nodeRangeProperties: [{
            targetNodes: 'targetNodes',

            // the properties below are optional
            container: {
                image: 'image',

                // the properties below are optional
                command: ['command'],
                environment: [{
                    name: 'name',
                    value: 'value',
                }],
                executionRoleArn: 'executionRoleArn',
                fargatePlatformConfiguration: {
                    platformVersion: 'platformVersion',
                },
                instanceType: 'instanceType',
                jobRoleArn: 'jobRoleArn',
                linuxParameters: {
                    devices: [{
                        containerPath: 'containerPath',
                        hostPath: 'hostPath',
                        permissions: ['permissions'],
                    }],
                    initProcessEnabled: false,
                    maxSwap: 123,
                    sharedMemorySize: 123,
                    swappiness: 123,
                    tmpfs: [{
                        containerPath: 'containerPath',
                        size: 123,

                        // the properties below are optional
                        mountOptions: ['mountOptions'],
                    }],
                },
                logConfiguration: {
                logDriver: 'logDriver',

                // the properties below are optional
                options: options,
                secretOptions: [{
                    name: 'name',
                    valueFrom: 'valueFrom',
                }],
                },
                memory: 123,
                mountPoints: [{
                    containerPath: 'containerPath',
                    readOnly: false,
                    sourceVolume: 'sourceVolume',
                }],
                networkConfiguration: {
                    assignPublicIp: 'assignPublicIp',
                },
                privileged: false,
                readonlyRootFilesystem: false,
                resourceRequirements: [{
                    type: 'type',
                    value: 'value',
                }],
                secrets: [{
                    name: 'name',
                    valueFrom: 'valueFrom',
                }],
                ulimits: [{
                    hardLimit: 123,
                    name: 'name',
                    softLimit: 123,
                }],
                user: 'user',
                vcpus: 123,
                volumes: [{
                efsVolumeConfiguration: {
                    fileSystemId: 'fileSystemId',
        
                    // the properties below are optional
                    authorizationConfig: {
                    accessPointId: 'accessPointId',
                    iam: 'iam',
                    },
                    rootDirectory: 'rootDirectory',
                    transitEncryption: 'transitEncryption',
                    transitEncryptionPort: 123,
                },
                host: {
                    sourcePath: 'sourcePath',
                },
                name: 'name',
                }],
            },
            }],
            numNodes: 123,
        },
        parameters: parameters,
        platformCapabilities: ['platformCapabilities'],
        propagateTags: false,
        retryStrategy: {
            attempts: 123,
            evaluateOnExit: [{
                action: 'action',
            
                // the properties below are optional
                onExitCode: 'onExitCode',
                onReason: 'onReason',
                onStatusReason: 'onStatusReason',
            }],
        },
        schedulingPriority: 123,
        tags: tags,
        timeout: {
            attemptDurationSeconds: 123,
        },
    }

    const TestJobDefinition = new batch.CfnJobDefinition(scope, 'MyCfnJobDefinition', testJobDefinitionProps);

    return TestJobDefinition;
}

export { createJobDefinition }