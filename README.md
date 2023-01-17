# MadOpsIO

> A Vue.js project


## How to run manually

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### Refinement

On the digital ocean, the application is launched using docker, but it is not possible to run it locally using docker, since the application automatically redirects https.


## Infrastructure

The application is launched manually on the Digital Ocean cloud provider service.

Infrastructure prepared manually based on Digital Ocean Apps Platform `(PaaS)`.

More info in private GitHub repository [madopsio-infra](https://github.com/maddevsio/madopsio-infra/tree/main).


## CI/CD

There are two main stages in CI/CD

* build
* deploy

### Stages description

Build stage:
> Preparing a GitHub `short SHA` for tagging image.
>
> Login to DockerHub; pulling cached image to GitHub runner, building the docker image, and pushing the built image under the `staging` and `short SHA` tags to the `DockerHub`.

Deploy stage:
> Deployment to App Platform is carried out using `GitHub action`.
The docker image with the latest commit short SHA pulls from the registry and automatically starts.


### Workflow description

- Automatic `build` and `deploy` to the App Platform starts after `push` to the `master` branch.

### Work with environment variables:

Now the principle of working with secrets remains uncertain.

__This needs to be fixed.__
