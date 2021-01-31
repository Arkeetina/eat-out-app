import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
  first?: boolean
  last?: boolean
  before?: boolean
  after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  User: Prisma.User
  EatOutSpot: Prisma.EatOutSpot
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'eatOutSpots' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'name' | 'email' | 'createdAt' | 'updatedAt'
    }
    eatOutSpots: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'note' | 'url' | 'author' | 'authorId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'name' | 'note' | 'url' | 'authorId' | 'createdAt' | 'updatedAt'
    }
  },
  User: {
    eatOutSpots: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'note' | 'url' | 'author' | 'authorId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'name' | 'note' | 'url' | 'authorId' | 'createdAt' | 'updatedAt'
    }
  }
  EatOutSpot: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: 'User'
    users: 'User'
    eatOutSpot: 'EatOutSpot'
    eatOutSpots: 'EatOutSpot'
  },
  Mutation: {
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'BatchPayload'
    deleteOneUser: 'User'
    deleteManyUser: 'BatchPayload'
    upsertOneUser: 'User'
    createOneEatOutSpot: 'EatOutSpot'
    updateOneEatOutSpot: 'EatOutSpot'
    updateManyEatOutSpot: 'BatchPayload'
    deleteOneEatOutSpot: 'EatOutSpot'
    deleteManyEatOutSpot: 'BatchPayload'
    upsertOneEatOutSpot: 'EatOutSpot'
  },
  User: {
    id: 'Int'
    name: 'String'
    email: 'String'
    eatOutSpots: 'EatOutSpot'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  EatOutSpot: {
    id: 'Int'
    name: 'String'
    note: 'String'
    url: 'String'
    author: 'User'
    authorId: 'Int'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  EatOutSpot: Typegen.NexusPrismaFields<'EatOutSpot'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  