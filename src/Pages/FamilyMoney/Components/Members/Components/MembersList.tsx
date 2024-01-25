import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { getMembersByGroupId } from "../../../../../Services/FamilyGroups/Groups.Service";
import { Member } from "../../../../../Models/Members/Member.Model";
import { NewMember } from "../../../../../Services/SharingData/NewRegister.Service";


interface GroupId {
    groupId : number,
    setTotalMoney : (totalMoney:number) => void
}

function MembersList({groupId, setTotalMoney} : GroupId) {

    const [members, setMembers] = useState<Member[]>([]);

    const fetchMembers = async (groupId:number) => {
        const result : Member[] = await getMembersByGroupId(groupId);
        return result;
    }
    
    useEffect(() => {

      const getMemberData = async () => {
          const membersData = await fetchMembers(groupId);
          const moneySum = membersData.reduce((total, member) => total + member.economicContribution, 0);
          setTotalMoney(moneySum);
          setMembers(membersData);
      }

      getMemberData();

      const subscription = NewMember.getSubject();
      subscription.subscribe(() => {
        getMemberData();
      });
      
    }, []);


    return (
      <>  
          {members.length > 0 && members.map((member: Member) => (
            <React.Fragment key={member.id}>
              <Card.Title> Nombre : {member.memberName} </Card.Title>
              <Card.Text> Rol: {member.memberRol} </Card.Text>
              <Card.Text> Presupuesto: {member.economicContribution} </Card.Text>
            </React.Fragment>
          ))}
          
      </>
    )
}
export default MembersList