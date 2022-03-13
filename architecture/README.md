[Home](../)

# Architecture Reference

### Reference Links

- [Wikipedia - Software Architecture](https://en.wikipedia.org/wiki/Software_architecture)
- [38 Actions and Insights to Become a Better Software Architect](https://hackernoon.com/38-actions-and-insights-to-become-a-better-software-architect-f135e2de9a1b)
- [Documenting Software Architecture - Decision Records](https://herbertograca.com/2019/08/12/documenting-software-architecture/)
- [Design Patterns for Distributed Systems](https://www.codemag.com/Article/1909071/Design-Patterns-for-Distributed-Systems?utm_source=DevWeek09112019&utm_medium=newsletter&utm_campaign=sm-articles)
- [Book: Just Enough Software Architecture](https://www.georgefairbanks.com/book/)

### Loose Notes

Article on design patterns for distributed systems:  
https://www.codemag.com/Article/1909071/Design-Patterns-for-Distributed-Systems?utm_source=DevWeek09112019&utm_medium=newsletter&utm_campaign=sm-articles

Repo for eShop on Containers (.Net Core 2.2 and Docker ):  
https://github.com/dotnet-architecture/eShopOnContainers

Article highlighting the concept of ‘Architecture Decision Records’ - which is a way to document your decisions, along with your other options considered and why you did not choose them:  
https://herbertograca.com/2019/08/12/documenting-software-architecture/

Cloud Design Patterns:  
https://docs.microsoft.com/en-us/azure/architecture/patterns/

Steve’s forthcoming book: Architecting Cloud Native .NET Applications for Azure
https://github.com/dotnet/docs/tree/master/docs/architecture/cloud-native

one of the best ways to reduce complexity is to separate the concerns that drive the design.

Architectural documentation can show stakeholders that their concerns are addressed by modeling and describing the architecture from different points of view. these separate descriptions are called architectural views

Architectural Views: 4+1 model https://en.wikipedia.org/wiki/4%2B1_architectural_view_model

- Logical view - the functionality the system provides to end-users
- Development view - illustrates the system from the developer’s point of view. AKA implementation view.
- Physical view - view from the system engineer, showing the topology of the software on the physical layer as well as the physical connections between the components . AKA deployment view.
- Process view - explains the system processes and how they communicate. Focuses on the run-time behaviour of the system.
- Scenarios - AKA use case view. a set of use cases, or scenarios, becomes the 5th view.

Their Strengths and Best Uses for each type of architecture (TODO)

- Event-Driven
- Client-Server
- Monolithic
- Microservices
- MVC
- REST

OTHER Types of Architectures:

- System
- Enterprise

When to use:

- Service Bus - when you want things handled in an ordered way and you need guaranteed delivery
