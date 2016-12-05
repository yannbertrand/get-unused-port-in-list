const isPortBusy = require('is-port-busy');

module.exports = (ports) => {

  return new Promise((resolve, reject) => {

    let numberOfPorts = ports.length;
    for (const port of ports) {
      isPortBusy(port)
        .then(() => {
          numberOfPorts--;

          if (numberOfPorts === 0) {
            return reject('All ports in the list are used');
          }
        })
        .catch(() => {
          return resolve(port);
        });
    }

  });

};
