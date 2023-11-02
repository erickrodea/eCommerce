var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");

// console.dir(backdrop.style['background-image']);

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener("click", function () {
        // modal.style.display = "block";
        // backdrop.style.display = "block";
        // modal.className = 'open'; // This will actually overwrite the complete class list
        modal.classList.add("open");
        backdrop.style.display = "block";
        setTimeout(function () {
            backdrop.classList.add("open");
        }, 10);
    });
}

backdrop.addEventListener("click", function () {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove("open");
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
    //   backdrop.style.display = "none";
    //   modal.style.display = "none";
    if (modal) {
        modal.classList.remove("open");
    }
    backdrop.classList.remove("open");
    setTimeout(function () {
        backdrop.style.display = "none";
    }, 200);
}

toggleButton.addEventListener("click", function () {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function () {
        backdrop.classList.add("open");
    }, 10);
});

ctaButton.addEventListener('animationstart', function (event) {
    console.log('Animation started', event);
})

ctaButton.addEventListener('animationend', function (event) {
    console.log('Animation ended', event);
})

ctaButton.addEventListener('animationiteration', function (event) {
    console.log('Animation iteration', event);
})




function subscribe() {
    var email = document.getElementById('email').value;
    if (validateEmail(email)) {
        alert('Thank you for subscribing with the email: ' + email);
        document.getElementById('message').textContent = 'Subscribed successfully!';
    } else {
        alert('Please enter a valid email address.');
        document.getElementById('message').textContent = 'Failed to subscribe. Invalid email.';
    }
}

function validateEmail(email) {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return email.match(pattern);
}

var userEmail = document.myForm.userEmail.value;
function isEmail() {
    // const email = document.getElementById("userEmail");

    const regexx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


}

function validator() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z.0-9-]+)*$/;
    if (document.myForm.fName.value == "") {
        alert(" must fill in first name");
        document.myForm.fName;
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.myForm.fName.value)) {
        alert(" First must be a valid Name please enter actual characters. ");
        document.myForm.fName.focus();
        return false;
    }

    if (document.myForm.lName.value == "") {
        alert(" must fill in last name");
        document.myForm.lName;
        return false;
    }

    if (!/^[a-zA-Z]*$/g.test(document.myForm.lName.value)) {
        alert(" last name must be a valid Name please enter actual characters. ");
        document.myForm.lName.focus();
        return false;
    }
    if (document.myForm.userEmail.value == "") {
        alert(" must fill in email");
        document.myForm.userEmail;
        return false;
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(document.myForm.userEmail.value.trim())) {
        alert(document.myForm.userEmail.value + " your email was valid");
    } else {
        alert(document.myForm.userEmail.value + ' Email is not valid');
    }


    return (true);

}