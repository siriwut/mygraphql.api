const { executeQuery } = require('../client');

const roleId = '520b1e96f8c94d6314000001';

const roleQuery = `
  query {
    role(_id: "${roleId}") {
      name
      perms
    }
  }
`;

executeQuery(roleQuery);