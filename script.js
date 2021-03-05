const fields = document.querySelectorAll("[required]")

console.log(fields)

function customValidation(event) {
    const field = event.target;

    function verifyErrors() {
        let foundError = false;

        for (const error in field.validity) {
            if (error != "customError" && field.validity[error]) {
                foundError = true;
            }
        }
        return foundError;
    }
    const error = verifyErrors();
    console.log("Error exists: ", error);

    if (error) {
        field.setCustomValidity("Esse campo é obrigatório");
    }
    else {
        field.setCustomValidity("");
    }

    field.setCustomValidity("Esse campo é obrigatório")
}

for (field of fields) {
    field.addEventListener("invalid", customValidation)
}




document.querySelector("form")
    .addEventListener("submit", event => {
        console.log("enviar o formulario")

        event.preventDefault()
    })