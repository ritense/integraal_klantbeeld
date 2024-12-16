# Panorama (POC)

This is a Proof-of-concept application that's purpose is to aggregate multiple zgw components into one coherent API.

## Getting Started

### Requirements

Make sure you have the following tools installed on your system:

* **NodeJS**
  * LTS 20 (iron)
* **pnpm**
  * 9.15.0


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