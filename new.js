function submitForm(action) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (action == "login") {
        // Send a login request to the server
        // ...
    } else if (action == "signup") {
        var email = document.getElementById("email").value;
        // Send a signup request to the server
        // ...
    }
}

function showSignupForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}

function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
}
$(".dropdown").hover(
    function() {
        $('.dropdown-content', this).stop( true, true ).slideDown("fast");
    },
    function() {
        $('.dropdown-content', this).stop( true, true ).slideUp("fast");
    }
);
  function showMore(service){
    if(service == 1){
      alert('Learn More about Service 1');
    }
    else if(service == 2){
      alert('Learn More about Service 2');
    }
    else if(service == 3){
      alert('Learn More about Service 3');
    }
  }

 function showContactModal(memberId) {
    // code to show a contact modal for the selected team member goes here
    console.log("Showing contact modal for member with ID: " + memberId);
  }
  