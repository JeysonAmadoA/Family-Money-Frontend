import { useState } from "react";
import { Button } from "react-bootstrap"
import CreateGroupModal from "./CreateGroupModal";

function DefaultGroupsView() {

  const [modalState, setModalState] = useState(false);
  const openModal = () => setModalState(true);


  return (
    <div>
      <Button onClick={openModal}>Agregar nuevo grupo</Button>
      <CreateGroupModal modalState={modalState} setModalState={setModalState}></CreateGroupModal>
    </div>
  )
}
export default DefaultGroupsView