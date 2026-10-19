// array
let allCrafts = []

let craftStore = {
    fabric: {
            name: "Fabric",
            price: 5,
            description: "Used mainly for sewing and quilting",
            image: "04-ecommerce/fabric.png",
            category: "materials"
            
        },
    hot_glue: {
        name: "Hot glue",
        price: 8,
        description: "Used to glue heavy materials together",
        image: "04-ecommerce/hot_glue.png", 
        category: "tools"

    },

    beads: {
        name: "Beads",
        price: 6,
        description: "Used for decoration or embellishment",
        image: "04-ecommerce/beads.png", 
        category: "materials"
    },

    fabric_cutter: {
        name: "Fabric cutter",
        price: 12,
        description: "Used to cut fabric and other materials with precision",
        image: "04-ecommerce/cutter.png",
        category: "tools"
    },

    paints:{
        name: "Paints",
        price: 16,
        description: "Adds vibrant color to a variety of crafts",
        image: "04-ecommerce/paints.png",
        category: "materials"
    },

    ruler: {
        name: "Ruler",
        price: 3,
        description: "Used to make straight lines",
        image: "04-ecommerce/ruler.png",
        category: "tools"
    }

}; 


// add to array
allCrafts.push(craftStore.fabric);
allCrafts.push(craftStore.hot_glue);
allCrafts.push(craftStore.beads);
allCrafts.push(craftStore.fabric_cutter);
allCrafts.push(craftStore.paints);
allCrafts.push(craftStore.ruler);

// craftStore.forEach.push(allCrafts);

function render(x){

    let cartDiv = document.querySelector("#cart")
    cartDiv.classList.add("display"); 

    // craft cards inside container
    let craftDiv = craftContainer;

    // individuals divs inside craftDiv
    let craftCard = document.createElement("div");
    craftCard.classList.add("craftCard");

    //name + description live together in their own div so flexbox
    //can put the image off to the side
    let infoDiv = document.createElement("div");

    // create H1
    let nameHeading = document.createElement("h1");
    // make content the name
    nameHeading.innerHTML = x.name
    // add to info div
    infoDiv.append(nameHeading);

    let descriptionParagraph = document.createElement("p");
    // maps the code to a craft item WITHIN the array
    descriptionParagraph.innerHTML = x.description;
    infoDiv.append(descriptionParagraph);

    craftDiv.append(infoDiv);

    let priceParagraph = document.createElement("p");
    priceParagraph.innerHTML = ("Price is: " + x.price);
    craftDiv.append(priceParagraph);

    let imageElement = document.createElement("img");
    imageElement.src = x.image;
    craftDiv.append(imageElement);

    let category = document.createElement("p");
    category.innerHTML = ("Type of craft: "+ x.category);
    craftDiv.append(category);

    // add to cart button

    let cartButton = document.createElement("button");
    cartButton.innerHTML= ("add " + x.name + " to cart");

    // everything from this product gets its own card
    craftCard.append(infoDiv);
    craftCard.append(priceParagraph);
    craftCard.append(imageElement);
    craftCard.append(category);
    craftCard.append(cartButton);

    craftDiv.append(craftCard);

    // DISPLAYING PRICE

    // checkbox
    let craftCheck = document.createElement("input");
    craftCheck.type = "checkbox";
    craftCheck.craft = x;
    craftCard.append(craftCheck);

    craftCheck.addEventListener("change", e => {

        // toggle class only to selected craft card
        craftCard.classList.toggle("checked", craftCheck.checked);

    })

// ADD {ITEM} BUTTON TO CART E.LISTENER - BELOW

    // outside eventListener so it's not created every click
    total_price = 0;  

    cartButton.addEventListener("click", e =>{

    // individual divs inside cartDiv: so each added item is on its own line
    // new line created every event
        let addedItem = document.createElement("div");
    
    // display of added item
        addedItem.append(x.name + " : $" + x.price);

    // addedItems inside div
        let cartItems = document.querySelector("#cartItems");
        cartItems.append(addedItem);

        item_price = x.price

        // add to total price
        total_price += item_price; 
        console.log(total_price);

        let priceCart = document.querySelector("#priceCart");

        priceCart.innerHTML = ("Total price: $ " + total_price);

   })

// ADD {ITEM} BUTTON TO CART E.LISTENER - ABOVE

};

// operates on each craft item WITHIN the array
// allCrafts.forEach(render);

// ADD SELECTED BUTTON CODE

let addSelectedButton = document.querySelector("#addSelectedButton");

addSelectedButton.addEventListener("click", e =>{
    // finds all checked
    let checks = document.querySelectorAll("#craft input[type='checkbox']");
    
    console.log(checks); // shows a NodeList so must convert to array using ...

    checkedItems = [...checks];

    // filtering for items with the .checked class
    checkedItems = checkedItems.filter(x => x.checked);

    // now: what to do with the selected items?

    checkedItems.forEach(x => {

        // selectedItem is craft object of checkedItems
        let selectedItem = x.craft;

        let addedItem = document.createElement("div");
        addedItem.innerHTML = (selectedItem.name + " : $" + selectedItem.price); 

        // need to re-reference individuals divs inside cartDiv
        // cartDiv -> cartItems (div) -> addedItems (divd)
        let cartItems = document.querySelector("#cartItems");
        cartItems.append(addedItem);

        total_price += selectedItem.price;
        // does it matter that this is AFTER the html stuff 
        
        // uncheck
        x.checked = false

       })

        // same process as inside the E.Listener in render
        let priceCart = document.querySelector("#priceCart");
        priceCart.innerHTML = ("Total price: $ " + total_price)
    })

// ADD SELECTED BUTTON CODE

// CATEGORY FILTER CODE

let selectCategory = document.createElement("select");
selectCategory.innerHTML = ("select");

let craftDiv = document.querySelector("#craft");
let selectCraftDiv = document.createElement("div");
craftDiv.append(selectCraftDiv);
selectCraftDiv.append(selectCategory)

let craftContainer = document.createElement("div");
craftDiv.append(craftContainer);

let optionElement1 = document.createElement("option");
let optionElement2 = document.createElement("option");
let optionElement3 = document.createElement("option");


optionElement1.value = "materials";
optionElement2.value = "tools";
optionElement3.value = "all";


// this is the text that appears on the select
optionElement1.innerHTML = "materials";
optionElement2.innerHTML = "tools";
optionElement3.innerHTML = "all";


selectCategory.append(optionElement1);
selectCategory.append(optionElement2);
selectCategory.append(optionElement3);

// default value
selectCategory.value = "all"; 


//filtering from select

// nothing's displayed right away: bc render not called until [select] changed
selectCategory.addEventListener("change", e=>{

    craftContainer.innerHTML = "";
    let displayCategories;
    if (selectCategory.value == "all"){
        displayCategories = allCrafts;
    } else{
        displayCategories = allCrafts.filter(x => x.category == selectCategory.value);
    }
    displayCategories.forEach(render);

})
    // filtering from select

// CATEGORY FILTER CODE 




