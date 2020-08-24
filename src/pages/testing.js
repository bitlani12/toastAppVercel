import React from 'react';
var jwt = require('jsonwebtoken');
class Testing extends React.Component {
    componentDidMount() {
        this.generateToken()
        console.log(process.env.JWT_SECRET, "this is token")
    }
    generateToken = () => {
        //1. Dont use password and other sensitive fields
        //2. Use fields that are useful in other parts of the     
        //app/collections/models
        console.log(process.env.JWT_SECRET, "this is jwt")
        const user = {
            name: "mukesh",
            username: "mukesh",
            _id: 1
        }
        var u = {
            name: user.name,
            username: user.username,
            // admin: user.admin,
            _id: user._id.toString(),
            // image: user.image
        };
        let token;
        return token = jwt.sign(u, process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
        }),
            console.log(token)
    }
    render() {
        return (
            <div>
                hiii{process.env.JWT_SECRET} hii
            </div>
        )
    }
}
export default Testing;