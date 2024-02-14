const movies = [
    {
        "title" : "Pardes",
        "genre" : "Romance",
        "rating" : 4.5
    },
    {
        "title" : "Taare Zamin Par",
        "genre" : "Inspirational",
        "rating" : 7
    },
    {
        "title" : "Dil Toh Pagal Hai",
        "genre" : "Romance",
        "rating" : 2.5
    },
    {
        "title" : "Darr",
        "genre" : "Thriller",
        "rating" : 9
    },
     {
        "title" : "Forensic",
        "genre" : "Thriller",
        "rating" : 8.5
    }
    ];
    movies.sort((m1, m2) => {
        return m1.title.localeCompare(m2.title);
    });
   
    console.log(movies);
   
    const ratingBelowFiveMovies = movies.filter((m)=>{return m.rating<5});
    console.log(ratingBelowFiveMovies);
   
    const highRatedMovies = movies.filter((m) => m.rating >8);
    console.log(highRatedMovies);
   
    movies.forEach((o) => {
        console.log(`Title : ${o.title},
        Genre : ${o.genre},
        Rating : ${o.rating}`)
    } );