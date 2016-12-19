const { Registry } = require('graphql-helpers');

const registry = new Registry();

registry.createType(`
  type Stuff {
    name: String
    category: String
    description: String
    location: Location
    market: String
    owner: String
    path: String
    price: Int
    quantity: Int
    category: String
    tags: [String]
    owner: String
    createDate: String
    market: String
    images: [StuffImage]
    wishes: [String]
    view: Int
    likes: [String]
    unlikes: [String]
    countPopular: Int
    repostDate: String
    categories: [String]
    markets: [String]
    editorPickDate: String
    deleted: Boolean
    variations: [Variation]
    sold: Boolean
    soldDate: String
    checkOwner: String
    updatedDate: String
  }`
);

registry.createType(`
  type Location { 
    address: String
    spot: Int
  }
`);
  
registry.createType(`
  type StuffImage { 
    path: String
    size: Size
  }
`);

registry.createType(`
  type Size {
    width: Int
    height: Int
  }
`);

registry.createType(`
  type Variation {
    label: String
    price: Int
    quantity: Int
  }
`);

module.exports = registry.getType('Stuff');
