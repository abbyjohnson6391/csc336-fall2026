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

    let years = [];
     for (x of json){
        years .push(x.release_date);
} // gathers all film rt scores in one array 




    console.log(years);
    
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
                    const index = context.dataIndex;
                    const value = context.dataset.data[index];
                    return value "1986" ? 'red' : 
                        "1988" ? 'orange' :    
                        "1989" ? 'yellow' :
                        "1991" ? 'green':
                        "1992" ? 'blue' :    
                        "1994" ? 'purple' :
                        "1995" ? 'pink':
                        "1997" ? 'black' :   
                        "1999" ? 'white' :
                        "2001" ? 'gray':
                        "2002" ? 'gold' :    
                        "2004" ? 'silver' :
                        "2006" ? 'light red':
                        "2008" ? 'light orange' :
                        "2010" ? 'light yellow':
                        "2011" ? 'light blue' :   
                        "2013" ? 'light green' :
                        "2014" ? 'light purple':
                        "2016" ? 'light pink' :    
                        "2021" ? 'turquoise' :
                       
                      
                      

},
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

// instantiate a new chart object in score_chart div
new Chart(score_chart, config);
   
};

// sets up the chart and initiates it-filled with data called by getFilms 
// which is called in setup
setup();




