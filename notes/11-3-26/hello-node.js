console.log("hello from node");

for (let i =0; i<100; i++){
    console.log(i**2);
}

import fs from "fs";

fs.readFileSync("testData.txt", "utf-8");
// utf8: how to interpret the data in that file 