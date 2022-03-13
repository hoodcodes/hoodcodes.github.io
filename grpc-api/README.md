[Home](../) > [API](../apis/)

# gRPC API Reference

### Highlights

- Created:
- Created By:
- Characteristics:

### Summary Description

### Reference Links

- [gRPC Home](https://grpc.io/)
- [REST vs gRPC](https://www.baeldung.com/rest-vs-grpc)
-

RPC (call a function on a remote server)

- good for ‘action oriented’ functions
- simple and easy to understand
- lightweight payloads
- high performance
- used heavily interally at all the big companies, typically using specific high performance variants of RPC such as:
  - Apache Thrift
  - gRPC
- T wirp
- Downsides:
  - usually has high, or tight coupling with the underlying system
    - usually not much of an abstraction layer - your function becomes the endpoint
  - so implementation details may leak out
  - no discoverabililty
    - not helpful for learning how to implement your api
  - function explosion
    - e.g. endpoints with version numbers
    - /listwidgets
    - /listwidgetsV2
