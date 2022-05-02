import axios from "axios";
const Nomada = 'YjY4NDE5OGEtZDZlNy00MGFjLTliOWYtYzhhYWZmYzcwNTJi';
const urli =  'https://whois.nomada.cloud/upload';


const getActor = (fileList,file) => {

    const formData = new FormData();
    formData.append("file", fileList.originFileObj ,file.name);

    try{

        return axios
            .post(urli,formData,{"headers":{'Nomada':Nomada}})
            .then(({data})=>({
                "ok":true,
                "data":data,
                "error":null
            }))
            .catch(err=>({
                "ok":false,
                "data": null,
                "error":err.error
            }))
    }
    catch(error){
        console.error('error desde action',error);
    }

}

export default getActor;