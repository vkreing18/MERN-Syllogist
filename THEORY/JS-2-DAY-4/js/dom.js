// // // // 
// // // console.log(document.head);
// // console.log(document.querySelectorAll('titleh1'));


// console.log(document.getElementsByTagName('ul')[0]);


// topic

const ul=document.getElementsByTagName('ul')[0];

for(let i=0;i<ul.children.length;i++){
    console.log(ul.children[i].innerText);
}


// topic 
//add more charcter into the list

document.querySelector("#form_1").addEventListener('submit',(event)=>{
    console.log();
    //1. create a html element li
    const li=document.createElement('li');
    //2.create a text node and append it to the html element
    const character_name=document.querySelector('#commic_character_name').value;
    const chacaterTextNode=document.createTextNode(character_name);
    li.appendChild(chacaterTextNode);
    //3.append the whole lim into ul
    ul.appendChild(li);



    event.preventDefault();
})



