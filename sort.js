let arr = [
    {cartoon:'Sonic the Hedgehog', yearReleased:1993, genres:'adventure'},
    {cartoon:'Teen Titans', yearReleased:2003, genres:'thriller'},
    {
        cartoon: 'Pokemon',
        yearReleased: 1996,
        genres: 'video game',
    },
    {cartoon: 'Bojack Horseman', yearReleased: 2014, genres:'comedy'},
    {cartoon: "Bob's Burgers", yearReleased: 2011, genres:  "adult"},
    {cartoon: "Avatar the Last Airbender", yearReleased: 2005, genres:'adventure'},
    {cartoon: "Yugioh", yearReleased: 1999, genres: "adventure"},
    {cartoon: 'SpongeBob SquarePants', yearReleased: 1989, genres: 'comedy'},
    {cartoon: 'Tangled', yearReleased: 2010, genres: 'adventure'},
    {cartoon: 'Tom and Jerry', yearReleased: 1940, genres: 'comedy'},
    { cartoon: 'Stewie Griffin', yearReleased: 1999, genres: 'adult'},
    {cartoon:'Ben 10', yearReleased:2005,genres:'adventure'},
    {
        cartoon: `Rick and Morty`, yearReleased: 2013, genres: 'dark'
    },
    {cartoon:'The Spectacular Spider-Man', yearReleased:2008, genres:'superhero'}
]

//Sorting numbers
arr.sort((a,b)=>a.yearReleased-b.yearReleased);
console.log(arr);

//Sorting strings
arr.sort((a,b)=>a.cartoon.toLowerCase()>b.cartoon.toLowerCase() ? 1 : -1)
console.log(arr);
