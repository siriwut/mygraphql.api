const { executeGetQuery } = require('../client');

const roleId = '520b1e96f8c94d6314000001';

const roleQuery = `
  query getRoleById($roleId: String) {
    role(_id: $roleId) {
      name
      perms
    }
  }
`;

executeGetQuery({
  query: roleQuery,
  variables: {
    roleId
  }
});