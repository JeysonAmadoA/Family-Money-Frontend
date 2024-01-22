import { ReactNode, useState } from "react";
import { GroupList } from "../../../../Models/FamilyGroups/Group.Model";
import { GroupContext, emptyGroupList } from "./Groups.Context";
import { GroupContextProps } from "../../../../Models/FamilyGroups/GroupContext.Model";


interface GroupProviderProps {
    children: ReactNode;
}
  
export const GroupContextProvider: React.FunctionComponent<GroupProviderProps> = ({ children }) => {
    const [groups, setGroups] = useState<GroupList>(emptyGroupList);

    const contextValue: GroupContextProps = {
        groups,
        setGroups,
    };

    return (
        <GroupContext.Provider value={contextValue}>
            {children}
        </GroupContext.Provider>
    );
};