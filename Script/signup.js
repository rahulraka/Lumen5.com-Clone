document.querySelector("#form").addEventListener("submit",myForm);

    var signUparr= JSON.parse(localStorage.getItem("signup")) || [];

    function myForm(event){
       event.preventDefault();
        var signupobj={
        user: document.querySelector("#name").value,
        email :document.querySelector("#email").value,
        pass:document.querySelector("#password").value,
        };

        signUparr.push(signupobj);

         console.log(signUparr);


 localStorage.setItem("signup",JSON.stringify(signUparr));
 window.location.href="login.html"
 };
