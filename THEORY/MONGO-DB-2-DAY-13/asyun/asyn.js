const getData = async () => {
    return `Something`;
}


const updateData = async(data)=>{
    return `${data} passed and now it is updated`;
} 


// const listData = async() =>
// {




//     //    const data = await getData();
//     //    console.log(data);



//      getData().then(result=>{
         
//          console.log(result)
//          updateData(result).then(result=>{
//             console.log(result)

//          })
        
// }
//      );
// }

const listdata = async()=>{
    const data = await getData();
    const updateddata = await updateData(data);
     console.log(data);
     console.log(updateddata);

}


listdata();