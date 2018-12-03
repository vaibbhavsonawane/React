let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan  && isGuestTwoVegan){
    console.log('Only up vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan){
    console.log('make sure to offers up some vegan option')
}
else{
    console.log('offer up anything on the mane')
}