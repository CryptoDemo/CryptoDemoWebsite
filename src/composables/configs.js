export const baseURL = 'https://crypto-demo-api.inhouse.codes/v1/'

export const OneMB = 1024*1024;
export const FiveMB = 5 * OneMB;



const scheme = baseURL.includes("https") ? "wss" : "ws";
const burl = baseURL.replaceAll("https://","").replaceAll("http://","").replace("/v1","");
export const websocketUrl = () => {
    const pinia = useStore();
    const web = `${scheme}://${burl}ws?user_id=${pinia.state.user?.id}`;
    return web;
};

