# haste-pls
An npm package to upload code to a pastbin.

## Example 
```js
const binPls = require("haste-pls");
const bin = new binPls()
const postBin = async (content) => {
    bin.setContent(content);
    const res = await bin.post();
    console.log(res);
}  

postBin("hello hastebin from haste-pls");
```