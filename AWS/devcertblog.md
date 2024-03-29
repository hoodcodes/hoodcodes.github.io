[Home](../../) > [Cloud](../CloudDev/) > [AWS](./)

<p align="center">
  <img src="assets/../Assets/AWS%20Developer.png" alt="AWS Certified Developer" width="25%"/>
</p>

# AWS Developer Certification Blog

Chronicaling my journey to getting my AWS Developer Cloud Associate certification here in 2022.

These are rough notes which I may use to help create a polished Article series on the topic once I am done.

**April 22, 2022**

Watching a few YT vids on AWS services, I think building a table of various types of projects and the services they would use sounds like a good reference tool. Something like below:

| Project Type                        | AWS Services Utilized                             |
| ----------------------------------- | ------------------------------------------------- |
| Static Website                      | S3, Route53, Cloudfront                           |
| CRUD App using ECS + Load Balancing | ECS, ECR, VPC, RDS(MySQL), Route53, Load Balancer |

Also - writing out the basic services and their purpose for flashcard app (e.g. quizlet) would be useful for review.

Services that are on the Developer Cert exam include:

| Service                            | Purpose                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Amazon SQS                         | Amazon SQS provides queues for high-throughput, system-to-system messaging. You can use queues to decouple heavyweight processes and to buffer and batch work. Amazon SQS stores messages until microservices and serverless applications process them.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Amazon DynamoDB                    | DynamoDB is a fully managed, key-value, and document database that delivers single-digit-millisecond performance at any scale.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Amazon Elasticache                 | Amazon ElastiCache is a web service that makes it easy to deploy and run Memcached or Redis protocol-compliant server nodes in the cloud. Amazon ElastiCache improves the performance of web applications by allowing you to retrieve information from a fast, managed, in-memory system, instead of relying entirely on slower disk-based databases. The service simplifies and offloads the management, monitoring and operation of in-memory environments, enabling your engineering resources to focus on developing applications. Using Amazon ElastiCache, you can not only improve load and response times to user actions and queries, but also reduce the cost associated with scaling web applications. |
| Amazon Kinesis                     | With Amazon Kinesis Data Streams, you can build custom applications that process or analyze streaming data for specialized needs. You can add various types of data such as clickstreams, application logs, and social media to a Kinesis data stream from hundreds of thousands of sources. Within seconds, the data will be available for your applications to read and process from the stream.                                                                                                                                                                                                                                                                                                                |
| AWS Lambda                         | AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume - there is no charge when your code is not running. With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code, and Lambda takes care of everything required to run and scale your code with high availability. You can set up your code to automatically trigger from other AWS services or call it directly from any web or mobile app.                                                                                                                                                                  |
| Amazon API Gateway                 | Amazon API Gateway helps developers to create and manage APIs to back-end systems running on Amazon EC2, AWS Lambda, or any publicly addressable web service. With Amazon API Gateway, you can generate custom client SDKs for your APIs, to connect your back-end systems to mobile, web, and server applications or services.                                                                                                                                                                                                                                                                                                                                                                                   |
| AWS Elastic Beanstalk              | Amazon Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| AWS Identity and Access Mgmt (IAM) | IAM provides fine-grained access control across all of AWS. With IAM, you can control access to services and resources under specific conditions. Use IAM policies to manage permissions for your workforce and systems to ensure least privilege. IAM is offered at no additional charge.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| AWS Key Management Service         | AWS KMS is a managed service that enables you to easily create and control the keys used for cryptographic operations. The service provides a highly available key generation, storage, management, and auditing solution for you to encrypt or digitally sign data within your own applications or control the encryption of data across AWS services.                                                                                                                                                                                                                                                                                                                                                           |

**April 21, 2022**

Found some good tips for further study listed below:

Read and Analyze AWS FAQs - The AWS Product and Technical FAQs reflects generally asked questions and issues. If you examine these FAQs, you could get answers to examination questions. We suggest at least read the following FAQS:

These are highlighted on the latest Study Guide material on the AWS Cert page:

