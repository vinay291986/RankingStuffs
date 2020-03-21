let Rules = {
  email: [
    v => !!v || "Please enter your email",
    v =>
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        v.trim()
      ) || "Please enter a valid email"
  ],
  minLength: (len, field) => v =>
    (v || "").length >= len
      ? true
      : len == 1
      ? field
        ? field
        : "Field" + " cannot be empty"
      : `This field must contain at least ${len} characters`,
  maxLength: (len, field) => v =>
    (v || "").length <= len ||
    `${field ? field : "Field"} must contain at most ${len} characters`,
  password: [
    v => !!v || "Please enter your password",
    v => (v && v.length >= 8) || "Password must contain at least 8 characters"
  ],
  required: v => !!v || "This field is required"
};

export default Rules;
