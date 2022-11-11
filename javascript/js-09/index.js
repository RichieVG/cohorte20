console.log("Hola mundo desde node.js");

const parrotSay = required('parrotsay-api')
 
parrotSay('yaaay')
  .then(console.log)
  .catch(console.error)
