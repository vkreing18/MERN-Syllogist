class Rectangle{
    #height
    #width
    constructor(h,w){
        this.#height=h
        this.#width=w
    }
    get height(){
        return this.#height;
    }
    set setHeight(value){
        this.#height= value;
    }
    area(){
        return this.#height*this.#width;
    }
}

const rect1 = new Rectangle(10,20);
rect1.setHeight=30;

console.log(rect1.area());
console.log(rect1.height);



//Define private object in class

