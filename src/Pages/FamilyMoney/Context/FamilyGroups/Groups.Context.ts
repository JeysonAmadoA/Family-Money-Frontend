import { createContext, useContext } from "react";
import { GroupContextProps } from "../../../../Models/FamilyGroups/GroupContext.Model";
import { GroupList } from "../../../../Models/FamilyGroups/Group.Model";


const emptyGroupList: GroupList = {
    groups: []
};  

const GroupContext = createContext<GroupContextProps>({
    groups: emptyGroupList,
    setGroups: () => {},
});

const useGroupsContext = () => {
    const context = useContext(GroupContext);
    if (context === undefined){
        throw new Error("No está definido en el contexto Grupos")
    }
    return context;
}

export {GroupContext, useGroupsContext, emptyGroupList}