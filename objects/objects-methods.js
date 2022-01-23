let restaurant =  {
    name: 'Asp',
    guestCapacity: 75,
    geustCount: 0, 
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize){
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partysize) {
        this.guestCount = this.guestCount - partysize
    }
} 

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))