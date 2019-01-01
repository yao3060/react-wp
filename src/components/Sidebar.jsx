import React from "react"
import { NavLink } from "react-router-dom"
import { Panel, ListGroup, ListGroupItem } from "react-bootstrap"

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
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


    render() {

        const { error, isLoaded, items } = this.state;

        let content = ''

        if (error) {
            content = <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            content = <div>Loading...</div>
        } else {
            content = 
                <Panel>
                    <Panel.Heading>Latest Posts</Panel.Heading>
                    <ListGroup>
                        {items.map(item => (
                              
                              <ListGroupItem key={item.id}>
                                  <NavLink to={`/single/${item.id}`} >{item.title.rendered}</NavLink>
                              </ListGroupItem>
                      ))}
                        
                    </ListGroup>
                </Panel>
        }

        return (
            <div className="Sidebar">
                {content}
            </div>
        )
    }
}