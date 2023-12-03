export const generateRandomString=()=>{
    const charaters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result='';
    for (let i=0;i<6;i++)
    {
        result+=charaters.charAt(Math.floor(Math.random()*charaters.length));
        
    }
    return result;
}