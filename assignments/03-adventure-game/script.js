let roomBase = document.querySelector("#roomBase")

    let rooms = {

        rainForest :{
            name: "Rain forest room",
            description: "this room has a rain forest",
            linkedRooms: ["tundra"]
        },
        tundra: {
            name: "tundra room",
            description: "this room is a tundra",
            linkedRooms: ["desert"]
        },
        
        desert: {
            name: "desert room",
            descripton: "this room has a desert",
            linkedRooms: ["ocean"]
        },

        ocean: {
            name: "ocean",
            description: "you're underwater!",
            linkedRooms: ["rainForest"]
        }
        
    }

    let currentRoom = rooms["rainForest"]







// when button is clicked, next room is visualized 
function navButtonClicked(e) {

    let nextRoom = currentRoom.linkedRooms;
    
    visualizeRoom(currentRoom[linkedRooms]);

    gameButton.addEventListener("click", navButtonClicked);


    
    }
// i need to visualized linked room, because it would change from current to linked room: next

function visualizeRoom(room){

    // empty current room
    roomBase.innerHTML = ""; 

    // name
    let roomTitle = document.createElement("h1");
    roomTitle.innerHTML = room.name;
    roomBase.append(roomTitle);

    // description
    let roomDes = document.createElement("p");
    roomDes.innerHTML = room.description;
    roomBase.append(roomDes);

    // linkedRooms
    let roomLinked = document.createElement("h1");
    roomLinked.innerHTML = room.linkedRooms;
    roomBase.append(roomLinked);

    
                
                
                


}