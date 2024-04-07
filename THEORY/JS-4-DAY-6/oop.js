// create an object 3 different ways 
// we don't need class to create an object


//1.Object Literals
// 2.factory Functions
//3. Constructor functions



// we don't use array function inside an object


// 1. Object Literals

let rectangle={
    width:10,
    height:20,
    area:function(){
        return this.height*this.width;
    },
    perimeter:function(){
        return 2*(this.height+this.width);
    }
}
let rectangle1={
    width:30,
    height:40,
    area:function(){
        return this.height*this.width;
    },
    perimeter:function(){
        return 2*(this.height+this.width);
    }
}


// 2.Factory  function 

function createRectangle(height,width){
    return{
        width:width,
    height:height,
    area:function(){
        return this.height*this.width;
    },
    perimeter:function(){
        return 2*(this.height+this.width);
    }
}
    }
//console.log(rectangle1.area());

const rect1 = createRectangle(10,20);
const rect2 = createRectangle(15,255);


console.log(rect1.area());
console.log(rect2.area());

////  3.constructor function ---we don't return object
function Rectangle(height,width){
    this.height=height;
    this.width = width;

    this.area =function(){
        return this.width*this.height;
    }
}

const rect3 = new  Rectangle(40,50);
const rect4 = new  Rectangle(45,25);

console.log(rect3.height);
console.log(rect4.width);