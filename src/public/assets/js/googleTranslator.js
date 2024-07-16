
let translatorInitInterval;
const googleTranslateElementInit = () => {
    translatorInitInterval = setInterval(()=>{
        const exists = document.getElementById("google_translate_element");
        if(exists){
            clearInterval(translatorInitInterval);
            new window.google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
        }
    },1000);
}

window.googleTranslateElementInit = googleTranslateElementInit;
