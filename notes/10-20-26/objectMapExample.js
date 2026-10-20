document.addEventListener("DOMContentLoaded", ( => {
    let data = [
        {
            name: "Mike"
        },

        {
            name: "Claire"
        }
    ]

    let lowerCaseData = data.map( (obj) => obj.name.toLowerCase(){
        // tranformation
        obj.name = obj.name.toLowerCase();
        return obj;

    })

    console.log(data);
}))