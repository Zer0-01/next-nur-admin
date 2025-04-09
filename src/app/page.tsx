import { Button, Col, Container, Row, Table } from "react-bootstrap";

export default function Page() {
    return <>
        <Container>
            <h1>Doa</h1>

            <Row className="justify-content-end mb-1">
                <Col xs="auto">
                    <Button className="rounded-circle" variant="primary">+</Button>
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
    </>;
}
