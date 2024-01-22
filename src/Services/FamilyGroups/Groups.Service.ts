import { CreateGroupInfo, Group} from "../../Models/FamilyGroups/Group.Model";
import { getHeaderConfig, groupsAxios } from "../../Utilities"

export const getFamilyGroups = async () => {
    try {        
        const response = await groupsAxios("", getHeaderConfig());        
        return response.data;
    } catch (error) {
        throw new Error("Error al recuperar información de grupos:" + error);
    }    
}

export const storeFamilyGroup = async (data:CreateGroupInfo) : Promise<Group> => {
    try {
        const response = await groupsAxios.post("/store", data, getHeaderConfig());
        return response.data;
    } catch (error) {
        throw new Error("Error al recuperar información de grupos:" + error);
    }    
}