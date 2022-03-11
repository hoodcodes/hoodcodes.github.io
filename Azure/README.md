[Home](../) > [Cloud](../CloudDev/)

# Azure Reference

### Reference Links

-

### Azure Pricing Notes Oct 2019

https://docs.microsoft.com/en-us/azure/azure-functions/functions-scale#consumption-plan

When you're using the Consumption plan, instances of the Azure Functions host are dynamically added and removed based on the number of incoming events. This serverless plan scales automatically, and you're charged for compute resources only when your functions are running. On a Consumption plan, a function execution times out after a configurable period of time.

**Azure Functions pricing**

Azure Functions consumption plan is billed based on per-second resource consumption and executions. Consumption plan pricing includes a monthly free grant of 1 million requests and 400,000 GB-s of resource consumption per month per subscription in pay-as-you-go pricing across all function apps in that subscription. Azure Functions Premium plan provides enhanced performance and is billed on a per second basis based on the number of vCPU-s and GB-s your Premium Functions consume. Customers can also run Functions within their App Service plan at regular App Service plan rates.

**App Service Plan Rates:**

https://azure.microsoft.com/en-us/pricing/details/app-service/windows/

- hours in 1 year: 8760 ave monthly hours: 730
- Standard: 0.10/hour ( $876/year $73/mo. )
- Premium: 0.20/hour ( $1,752/year $146/mo. )
- Isolated: 0.40/hour ( $3,504/year $292/mo. )

### Azure CI/CD Notes

CI is the process of automating the buils and testing of code every time a team member commits changes to version control.

Each time we run a pipeline in Azure, we get a fresh virtual machine.

a pipeline is made up of steps called Tasks (1).

- Tasks abstract away the underlying details.

the pipeline runs when you submit code changes (2).

a build agent builds or deploys the code (3).

the final product of the pipeline is a build artifact (4).

- artifact: the smallest compiled unit that we need to test or deploy the app.

### Azure Functions Notes

Important: Do not mix local development with portal development in the same function app. When you create and publish functions from a local project, you should not try to maintain or modify project code in the portal.

**Command Line Tools:**
Azure Functions Core Tools lets you develop and test your functions on your local computer from the command prompt or terminal. Your local functions can connect to live Azure services, and you can debug your functions on your local computer using the full Functions runtime. You can even deploy a function app to your Azure subscription.

**To install (BASH):**

**Windows:**  
npm install -g azure-functions-core-tools

**MacOS: (Homebrew): **
brew tap azure/functions
brew install azure-functions-core-tools

**Folder Structure for Functions:**
https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference#folder-structure

In version 2.x of the Functions runtime, all functions in the function app must share the same language stack.

Benefits of Serverless Computing: https://blog.sysfore.com/what-is-serverless-computing/
