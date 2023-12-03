const { default: axios } = require("axios");

const SendEmail=(data)=>axios.post('/api/send',data);

export default{
    SendEmail
}