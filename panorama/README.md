# Panorama (POC)

This is a Proof-of-concept application that's purpose is to aggregate multiple zgw components into one coherent API.

## Getting Started

### Requirements

Make sure you have the following tools installed on your system:

* **NodeJS**
  * LTS 20 (iron)
* **pnpm**
  * 9.15.0

### Code generation

This application makes use of Wudnergraph code generation for the example app and the tests.
Code generation is done as part of most scripts, but can always be done manually by running the following shell command:
```shell
   pnpm codegen
```

### Running the Wundergraph server

1. Install the dependencies:
    ```shell
   pnpm install
   ```
2. Run the server with:
    ```shell
   pnpm wundergraph
   ```

Wundergraph will start up the server and generate code if necessary.
The server will become available at [http://localhost:9001](http://localhost:9001).

### Running the example App:

1. Install the dependencies:
    ```shell
   pnpm install
   ```
2. Run the complete example in one command:
    ```shell
   pnpm dev
   ```

After a while, a new browser tab will open,
and you can start exploring the application.
If no tab is open, navigate to [http://localhost:5000](http://localhost:5000).

Running WunderGraph will automatically introspect the data-source and generate an API for you.
You can add more Operations (e.g. Queries or Mutations) by adding more "\*.graphql" files to the directory `./wundergraph/operations`.
Each file becomes an Operation. The Operation name is not relevant, the file name is.

### Cleanup

Use the following script to remove any generated code and compiled code:
```shell
   pnpm clean
   ```