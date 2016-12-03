const http = require('http');
const should = require('should');

const getUnusedPort = require('./index');

describe('getUnusedPort([8000, 9000])', () => {

  describe('no ports are busy', () => {
    it('should return one port (no order guaranteed)', () => {
      return getUnusedPort([8000, 9000])
        .then((unusedPort) => {
          should(unusedPort === 8000 || unusedPort === 9000).be.true;
        });
    });
  });

  describe('one port is busy (8000)', () => {

    let server;
    before((done) => {
      server = http.createServer();
      server.listen(8000, done);
    });

    it('should return the unused port', () => {
      return getUnusedPort([8000, 9000])
        .then((unusedPort) => {
          should(unusedPort).equal(9000);
        });
    });

    after((done) => {
      server.close(done);
    });

  });

  describe('one port is busy (9000)', () => {

    let server;
    before((done) => {
      server = http.createServer();
      server.listen(9000, done);
    });

    it('should return the unused port', () => {
      return getUnusedPort([8000, 9000])
        .then((unusedPort) => {
          should(unusedPort).equal(8000);
        });
    });

    after((done) => {
      server.close(done);
    });

  });

  describe('all ports are busy (8000, 9000)', () => {

    let server;
    before((done) => {
      server = http.createServer();
      server.listen(8000, () => {
        server.listen(9000, done);
      });
    });

    it('should reject', () => {
      return getUnusedPort([8000, 9000])
        .catch(() => {
          return true;
        });
    });

    after((done) => {
      server.close(done);
    });

  });

});
