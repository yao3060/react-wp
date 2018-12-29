import React from "react"
import { Grid, Row, Col, Media } from "react-bootstrap"
import "./Main.scss"

export default class Main extends React.Component {


    render() {

        return (
            <main class="main-container">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                        <Media>
                            <Media.Left>
                            <img width={64} height={64} src="https://fakeimg.pl/200x200/?text=World&font=lobster" alt="thumbnail" />
                            </Media.Left>
                            <Media.Body>
                            <Media.Heading>Media Heading</Media.Heading>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            </Media.Body>
                        </Media>
                        </Col>
                        <Col xs={6} md={4}>
                            sidebar
                        </Col>
                    </Row>
                </Grid>
            </main>         
        )

    }
}