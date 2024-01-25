import { CreateGroupInfo, Group} from "../../Models/FamilyGroups/Group.Model";
import { Member } from "../../Models/Members/Member.Model";
import { getHeaderConfig, groupsAxios } from "../../Utilities"

const getFamilyGroups = async () => {
    try {        
        const response = await groupsAxios("", getHeaderConfig());        
        return response.data;
    } catch (error) {
        throw new Error("Error al recuperar información de grupos:" + error);
    }    
}

const storeFamilyGroup = async (data:CreateGroupInfo) : Promise<Group> => {
    try {
        const response = await groupsAxios.post("/store", data, getHeaderConfig());
        return response.data;
    } catch (error) {
        throw new Error("Error al recuperar información de grupos:" + error);
    }    
}

const getMembersByGroupId = async (groupId:number) : Promise<Member[]> => {
    try {
        const response = await groupsAxios(`/${groupId}/members`, getHeaderConfig());
        return response.data;
    } catch (error) {
        throw new Error("Error obtener miembros del grupo:" + error);
    }    
}

const filterGroupByTypeId = (groups:Group[], typeId: number) => {
    return groups.filter((group:Group) => {
        return group.familyGroupType.typeId === typeId;
    });
}

const filterGroupById = (groups:Group[],  idGroup: number | string) => {
    return groups.find((group:Group) => {
        return group.id == idGroup
    });
}

export {getFamilyGroups, storeFamilyGroup, getMembersByGroupId, filterGroupById, filterGroupByTypeId}