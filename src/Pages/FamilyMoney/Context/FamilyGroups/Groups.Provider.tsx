import { ReactNode, useState } from "react";
import { Group } from "../../../../Models/FamilyGroups/Group.Model";
import { GroupContext } from "./Groups.Context";
import { GroupContextProps } from "../../../../Models/FamilyGroups/GroupContext.Model";


interface GroupProviderProps {
    children: ReactNode;
}
  
export const GroupContextProvider: React.FunctionComponent<GroupProviderProps> = ({ children }) => {
    const [groups, setGroups] = useState<Group[]>([]);

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