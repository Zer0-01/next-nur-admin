'use client'

import { Button, Container, Form, Modal, Row } from "react-bootstrap";
import { MasjidStatus, useMasjidStore } from "./store/useMasjidStore";
import { useState } from "react";

const Masjid = () => {
    const { isOpenDialog, setIsOpenDialog, status, submitDoa } = useMasjidStore();

    const [doaTitle, setDoaTitle] = useState("");
    const [doa, setDoa] = useState("");
    const [maksud, setMaksud] = useState("");


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
                            <Form.Control type="email" placeholder="Isi tajuk doa" value={doaTitle} onChange={(e) => setDoaTitle(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Doa</Form.Label>
                            <Form.Control  placeholder="Isi doa" value={doa} onChange={(e) => setDoa(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Maksud</Form.Label>
                            <Form.Control  placeholder="Isi maksud" value={maksud} onChange={(e) => setMaksud(e.target.value)} />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            disabled={status === MasjidStatus.LOADING}
                            onClick={() => submitDoa(doaTitle, doa, maksud)}
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