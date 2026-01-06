const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const passInput = document.getElementById("password");

// Name KEYUP validation
nameInput.addEventListener("keyup", function () {
  if (nameInput.value.length < 3) {
    document.getElementById("nameMsg").innerText =
      "Minimum 3 characters required";
  } else {
    document.getElementById("nameMsg").innerText = "";
  }
});

// Password KEYDOWN validation
passInput.addEventListener("keydown", function () {
  if (passInput.value.length < 6) {
    document.getElementById("passMsg").innerText =
      "Password must be 6 characters";
  } else {
    document.getElementById("passMsg").innerText = "";
  }
});

// Form SUBMIT event
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const gender = document.querySelector('input[name="gender"]:checked');

  if (!gender) {
    document.getElementById("genderMsg").innerText =
      "Please select gender";
    return;
  } else {
    document.getElementById("genderMsg").innerText = "";
  }

  alert("Form submitted successfully!");
  form.reset();
});
