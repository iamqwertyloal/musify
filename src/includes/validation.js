import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  configure,
  ErrorMessage,
} from "vee-validate";
import {
  required,
  confirmed,
  min,
  max,
  min_value as minVal,
  max_value as maxVal,
  email,
  alpha_spaces as alphaSpaces,
  not_one_of as excluded,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("tos_acceptance", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
    defineRule("passwords_mismatch", confirmed);
    defineRule("excluded", excluded);
    defineRule("country_excluded", excluded);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The ${ctx.field} field is required!`,
          min: `The ${ctx.field} field is too short!`,
          max: `The ${ctx.field} field is too long!`,
          min_value: `The ${ctx.field} field is too low!`,
          max_value: `The ${ctx.field} field is too high!`,
          email: `The ${ctx.field} field must be a valid email!`,
          alpha_spaces: `The ${ctx.field} field may only contain alphabetical characters and spaces!`,
          passwords_mismatch: `The passwords don't match!`,
          excluded: `You are not allowed to use this value for the ${ctx.field} field!`,
          country_excluded: `Due to restrictions, we do not accept users from this location!`,
          tos_acceptance: `You must accept the Terms of Service!`,
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The ${ctx.field} field is invalid!`;

        return message;
      },
    });
  },
};
