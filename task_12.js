// конструктор для создания класса Book
function Book(name, author, year){
    this.name = name;
    this.author = author;
    this.year = year;
}
// добавление методов в класс Book
Book.prototype.getName = function(){
    return this.name;
}
Book.prototype.getAuthor = function(){
    return this.author;
}
Book.prototype.getYear = function(){
    return this.year;
}
Book.prototype.setName = function(name){
    this.name = name;
}
Book.prototype.setAuthor = function(author){
    this.author = author;
}
Book.prototype.setYear = function(year){
    this.year = year;
}

// тестирование
let harryPotter = new Book("Harry Potter And The Sorcerer's Stone", "J. K. Rowling", 1997);
console.log(harryPotter.getName());
console.log(harryPotter.getAuthor());
console.log(harryPotter.getYear());

harryPotter.setName("Gone With The Wind");
harryPotter.setAuthor("M. Mitchell");
harryPotter.setYear(1936);

console.log(harryPotter.getName());
console.log(harryPotter.getAuthor());
console.log(harryPotter.getYear());
