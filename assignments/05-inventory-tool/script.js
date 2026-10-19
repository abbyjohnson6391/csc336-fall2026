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
                // line below: CONNECTS matches keys betwen js files
                // makes newProduct a dict where the retrieved (get) value
                // from form matches the attribute defined in 04-ecommerce
                let newProduct = {
                    // grab directly from id form
                            name: productFormData.get("newNameInput"),
                            price: Number(productFormData.get("productPrice")),
                            description: productFormData.get("productDescription"),
                            category: productFormData.get("productCategory"),
                            image: productFormData.get("productPic")};

                // my validation rule
                // if price too high...
                // then newproduct not added to allCrafts 
                // and list not updated
                // and newProduct not rendered
                if (newProduct.price > 35) {
                    console.log("price too high!")
                    return;

                }

                 // error check
                 console.log("New product:", newProduct);
                 // add new product (1 at a time)
                 allCrafts.push(newProduct);

                // update the user list with the new user data
                updateUserList(allCrafts);

                render(newProduct);

                // clear form
                productForm.reset();
                });
            // Draws the list from the data, then saves the data. 
            // called on by event listeners

            function updateUserList(data) {
                // empty old list
                currentProductsDiv.innerHTML = "";

                // Build a NEW <ul> and put one <li> in it per product.
                // let productList = document.createElement("ul");
                // currentProductsDiv.append(productList);
                data.forEach((x) => {
                    // for each item in the array (data) make a list item, add to div, and set value to user
                    // let productItem = document.createElement("li");
                    // productList.append(productItem);
                    // ERROR: x is an object so cant be stringified
                    // show each dict value separately  

                    x.innerHTML = `
                        <p>Name: ${x.name}</p>
                        <p>Price: ${x.price}</p>
                        <p>Description: ${x.description}</p>
                        <p>Category: ${x.category}</p>
                        
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

   let resetButton = document.querySelector("#resetButton");

   resetButton.addEventListener("click", (event) => {
    
    // need the key
    localStorage.removeItem("products");
    console.log("clearing");

   }); 

