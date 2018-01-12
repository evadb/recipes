import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
 type Query {
      evaluations: [Evaluation]
    }
    
    type Evaluation {
      yearBuilt: String
      floorArea: String
      footprint: String
      furnaceType: String
      furnaceFuel: String
    }
  `

const schema = makeExecutableSchema({ typeDefs, resolvers })

export { schema }
