const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY, //"your_public_api_key",
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY, //"your_private_api_key",
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT //"https://ik.imagekit.io/your_imagekit_id/"
});

console.log("PUBLIC:", process.env.IMAGEKIT_PUBLIC_KEY); // 🔍 Debug

async function uploadFile(file,filname){
    const result = await imagekit.upload({
        file : file, //required
        fileName : filname, //required
       
    })
    return result;
}

module.exports = {
    uploadFile,
    imagekit
}