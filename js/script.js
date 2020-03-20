var hotel = {
    // Object properties
    name: 'Clayton',
    rooms: 110,
    booked: 25,
    gym: false,
    pool: true,
    roomTypes: ['double', 'twin', 'suite', 'king'],
    checkAvailablity: function() {
        return this.rooms - this.booked;
    },
    //checks the avialability of a pool and returns a text reply
    checkPool: function() {
        if(this.pool){
            return 'Pool Avialable';
        }else{
            return 'Pool Unavialable';
        }
    },
    //checks the avialability of a gym and returns a text reply
    checkGym: function() {
        if(this.gym){
            return 'Gym Avialable'
        }else{
            return 'Gym Unavialable'
        }
    },
    //loops through the roomType arrays and returns each text value to calling method
    getRoomType: function(){
        for(var i=0; i < roomTypes.length;i++){
            return roomTypes[i];
        }
    }
};

//displays the value of the 
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailablity();

var elPool = document.getElementById('pool');      
elPool.textContent = hotel.checkPool();                     

var elGym = document.getElementById('gym');        
elGym.textContent = hotel.checkGym();

/** Not sure why this does'nt work, but was supposed to store nodelist in array
then loop through each item and add them to thier various divs.
*/
var elRoomType = document.querySelectorAll('roomType'); 
for(var i = 0; i < elRoomType.length; i++){
    elRoomType[i].textContent = hotel.getRoomType();
}



