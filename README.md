# angular-aurelia
This is a sample project for comparison of [Angular](https://angular.io/) and [Aurelia](http://www.aurelia.io/) frameworks

## Running The Apps

To run the apps locally, follow these steps:
### Run apps
1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.

2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm registry config github` and following the prompts.

3. Ensure that [Http server](https://github.com/indexzero/http-server) is installed. This provides the server on which the app runs. If you need to install it, use the following command:

```shell
  npm install -g http-server
  ```
4. Ensure that [TypeScript](http://www.typescriptlang.org/) is installed. This provides the ability to compile application code to plain JavaScript. If you need to install it, use the following command:

```shell
  npm install -g typescript
  ```
5. Run angular2 app
    1. From the angular2 folder under the project root, execute the following command:

        ```shell
        npm install
        ```
    2. From the same folder execute the following command:

        ```shell
        npm start
        ```
This will build the app and run http server to [http://localhost:3333](http://localhost:3333)
  
6. Run aurelia app
    1. From the aurelia folder under the project root, execute the following command:

        ```shell
        jspm install -y
        ```
    2. From the same folder execute the following command:

        ```shell
        npm start
        ```
This will run http server to [http://localhost:3333](http://localhost:4444)