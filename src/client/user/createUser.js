const { executePostQuery } = require('../client');

const graphQlQuery = `
  mutation CreateUser($user: UserInput ) {
    createUser(input: $user) {
      email
      firstname
      lastname
      avatar
      country
      detail
      password
      username
      gender
      birthday
    }
  }
`;

executePostQuery({
  query: graphQlQuery,
  variables: {
    user: {
      email: 'tape@mail.com',
      firstname: 'Siriwut',
      lastname: 'Ponwapee',
      avatar: '',
      country: 'TH',
      detail: '',
      password: 'tapepassword',
      username: 'tapeusername',
      gender: 'male',
      birthday: '06/03/1991'
    }
  }
});