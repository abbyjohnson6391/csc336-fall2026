console.log("SCRIPT LOADED!");

let roomBase = document.querySelector("#roomBase");

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
            linkedRooms: ["ocean"]
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

    // below: prints name of next room
    console.log(nextRoom); 


    // access all the values in the dict obj
    visualizeRoom(rooms[nextRoom]);

    gameButton.addEventListener("click", navButtonClicked);


    console.log("button clicked");

    currentRoom = rooms[nextRoom];


\

    
    }; 

// i need to visualized linked room, because it would change from current to linked room: next

function visualizeRoom(room){

    // empty current room
    roomBase.innerHTML = ""; 

    // name
    let roomTitle = document.createElement("h1");
    roomTitle.innerHTML = room.name;
    roomBase.append(roomTitle);
    console.log("room ran");


    // description
    let roomDes = document.createElement("p");
    roomDes.innerHTML = room.description;
    roomBase.append(roomDes);
    console.log("description ran");


    // linkedRooms
    // let roomLinked = document.createElement("h1");
    // roomLinked.innerHTML = room.linkedRooms;
    // roomBase.append(roomLinked);
    // console.log("link ran");


    
                
                
                


}

// game starts in a room
visualizeRoom(rooms["rainForest"])