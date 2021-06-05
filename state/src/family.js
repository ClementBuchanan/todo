import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

function Family(props) {
  const [family, setFamily] = useState(props.people);
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = (person) => {
    console.log('person');
  }

  return (
    <ListGroup horizontal>
      {
        family.map((person =>
          <ListGroup.Item key={person} onClick={() => showModal(person)}>{person}</ListGroup.Item>
        ))
      }
    </ListGroup>
  )
}
export default Family;