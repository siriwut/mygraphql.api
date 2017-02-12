const http = require('http');
const url = require('url');

class HttpTest {
  get(urlStr = '', options = {}) {
    const urlObj = url.parse(urlStr, true);

    this.options = {
      protocal: urlObj.protocal || options.protocal || 'http:',
      method: 'GET',
      hostname: urlObj.hostname || options.hostname || '',
      port: urlObj.port || options.port || 80,
      path: `${ urlObj.pathname }${ url.format({ query: options.query }) }`
    };

    return this;
  }

  post() {
    return this;
  }

  time() {
    const options = this.options || {};

    return new Promise((resolve, reject) => {
      const start = new Date().getTime();

      const req = http.request(options, res => {
        resolve(res);
      });

      req.on('error', e => {
        reject(e);
      });

      req.end();
    });
  }
}

module.exports = new HttpTest;
