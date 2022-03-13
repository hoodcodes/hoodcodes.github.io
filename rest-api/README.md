[Home](../) > [API](../apis/)

# REST API Reference

### Reference Links

- [REST API codes](https://restfulapi.net/http-status-codes/)
- Note to Self: listen again to [Oktane17: Designing Beautiful REST + JSON APIs](https://www.youtube.com/watch?v=MiOSzpfP1Ww)
- [Dr. Roy Fielding's Dissertion](https://www.ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf)
- [REST APIs must be Hyper-Text Driven](https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven)
- [The Fundamentals of REST API Design](https://stormpath.com/blog/fundamentals-rest-api-design)
- [The 5 API styles: Understanding REST, OpenAPI, HTTP, gRPC, GraphQL, and Kafka](https://blog.axway.com/apis/api-styles-rest-openapi-http-grpc-graphql-and-kafka)

### Highlights

- Created: 2000
- Created By: Roy Fielding
- Characteristics: Stands for Representational State Transfer, and is an architectually pattern for creating web services.

### Summary Description

REST is an architectural style, not a specification. There is no governing body and so therefore no hard and fast rules.

### Status Codes

- 1xx: Informational
- 2xx: Success
- 3xx: Redirection
- 4xx: Client Error
- 5xx: Server Error

* 200 (OK) -
* 201 (Created) - used if resource created immediately
* 202 (Accepted) - used if the server cannot create the resource immediately
* 203 (Non-Authorative information) - never used this
* 204 (No Content) - response body MUST be empty
* 301 (Moved Permanently)
* 302 (Found) - i have not used this. 303 and 307 were created bec/ 302 was being used incorrectly
* 303 (See other) - returns URI of new location for the resource. (don’t cache this call, but you may be able to cache 2nd call)
* 304 (Not Modified) - if request headers specify a a version, and there has been no changes to resource, this is used. saves bandwidth as the client can continue to use their local copy of resource
* 307 (Temporary Redirect) - client should continue using original URI, but a temporary URI will be supplied to then call next
* 400 (Bad Request) - malformed client request as example. client error
* 401 (Unauthorized) - This is really about Auth-N (Authentication not established) incorrect credentials or none supplied
* 403 (Forbidden) - This is really about Auth-Z. (Authorization not established) no permissions
* 404 (Not Found) -
* 405 (Method Not Allowed) - e.g. server may allow GET and POST, but not PUT or DELETE
* 406 (Not Acceptable) - client requested one media type, but that is not available by the API
* 412 (Precondition Failed) - precondition requirements specified in the request headers were not met by the API
* 415 (Unsupported Media Type) - e.g. a png image is uploaded, but server only accepts jpg
* 500 (Internal Service Error) - always the server’s fault here. for example an exception occurred at the server. client could retry call
* 501 (Not Implemented) - server does not recognize the request method or it cannot fulfill the request. Usually implies future availability

### Notes

PUT vs POST

- you can create with both, but ….
  - you have to supply the unique id to object if creating with a PUT
- PUT - is idempotent.
- POST - is not idempotent

### API Versioning

TODO: API Versioning Resources

### Fakes Sites for Testing API dev

[JSON Placeholder](https://jsonplaceholder.typicode.com/) - fake online REST API for testing / prototyping

### 4 Principles

1. data AND functionality - are considered resources. identified by a URI
2. Fixed set of operations
   - GET, POST, PUT, DELETE
3. Resources can be represented in various formats
   - HTML, XML, plain text, JSON
4. Communication betw/ client and server is STATELESS

- ### 6 Advantages
- Scalability - meaning - how easy it is for RESTful APIs to adapt and grow and be plugged into other systems
- Use of HTTP - easy to plug into other applications
- Independency - you can deploy or scale down parts of an application without having to shut down the entire application or an entire web server farm
- Reduced latency due to caching - RESTful APIs prioritize caching, which helps improve latency.
- Security - the HTTP spec lets you spot security via certain HTTP headers, so you can leverage this to make your API secure
- Encapsulation - there are parts of the application that do not need to be exposed to a REST caller, and REST as an architecural style allows you to hide those details and only show things you want to show.

### REST API Guidelines

- Keep your REST API resources coarse grained, not fine grained
- for a given resource, write a method that takes the resource itself as an argument, and the method contains all the functionality needed for the resource.
- Work with collection and instance resources
- Use POST to take advantage of partial updates. you can you POST for creation and updates. While you could use PUT for creation - but with PUT you must pass over ALL the fields - and maybe you do not need to, or want to. In that case you would be helping to limit the traffic and that can save $$ when you get to high volumes.
  - PUT is idempotent btw - so that is why it requires all of the fields for creation
- Have REST API documents link to other documents based on the notion of a media type.
  - the client should specify in the accept headers what media type you want
  - the server should send in the content-type headers what data format you are returning

### General Notes

REST APIs are easier to:

- Create
- Consume

SOAP APIs send a lot of additional information that the client might not care about.

- ONLY XML allowed

Payload: the data sent sent betw/ client and server

LOOSE COUPLING - a feature promoted by REST APIs

- changes and enhancements should not break existing clients
- allows RESTful APIs to start small and evolve over time
