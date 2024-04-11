import {isMobile} from 'react-device-detect';

// const URL_API = 'http://localhost/swAleteoDI-RyE/index';
const URL_API = 'https://dirostrosyespacios.com/api/index';

const addLogs = async (page)=>{
    let ip = await getIp();
    if(ip){
        let data = {
            "controlador": "Visita",
            "metodo": "insertVisita",
            "ip": ip,
            "page" : page,
            "dispositivo" : (isMobile) ? 'Móvil' : 'Escritorio'
        }
        let resp = await fetch(URL_API,{
                            method: 'POST',
                            body: JSON.stringify(data)
                        })
                        .then(response => response.json())
                        .then(data => {return data});
        console.log(resp.msg);
    }else{
        console.log('error al obtener dirección Ip');
    }
} 

const getIp = async () => {
    try{
        let ip = await fetch('https://api.ipify.org/?format=json')
                    .then(response => response.json())
                    .then(data => {return data});
        return ip.ip;
    }catch(e){
        return false;
    }
}

export {
    addLogs
};