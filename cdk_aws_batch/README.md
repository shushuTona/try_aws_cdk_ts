# cdk_aws_batch

AWS Batch環境をCDKで書いてみる。

## setup local docker container

```cmd
docker build -t cdk_aws_batch_image .
```

```cmd
docker run -it --name cdk_aws_batch_container -v 【path to try_aws_cdk_ts/cdk_aws_batch/src from host root】:/cdk_aws_batch cdk_aws_batch_image bash
```
