'use client'

import { Button, Container, Form, Modal, Row } from "react-bootstrap";
import { MasjidStatus, useMasjidStore } from "./store/useMasjidStore";

const Masjid = () => {
    const { isOpenDialog, setIsOpenDialog, status, submitDoa } = useMasjidStore();


    return (
        <>
            <Container>
                <Button variant="primary" onClick={() => setIsOpenDialog(true)}>Add Doa</Button>
            </Container>
            <Modal
                show={isOpenDialog}
                centered>
                <Modal.Header closeButton onHide={() => setIsOpenDialog(false)} />
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Tajuk Doa</Form.Label>
                            <Form.Control type="email" placeholder="Isi tajuk doa" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Doa</Form.Label>
                            <Form.Control type="password" placeholder="Isi doa" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Maksud</Form.Label>
                            <Form.Control type="password" placeholder="Isi maksud" />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            disabled={status === MasjidStatus.LOADING}
                            onClick={submitDoa}
                        >
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>

    );
};

export default Masjid;