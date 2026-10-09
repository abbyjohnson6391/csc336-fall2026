let rootDiv = document.createElement("div");
document.body.append(rootDiv)

let genreData = ["rock", "pop", "hip hop", "jazz", "classical", "audiobook"];

let albums = [

    {
        artist: "metalica",
        album: "black album"
    },

    {
        artist: "the avalanches",
        album: "since I left you"
    },

    {
        artist: "led zeplin",
        album: "II"
    },

    {
        artist: "stevie wonder",
        album: "inner visions"
    }]

for (let album of albums){

}




let selectElement = document.createElement("select");
rootDiv.append(selectElement);

selectElement.addEventListener("change", e => {

    console.log(selectElement.value);
})

for (let genre of genreData){
    let optionElement = document.createElement("option");
    optionElement.value = genre;
    optionElement.innerHTML = genre;
    selectElement.append(optionElement);
    

}