- SQS FAQs https://aws.amazon.com/sqs/faqs/?da=sec&sec=prep
- Elasticache FAQs https://aws.amazon.com/elasticache/faqs/?da=sec&sec=prep
- Kinesis Data Streams FAQs https://aws.amazon.com/kinesis/data-streams/faqs/?da=sec&sec=prep
- Lambda FAQs https://aws.amazon.com/lambda/faqs/?da=sec&sec=prep
- API Gateway FAQs https://aws.amazon.com/api-gateway/faqs/?da=sec&sec=prep
- Elastic Beanstalk FAQs https://aws.amazon.com/elasticbeanstalk/faqs/?da=sec&sec=prep
- IAM FAQs https://aws.amazon.com/iam/faqs/?da=sec&sec=prep
- DynamoDB FAQs https://aws.amazon.com/dynamodb/faqs/?da=sec&sec=prep
- Key Mgmt Service FAQs https://aws.amazon.com/kms/faqs/?da=sec&sec=prep

These are also worth looking at - but no longer mentioned as directly on the exam - fyi:

- Cloudformation FAQs
- Route53 FAQs
- EC2 FAQs
- VPC FAQs
- RDS FAQs
- S3 FAQs
- IAM FAQs
- SNS FAQs
- SWF FAQs

Study the White Papers - There are some AWS Whitepapers recommended examining. You can expand your technical knowledge about AWS services and technologies; those had been composed by the AWS team, freelancer analysts, and AWS partners. At least go through the following whitepapers:

- Overview of AWS Services
- Cloud Architectures
- Architecting for the Cloud: AWS Best Practices
- Amazon Virtual Private Cloud Connectivity Options
- Amazon Web Services: Overview of Security Processes
- AWS Security Best Practices
- Development and Test on AWS
- How AWS Pricing Work

Note: I am adding links to these items as I find them.

**April 20, 2022**

Course: "Deep Dive on Container Security"

Talking about Risks to be concerned with for Containers:

- Segregation
- Access
- Resources

I decided to simply listen all the way through on this 35 minute course talk. This one was over my head with many foreign concepts. I will want to listen to this one again and come back here to take notes.

I am going to move on to the next course, "ECS Primer" in the hopes I can get some head knowledge on container technologies in AWS which might help me connect the dots better on the last course.

What is ECS - Elastic Container Service

Containers - a form of virtualization platform that happen at the operating system level. They only contain:

- application code
- libraries that help run that code

A container is a running instance of a container image, which is an immutable object that can be stored in a public or private registry and customized as needed.

containers are strongly associated with microservice architectures.

microservices decompose traditional monolithic architectures into independent components that run as services, and communicate with lightweight apis.

- microservice architectures enable quicker iteration, and increase resilience, efficiency and overall agility.

managing containers at scale: handling scheduling, placement, and integration with other services - such at networking, storage, monitoring and logging

- Amazon ECS - what this course focuses on
- Docker Swarm
- Kubernetes

ECS is a container orchestration service that supports Docker containers

ECR - Elastic Container Registry

There are 2 Launch Types:

- Fargate - an almost serverless like experience
  - good when you have services with wider swings in demand
  - focus on the tasks themselves instead of worrying about the infrastructure
- EC2 - when you want more control over the infrastructure, giving you finer control
  - you define your infrastructure

You can intermingle these launch types as necessary in your application

1. You first pull a container image from a registry (ECR or private).
2. Define your application, creating your own configuration files
3. Select a launch type (Fargate or EC2)

ECS Components

<TODO>

Task placement strategies

<TODO>

ECS integrating with other AWS Services

<p align="center">
  <img src="assets/../Assets/AWS%20Services%20ECS%20May%20Typically%20Integrate%20With.png" alt="banner"/>
</p>

ECR - fully integrated with ECS and Docker CLI

Example of a Microservice architecture integrating with ECS:

<p align="center">
  <img src="assets/../Assets/ExampleMicroserviceArchitectureWithECS.png" alt="banner"/>
</p>

Example of a CI/CD pipeline involving ECS:

<p align="center">
  <img src="assets/../Assets/ECS-CI-CD-PipelineExample.png" alt="banner"/>
</p>

Blue-Green Deployments are possible

- Lowers risks by deploying to 2 separate environments
- enables deployment, testing and validation, along with rollback if issues exist
- AWS CodeDeploy offers 'Blue-Green Deployment' as a deployment type
- When Creating your ECS Service, you specify the deployment type
- You use a Load Balancer to listen on 2 ports
- Blue is the existing service, and green is the new service
- when testing complete, you swap the ports on the environments

