const dotenv = require('dotenv')
const { App } = require('@aws-cdk/core')
const ExampleLambda = require('./example-lambda-stack')

const app = new App({ autoSynth: true })
const config = {
  STACK_NAME: process.env.STACK_NAME,
  AWS_REGION: process.env.AWS_REGION,
  ...dotenv.config().parsed,
}

new ExampleLambda(app, `${config.STACK_NAME}-ExampleLambda`, { ...config })
