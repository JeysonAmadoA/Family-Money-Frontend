import { Button, Card } from "react-bootstrap";
import { useGroupsContext } from "../../Context/FamilyGroups/Groups.Context"
import { useState } from "react";
import { sortElementsById } from "../../../../Utilities/GlobalHelpers";
import { Group } from "../../../../Models/FamilyGroups/Group.Model";
import MembersList from "./Components/MembersList";
import CreateMemberModal from "./Components/CreateMemberModal";


interface ModalStates {
  [groupId: number]: boolean;
}

function Members() {

  const {groups} = useGroupsContext();
  let hasGroups = groups.length > 0;

  const [modalStates, setModalStates] = useState<ModalStates>({});
  const [totalMoney, setTotalMoney] = useState<number>(0);

  const openModal = (groupId: number) => {
    setModalStates({ ...modalStates, [groupId]: true });
  };

  const closeModal = (groupId: number) => {
    setModalStates({ ...modalStates, [groupId]: false });
  };

  const handleTotalMoney = (moneyAmount : number) => setTotalMoney(moneyAmount);

  const sortedGroups = sortElementsById(groups);
  
  return (
    <div>
      {hasGroups &&
          sortedGroups.map((element : Group) => (
            <div key={element.id}>
              <Card>
                <Card.Header>{element.groupName}</Card.Header>
                <Card.Body>
                  <Card.Title> Miembros: {element.membersQuantity}</Card.Title>
                  <Card.Text> Tipo : {element.familyGroupType.name} </Card.Text>
                  <Card.Text> Presupuesto total: {totalMoney} </Card.Text>

                  <MembersList setTotalMoney={handleTotalMoney} groupId={element.id}  />
                  
                  <Button onClick={() => openModal(element.id)} variant="primary">
                    Agregar miembros
                  </Button>
                </Card.Body>
              </Card>
              <CreateMemberModal modalState={modalStates[element.id]} group={element} closeModal={() => closeModal(element.id)} />
            </div>  
      ))}
    </div>
  )
}
export default Members