ECS can be configured to use Auto Scaling

- Application Load Balancer utilized
- metrics are published to Cloudwatch
- ECS scaling policies then specify if ECS tasks should be added or removed

Security features in ECS

ECS Tasks can have their own IAM role

Tasks cannot access other services unless they have explicit roles allowing it

Tasks can retrieve secrets from the System Manager Parameter Store, which is a pass-through service to the AWS Secrets Manager

<p align="center">
  <img src="assets/../Assets/ECS%20Managing%20Secrets.png" alt="banner"/>
</p>

Scheduling Strategies

- Replica
- Daemon - deploys exactly one task on each container instance meeting the constraints on your cluster

What was different with this course is you had many individual video segments on bite sized topics. The material is shared rather quickly so I replayed most of them in order to write down my takeaways. The duration says 30 minutes, however I probably spent more like 90 minutes relistening and writing these notes, or copying some images for reference.

Good course.

**April 19, 2022**

Next, the course "Deep Dive on AWS Fargate: Building Serverless Containers at Scale"

Orchestration Tools are a powerful tool for ensuring you have proper management of containers so you can meet demand efficiently.

ECS = Elastic Container Service, has a cluster manager and was designed to make container mgmt scale. A placement engine, scheduling and orchestration.

However, it can become burdensome to then have a lot of EC2 instances out there to manage. Running containers in production is - hard work.

Enter Fargate - Like serverless computing for containers. As close as you can get to containers on demand.

- no infrastructure for you to manage
- Elastic - scale up and down seamlessly. pay only for what you use.
- Integrated with the AWS ecosystem

Components of Fargate:

Start with a blueprint recipe for your task - register a Task Definition.

- define applicaiton containers: Image URL, CPU & Memory requirements etc
- contains a list of up to 10 container definitions
- is an immutable, versioned document
- define task level resources (e.g. cpu), units and container level resources
- define networking

Then you create a Cluster

- in Fargate it is a infrastructure isolation boundary, not the real cluster. also IAM permissions boundary

Inside a cluster you run a Task,

- which is a running instance of a task definition

Create a service

- maintain n running copies
- integrated with elastic load balancing
- unhealthy tasks automatically replaced

if you needed to have multiple Fargate containers connecting to shared storage - this is definitely possible.

- 4gb space is allocated per Task
- configure via volume mounts in task definition
  - can mount at different containerPaths
  - do not specify host sourcePath

Types of Permissions:

- Cluster - controls who can launch/describe tasks in your cluster
- Application - allows your application containers to access AWS resources securely
- Housekeeping - allows us to perform housekeeping activities around your task:
  - we need certain permissions in your account to bootstrap your task and keep it running
    - execution role -
    - ECS Service Linked Role -

Visibility and Monitoring

Takeaways -

- Fargate is a launch type within ECS to run containers without having to manage EC2 instances
- if you are debating between EC2 mode over Fargate mode, **start with Fargate**
  - because you can easily switch to EC2 mode later should you want/need more control

demo is next. Here are the notable steps

- start with creating a cluster - using a CLI command
  - `aws ecs create-cluster --cluster-name pictshare --region ap-southeast-2`
- create a task definition - task_definition.json
- register the task definition using a CLI command
  - `aws ecs register-task-definition --cli-input-json file://task_definition.json --region ap-southeast-2 --query 'taskdefinition.taskDefinitionArn' "arn:aws:ecs:ap-southeast-2:jdsfjdf:task-definition/pictshare:10"`
- create a service document - service.json
- create the service with a CLI command:
  - `aws ecs create-service --cli-input-json file://service.json`
- run a CLI command to configure your autoscaling parameters:
  - `aws application-autoscaling register-scalable-target --resource-id service/pictshare/pictshare --service-namespace ecs --scalable-dimension ecs:service:DesiredCount --min-capacity 1 --max-capacity 20 --role-arn arn:aws:iam:dfkjslfj:role/ecsServiceAutoScalingRole`
- define the scaling out dimensions in a document - scale-out.json
- run a CLI command to enable the scaling out policy:
  - `aws application-autoscaling put-scaling-policy --cli-input-json file://scale-out.json`
