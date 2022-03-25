let arr = [
    {cartoon:'Sonic the Hedgehog', yearReleased:1993, genres:['video game', 'adventure']},
    {cartoon:'Teen Titans', yearReleased:2003, genres:['thriller','teen sitcom','science fiction','animation']},
    {
        cartoon: 'Pokemon',
        yearReleased: 1996,
        genres: ['cartoon', 'video game', 'card game']
    },
    {cartoon: 'Bojack Horseman', yearReleased: 2014, genres:['dark comedy', 'satire']},
    {cartoon: "Bob's Burgers", yearReleased: 2011, genres: ["sitcom", "adult"]},
    {cartoon: "Avatar the Last Airbender", yearReleased: 2005, genres:['anime', 'adventure']},
    {cartoon: "Yugioh", yearReleased: 1999, genres: ["card game", "adventure"]},
    {cartoon: 'SpongeBob SquarePants', yearReleased: 1989, genres: ['comedy', 'children']},
    {cartoon: 'Tangled', yearReleased: 2010, genres: ['fantasy', 'adventure']},
    {cartoon: 'Tom and Jerry', yearReleased: 1940, genres: ['comedy', 'animation']},
    { cartoon: 'Stewie Griffin', yearReleased: 1999, genres: ['adult']},
    {cartoon:'Ben 10', yearReleased:2005,genres:['action','adventure','animation']},
    {
        cartoon: `Rick and Morty`, yearReleased: 2013, genres: ['sitcom', 'dark', 'science fiction']
    },
    {cartoon:'The Spectacular Spider-Man', yearReleased:2008, genres:['Super Hero', 'Comic', 'Action']}
]

//Find - Find the first instance of a search case
let pokeSearch = arr.find(item=>item.cartoon==='Pokemon');
//console.log(pokeSearch)

//Filter - Find and return an array of instances matching a search case

let modernCartoons = arr.filter(item=>item.yearReleased >= 2000);
const example=[];
for(let item of arr){
    if(item.yearReleased >= 2000){
        example.push(item);
    }
}

//console.log(modernCartoons);

let oldSchoolCartoons = arr.filter(item=> item.yearReleased <2000);
//console.log(oldSchoolCartoons);
let modernAdultCartoons = arr.filter(item=>item.yearReleased >= 2000 && item.genres.includes('adult'));
//console.log(modernAdultCartoons);

//Map - Allows you to modify or change items in an array and return a new array
let cartoonNames = arr.map(item=>item.cartoon);
//console.log(cartoonNames);

/*let futureCartoons = arr.map(item=> {
    item.yearReleased += 20;
    item.genres.push('cartoons');
    return item;
})*/

//Some - returns true if a case is true for some of the items in the array
let isAdvGenre = arr.some(item=>item.genres.includes('adventure'));
console.log(isAdvGenre);

let isWebCartoon = arr.some(item=>item.cartoon==='HelluvaBoss');
console.log(isWebCartoon);


//Every - return true if a case is true for all of the items in the array
let areCartoonsRecent = arr.every(item=>item.yearReleased>1930)
console.log(areCartoonsRecent);

let allCartoonsManyGenres = arr.every(item=> item.genres.length>2);
console.log(allCartoonsManyGenres)