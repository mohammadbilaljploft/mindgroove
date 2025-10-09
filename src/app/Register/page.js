"use client";
import React, { useState } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Col, Container, Form, Row } from "react-bootstrap";

export default function Page() {
    const [value, setValue] = useState();
    return (
        <>
            <section className="registration_page ">
                <Container>
                    <Row className="g-5 justify-content-center align-items-center">
                        <Col lg={6} xl={5}>
                            <div className="">
                                <div className="login_logo_img">
                                    <img src="/img/logo_img01.svg" alt="Logo" />
                                </div>

                                <Form className="form_sec justify-content-start">
                                    <div className="login_title">
                                        <h3>Create an Account</h3>
                                        <p>
                                            Enter your login details to create your account
                                        </p>
                                    </div>
                                    <Row className="g-4">
                                        <Col lg={6}>
                                            <div className="form_field">
                                                <Form.Label>First Name * </Form.Label>
                                                <div className="gradients_field">
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="willie.jennings@example.com"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form_field">
                                                <Form.Label>Last Name *</Form.Label>
                                                <div className="gradients_field">
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="willie.jennings@example.com"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form_field">
                                                <Form.Label>Title / Position </Form.Label>
                                                <div className="gradients_field">
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="willie.jennings@example.com"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form_field">
                                                <Form.Label>Phone</Form.Label>
                                                <div className="gradients_field">
                                                    <PhoneInput
                                                        className="form-control"
                                                        placeholder="Enter phone number"
                                                        value={value}
                                                        onChange={setValue}
                                                        defaultCountry="IN"
                                                    />
                                                </div>
                                            </div>

                                        </Col>
                                        <Col lg={6}>
                                            <div className="form_field">
                                                <Form.Label>Address 1 *</Form.Label>
                                                <div className="gradients_field">
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="willie.jennings@example.com"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form_field">
                                                <Form.Label>Address 2 *</Form.Label>
                                                <div className="gradients_field">
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="willie.jennings@example.com"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form_field">
                                                <Form.Label>City *</Form.Label>
                                                <div className="gradients_field">
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="willie.jennings@example.com"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form_field">
                                                <Form.Label>Zip * </Form.Label>
                                                <div className="gradients_field">
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="willie.jennings@example.com"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form_field">
                                                <Form.Label>Country *</Form.Label>
                                                <div className="gradients_field">
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="willie.jennings@example.com"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form_field">
                                                <Form.Label>State * </Form.Label>
                                                <div className="gradients_field">
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="willie.jennings@example.com"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>




                                    <div className="form_field">


                                        <div className="check_box_field mb-2">
                                            <Form.Check
                                                type="checkbox"
                                                id="terms-checkbox"
                                            />
                                            <label className="form-label m-0">
                                                I have read, and agree to, the Extreme Music <strong>Terms of Use</strong>
                                            </label>
                                        </div>

                                        <div className="check_box_field ">
                                            <Form.Check
                                                type="checkbox"
                                                id="terms-checkbox"
                                            />
                                            <label className="form-label m-0">
                                                I have read, and agree to, the Extreme Music <strong>Privacy Policy</strong>
                                            </label>
                                        </div>


                                    </div>

                                    <div className="form_field">
                                        <button type="submit" className="main_btn w-100">
                                            Let’s Do This!
                                        </button>
                                    </div>

                                    <div className="option_or">
                                        <span></span>
                                        <p>Or, login with your email</p>
                                        <span></span>
                                    </div>
                                    <div className="common_gradients">
                                        <div className="common_black">
                                            <a href="" ><img src="/img/googlelogo.svg" alt="Logo" />Login with Google</a>
                                        </div>
                                    </div>

                                    <div className="dont_have_ac">
                                        <span>Don’t have an account yet? <a href="">Create a new account</a></span>
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
