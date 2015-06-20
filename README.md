

# VelocityDemo

This stack's purpose is to demonstrate the Stacks 3 API for linking and including JS and CSS libs.

### Using the library API
The new libraries API allows you to define the name, type, and filename of libraries that you include in your stack.

- Key: `name` *string* The name of the library. This will be used to match other stacks that include the same library.
- Key: `type` *string* The type of the library:  `css`, `js`.
- Key: `filename` *string* The filename of the included library within the Resources folder of your stack. ***DO:*** include the file extension of the library. ***DO NOT:*** include the path.

### How do these get used

##### Exporting the library
The included libraries are treated much like Site Assets. A single copy of the library asset is exported to the rw_common site asset folder. Any stacks that use the same `name` key will share the same library asset.

##### HTML in the `<HEAD>`
A single library include line is added to each page that uses the stack and needs the library no matter how many stacks request it.
