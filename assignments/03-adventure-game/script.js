
let roomBase = document.createElement("div");
let newWorld = document.createElement("div");

document.body.append(roomBase);
document.body.append(newWorld);



    let rooms = {

        rainForest :{
            name: "Rain forest room",
            description: "this room has a rain forest",
            linkedRooms: ["tundra"] 
            // linked rooms stores key of room, not room itself
        },
        tundra: {
            name: "tundra room",
            description: "this room is a tundra",
            linkedRooms: ["desert"]
        },
        
        desert: {
            name: "desert room",
            description: "this room has a desert",
            linkedRooms: ["ocean"],
            password: "Sahara"
        },

        ocean: {
            name: "ocean",
            description: "you're underwater!",
            linkedRooms: ["rainForest"]
        }
        
    };

    let currentRoom = rooms["rainForest"];


// when button is clicked, next room is visualized 
function navButtonClicked(e) {

   

    // below: grab name of next room 
    let nextRoom = currentRoom.linkedRooms[0];

    // below: prints name of next room as place checker
    console.log(nextRoom); 


    // access all the values in the dict obj
    visualizeRoom(rooms[nextRoom]);

    // this line was calling event listener; messing my code
    // somehow; which is likely desert never showed up because
    // function was interrupted by second 'listen'
    // gameButton.addEventListener("click", navButtonClicked);


    console.log("button clicked");

    currentRoom = rooms[nextRoom];
    // currentRoom: variable to keep track of what room the player is in 
    console.log("current room is:" + currentRoom.name);


   



    
    }; 

// i need to visualized linked room, because it would change from current to linked room: next

function visualizeRoom(room){

    // empty current room
    roomBase.innerHTML = ""; 

    // name
    let roomTitle = document.createElement("h1");
    roomTitle.innerHTML = room.name;
    console.log(roomTitle);
    roomBase.append(roomTitle);
    console.log("room ran");


    // description
    let roomDes = document.createElement("p");
    roomDes.innerHTML = room.description;
    roomBase.append(roomDes);
    console.log("description ran");

    // CHALLENGE; A hidden password


    if (room.password){

        // make the question
        let question = document.createElement("p");
        question.innerHTML = "What is the largest hot desert in the world?";
        roomBase.append(question)

        // user input

        let user_answer = document.createElement("input");
        roomBase.append(user_answer);

        let trivia_button = document.createElement('button');
        trivia_button.innerHTML = "ready to answer?!"
        roomBase.append(trivia_button);

        // make the password
        let password = document.createElement("p");
        password.innerHTML = room.password;

        // must check answer upon click
        trivia_button.addEventListener("click", function() {

        if (user_answer.value === room.password){
            let correctAnswer = document.createElement("p");
            correctAnswer.innerHTML = "Correct Answer! You win another fun desert fact: There are many cold deserts in the world, like the Gobi (below). Only 20% of deserts in the world are covered by sand."
            let correctPicture = document.createElement("img");
            correctPicture.src = "GettyImages-171760569.webp";
            roomBase.append(correctAnswer);
            roomBase.append(correctPicture)
        } else {
            let wrongAnswer = document.createElement("p");
    
            wrongAnswer.innerHTML = "sorry! try again";
            roomBase.append(wrongAnswer);
        }
    })


}




}

// game starts in a room
visualizeRoom(rooms["rainForest"])

// CHALLENGE; AN INVENTORY 

function makeArray(array){

   
    
    // sentence to inform user
    let newSentence = document.createElement("p");
    newSentence.innerHTML = "Enter a world you'd like to see added here!"
    newWorld.append(newSentence);
    
    // space for input 
    let userNew = document.createElement("input");
    newWorld.append(userNew);

    // making button for interactivity
    newWorldButton = document.querySelector("#newWorldButton");
    newWorld.append(newWorldButton)

    // making and appending array of new world suggestions
    let newList = document.createElement("ul");
    newWorld.append(newList)



   newWorldButton.addEventListener("click", function() {

        array.push(userNew.value); 

        let newListItem = document.createElement("li");
        newListItem.innerHTML = userNew.value;
        newList.append(newListItem);
        userNew.value = "";

})



}

// MAKING A DYNAMIC ARRAY

let newWorldarray = [];
makeArray(newWorldarray);


