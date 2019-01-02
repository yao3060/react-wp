import React from 'react'

import { Grid, Row, Col } from "react-bootstrap"
import Sidebar from "../components/Sidebar"
import BlogSummary from "../components/BlogSummary"
import { connect } from "react-redux"

class Blog extends React.Component {

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
                            {items && items.map(item => {
                                return (
                                    <BlogSummary item={item} key={item.id}/>
                                )
                            })}
                        </ul>
        }

        return (

            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        {content}
                    </Col>
                    <Col xs={6} md={4}>
                        <Sidebar />
                    </Col>
                </Row>
            </Grid>
        );
    }

    componentDidMount() {

        // console.log(this.props.items)
        this.setState({
            isLoaded: true,
            items: this.props.items
        });
    }

    // static getDerivedStateFromProps(props, state){

    //     console.log(props, state)

    //     return null;
    // }

    componentDidUpdate(prevProps, prevState) {
        
        console.log(prevProps, prevState)

    }

}

const mapStateToProps = (state) => {

    return {
        items: state.post.posts
    }
}

export default connect(mapStateToProps)(Blog)