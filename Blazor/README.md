[Home](../)

# Blazor Reference

### Reference Links

### Blazor Notes

At its core - it is a

- component model
- rendering engine

## Flavors

### Blazor Server - all rendering is done on the server - sending only html and binary update data

- can only be hosted from ASP.NET Core
- all logic is on the server
- uses SignalR connection to send binary updates to the client
- improved security
- entire app can be debugged on the server
- constant connection needs to be maintained
- requires a good network
- good for internal network apps with a known size userbase

### Blazor WebAssembly - c# is run in the browser on the client, rendering html from c#

- can be standalone and asp.net hosted
  - standalone: simplest blazor app model
    - asp.net core server is not needed
    - deploy a static folder of files
  - asp.net core server
    - the blazor app is served to the client thru middleware
    - client and server can share code
    - client and server have to be deployed together
- progressive web app
  - can be opened like a native app
  - loads quickly
  - provides offline access
  - they can auto-update themselves
- C# on the client
- Browser loads the runtime
- Download size is still big but getting better
- debugging not as good as on the server

### Courses

- https://www.linkedin.com/learning/blazor-getting-started/blazor-beam-project-setup?u=75159394
  - Exercise Files: https://github.com/LinkedInLearning/blazor-get-started-2833058
