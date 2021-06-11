// import React, { useState } from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';


// function Family(props) {
//   const [activePerson, setActivePerson] = useState('');
//   const [family, setFamily] = useState(props.people);
//   const [modalOpen, setModalOpen] = useState(false);

//   const showModal = (person) => {
//     setActivePerson(person);
//     // setFamily(person);
//     setModalOpen(true);
//   }

//   const handleClose = () => {
//     setModalOpen(false);
//   }

//   return (
//     <>
//       <ListGroup horizontal>
//         {
//           family.map((person =>
//             <ListGroup.Item key={person} onClick={() => showModal(person)}>{person}</ListGroup.Item>
//           ))
//         }
//       </ListGroup>
//       <Modal show={modalOpen} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal Heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Yes Rasta! You clicked on {activePerson}</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>Close</Button>
//         </Modal.Footer>
//       </Modal >
//     </>
//   )
// }
// export default Family;