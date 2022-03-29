/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {
    return parks.filter(park=> park.location.state===state);
  }
  
  function getWishlistParksForUser(parks, users, username) {
    const wishlist = users[username].wishlist; //[1,3]
   return wishlist.map(id=> parks.find(park=>park.id===id))
    /*let arr =[];
    for(let id of wishlist){  //id =3
      //is there a park that matches that id?
      for(let park of parks){
        if(park.id===id){
          arr.push(park);
        }
      }
    }*/
    
  }
  
  function userHasVisitedAllParksInState(parks, users, state, username) {
    const parksByState = getParksByState(parks, state);
    const userObj = users[username];
    return parksByState.every(park=> userObj.visited.includes(park.id))  
  }
  
  function userHasVisitedParkOnWishlist(users,usernameA,usernameB) {
    //some()
    const userA = users[usernameA];
    const userB = users[usernameB];  
    return userA.visited.some(excalibur=> userB.wishlist.includes(excalibur));  
  }
  
  function getUsersForUserWishlist(users,selected) {
    //get all usernames
    const usernames = Object.keys(users);
    return usernames.reduce((acc, username)=>{
        const hasVisited = userHasVisitedParkOnWishlist(users, username,selected);
      if(hasVisited) acc.push(username);    
      return acc;
    }, []);
    //get parks on users wishlist
    
  }