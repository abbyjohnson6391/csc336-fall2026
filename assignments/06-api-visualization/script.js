let score_chart = document.querySelector("#score_chart");

async function getFilms () {
    // grabs data from ghibli api
    let response = await fetch("https://ghibliapi.vercel.app/films");
    // grabs parsed json data
    let json = await response.json()  
    // console.log("api call")
    console.log(typeof[json]);
    // for each element of array, console print title and tomato score
    for (x of json){
        console.log(x.title);
        console.log(x.release_date);
    }
    
    // otherwise we can't work with the data
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

    colors = [
        "red", "orange", "yellow", "green", 
        "blue", "purple", "pink", "black",
        "white", "gray", "gold", "silver",
        "light red", "light orange", "light yellow",
        "light blue", "light green", "light purple", 
        "light pink", "turquoise"]; 


    const config = {
        type: 'bar', // bar chat
        data: {
            labels: titles, // movie name on x axis
            datasets: [{
                label: 'Rotten Tomatoes Scores',
                data: scores,
                backgroundColor: function(context) {

                    let years = [];
                    for (x of json) {
                         years.push(Number(x.release_date))} // gathers all film rt scores in one array 

                    const index = context.dataIndex; // position of bar currently being drawn
                    const year = years[index]; // for bar being drawn, get year

                    return year === 1986 ? 'red' :
                    year === 1988 ? 'orange' :
                    year === 1989 ? 'yellow' :
                    year === 1991 ? 'green' :
                    year === 1992 ? 'blue' :
                    year === 1994 ? 'purple' :
                    year === 1995 ? 'pink' :
                    year === 1997 ? 'black' :
                    year === 1999 ? 'white' :
                    year === 2001 ? 'gray' :
                    year === 2002 ? 'gold' :
                    year === 2004 ? 'silver' :
                    year === 2006 ? '#ff9999' :
                    year === 2008 ? '#ffcc99' :
                    year === 2010 ? '#ffff99' :
                    year === 2011 ? '#99ccff' :
                    year === 2013 ? '#99ff99' :
                    year === 2014 ? '#cc99ff' :
                    year === 2016 ? '#ffb6c1' :
                    'turquoise';
            }
                       
                    
}],
            },
            
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
};  

// instantiate a new chart object in score_chart div
new Chart(score_chart, config);
   
};

// sets up the chart and initiates it-filled with data called by getFilms 
// which is called in setup
setup();




