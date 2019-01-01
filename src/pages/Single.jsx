import React from "react"

import renderHTML from 'react-render-html'

import { Grid, Row, Col } from "react-bootstrap"
import Sidebar from "../components/Sidebar"

  export default class Single extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          postId: this.props.match.params.postId,
          item: []
        };
    }

    fetchPost(postId) {

        fetch( "https://src.yaoin.net/wp-json/wp/v2/posts/" + postId )
        .then(res => res.json())
        .then(
            (result) => {
                // console.log(result)
                this.setState({
                    isLoaded: true,
                    item: result
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

    componentDidMount() {

        let postId = this.props.match.params.postId
        this.fetchPost(postId)
    }

    componentDidUpdate(prevProps, prevState) {
        
        if (typeof prevState.postId !== 'undefined') {
            let newPostId = this.props.match.params.postId
            
            if( newPostId !== prevState.postId){
                //fetchnewProduct and set state to reload
                
                console.log('load new post: ' + newPostId)
                this.fetchPost( newPostId )
            }
        }

    }

    static getDerivedStateFromProps(props, state){
    
        let newPostId = props.match.params.postId
    
        if(newPostId !== state.postId) {
            return {
                postId: newPostId
            }
        }

        return null;
    }

    // shouldComponentUpdate(nextProps, prevState) {

    //     console.log(this.state)
    //     //console.log(nextProps.match.params.postId, prevState.postId)
    //     return true
    // }

    render() {
        
        const { error, isLoaded, item } = this.state;

        let content = ''

        if (error) {
            content = <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            content = <div>Loading...</div>
        } else {

            let className = `post post_${this.state.postId}`
            content = (
                <div className={className}>
                    <h2>Post ID is: {item.title.rendered} </h2>
                    {renderHTML(item.content.rendered)}
                </div>
            )
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
        )
    }

}