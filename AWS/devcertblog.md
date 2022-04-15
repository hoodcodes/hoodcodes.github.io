[Home](../../) > [Cloud](../CloudDev/) > [AWS](./)

<p align="center">
  <img src="assets/../Assets/AWS%20Developer.png" alt="AWS Certified Developer" width="25%"/>
</p>

# AWS Developer Certification Blog

Chronicaling my journey to getting my AWS Developer Cloud Associate certification here in 2022.

These are rough notes which I may use to help create a polished Article series on the topic once I am done.

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

# Create resources with AWS CloudFormation - provisioning resources

- This took about 10 minutes to complete

# Set up AWS Cloud9 IDE Workspace

- Setting up 4 terminals to run commands
- This took a while - it was installing and updating:
  - Installing jq...
  - Updating java to 1.8...
  - Updating maven to 3.6... <= this is where it seemed to get hung. I shut down the terminal and ran commands again. Same experience. waiting...
    - googling about maven update/installs - there is talk that this can take a long time. I will let it sit and work after my 3rd attempt.

# Creating a Message Broker

- This setup time is stated to take 25 minutes, however it took a lot less - maybe 10.

At this point of the lab, I am going to pause (at step 5.7 and also waiting for the IDE to get set up). I will return later.

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
