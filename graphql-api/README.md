[Home](../) > [API](../apis/)

# GraphQL API Reference

### Highlights

- Created: 2012, while working on their mobile applications. Open Sourced in 2015. [GraphQL Documentary(28 min)](https://www.youtube.com/watch?v=783ccP__No8)
- Created By: Facebook
- Characteristics: Designed to deal with issues in the REST API structure. Data is stored in a tree structure. More flexible in the fetching of data than REST so the exact amount of data is returned which is needed. In contrast, REST may over fetch or under fetch the required amount of data.

### Summary Description

- Ask for exactly what you want
- starts with a strongly typed schema (the schema definition)
- advantages
  - low network overhead
  - typed schema
  - fits graph-like data very well
- disadvantages
  - complexity
  - caching
  - versioning

https://graphql.org/

GraphQL - is a query language. A way to get data from an API into your application

Was created by Facebook

GraphQA - is a specification, not an implementation - for a query language.

2 parts to GraphQL:

- Server component
- Client component
  - There are a lot of Client Libraries available
  - Relay (targeting React apps)
  - Apollo Client (popular)
  - etc

You write your API as a series of:

- typeDefs
- resolvers

The server takes your typeDefs and resolvers and exposes them as an endpoint.
