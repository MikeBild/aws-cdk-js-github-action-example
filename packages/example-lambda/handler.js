module.exports.handle = async () => {
  return { message: `${process.env.AWS_LAMBDA_FUNCTION_NAME} - Done!` }
}