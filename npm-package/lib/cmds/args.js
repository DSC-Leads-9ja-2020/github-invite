const args = process.argv.splice(2);
const help = require('./help');
const version = require('./version');

const checkHelpAndVersion = () => {
  args.forEach((arg) => {
    if (arg === 'help' || arg === '--help' || arg === '-h') {
      help();
    }
    if (arg === 'version' || arg === '--version' || arg === '-v') {
      version();
    }
  });
};

module.exports = () => {
  if (args.length <= 3) {
    checkHelpAndVersion();
    return args;
  } else {
    help();
  }
};
