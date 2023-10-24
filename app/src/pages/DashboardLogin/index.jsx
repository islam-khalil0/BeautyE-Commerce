import React from "react";
import Styles from "./DashboardLogin.module.css";
import frame from "../../assets/Frame.png";
import { Button, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";

export default function index() {
  return (
    <>
      <div className={Styles.login_content}>
        <div className={Styles.form_content}>
          <div className={Styles.form_layout}>
            <div className="text-center">
              <p className={Styles.logo}>DIVI</p>
            </div>
            <div className={Styles.login_txt}>
              <h3>Login</h3>
              <p className="text-muted">
                see your growth and get consulting support!
              </p>
            </div>
            <Button className={Styles.google_btn}>
              <FcGoogle className="me-2" />
              Sign In With Google
            </Button>

            <div className={Styles.line}>
              <div className="px-5"> Or Sign In With Email</div>
            </div>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Remember me"
                    className={Styles.remMe}
                  />
                </Form.Group>

                <a href="" className={Styles.forgetpass}>
                  Forget password?
                </a>
              </div>

              <Button
                variant="primary"
                className={`w-100 my-4 ${Styles.submitBtn}`}
                type="submit"
              >
                Login
              </Button>
            </Form>
          </div>
        </div>
        <div className={Styles.img_content}>
          <img src={frame} className={Styles.img} alt="" />
        </div>
      </div>
    </>
  );
}
