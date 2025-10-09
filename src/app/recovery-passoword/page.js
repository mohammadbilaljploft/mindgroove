"use client";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Eye, EyeOff } from "lucide-react"; // for eye icons
import Welcome from "@/components/modal/Welcome";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [modalShow, setModalShow] = useState(false);

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

                <Form className="form_sec">
                  <div className="login_title">
                    <h3>Recovery Password</h3>
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

                  {/* Confirm Password Field */}
                  <div className="form_field">
                    <Form.Label>Confirm Password</Form.Label>
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

                  {/* Submit Button */}
                  <div className="form_field">
                    <button
                      type="button"
                      className="main_btn w-100"
                      onClick={() => setModalShow(true)}
                    >
                      Update Password
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

      {/* Modal */}
      <Welcome show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
