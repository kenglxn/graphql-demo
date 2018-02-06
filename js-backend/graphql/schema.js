import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql'
import data from './data'

const goldbergType = new GraphQLObjectType({
  name: 'Goldberg',
  description: 'Member of The Goldbergs',
  fields: {
    character: {
      type: GraphQLString,
      description: 'Name of the character',
    },
    actor: {
      type: GraphQLString,
      description: 'Actor playing the character',
    },
    role: {
      type: GraphQLString,
      description: 'Family role'
    },
    traits: {
      type: GraphQLString,
      description: 'Traits this Goldberg is known for'
    },
    id: {
      type: GraphQLInt,
      description: 'ID of this Goldberg'
    }
  }
})

const queryType = new GraphQLObjectType({
  name: 'query',
  description: 'Goldberg query',
  fields: {
    goldberg: {
      type: goldbergType,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve: (_, args) => data[args.id]
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType
})

export default schema
