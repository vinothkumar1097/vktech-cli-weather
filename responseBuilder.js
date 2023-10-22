module.exports = {
  success: (message) => ({
    isSuccess: true,
    msg: message,
  }),
  failure: (message) => ({
    isSuccess: false,
    msg: message,
  }),
};
