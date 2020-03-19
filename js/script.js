var hotel = {
    // Object properties
    name: 'Clayton',
    rooms: 110,
    booked: 25,
    gym: true,
    pool: true,
    roomTypes: ['double', 'twin', 'suite', 'king'],
    checkAvailablity: function() {
        return this.rooms - this.booked;
    },
    checkPool: function() {
        if(this.pool){
            return 'Pool Avialable';
        }else{
            return 'Pool Unavialable';
        }
    },
    checkGym: function() {
        if(this.gym){
            return 'Gym Avialable'
        }else{
            return 'Gym Unavialable'
        }
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailablity();

var elPool = document.getElementById('pool');      
elPool.textContent = hotel.checkPool;                     

var elGym = document.getElementById('gym');        
elGym.textContent = hotel.checkGym;

