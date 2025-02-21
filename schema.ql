# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

type Car {
  color: String!
  createAt: DateTime!
  id: ID!
  model: String
  updatedAt: DateTime!
  year: String!
}

input CreateCarDto {
  color: String!
  model: String
  year: String!
}

"""
A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format.
"""
scalar DateTime

type Mutation {
  createCar(createCar: CreateCarDto!): Car!
  removeCar(id: ID!): Float!
  updateCar(id: Float!, updateCar: UpdateCarDto!): Car!
}

type Query {
  findAllCar: [Car!]!
  findOneCar(id: ID!): Car!
}

input UpdateCarDto {
  color: String
  model: String
  year: String
}