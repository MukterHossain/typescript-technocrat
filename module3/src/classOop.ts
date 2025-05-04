{
    // Oop - class

    class Animal {
        // public name:string;
        // public species:string;
        // public sound: string;

        // Parameter proprties
        constructor(public name: string, public species:string, public sound:string){
        // this.name = name;
        // this.species = species;
        // this.sound = sound
    }
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`)
    }
    }

    const dog = new Animal('German Shepard Bhai', 'dog', 'Ghew Ghew')
    const cat = new Animal('Indian', 'cat', 'meaw meaw')
    cat.makeSound()


    









    ///
}