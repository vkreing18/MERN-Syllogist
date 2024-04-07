// // // // reduce function

// // // const arr=[];

// // // const addition = arr.reduce((sum,item) =>{
// // //     return sum+item;
// // // },0)
// // // console.log(addition);\

// // //Mapping function



// // const rectangle = [
// //     {
// //         height:20,
// //         width:50
// //     },
// //     {
// //         height:30,
// //         width:40
// //     },
// //     {
// //         height:80,
// //         width:60
// //     },
// // ]
// // // perimeter of each object

// // const rectPerimeterAreaArr= rectangle.map(rect=>{
// //     let peri = 2* (rect.height*rect.width);
// //     let area = rect.height*rect.width;

// //     return{
// //         ...rect,
// //         perimeter:peri,
// //         area:area
// //     }
// // })

// // console.log(rectangle);
// // console.log(rectPerimeterAreaArr);



// let  rectangle = [
//         {
//             height:20,
//             width:50
//         },
//         {
//             height:30,
//             width:40
//         },
//         {
//             height:80,
//             width:60
//         },
//     ]
//     // perimeter of each object
    
//     rectangle = rectangle.map(rect=>{
//         let peri = 2* (rect.height*rect.width);
//         let area = rect.height*rect.width;
    
//         return{
//             ...rect,
//             perimeter:peri,
//             area:area
//         }
//     })

//     console.log(rectangle);

//     const filteredArr = rectangle.filter(rect=>rect.perimeter >=2400);
//     console.log(filteredArr);

