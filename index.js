function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`;
}

function leashDog(dogname, dogbreed) {
    let str = `Leash ${dogname} the ${dogbreed}`;
    console.log(str);
    return str
}

function walkToPark(name, breed) {
    let str = `Walk to the park with ${name} the ${breed}`;
    console.log(str);
    return str
}

function throwFrisbee(name, breed) {
    let str = `Throw the frisbee for ${name} the ${breed}`;
    console.log(str);
    return str
}

function walkHome(name, breed) {
    let str = `Walk home with ${name} the ${breed}`;
    console.log(str);
    return str
}

function unleashDog(name, breed) {
    let str = `Unleash ${name} the ${breed}`;
    console.log(str);
    return str
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    let newArr = routine.map( fn => fn(dogName, dogBreed));
    return newArr;
}