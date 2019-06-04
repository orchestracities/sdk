# An SDK for OrchestraCities APIs / FIWARE APIs

This small project allows the generation of OrchestraCities APIs / FIWARE APIs
clients from [OpenAPI 3.0](http://spec.openapis.org/oas/v3.0.2) specs.

You can find the specs in the `specs` folder.

There are a number of scripts to support the build, test and packaging:

-   `validate-specs.sh` checks that all files in the `specs` folder are valid
    [OpenAPI](http://spec.openapis.org/oas/v3.0.2) specs.
-   `lint-specs.sh` lints all files in the `specs` folder.
-   `generate-code.sh` generates the SDK code for the supported languages.
-   `build-javascript.sh` create a distribution for all `nodejs` SDKs.
-   `build-python.sh` create a distribution for all `python` SDKs.
-   `test-javascript.sh` run tests for all the `nodejs` SDKs.

In `examples` we offer we small examples to test the API.

Prerequisites:

-   [nodejs v10](https://nodejs.org/en/)
-   [python 3.7](https://www.python.org/)
-   [yq](https://mikefarah.github.io/yq/)

```bash
$ npm install
$ sh generate-code.sh
```
