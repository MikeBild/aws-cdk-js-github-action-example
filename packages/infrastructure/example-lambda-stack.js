const { join } = require('path')
const {
  Stack,
  Duration
} = require('@aws-cdk/core')
const { Function, Runtime, Code } = require('@aws-cdk/aws-lambda')

module.exports = class ExampleLambda extends Stack {
  constructor(parent, id, props) {
    super(parent, id, props)

    const { STACK_NAME, STACK_ENV } = props

    new Function(this, `${STACK_NAME}-${STACK_ENV}-Example-Lambda-Function`, {
      functionName: `${STACK_NAME}-${STACK_ENV}-example-lambda-function`,
      runtime: Runtime.NODEJS_10_X,
      handler: 'handler.handle',
      timeout: Duration.seconds(300),
      memorySize: 128,
      code: Code.asset(join(__dirname, '../example-lambda/build')),
      environment: {},
    })
  }
}