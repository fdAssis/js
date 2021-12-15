class ParkingLot {
  
  constructor(numSlots){
      this.numSlots = numSlots;
      this.slots = [];
      
      for(let i = 0; i < this.numSlots; i++){
        this.slots[i] = ' ';
      }
  }

  park(carId){
    if(this.numSlots > 0){
      this.slots[this.slots.length -this.numSlots] = carId;
      this.numSlots -= 1
    }
    else{
      return
    }
  }

  getSlots(){
    return this.slots;
  }

  remove(carId){


    this.slots.splice(this.slots.indexOf(carId), 1);
    
    this.slots.splice(item, 0, ' ')
  }
}

const teste = new ParkingLot(5);

console.log(teste.getSlots());

teste.park('CAR-10');
console.log(teste.getSlots());
teste.park('CAR-20');
teste.park('CAR-30');


teste.remove('CAR-20');
console.log(teste.getSlots());
