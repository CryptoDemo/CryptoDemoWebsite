export const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

export const changeToDashboardBG = ()=>{
  document.querySelector("body > #__nuxt > div > div").style.backgroundColor = '#161D26';
}
export const removeDashboardBG = ()=>{
  document.querySelector("body > #__nuxt > div > div").style.backgroundColor = '';
}