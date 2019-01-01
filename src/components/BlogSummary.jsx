import React from "react"
import { NavLink } from "react-router-dom"

import { Media } from "react-bootstrap"

const BlogSummary = ({item}) => {

        return (
            <Media key={item.id}>
                <Media.Left>
                    <img width={64} height={64} src="https://fakeimg.pl/200x200/?text=World&font=lobster" alt="thumbnail" />
                </Media.Left>
                <Media.Body>
                    <Media.Heading>
                        <NavLink to={`/single/${item.id}`} >{item.title.rendered}</NavLink>
                    </Media.Heading>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                        fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </Media.Body>
            </Media>
        )
}

export default BlogSummary