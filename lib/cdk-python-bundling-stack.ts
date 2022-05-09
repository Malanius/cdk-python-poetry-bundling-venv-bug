import { Stack, StackProps } from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as pylambda from "@aws-cdk/aws-lambda-python-alpha";
import { Construct } from "constructs";

export class CdkPythonBundlingStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new pylambda.PythonFunction(this, "SplunkCollector", {
      entry: "lambdas/example",
      index: "example/index.py",
      runtime: lambda.Runtime.PYTHON_3_9,
    });
  }
}
