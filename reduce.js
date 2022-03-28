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

//Reduce - mainly used for summing data up or grouping data together
let total = 0;
for(let item of arr){
    total += item.yearReleased;
}
//console.log(total);
//console.log(Math.ceil(total/arr.length));

let totalYears = arr.reduce((acc,item)=>acc+item.yearReleased,0); //acc=0
//console.log(totalYears)


let genres={};
for(let show of arr){
    if(genres[show.genres]){
        genres[show.genres].push(show);
    } else{
        genres[show.genres] = [show];
    }
}
//console.log(genres);
let obj = {cartoon: 'Bojack Horseman', yearReleased: 2014, genres:{genre:'comedy'}}
let cartoonGenres = arr.reduce((acc, show)=>{   ///acc={}
    if(acc[show.genres]){  ///acc['adventure']?      acc={adventure:[]}?
        acc[show.genres].push(show);
    } else{
        acc[show.genres] = [show];
    }
    return acc;
},{});

console.log(cartoonGenres);



