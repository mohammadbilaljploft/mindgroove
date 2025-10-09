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
                                    <h3>Hi, Welcome Back!</h3>
                                    <p>
                                        Enjoy the best music collection of your choice, login now.
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

                                    {/* Password Field */}
                                    <div className="form_field">
                                        <Form.Label>Password</Form.Label>
                                        <div className="gradients_field password_wrap">
                                            <Form.Control
                                                type={showPassword ? "text" : "password"}
                                                placeholder="8+ characters required"
                                            />
                                            <button
                                                type="button"
                                                className="toggle_eye_btn"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Remember Me Checkbox */}
                                    <div className="form_field">


                                        <div className="check_box_field mb-2">
                                            <Form.Check
                                                type="checkbox"
                                                id="terms-checkbox"
                                            />
                                            <label className="form-label m-0">
                                                Keep me Logged In
                                            </label>
                                        </div>

                                        <div className="check_box_field ">
                                            <Form.Check
                                                type="checkbox"
                                                id="terms-checkbox"
                                            />
                                            <label className="form-label m-0">
                                                I accept the <strong>Terms of Use</strong>
                                            </label>
                                        </div>


                                    </div>

                                    <div className="form_field">
                                        <button type="submit" className="main_btn w-100">
                                            Login
                                        </button>
                                    </div>

                                    <div className="option_or">
                                        <span></span>
                                        <p>Or</p>
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
