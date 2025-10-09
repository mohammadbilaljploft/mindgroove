"use client";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Eye, EyeOff } from "lucide-react"; // for eye icons

export default function Page() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false); // optional checkbox state

    return (
        <>
            <section className="registration_page">
                <Container>
                    <Row className="g-5 justify-content-center align-items-center">
                        <Col lg={6} xl={4}>
                            <div className="">
                                <div className="login_logo_img">
                                    <img src="/img/logo_img01.svg" alt="Logo" />
                                </div>


                                <Form className="form_sec ">
                                    {/* Email Field */}
                                     <div className="login_title">
                                    <h3>Forgot Password </h3>
                                    <p>
                                        Please enter your email address to receive a verification code.
                                    </p>
                                </div>
                                
                                    <div className="form_field">
                                        <Form.Label>Email Address</Form.Label>
                                        <div className="gradients_field">
                                            <Form.Control
                                                type="email"
                                                placeholder="willie.jennings@example.com"
                                            />
                                        </div>
                                    </div>

                                

                              

                                    <div className="form_field">
                                        <button type="submit" className="main_btn w-100">
                                            Send Email
                                        </button>
                                    </div>

                                </Form>
                            </div>
                        </Col>

                        {/* Right Side Image */}
                        <Col lg={6} xl={6}>
                            <div className="login_img">
                                <img src="/img/login_img.png" alt="Login" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
