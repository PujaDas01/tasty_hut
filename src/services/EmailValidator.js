export const emailValidator = (value) => {
    const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
    if(regexEmail.test(value)) {
      return true;
    } else {
      return false;
    }
}