import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function ProfilePageCompany() {
  const [validated, setValidated] = useState(false);
  const [submit, setsubmit] = useState("Submit Form")

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {

      setsubmit("Edit")
    }
    setValidated(true);

    setValidated(true);
  };

  const [btn1toggle1, setbtn1toggle1] = useState(false)
  const [btn1toggle2, setbtn1toggle2] = useState(false)
  const [btn1toggle3, setbtn1toggle3] = useState(false)



  const toggle1 = () => {
    if (btn1toggle1) {
      setbtn1toggle1(false)
    } else {
      setbtn1toggle1(true)
    }
  }

  
  const toggle2 = () => {
    if (btn1toggle2) {
      setbtn1toggle2(false)
    } else {
      setbtn1toggle2(true)
    }
  }

  const toggle3 = () => {
    if (btn1toggle3) {
      setbtn1toggle3(false)
    } else {
      setbtn1toggle3(true)
    }
  }


  return (

    <div className="mx-5  mt-0 py-5 pt-3" >

      <Form noValidate validated={validated} onSubmit={handleSubmit} className="main_dev" >
        <Card className=" p-4">

          <div className="d-flex justify-content-end" >
            <Button variant="outline-dark" onClick={toggle1}>{btn1toggle1 ? "Edit" : "Save"}</Button>
          </div>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01" className="my-2">

              <Form.Control
                required
                type="text"
                placeholder="Company Name"

              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02" className="my-2">
              <Form.Control
                required
                type="text"
                placeholder="Contact Name"

              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>



          </Row>


          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03" className="my-2">

              <Form.Control type="email" placeholder="Email" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Email.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom04">

              <Form.Control type="number" placeholder="Phone No" required className="my-2" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Phone Number.
              </Form.Control.Feedback>
            </Form.Group>



          </Row>

        </Card>

        <Card className="p-4 mt-3">

          <div className="d-flex justify-content-end" >
            <Button variant="outline-dark" onClick={toggle2}>{btn1toggle2 ? "Edit" : "Save"}</Button>
          </div>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">

              <Form.Control
                required
                type="text"
                placeholder="Address 1"
                className="my-2"

              />

              <Form.Control.Feedback> Please provide a valid Address. !</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Control
                required
                type="text"
                placeholder="Address 2"
                className="my-2"
              />
              <Form.Control.Feedback>  Please provide a valid Address.!</Form.Control.Feedback>
            </Form.Group>


          </Row>
          <Row className="mb-3">

            <Form.Group as={Col} md="4" controlId="validationCustom01">

              <Form.Control
                required
                type="text"
                placeholder="city"
                className="my-2"

              />

            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">

              <Form.Control
                required
                type="text"
                placeholder="State"
                className="my-2"
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Control
                required
                type="number"
                placeholder="Zip "
                className="my-2"

              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>



          </Row>
        </Card>
        <Card className="p-4 mt-3">

<div className="d-flex justify-content-end" >
  <Button variant="outline-dark" onClick={toggle3}>{btn1toggle3 ? "Edit" : "Save"}</Button>
</div>

<Row className="mb-3">
  <Form.Group as={Col} md="6" controlId="validationCustom01">

    <Form.Control
      required
      type="text"
      placeholder="Address 1"
      className="my-2"

    />

    <Form.Control.Feedback> Please provide a valid Address. !</Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} md="6" controlId="validationCustom02">
    <Form.Control
      required
      type="text"
      placeholder="Address 2"
      className="my-2"
    />
    <Form.Control.Feedback>  Please provide a valid Address.!</Form.Control.Feedback>
  </Form.Group>


</Row>
<Row className="mb-3">

  <Form.Group as={Col} md="4" controlId="validationCustom01">

    <Form.Control
      required
      type="text"
      placeholder="city"
      className="my-2"

    />

  </Form.Group>
  <Form.Group as={Col} md="4" controlId="validationCustom01">

    <Form.Control
      required
      type="text"
      placeholder="State"
      className="my-2"
    />
  </Form.Group>
  <Form.Group as={Col} md="4" controlId="validationCustom02">
    <Form.Control
      required
      type="number"
      placeholder="Zip "
      className="my-2"

    />
    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  </Form.Group>



</Row>
</Card>


       
        <Button type="submit">{submit}</Button>


      </Form>

    </div>

  );
}

export default ProfilePageCompany;