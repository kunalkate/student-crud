const sendResponse = (response,  error = false, data, message, code = 200 ) => {
    response.status(code).json({
      error,
      data,
      message,
      code,
    });
  };
  
  module.exports = {
    sendResponse,
  };