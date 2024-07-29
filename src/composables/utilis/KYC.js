import snsWebSdk from '@sumsub/websdk';
import { useStore } from "@/stores";



export const launchWebSdk = (accessToken, applicantEmail,applicantPhone,user_id) =>{
    const pinia = useStore();
    console.log(accessToken,applicantEmail,applicantPhone,user_id)
    let snsWebSdkInstance = snsWebSdk
        .init(
            accessToken,
            // token update callback, must return Promise
            // Access token expired
            // get a new one and pass it to the callback to re-initiate the WebSDK
            () => this.getNewAccessToken()
        )
        .withConf({
            lang: "en", //language of WebSDK texts and comments (ISO 639-1 format)
            email: applicantEmail,
            phone: applicantPhone,
            userId:user_id,
            theme: "dark" | "light",
        })
        .withOptions({ addViewportTag: false, adaptIframeHeight: true })
        // see below what kind of messages WebSDK generates
        .on("idCheck.onStepCompleted", (payload) => {
            console.log("onStepCompleted", payload);
        })
        .on("idCheck.onError", (error) => {
            console.log("onError", error);
        })
        .build();

    // you are ready to go:
    // just launch the WebSDK by providing the container element for it
    return snsWebSdkInstance.launch("#sumsub-websdk-container");
}