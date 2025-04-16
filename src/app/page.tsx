'use client'

import { useState } from "react";
import { Button, Col, Container, Form, Modal, Row, Table } from "react-bootstrap";
import { useHomeStore } from "./homeStore";

export default function Page() {
    const { isOpenModal, setIsOpenModal } = useHomeStore();

    return <>
        <Container>
            <h1>Doa</h1>

            <Row className="justify-content-end mb-1">
                <Col xs="auto">
                    <Button className="rounded-circle" variant="primary" onClick={() => setIsOpenModal(true)}>+</Button>
                </Col>

            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </Container>

        <Modal
            show={isOpenModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={() => setIsOpenModal(false)}
            backdrop="static"

        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Doa
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicContent">
                        <Form.Label>Content</Form.Label>
                        <Form.Control placeholder="Enter content" as={"textarea"} rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTranslation">
                        <Form.Label>Translation</Form.Label>
                        <Form.Control placeholder="Enter translation" as={"textarea"} rows={3} />
                    </Form.Group>



                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>

        </Modal>
    </>;
}
