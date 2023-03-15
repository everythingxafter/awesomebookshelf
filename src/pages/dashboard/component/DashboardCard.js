import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import './DasboardCard.css'
import { MdDeleteForever } from "react-icons/md";

export default function DashboardCard() {
    return (
        <div className="dashboard-card">
            <div className="dashboard-card__container-card">
                <div style={{ margin: '1em' }}>
                    <Image src="http://placekitten.com/200/300" alt="http://placekitten.com/200/300" className="dashboard-card__image" />
                </div>
                <div className="dashboard-card__body">
                    <Container>
                        <h3>hehehe</h3>
                        <div className="dashboard-card__likes">
                            <p>Likes</p>
                            <p>9999</p>
                        </div>

                        <div className="dashboard-card__date">
                            <div>
                                <p>Published at</p>
                                <p> 31 Feb 2012</p>
                            </div>
                            <div>
                                <p>Last Update at</p>
                                <p> 31 Feb 2012</p>
                            </div>
                        </div>
                        <div className="dashboard-card__button-action">
                            <div className="dashboard-card__tags">
                                <Button>Action</Button>
                                <Button>Animation</Button>
                                <Button>Sci-Fi</Button>
                                <Button>Dark</Button>
                            </div>
                            <div className="dashboard-card__action">
                                <Button variant="success">Update</Button>
                                <Button variant="danger"><MdDeleteForever size={'1.5em'} /></Button>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}