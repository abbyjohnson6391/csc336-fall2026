// the array from which all data is drawn:
//  allCrafts = []


let productForm = document.querySelector("#productDataForm");
let nameInputField = document.querySelector("#nameInputField");
let currentProductsDiv = document.querySelector("#currentProductsDiv");

// localStorage works like a dictionary
let localStorageKey = "products";

            // DOMContentLoaded fires once the browser has finished reading
            // the whole HTML page. This is when we load any saved data and
            // draw it. 

            // added to the ENTIRE webpage DOCUMENT
            document.addEventListener('DOMContentLoaded', (event) => {
                // localStorage: allows web apps to STORE key value data directly w/in user browser
                // getItem hands back the saved STRING from localStorage
                
                // reads data from local storage
                let localStorageData = localStorage.getItem(localStorageKey);
                console.log(localStorageData); // String!

                // Only parse if there's something to parse. Without this
                // check, the first visit turns userData into null, and then
                // forEach and push both crash.
                if (localStorageData !== null) {
                    // Parse the string of the data BACK INTO into js array

                    // before: a string that encompasses an "array"
                    // after: a REAL array (individual items with "strings")
                    allCrafts = JSON.parse(localStorageData);

                    // JSON is notation for storing and passing data 
                }
                console.log(allCrafts);
                updateUserList(allCrafts);
            });

            // submit or enter listener 
          
            productForm.addEventListener("submit", (event) => {
                // prevents page reload
                event.preventDefault();

                // re-initiates var when new data
                // collects productForm data
                let productFormData = new FormData(productForm);
                let newProduct = {};


                // for each sumbit: grabs name, price, descript, category
                productFormData.forEach((value, name) => {
                        console.log(name, value, typeof value);
                        newProduct[name] = value;
                        // push all the attributes of the new product
                    
                });

                 // add new product
                 allCrafts.push(newProduct);

                // update the user list with the new user data
                updateUserList(allCrafts);

                // clear form
                productForm.reset();
            });

            // Draws the list from the data, then saves the data. 
            // called on by event listeners

            function updateUserList(data) {
                // empty old list
                currentProductsDiv.innerHTML = "";

                // Build a NEW <ul> and put one <li> in it per product.
                let productList = document.createElement("ul");
                currentProductsDiv.append(productList);
                data.forEach((x) => {
                    // for each item in the array (data) make a list item, add to div, and set value to user
                    let productItem = document.createElement("li");
                    productList.append(productItem);
                    // ERROR: x is an object so cant be stringified
                    // show each dict value separately  
                    productItem.innerHTML = `
                    <p>Name: ${x.newNameInput}</p>
                    <p>Price: ${x.productPrice}</p>
                    <p>Description: ${x.productDescription}</p>
                    <p>Category: ${x.productCategory}</p>
                    <p>Image: ${x.productPic}</p>

                    
                    `
                });

                // back to strings for local storage
                let jsonStringVersionOfData = JSON.stringify(data);
                // array
                console.log(data);
                // text form of array
                console.log(jsonStringVersionOfData);

                // syntax: localStorage.setItem(key, value)-> SAVES data to local storage
        
                localStorage.setItem(localStorageKey, jsonStringVersionOfData);
            }
   
