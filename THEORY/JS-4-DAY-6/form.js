document.getElementsByTagName('form')[0].addEventListener('submit',(event)=>{
    let valid=1;
    let error_text='';
    const first_name = document.getElementById("first_name").value;
    if(first_name==''){
        error_text+='Enter First Name Please<br/>';//concading all error msg into one
        valid =0 ;
    }
    console.log('First Name-',first_name);
    const last_name=document.getElementById("last_name").value;
    if(last_name==''){
        error_text+='Enter Last Name Please<br/>';
        valid =0 ;
    }
    console.log('Last Name-',last_name);
    const course_name=document.querySelector("#course_name").value;
    if(course_name==''){
        error_text+='Select the course name please<br/>';
        valid =0 ;
    }
    console.log('Course Name-',course_name);
    

    let shift='';
    const shiftValue=document.getElementsByName('shift'); //returns an array of elements
    for(let i=0;i<shiftValue.length;i++){
        if(shiftValue[i].checked){
            shift=shiftValue[i].value;
        }
    }
    console.log('Shift-',shift);
    if(shift==''){
        error_text+='Select the shift Please<br/>';
        valid =0 ;
    }
    const address=document.querySelector("#address").value;
    console.log('Address-',address);
    
    const i_agree=document.querySelector("#chk_1").checked ?document.querySelector("#chk_1").value : '';
    if(i_agree==''){
        error_text+='Please Check The box<br/>';
        valid =0 ;
    }
    console.log('I Agree-',i_agree);

    if(valid == 0){
        document.querySelector(".error_msg").style.display='block';
        document.querySelector(".error_msg").innerHTML=error_text;
        document.querySelector(".error_msg").style.color="#ff0000";
    }
    // if(valid == 1){
    //     document.querySelector(".success_msg").style.color="#ff0000";
    //     //const success_text='Form Submission Successful';
    //     //document.querySelector(".success_msg").innerHTML=success_text;
    //     document.getElementsByName(success_text).innerHTML=shiftValue;
    // }

    event.preventDefault();
})































 // grab the values one by one
// const value must be assign at creation time or declaration time 


// object
/* abstraction
   public private not protected//
    like salary and mark should not be shown to the public
    but we need to calculate grade.....
    where you are paid a salary or not is reveiled to the outside world



    Inheritance

    we are inheriting the project
    purpose of inheritance to stop writting same code again and again...


    polymorphism 

    which can take different form....
    input can be many form
    check box,etc
   */