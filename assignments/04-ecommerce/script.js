
// array
let allCrafts = []

let craftStore = {
    fabric: {
            name: "Fabric",
            price: 5,
            description: "Used mainly for sewing and quilting",
            image: "fabric.png",
            category: "materials"
            
        },
    hot_glue: {
        name: "Hot glue",
        price: 8,
        description: "Used to glue heavy materials together",
        image: "hot_glue.png", 
        category: "tools"

    }
}; 

// add to array
allCrafts.push(craftStore.fabric);
allCrafts.push(craftStore.hot_glue);

function render(x){

    let craftDiv = document.createElement("div");
    craftDiv.classList.add("craftData");

    document.body.append(craftDiv); 


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
    category.innerHTML = x.category;
    craftDiv.append(category);

};

// operates on each craft item WITHIN the array
allCrafts.forEach(render);


