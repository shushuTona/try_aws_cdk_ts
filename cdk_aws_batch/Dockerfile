FROM node:19

# install aws-cli
RUN apt-get update && apt-get install awscli -y

# install aws-cdk
RUN npm install -g aws-cdk

RUN mkdir cdk_aws_batch
WORKDIR /cdk_aws_batch

# init project
#
# cd cdk_aws_batch
# cdk init --language typescript --generate-only
