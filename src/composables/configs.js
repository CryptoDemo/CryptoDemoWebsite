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




// get visitor's country
export const getVisitorsLocation = async () =>{
    const pinia = useStore();
    if(Object.keys(pinia.state.geo).length > 1 && (new Date() < new Date(pinia.state.geo?.ttl))) return;
    try {
      const URL = "https://api.bigdatacloud.net/data/ip-geolocation-full?key=bdc_c11fd62aa01c4174a4caeecb5a26c84e";
  
      const data = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res=>res.json());
      

      if (data?.ip || data?.country?.name) {

        let country = data?.country?.name;

        
        if(["US","GB"].includes(data?.country?.isoAlpha2)){
            country = data?.country?.isoAlpha2;
        }
   

        const geoData = {
          continent: data?.location?.continent,
          country,
          countryCode: data?.country?.isoAlpha2,
          region: data?.location?.isoPrincipalSubdivisionCode,
          regionName: data?.location?.isoPrincipalSubdivision,
          city: data?.location?.city || data?.location?.localityName,
          lat: data?.location?.latitude,
          lon: data?.location?.longitude,
          timezone: data?.location?.timeZone?.ianaTimeId,
          time: data?.location?.timeZone?.localTime,
          isp: data?.network?.carriers[0]?.organisation,
          org: data?.network?.organisation,
          as: data?.network?.carriers[0]?.asn,
          ip: data?.ip,
          ttl: addHours("",1)
        };

       
        pinia.setGeo(geoData)
      }
    } catch (_e) {}
}

export const addHours = (date, hours = 7) => {
    let now = date ? new Date(date) : new Date();
    now.setHours(now.getHours() + hours);
    return now.toISOString();
  };


