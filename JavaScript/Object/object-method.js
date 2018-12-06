let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount : 0,
    checkAvalilability:function(partySize){
        let seatLeft = this.guestCapacity - this.guestCount
        return partySize <= seatLeft
    },
    SeatParty: function (partySize){
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}
// SeatParty
//removeParty
restaurant.SeatParty(72)
console.log(restaurant.checkAvalilability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvalilability(4))
