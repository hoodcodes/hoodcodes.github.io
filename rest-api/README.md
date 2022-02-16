# REST API Reference

### Reference Links

- REST Api codes: https://restfulapi.net/http-status-codes/

### Highlights

- Created: 2000
- Created By: Roy Fielding
- Characteristics: Stands for Representational State Transfer, and is an architectually pattern for creating web services.

### Summary Description

### Status Codes

- 200 (OK) -
- 201 (Created) - used if resource created immediately
- 202 (Accepted) - used if the server cannot create the resource immediately
- 203 (Non-Authorative information) - never used this
- 204 (No Content) - response body MUST be empty
- 301 (Moved Permanently)
- 302 (Found) - i have not used this. 303 and 307 were created bec/ 302 was being used incorrectly
- 303 (See other) - returns URI of new location for the resource. (don’t cache this call, but you may be able to cache 2nd call)
- 304 (Not Modified) - if request headers specify a a version, and there has been no changes to resource, this is used. saves bandwidth as the client can continue to use their local copy of resource
- 307 (Temporary Redirect) - client should continue using original URI, but a temporary URI will be supplied to then call next
- 400 (Bad Request) - malformed client request as example. client error
- 401 (Unauthorized) - This is really about Auth-N (Authentication not established) incorrect credentials or none supplied
- 403 (Forbidden) - This is really about Auth-Z. (Authorization not established) no permissions
- 404 (Not Found) -
- 405 (Method Not Allowed) - e.g. server may allow GET and POST, but not PUT or DELETE
- 406 (Not Acceptable) - client requested one media type, but that is not available by the API
- 412 (Precondition Failed) - precondition requirements specified in the request headers were not met by the API
- 415 (Unsupported Media Type) - e.g. a png image is uploaded, but server only accepts jpg
- 500 (Internal Service Error) - always the server’s fault here. for example an exception occurred at the server. client could retry call
- 501 (Not Implemented) - server does not recognize the request method or it cannot fulfill the request. Usually implies future availability