- now - invoke a simple curl command to validate the URL and that the service is running successfully

The demo continues with showing how code changes can be run thru a CI/CD pipeline you create so that as you update and commit changes, the pipeline will commit, build, and deploy your updates to the ECR (Elastic Container Repository) and finally to production.

This is worth watching several times. The lecture is good, although the accent for the speaker was a bit distracting just because I was not used to hearing it. Good course.

**April 18, 2022**

Course this evening is "Getting into the Serverless Mindset". Short. Notes:

Serverless means:

- No server management
- flexible scaling
- automated high availability
- no idle capacity

When you are designing your architecture, don't focus on the question: "What's the data that I am storing and what operations do i need to perform against that?" Instead, ask yourself this: "What are the events that should trigger an action in my system?"

parallelization can be utilized with serverless computing to make huge improvements in processing efficiency, for relatively the same cost as a traditional processing approach that would take much longer. Pywren is an open source project that allows you to do extremely high throughput computing jobs using Lambda as the compute engine behind the scenes.

The way you manage environments and deployments is different with serverless computing. Every developer can have their own dev environment. You can have a separate demo environment for every feature under development.

Again, this was a short course and really just an overview. took 30 minutes.

**April 16, 2022**

Interesting observation - the total length of this learning path appears to have grown from 30+ hours to 41.5 hours. The listed duration at the Developer Learning Plan page is not correct for the last course I completed (states it as 10 minutes when it was about 22 minutes).

Course: Intro to Serverless Development

This was a short, overview course summarizing the foundations of how to do serverless development with AWS.

There will be 5 more courses around the subject of serverless, and plenty of labs I am sure. So I may tackle these this weekend.

---

AWS Architect certification: AWS does not appear to be as intense of a study program as Developer. I see 26 hours of study with the Developer learning plan, but only 10 hours of study with the Architect plan. This prompted me to look at the Microsoft Azure certification learning paths for Developer and Architect as well. Similar it seems. Different content.

I don't know if I had a misunderstanding about the amount of content for each type of exam, but 2-3 years ago I thought that gaining a Developer certification was a stepping stone to the Architect cert. Could easily have been mistaken. Well, they are focused on different areas generally. Architects dive deep into cost analysis for example.

The good news is - I could pursue an Architect certification and likely knock that out in a shorter amount of time after a Developer certification. This could be a bonus goal for 2022. But one thing at a time, and just getting a Developer certification would be fantastic for me this year. That is my primary goal for this area of technology.

I am definitely interested in getting Azure and Google Developer certifications, so I can have a clear understanding of all 3 platform offerings for technologies in the developer space. We will cross that bridge of opportunity when it presents itself.

---

**April 15, 2022**

This morning I woke early and tackled the Amazon MQ course (90min).

The prerequisites for labs in this course did not require Windows.

Messaging systems are useful wherever you need a loosely coupled system, that needs to scale, be highly reliable, and fault tolerant.

MOM = Message-oriented middleware or message broker is used to connect system components.

- Commercial: IBM, TIBCO
- Open Source: RabbitMQ, ActiveMQ

Traditionally on premise, there is high TCO with infrastructure, licenses expense, and support

Migrating to the cloud can reduce TCO, as well as enable backup and DR capabilities, and further extend application capabilities.

For many orgs, risks of moving to the cloud are barriers to cloud adoption, which include:

- security concerns
- resources which wrote the original software may have left the company and thus there may be risks with system components having the ability to talk to each other without introducing instability
- vendor lockin concern
- software refactor effort

Born in the Cloud - Microservices

- Amazon SQS (Queue)
- Amazon SNS (Pub/Sub)

Modernizing and refactoring the entire application could result in

- high dev costs
- long dev cycle
- highest risk

the contrast of a fully on-premise architecture to a full cloud architecture shows them at opposite extremes in terms of

- overall costs
- modern architectures used
- scalability
- management/support

Rehost: Lift and Shift strategy to hosting some infrastructure to the cloud. This provides some TCO benefit

Amazon MQ: managed message broker service for Apached ActiveMQ

Re-platform: Lift and Shift and replace with managed broker (broker now in the cloud)

