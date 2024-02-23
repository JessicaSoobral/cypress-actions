const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJpZCI6IjNlY2M2NTQ2LTY0NGUtNGM4Yy04NDhiLTczZGVlNzJjZTc5Mi0xNzA4NzA3MjMyOTM1IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMzdkZWI2YzYtYTk2Ny00OWYxLThhNTEtZjMwZDJmZDU2NDIwIiwidHlwZSI6InQifQ'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
