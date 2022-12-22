let inputemail=document.querySelector('#email');
let inputpassword=document.querySelector('#password');

let emailwarning=document.querySelector('#email-warning');
let passwordwarning=document.querySelector('#password-warning');

let successMsg=document.querySelector('#success');
let comment=document.querySelector('#comment');



function checkForError(inputValue,warningElement)
{
    let err=false;

    if(inputValue=="")
    {
        warningElement.innerHTML="This field required *";
        err=true;
    }
    else if(inputValue.length<6)
    {
        warningElement.innerHTML="Must have 6 characters";
        err=true; 
    }
    else{
        warningElement.innerHTML="";
    }
    return err
}

function login(){
    console.log(inputemail.value,inputpassword.value);

    let emailError=checkForError(inputemail.value,emailwarning);
    let passworderror=checkForError(inputpassword.value,passwordwarning);

    if(!emailError&&!passworderror)
    {

        successMsg.innerHTML="Loged in Successfully";
        comment.innerHTML="Keep Shopping on Amazon"


        setTimeout(()=>{
            location.href='./index.html'
            

        },2000)
       
        
    }
}