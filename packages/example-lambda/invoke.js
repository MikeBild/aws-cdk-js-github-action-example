const AWS = require('aws-sdk')
const lambda = new AWS.Lambda()
const dotenv = require('dotenv')
const { STACK_NAME, STACK_ENV } = { ...dotenv.config().parsed }

main()

async function main() {
  const { Payload, LogResult } = await lambda.invoke({
    FunctionName: `${STACK_NAME}-${STACK_ENV}-example-lambda-function`,
    InvocationType: 'RequestResponse',
    LogType: 'Tail',
    Payload: JSON.stringify({})
  }).promise()

  const logResult = Buffer.from(LogResult, 'base64').toString('ascii')
  const payloadResult = JSON.parse(Payload)

  console.log(logResult)
  console.log(payloadResult)
}