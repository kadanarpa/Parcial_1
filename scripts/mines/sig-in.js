const form = document.getElementById("formulary");
const inputs = document.querySelectorAll("#formulary input");

const regularExpressions = {
  names: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  user: /^[a-zA-Z0-9\-\_]{4,16}$/,
  email: /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
  tel: /^\d{10}$/,
  password: /^.{4,20}$/,
};

const validations = {
  firstName: false,
  lastName: false,
  user: false,
  email: false,
  tel: false,
  password: false,
};

validateInput = (expReg, input, name) => {
    console.log(expReg);
    console.log(input.value);
    console.log(expReg.test(input.value))
  if (expReg.test(input.value)) {
    document
      .getElementById(`${name}_group`)
      .classList.add("formulary_group-correct");
    document
      .getElementById(`${name}_group`)
      .classList.remove("formulary_group-incorrect");
    document.querySelector(`#${name}_group i`).classList.add("fa-square-check");
    document
      .querySelector(`#${name}_group i`)
      .classList.remove("fa-square-xmark");
    document
      .querySelector(`#${name}_group p`)
      .classList.remove("formulary_inputError-active");
    validations[name] = true;
  } else {
    document
      .getElementById(`${name}_group`)
      .classList.remove("formulary_group-correct");
    document
      .getElementById(`${name}_group`)
      .classList.add("formulary_group-incorrect");
    document
      .querySelector(`#${name}_group i`)
      .classList.remove("fa-square-check");
    document.querySelector(`#${name}_group i`).classList.add("fa-square-xmark");
    document
      .querySelector(`#${name}_group p`)
      .classList.add("formulary_inputError-active");
    validations[name] = false;
  }
};

validatePassword = () => {
  const p1 = document.getElementById("password");
  const p2 = document.getElementById("passwordRepeat");

  if (p1.value === p2.value) {
    document
      .getElementById(`passwordRepeat_group`)
      .classList.add("formulary_group-correct");
    document
      .getElementById(`passwordRepeat_group`)
      .classList.remove("formulary_group-incorrect");
    document
      .querySelector(`#passwordRepeat_group i`)
      .classList.add("fa-square-check");
    document
      .querySelector(`#passwordRepeat_group i`)
      .classList.remove("fa-square-xmark");
    document
      .querySelector(`#passwordRepeat_group p`)
      .classList.remove("formulary_inputError-active");
    validations["password"] = true;
  } else {
    document
      .getElementById(`passwordRepeat_group`)
      .classList.remove("formulary_group-correct");
    document
      .getElementById(`passwordRepeat_group`)
      .classList.add("formulary_group-incorrect");
    document
      .querySelector(`#passwordRepeat_group i`)
      .classList.remove("fa-square-check");
    document
      .querySelector(`#passwordRepeat_group i`)
      .classList.add("fa-square-xmark");
    document
      .querySelector(`#passwordRepeat_group p`)
      .classList.add("formulary_inputError-active");
    validations["password"] = false;
  }
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const terms = document.getElementById('tc');

    inputs.forEach((input) => {
        switch(input.name) {
            case "firstName":
                validateInput(regularExpressions.names, input, 'firstName');
            break;
            case "lastName":
                validateInput(regularExpressions.names, input, 'lastName');
            break;
            case "user":
                validateInput(regularExpressions.user, input, 'user');
            break;
            case "email":
                validateInput(regularExpressions.email, input, 'email');
            break;
            case "tel":
                validateInput(regularExpressions.tel, input, 'tel');
            break;
            case "password":
                validateInput(regularExpressions.password, input, 'password');
            break;
            case "passwordRepeat":
                validatePassword();
            break;
        }
        if (validations.firstName && validations.lastName && validations.user && validations.email && validations.password && validations.tel && terms.checked) {
            // form.reset();

            document.getElementById('formulary_SuccessMessage').classList.add("formulary_SuccessMessage-active");
            document.getElementById('formulary_message').classList.remove("formulary_message-active");
        } else {
            document.getElementById('formulary_SuccessMessage').classList.remove("formulary_SuccessMessage-active");
            document.getElementById('formulary_message').classList.add("formulary_message-active");
        }
    })
})