- no code rewrite
- AWS manages messaging system
- high available broker
- Messages never lost
- better overall availability
- no expensive licenses

Re-platform (hybrid): connect legacy with modern

- incrementally migrate applications (some legacy mainframe systems for example cannot be migrated)
- AWS manages messaging system
- high available broker
- messages never lost
- better overall availability
- create new cloud apps
- integrate with on-premises systems

Next - Hands-on Labs ( https://amazon-mq-intro.workshop.aws )

- create a message broker
- explore point-to-point messaging using queues
- explore publish-subscribe messaging using topics
- Testing a message broker failover with high availability

The labs provided links to setting up the prerequisites. Having multiple screens available made this easier. Worth noting - this involved a lot of waiting...

Items performed:

1. Create resources with AWS CloudFormation - provisioning resources

- This took about 10 minutes to complete

2.  Set up AWS Cloud9 IDE Workspace

- Setting up 4 terminals to run commands
- This took a while - it was installing and updating:
  - Installing jq...
  - Updating java to 1.8...
  - Updating maven to 3.6... <= this is where it seemed to get hung. I shut down the terminal and ran commands again. Same experience. waiting...
    - googling about maven update/installs - there is talk that this can take a long time. I will let it sit and work after my 3rd attempt.
    - UPDATE: after about 45 minutes - the process completed

3. Creating a Message Broker

- This setup time is stated to take 25 minutes, however it took a lot less - maybe 10.

At this point of the lab, I am going to pause (at step 5.7 and also waiting for the IDE to get set up). I will return later.

---

Ok - back and now everything is ready.

#### Lab for Queues

Looking at the lab for point-to-point messaging with queues

Sender (aka Producer) can send messages to the queue before a receiver (aka Consumer) is configured.

- not a single message will be lost.
- once the receiver is set up it will begin receiving ALL of its intended messages.

If you have one sender, and multiple receivers, ONLY one receiver will receive any given message. This demonstrates the scalability of adding multiple receivers when volumes of messages warrant adding them for performance reasons.

if you have 2 senders and 2 receivers, one sender will send all messages to one receiver, and if one receiver goes away then the other receiver receives both senders messages. If then the 2nd sender starts sending messages again then the receivers once again become dedicated to receiving all messages from one sender.

#### Lab for Topics

Sending a message to a Topic. All receivers who subscribe to a topic will receive the message. In this way it is a one-to-many relationship

When topics have no subcribers: no messages are saved. they are simply lost.

When topics have only one subscriber: messages are received only for those coming in to the topic once the subscriber is subscribed

When topics have multiple subscribers: both subscribers receive the messages coming in once they are subscribed. This is also known as the `fan out pattern`

When topics have multiple publishers: all subscribers get all publisher messages once they are subscribed to the topic.

AmazonMQ allows you to deploy brokers with a single instance or high available mode. Even if you have a single instance mode - Amazon can provide you with a multi-AZ so you can have your messages replicated to multiple data centers so none are lost.

#### Lab demoing fault tolerance - no lost messages

We started our message sender again, and then our receiver. Messages being sent and received. Then we stopped our receiver and saw how messages are enqueued while there is no receiver. Then we rebooted our broker, and witnessed the small blip, with an exception shown while the standby broker was activated.

We saw how no messages are lost with our oldest enqueued message now available on the backup message broker once it is online.

Finished this course.

Introduction to Fargate Course

Also - I listened to the "Introduction to Fargate" course, roughly a 22 minute talk about how with Fargate you can have your containers managed far easier. More to come I hope with labs in another course here. Sounds like an efficient option when you would like to use containers without having the typical chores of maintenance with infrastructure issues.

Got to 28% completion for the challenge.

**April 14, 2022**

Today I completed the "Getting Started with .NET on AWS course.

A practice activity was included, where I:

- created an IAM user.
- Installed the AWS Toolkit for Visual Studio (2022).
- Created my Visual Studio Profile.
- Created an Amazon RDS database instance using the AWS Explorer in Visual Studio.
- Worked with a sample VS solution provided by AWS for the exercise, updating the project to use my cloud RDS database instance, and run the solution locally.
- Created a cloud application by publishing my solution to Elastic Beanstalk using AWS Explorer, and hit the application thru the browser.
- cleaned up my AWS resources after to minimize expense of resources.

Nice exercise, hitting quite a few areas. Very nice flow with videos and guidance throughout the entire course. The quiz at the end was composed of 10 questions, with the need to get 8 right. unlimited retakes, but I got it the first shot. Easy questions if you are paying attention to what you are doing.

A few resources they provided at the end which I will post later.

**April 13, 2022**

No effort made today, however I did remove some distractions such as all 'watch later' YT vids unless they are AWS related.

I am set up to give this another start tomorrow morning. Things will definitely open up once I am working in my native time zone again in two weeks.

**April 12, 2022**

Five days have passed and I have not put any effort in. I have found challenges putting in a block of time and reserving it specifically for this activity. I think I need to make an appointment with myself and not break this commitment.

Also - I am concerned that I still have too many goals competing in my mind, which result in my feeling overwhelmed and then not accomplishing anything.

Further proof that 'one thing at a time' makes more sense for me. Better to go deep - thoroughly study one subject and make it stick. Have my reference notes for refreshing myself. Complete this, THEN move on to the next. Instead of having 4-6 goals to try and accomplish simultaneously.

So tomorrow - I will work to start again. One thing at a time.

**April 8, 2022**

This week has been difficult with work taking a lot of my focus and energy, however I want to post my thoughts here on Friday night. Some days are not great for what we can invest in our goals and dreams. Some weeks are not very good. But the important thing to remember, the critical piece to keep in the forefront of your psyche, is that tomorrow is a new day. Tomorrow is another opportunity to wake up, jump out of bed, and attack the day so you can accomplish as much as possible in one day.

It is a war in our minds and hearts. To keep pushing. To not fold your cards. Persistance pays off. You can move slower some days, while faster other days. Consistency will win. So let yesterday be dead to you. Look forward.

What can I accomplish tomorrow morning for my AWS certification? Well - get up at 330am and see! Then report back I shall.

**April 5, 2022**

I signed up for a 3 hour AWS seminar on preparing for the Developer Cert exam, and since it was during work hours I recorded it to watch on my own time. Tonight I finished watching it straight through without taking notes. I will watch it again and capture the key takeaways for each section covered. Good session and presenter. I have a better idea on the scope of the exam content and I'm finding most of it interesting.

AWS followed up with an email sharing additional content for review, and here is that content below.

1. Exam Guide: https://d1.awsstatic.com/training-and-certification/docs-dev-associate/AWS-Certified-Developer-Associate_Exam-Guide.pdf2.
2. Skill Builder (create a free account and search for practice exam questions): https://aws.amazon.com/training/digital3.
3. Certification Challenge for Developer - Associate: https://training.resources.awscloud.com/get-certified-developer-associate?trk=ca3a0879-58f2-49a4-8ce6-507eb0610e64&sc_channel=em4.
4. Additional free training webinars: https://aws.amazon.com/training/events

- Please send your questions, comments and feedback to: amer-training-webinars@amazon.com

**March 31, 2022**

Today I installed the latest Visual Studio 2022 Community Edition on my old desktop as the AWS exercise activity requires VS on Windows only. This will take some time this evening so I will look to pick up on completing the activity tomorrow.

In the meantime, i can look at another AWS course.- Intro to Containers (15min)

A container is a standardized unit of software.

They differ from other forms of virtualization in the following ways:

- Bare-metal servers are most inefficient. No resources shared and you pay for everything whether you are at 0 or 100% utilization.
- Virtual machines are better, using a virtualization platform. This allows for sharing of hardware. Still you have multiple OS's and this is heavy. A lot of redundancy exists.
- Containers - most efficient. Containerization platform allows for sharing of hardware and OS. you can have a container with the app and needed libraries. multiple containers can share libraries. You can spin them up and down easily.

Image: Read-only, immutable, and portable template with instructions for creating a container.

Container: running instance of that image. Consider it a discrete, compute unit, not a storage unit.

Volume: Where you store persistent data.

To build your own image, you create a docker file.

Each line of the Dockerfile adds a layer to the image.

You can port the image to any environment that supports Docker, and you can store it in any registry for eacy reuse.

Microservices Characteristics:

- Decentralized, evolutionary design
- smart endpoints, dumb pipes
- independent products, not projects
- designed for failure
- Disposability
- Development and production parity - can treat environments the same

**March 30, 2022**--

Getting Started with .NET on AWS (1hr 30min)

In this course, you will learn the basics of deploying, managing, and securing .NET applications with Amazon Web Services (AWS). You will learn about AWS services and tools specifically designed for .NET applications. You will also have an opportunity to practice deploying a .NET application to the AWS Cloud.

Course Introduction and .Net Overview video - 2min

- AWS has been investing in .Net development for over a decade
- .Net Framework and .Net Core supported

AWS Services for .Net Applications - 7min

- Compute Services
  - Instances
    - EC2
    - Elastic Beanstalk
  - Containers
    - ECS
    - EKS
  - Serverless
    - Lambda
    - Fargate
  - Storage and database services
    - Storage
      - S3
    - Relational
      - RDS
        - 6 DB engines
      - Aurora
    - Non-relational
      - DynamoDB
- Identity Services
  - IAM - Identity and Access Mgmt
  - Directory Service
  - Amazon Cognito
- Monitoring and auditing services
  - CloudWatch
  - CloudTrail

.Net Developer Tools on AWS - 3min

- AWS SDK on .Net (available on Nuget)
- AWS Toolkit for Visual Studio-
- AWS Toolkit for Visual Studio Code-
- AWS Toolkit for JetBrains Rid- er-
- AWS Tools for PowerShell-
- AWS CLI-
- .NET Core CLI-
- AWS Toolkit for Azure DevOps-
- AWS CDK for .NET (Cloud Deve- lopme- nt Kit)

Practice Activity - 30-45min - (Windows Only)

- Deploy a sample .NET web appl- ication to the AWS Cloud using the AWS Toolkit for Visual Studio

**March 29, 2022**

First Course: Introduction to AWS Elastic Beanstalk

AWS Elastic Beanstalk provides you with a platform enabling you to quickly deploy your applications in the cloud. This course will briefly discuss the different components of the AWS Elastic Beanstalk solution, and perform a demonstration of the service.

One way to get your app into the cloud quickly is to use Elastic Beanstalk

- It is a PaaS (Platform as a Service)
- Allows quick deployment of your applications
- Reduces the management complexity (but you can maintain full control if you desire)
- Keeps control in your hands
- Supports a large range of platforms (inc .Net, Go, Python, Node but not Rust)
- You can simply focus on supplying your code, EB supplies everything else
- Deployment and Updates - very easy

In the second half of this short course, there is a demonstration of creating an application using Elastic Beanstalk.

**March 27, 2022**

I am throwing out a goal to at least look at 30 minutes or more of training every day going forward. Rain or shine - if it is early morning or 10pm, to not break the chain. Sometimes the hardest part is starting each day, but consistency wins in most things I put serious effort towards so I need to apply that here. Some days will be better than others. but I aim to write at least something here about what I learned or listened to.

Undoubtedly - there will be some training, maybe most of it, where I need to listen twice. So 30 hours of training should be doubled or tripled for my estimate of what I need to get myself close to a place for achieving readiness for this exam, and having a good grasp of the content. Let's make it simple and put my goal to be 100 hours of effort - and see where this gets me. 100 hours to go through the digital training, write notes on it, and practice.

My journal here I am hoping will be the rough notes for a series of blog articles I can then deliver out on Medium, and/or my blog or LinkedIn.

**March 26, 2022**

More information for sharing about this certification, I found this in the ramp-up guide:

> Learn how to build modern applications on AWS using microservices, containers, and serverless technologies using the programming language of
> your choice. You'll also be exposed to the foundational principles of DevOps and continuous integration/continuous delivery (CI/CD) on AWS. This
> guide can also help prepare you for the AWS Certified Developer – Associate certification exam. If you're interested specifically in digital courses and labs to help you develop these skills, explore the Developer Learning Plan at explore.skillbuilder.aws.

[AWS Ramp-Up Guide: Developer](https://d1.awsstatic.com/training-and-certification/ramp-up_guides/Ramp-Up_Guide_Developer.pdf)

There are several suggested Classroom Trainings included in this guide, however I am strictly looking to complete the digital training and assess how ready I would be to take the exam with the free practice exam they will provide.

The cost of the exam itself is $150. I would like to ask my company if I do pass the exam, would they be willing to reimburse me for this expense.

**March 25, 2022**

I am looking at the Developer Learning Plan on the AWS Skillbuilder site.

The AWS Developer Learning Plan is broken up into 18 courses, as follows (inc. duration of course):

- Intro to AWS Elastic Beanstalk (10min)
- Getting Started with .Net on AWS (1hr 30min)
- Accelerating Messaging Modernization with Amazon MQ (1hr 30min)
- Introduction to Containers (15min)
- Introduction to AWS Fargate (10min)
- Deep Dive on AWS Fargate: Building Serverless Containers at Scale (40min)
- Deep Dive on Container Security (30min)
- Amazon Elastic Container Service (ECS) Primer (30min)
- Amazon Elastic Kubernetes Service (EKS) Primer (1hr)
- Introduction to Serverless Development (4hr 25min)
- Getting into the Serverless Mindset (30min)
- AWS Lambda Foundations (1hr)
- Amazon API Gateway for Serverless Applications (1hr 15min)
- Amazon DynamoDB for Serverless Architecture (2hr)
- Architecting Serverless Solutions (3hr)
- Getting Started with DevOps on AWS (8hr)
- Build and Deploy APIs with a Serverless CI/CD (1hr 45min)
- Exam Readiness: AWS Certified Developer - Associate (Digital) (2hr)

**March 24, 2022**

I decided to share this goal with my FTE company manager as a personal goal for myself which could be beneficial for my overall performance rating at the end of the year. Doing so means I needed to put together some details for sharing this in my work goal planner. This did not take much time. An interesting item is that I have been told that my department is focused on trying to find a good way to get developers up to speed on AWS since this is the primary cloud platform being utilized. So, I have a task to share my knowledge on what I am doing with someone. Who knows, maybe it might be helpful for more than just myself to become a SME on AWS for my department.

**March 17, 2022**

I signed up to AWS's Certification Challenge this month, from an email invitation I received.

I have previously completed Azure training (did not pursue the certification exam however) back in 2021, when Microsoft had the superior free training available out of the big 3 cloud platforms (AWS, Azure, Google Cloud). I am glad to see that AWS has stepped up with their free training offerings as well, and I am hopeful the experience will be similar. I will be able to provide some insight on how Azure and AWS training compares, although to be fair to Microsoft I might want to re-visit their training as they may have made updates as well.

The incentive for the AWS challenge is that if I complete 30.5 hours of structured training by June 1st, then I am eligible for a free practice exam to help prepare for the real deal. 30.5 hours is a lot - it is a commitment to really learn the content so you have internalized it. It is doable and needs to be intentionally planned for that sake, given my schedule and other commitments. But beyond that - hey, challenge on!

Let me detail how this started. First, I received the email invitation. I would suspect that started based on my creating an AWS account and specifying something that indicated I was a software engineer.

**Anyway, this is what i received by email:**

<p align="center">
  <img src="assets/../Assets/AWSChallenge2022.png" alt="AWS Certification Challenge Invitation" width="100%"/>
</p>

**Next, after registering for the Associate Challenge, I received this:**

<p align="center">
  <img src="assets/../Assets/AWSChallenge-2.png" alt="AWS Certification Challenge Confirmation" width="100%"/>
</p>

**And this resulted in my getting access to the AWS Skill Builder Portal:**

<p align="center">
  <img src="assets/../Assets/AWSChallenge-3.png" alt="AWS Skill Builder Portal" width="100%"/>
</p>

And since AWS is apparently very interested in keeping you engaged in the challenge and your journey to certification, they have an active pipeline of information they will feed you via email once they know you are interested or signed up. Today I received a notice on a 2.5 hour seminar around the topic of the exam itself. I plan to register and at least record it, but hopefully attend it as well, depending on my day job commitments.

**Here is what they sent today:**

<p align="center">
  <img src="assets/../Assets/AWS%20Certification%20Seminar.png" alt="AWS Certification Seminar" width="100%"/>
</p>

To wrap up my first entry on this journey, I'll say I am excited and looking forward to gaining my certification in 2022. Who knows, this might lead to more AWS or even other cloud certifications. This first cert will be a milestone for sure.
