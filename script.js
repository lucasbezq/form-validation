const fields = document.querySelectorAll("[required]")

function customValidation(field) {

    function verifyErrors() {
        let foundError = false;

        for (let error in field.validity) {
            if (field.validity[error] && !field.validity.valid) {
                foundError = true;
            }
        }
        return foundError;
    }

    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Por favor, preencha este campo"
            },
            email: {
                valueMissing: "Email é obrigatório",
                typeMisMatch: "Por favor, preencha um email válido"
            }
        }
        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelectorAll("span.error");

        if (message) {
            spanError.classList.add("active");
            spanError.innerHTML = message
        }
        else {
            spanError.classList.remove("active");
            spanError.innerHTML = "";
        }
    }

    return function () {
        const eror = verifyErrors();

        if (error) {
            const message = customMessage(error);

            field.style.borderColor = "red";
            setCustomMessage(message);
        }
        else {
            field.style.borderColor = "green";
            setCustomMessage();
        }
    }
}

function customValidation(event) {
    const field = evend.target;
    const validation = validateField(field);

    validation();
}

for (field of fields) {
    field.addEventListener("invalid", event => {
        event.preventDefault();
        customValidation(event);
    });
    field.addEventListener("blur", customValidation);
}

document, querySelector("form").addEventListener("submit", event => {
    console.log("enviar formulário");

    event.preventDefault();
});
