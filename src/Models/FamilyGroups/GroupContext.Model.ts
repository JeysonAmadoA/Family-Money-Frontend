import { Group, GroupList } from "./Group.Model";

export interface GroupContextProps {
    groups : GroupList | Group[],
    setGroups :  React.Dispatch<React.SetStateAction<GroupList>>;
}