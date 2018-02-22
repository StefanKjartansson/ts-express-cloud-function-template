# ts-express-cloud-function-template

Project template for spinning up [express](https://expressjs.com/) powered [cloud functions](https://cloud.google.com/functions/) written in [TypeScript](https://www.typescriptlang.org/) and deployed via [circleci](https://circleci.com).

# Pre-reqs
- Install [Node.js](https://nodejs.org/en/)
- Signup for [circleci](https://circleci.com)
- [GCP](https://cloud.google.com/) account 

# Getting started
- Clone the repository
```
git clone --depth=1 https://github.com/StefanKjartansson/ts-express-cloud-function-template.git <project_name>
```
- Install dependencies
```
cd <project_name>
yarn install
```
- Update package.json with <project_name> and related information.
- Write code

# Configuring services & build

- In GCP, enable cloud functions for your project 
- Export service account key with cloud function developer permissions
- Configure project in [circleci](https://circleci.com) and add the following environment variables:
```
GCP_AUTH=Value should be base64 encoded service account key "base64 <your-service-account.json>"
GCP_PROJECT=Your project id from GCP.
GCP_FUNCTION=The name of the function in GCP.
```
- Push change and circle should deploy your function.
