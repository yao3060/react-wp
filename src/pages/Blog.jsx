import React from 'react'
import { NavLink } from "react-router-dom"
// import axios from "axios"
import { Grid, Row, Col, Media } from "react-bootstrap"

export default class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }

    render() {

        const { error, isLoaded, items } = this.state;

        let content = ''

        if (error) {
            content = <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            content = <div>Loading...</div>
        } else {
            content =   <ul>
                            {items.map(item => (
                                
                            <Media key={item.id}>
                                <Media.Left>
                                    <img width={64} height={64} src="https://fakeimg.pl/200x200/?text=World&font=lobster" alt="thumbnail" />
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading>
                                        <NavLink to={`/blog/${item.id}`} >{item.title.rendered}</NavLink>
                                    </Media.Heading>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                </Media.Body>
                            </Media>
                            ))}
                        </ul>
        }

        return (

            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        {content}
                    </Col>
                    <Col xs={6} md={4}>
                        <code>{'<Col xs={6} md={4} />'}</code>
                    </Col>
                </Row>
            </Grid>
        );
    }

    componentDidMount() {
        fetch("https://src.yaoin.net/wp-json/wp/v2/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
      }

    blogList() {

        let posts = '';

        return (
            
            <div className="Archive">
                {posts}
            </div>

        )

    }

}