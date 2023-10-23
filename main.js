window.addEventListener('load',()=>{
    const signup_el=document.querySelector(".sign-up-wrapper");
    const successMessage_el=document.querySelector("#success-message");
    const form= document.querySelector("#subscribe-form")
    const dismiss_btn=document.querySelector("#dismiss-btn");
    const email_input=document.querySelector("#email-input");


    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        console.log('çlicked');
    if(email_input.value!=""){
        successMessage_el.style.display='block'; 
        console.log(email_input.value)
        setTimeout(() => {
            successMessage_el.style.display='none'
        }, 3000);
        
    }
        
        email_input.value="";

    })
    signup_el.style.backdropFilter='blur(50px)';
    dismiss_btn.addEventListener('click',()=>{
        successMessage_el.style.display='none'
    })

 

})