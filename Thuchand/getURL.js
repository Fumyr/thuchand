import url from 'url';
const getPath= (req)=> {
    return req.url;
}
const getParamURL=(req) =>{
    let urlData = url.parse(req.url, true);
    return JSON.stringify(urlData.query);

}
export default {getParamURL,getPath};