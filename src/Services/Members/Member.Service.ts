import { Member, MemberRegister } from "../../Models/Members/Member.Model";
import { getHeaderConfig, memberAxios } from "../../Utilities";


const storeMember = async (memberData : MemberRegister) : Promise<Member> => {
    try {
        const respose = await memberAxios.post('/store', memberData, getHeaderConfig()); 
        return respose.data;
    } catch (error) {
        throw new Error("Error al agregar miembro");
    }
}


export {storeMember}