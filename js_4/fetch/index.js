// const URL = 'https://jsonplaceholder.typicode.com/posts';
const URL = "https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration";

let formData, role, firstName, lastName, email, username, password, disabledSeasonAnimation, language;

const emailErrorField = document.getElementById("js-error-email");
const usernameErrorField = document.getElementById("js-error-username");
const modalWindow = document.getElementById("js-modal");

const emailError = "Під цим емейлом уже зареєстровано користувача";
const usernameError = "Цей псевдонім уже зайнятий";

const showPassword = () => {
  const passType = document.getElementById("js-password-input");
  if (passType.type === "password") {
    passType.type = "text";
  } else {
    passType.type = "password";
  }
};

const hideModal = () => modalWindow.classList.remove("modal--active");

const validateForm = (res) => {
  if (res.success) {
    modalWindow.classList.add("modal--active");
    document.getElementById("js-modal-message").innerHTML = `Вітіюємо ${formData.get("username")}! Обліковий запис успішно створено! `;
  } else {
    if (res.message.ua === emailError) {
      emailErrorField.innerHTML = emailError;
      document.getElementById("js-email").addEventListener("input", () => {
        emailErrorField.innerHTML = "";
      });
    } else if (res.message.ua === usernameError) {
      usernameErrorField.innerHTML = usernameError;
      document.getElementById("js-username").addEventListener("input", () => {
        usernameErrorField.innerHTML = "";
      });
    }
  }
};

const registerUser = (e) => {
  e.preventDefault();
  formData = new FormData(e.target);
  const body = JSON.stringify({
    role: 2,
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
    disabledSeasonAnimation: "true",
    language: "ua",
  });

  fetch(URL, {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      validateForm(res);
    });
};

document.getElementById("js-form").addEventListener("submit", registerUser);
document.getElementById("js-password-icon").addEventListener("click", showPassword);
document.getElementById("js-button-close").addEventListener("click", hideModal);
