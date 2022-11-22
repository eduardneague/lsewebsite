// Form Data Validation

    // Variables

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");
    const errorNodes = document.querySelectorAll(".error");

const validateForm = () => {
    clearMessages();
    let errorFlag = false;

    // Name Validation

    if(nameInput.value.length < 1) {
        errorNodes[0].innerText = "Numele nu poate să fi gol!";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    // Email Validation

    if(!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Email invalid!";
        emailInput.classList.add("error-border");
        errorFlag = true;
    }

    // Message Validation

    if(messageInput.value.length === 0) {
        errorNodes[2].innerText = "Mesajul nu poate fi gol!";
        messageInput.classList.add("error-border");
        errorFlag = true;
    }
    else if(messageInput.value.length < 20) {
        errorNodes[2].innerText = "Mesajul nu poate fi mai mic de 20 de caractere!";
        messageInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag) {
        window.location.href = "../files_html/contactSuccess.html";
    }
}

// Clear errors

const clearMessages = () => {
    for(let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    nameInput.classList.remove("error-border");
    emailInput.classList.remove("error-border");
    messageInput.classList.remove("error-border");
}

// Email Validation

const emailIsValid = (email) => {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}