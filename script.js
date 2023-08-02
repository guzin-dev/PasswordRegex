function validate() {
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
  const btn = document.getElementById("confirmButton");
  if (!emailValue || !passwordValue || !patternTest(passwordValue)) {
    btn.classList.add("disabled");
    return;
  }
  btn.classList.remove("disabled");
}

function patternTest(string) {
  let pattern = {
    charLength: function () {
      if (string.length >= 8) {
        return true;
      }
      return false;
    },
    lowercase: function () {
      let regex = /^(?=.*[a-z]).+$/;

      if (regex.test(string)) {
        return true;
      }
      return false;
    },
    upercase: function () {
      let regex = /^(?=.*[A-Z]).+$/;

      if (regex.test(string)) {
        return true;
      }
      return false;
    },
    special: function () {
      let regex = /^(?=.*[0-9\W]).+$/;

      if (regex.test(string)) {
        return true;
      }
      return false;
    },
  };
  return pattern.charLength() && pattern.lowercase() && pattern.upercase() && pattern.special();
}
