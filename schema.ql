# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

type Car {
  color: String!
  createAt: DateTime!
  id: ID!
  model: String
  owner: Owner
  updatedAt: DateTime!
  year: String!
}

input CreateCarDto {
  color: String!
  model: String
  year: String!
}

input CreateOwnerDto {
  name: String!
}

"""
A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format.
"""
scalar DateTime

type Mutation {
  createCar(createCar: CreateCarDto!, ownerId: ID!): Car!
  createOwner(createOwnerDto: CreateOwnerDto!): Owner!
  removeCar(id: ID!): Float!
  removeOwner(id: ID!): Float!
  updateCar(id: Float!, updateCar: UpdateCarDto!): Car!
  updateOwner(id: ID!, updateOwnerDto: UpdateOwnerDto!): Owner!
}

type Owner {
  cars: [Car!]!
  id: ID!
  name: String!
}

type Query {
  findAllCar: [Car!]!
  findAllOwners: [Owner!]!
  findAllOwnersFilter(limit: Int, page: Int, search: String, sort: Boolean): [Owner!]!
  findOneCar(id: ID!): Car!
  findOneOwner(id: ID!): Owner!
}

input UpdateCarDto {
  color: String
  model: String
  year: String
}

input UpdateOwnerDto {
  name: String
}