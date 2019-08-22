const dotenv = require('dotenv')
const { App } = require('@aws-cdk/core')
const ExampleLambda = require('./example-lambda-stack')

const app = new App({ autoSynth: true })
const config = {
  STACK_NAME: process.env.STACK_NAME,
  STACK_ENV: process.env.STACK_ENV,
  AWS_REGION: process.env.AWS_REGION,
  ...dotenv.config().parsed,
}

new ExampleLambda(app, `${config.STACK_NAME}-${config.STACK_ENV}-ExampleLambda`, { ...config })
