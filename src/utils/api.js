const env = process.env.NODE_ENV

let BASE_URL;

if(env === 'development'){
    BASE_URL='http://localhost:3000';
}else if(env === 'production'){
    BASE_URL ='https://forex-nep.vercel.app'
}

export {BASE_URL}