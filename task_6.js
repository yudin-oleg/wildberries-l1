// функция для сортировки элементов массива
function sortPersons(array){
    let sortedArray = array.sort((person1, person2) => person1.age > person2.age ? 1: (person1.age < person2.age) ? -1 : person1.name > person2.name ? 1: (person1.name < person2.name) ? -1 : 0);
    return sortedArray;
}

// тестирование
let array = [{name: "Marlone", age: 28}, {name: "John", age: 25}, {name: "Chris", age: 17}, {name : "Joanne", age: 25}, {name: "Michael", age: 20}, {name: "Marlene", age: 29}];

let sortedArray = sortPersons(array);

for(item of sortedArray){
    console.log(item);
}