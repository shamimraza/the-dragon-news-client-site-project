import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaFacebookSquare, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import Qzone from '../qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNev = () => {
    return (
        <div>
            <h4 className='my-2'>Login with</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with google</Button>
            <Button variant="outline-secondary"><FaGithub></FaGithub> Login with github</Button>
            <div>
                <h4 className='my-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebookSquare></FaFacebookSquare> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>  
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />
               
            </div>
        </div>
    );
};

export default RightNev;