import { Button, Card } from "react-bootstrap"
import MembersList from "./MembersList"
import CreateMemberModal from "./CreateMemberModal"
import { useState } from "react";
import { Group } from "../../../../../Models/FamilyGroups/Group.Model";
import "./MembersCard.css"


export interface MemberCardProps {
    group : Group
  }

function MembersCard({group} : MemberCardProps) {

    const [totalMoney, setTotalMoney] = useState<number>(0);
    const [modalState, setModalState] = useState<boolean>(false);

    const openModal = () => setModalState(true);

    const handleTotalMoney = (moneyAmount : number) => setTotalMoney(moneyAmount);

    return (
        <>
            <Card className="cardContainer">
                <Card.Header className="cardHeader">
                    <h2 className="cardTitle">{group.groupName}</h2>
                    <div className="cardTextContainer">
                        <Card.Text>
                            <strong>Tipo :</strong> {group.familyGroupType.name} 
                        </Card.Text>
                        <Card.Text>
                            <strong>Presupuesto total:</strong> {totalMoney} 
                        </Card.Text>
                    </div>
                    <Button onClick={openModal} variant="primary" className="rightAlignedButton">
                        Agregar miembros
                    </Button>
                </Card.Header>
                <Card.Body>
                    <MembersList setTotalMoney={handleTotalMoney} groupId={group.id} />
                </Card.Body>
            </Card>
            <CreateMemberModal group={group} modalState={modalState} setModalState={setModalState} />
        </>
    );
      
}
export default MembersCard