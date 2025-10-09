"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";


export default function Welcome(props) {



    return (
        <>

            <Modal
                show={props.show}          
                onHide={props.onHide}     
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="common_modal "
            >
                <Modal.Header closeButton />

                <Modal.Body>
                    <div className="modal_title">
                        <h3>Welcome!</h3>
                        <p>
                            You should be receiving an email from a DO NOT REPLY address momentarily. It 
                            will have login instructions. If you have any questions, or need immediate assistance, 
                            contact us. We look forward to speaking with you!
                        </p>

                        <button className="main_btn">Ok</button>

                    </div>



                </Modal.Body>
            </Modal>




        </>

    );
}
