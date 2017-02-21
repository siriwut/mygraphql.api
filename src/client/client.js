const http = require('http');
const util = require('util');
const querystring = require('querystring');

const executeGetQuery = (graphQlQuery = {}, printDepthLevel = 5) => {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: `/graphql?query=${encodeURIComponent(JSON.stringify(graphQlQuery))}`,
    method: 'GET'
  };
  console.log(options.path);
  const req = http.request(options, (res) => {
    let tmpData = '';

    res.setEncoding('utf8');

    res.on('data', (chunk) => {
      tmpData += chunk;
    });

    res.on('end', () => {
      const data = JSON.parse(tmpData);

      console.log('---------JSON Response---------');
      console.log(util.inspect(data, { showHidden: true, depth: printDepthLevel }));
    });
  });

  req.on('error', (e) => {
    console.log(e.message);
  });

  req.end();
};

const executePostQuery = (graphQlQuery = {}, printDepthLevel = 5) => {
  const postData = JSON.stringify(graphQlQuery);

  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/graphql',
    method: 'POST',
    contentType: 'application/json',
    contentLenght: Buffer.byteLength(graphQlQuery)
  };

  const req = http.request(options, (res) => {
    let tmpData = '';
    
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
      tmpData += chunk;
    });

    res.on('end', () => {
      const data = JSON.parse(tmpData);
      console.log('---------JSON Response---------');
      console.log(util.inspect(data, { showHidden: true, depth: printDepthLevel }));
    });
  });

  req.on('error', (e) => {
    console.log(e.message);
  });

  req.write(postData);
  req.end();
};

module.exports = {
  executeGetQuery,
  executePostQuery
};


// const graphQlQuery = `
//   query {
//     star(name: "${starName}") {
//       _id
//       name
//     }
//   }
// `;

// var postData = querystring.stringify({
//   name: 'Tape',
//   email: 'tapelovemusic@gmail.com'
// });

// const options = {
//   hostname: 'localhost',
//   port: 3000,
//   path: '/',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'Content-Length': Buffer.byteLength(postData)
//   }
// };

// const req = http.request(options, (res) => {
//   res.setEncoding('utf8');

//   res.on('data', (data) => {
//     console.log('reqest data');
//     console.log(JSON.parse(data));
//   });

//   res.on('end', () => {
//     console.log('no response');
//   });
// });


// req.on('error', (e) => {
//   console.log(e.message);
// });


// req.write(postData);
// req.end();
