# try_aws_cdk_ts

AWS CDK（v2）をTSで書いてみる。

- [AWS CDK とは](https://docs.aws.amazon.com/ja_jp/cdk/v2/guide/home.html)
- [API Reference · AWS CDK](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html)
- [aws-samples/aws-cdk-examples](https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript)

## bootstrap

```sh
cdk bootstrap aws://【ACCOUNT-NUMBER】/【REGION】
```

## deploy

```
cdk deploy
```

## diff

```sh
cdk diff
```

## destroy the service created by cdk

```sh
cdk destroy
```
