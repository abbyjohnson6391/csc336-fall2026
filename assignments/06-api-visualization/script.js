let score_chart = document.querySelector("#score_chart");

async function getFilms () {
    // grabs data from ghibli api
    let response = await fetch("https://ghibliapi.vercel.app/films");
    // grabs json of the data
    let json = await response.json()  
    console.log("api call")
    console.log(typeof[json]);
    // for each element of array, console print title and tomato score
    for (x of json){
        console.log(x.title);
        console.log(x.rt_score);


    }
    
    return json;

};

async function setup() {

    // calling getFilms function to gather the data
    let json = await getFilms();

    // empty arrays
    let titles = []
    let scores = []

    for (x of json){
        titles.push(x.title);
} // gathers all filmtitles in array

    for (x of json){
        scores.push(x.rt_score);
} // gathers all film rt scores in one array 
    

    // console.log(typeof(titles));

    const config = {
        type: 'bar', // bar chat
        data: {
            labels: titles, // movie name on x axis
            datasets: [{
                label: 'Rotten Tomatoes Scores',
                data: scores,
                backgroundColor: 'rgba(49, 10, 74, 0.6)',
            }]},
            
        
        options: {
            responsive: true,
            plugins: {
                legend: {
                position: 'left',
                },
            title: {
                display: true,
                text: 'Ghibli Tomato Scores'
      }
    }
  }
}  

// instantiate a new chart object
new Chart(score_chart, config);
   
};
// sets up the chart and initiates it-filled with data called by getFilms 
// which is called in setup
setup();




