class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
    }
    
    getSignature(): number {
        return this.signature;
    }

  }


class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected  door: boolean = false;
  protected  key: Key;
  private tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getKey().getSignature()} entered the house.`);
    } else {
      console.log('The door is closed. Cannot come in.');
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('The door is open.');
    } else {
      console.log('Invalid key. Cannot open the door.');
    }
  }
}




const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};