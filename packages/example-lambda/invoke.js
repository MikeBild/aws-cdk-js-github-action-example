const AWS = require('aws-sdk')
const lambda = new AWS.Lambda()

invokeLambda()

async function invokeLambda() {
  const { Payload, LogResult } = await lambda.invoke({
    FunctionName: 'example-lambda-function',
    InvocationType: 'RequestResponse',
    LogType: 'Tail',
    Payload: JSON.stringify({})
  }).promise()

  const logResult = Buffer.from(LogResult, 'base64').toString('ascii')
  const payloadResult = JSON.parse(Payload)

  console.log(logResult)
  console.log(payloadResult)
}