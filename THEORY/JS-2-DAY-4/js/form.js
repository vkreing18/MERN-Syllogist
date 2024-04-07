 const form = document.getElementsByTagName("form")[0];

form.addEventListener('submit', (event) => {
    let valid = 1;
    let error_text=''
  const full_name = document.querySelector("#full_name").value;
  if(full_name == ''){
    error_text +='Please Enter Your Name'+'<br/>';
    valid=0;
   }
  //console.log(full_name);
  const course_name = document.querySelector("#course_name").value;
  if(course_name == ''){
    error_text +='Please Enter Your Course Name'+'<br/>';
    valid=0;
   }
  //console.log(course_name);
  const shiftvalues = document.getElementsByName('shift');
  let shift = '';
  for (let i = 0; i < shiftvalues.length; i++) {
    if (shiftvalues[i].checked) {
      shift = shiftvalues[i].value;
    }
  }
  if(shift == '' ){
    error_text += 'Please Select Your Shift'+'<br/>';
    valid=0;
   }
  //console.log(shift);
  const address = document.querySelector("#address").value;
  //console.log(address)
  const email = document.querySelector("#email").value;
  //console.log(address)
  const check = document.querySelector("#i_agree").checked
  ? document.querySelector("#i_agree").value
  : '';
  if(check == ''){
    error_text +='Please Check the term and condition'+'<br/>';
    valid=0;
   }
  //console.log(check)

  if(valid == 0 && error_text!=''){
    document.querySelector(".error_message").style.display='block';
    document.querySelector('.error_message').innerHTML =error_text;
    document.querySelector(".error_message").style.color='red';
  }
  event.preventDefault();
})
