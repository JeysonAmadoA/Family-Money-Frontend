import { Group } from "./Group.Model";

export interface GroupContextProps {
    groups : Group[],
    setGroups :  React.Dispatch<React.SetStateAction<Group[]>>;
}