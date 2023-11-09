import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="section pt-0">
      <div className="container">
        <div className="section-title-wrap section-header">
          <h5 className="custom-primary">FAQ</h5>
          <h2 className="title">FAQ Pricing</h2>
        </div>
        <Accordion defaultActiveKey="0" className="with-gap">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How can I start with buying a home?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                {" "}
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Square Scacco Diamond
                Ring truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                tempor, sunt aliqua put a bird on it squid single-origin coffee
                nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                craft beer labore wes anderson cred nesciunt sapiente ea
                proident. Ad vegan excepteur butcher vice lomo. Leggings
                occaecat craft beer farm-to-table, raw denim aesthetic synth
                nesciunt you probably haven't heard of them accusamus labore
                sustainable VHS.
              </p>
              <ul className="acr-list mb-0">
                <li>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </li>
                <li>
                  {" "}
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum{" "}
                </li>
                <li> There are many variations of passages of Lorem Ipsum </li>
                <li>
                  {" "}
                  Internet tend to repeat predefined chunks as necessary{" "}
                </li>
                <li>
                  {" "}
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          {/* <Card>
            <Accordion.Collapse eventKey="0" className="collapseparent">
              <Card.Body>
                <p>
                  {" "}
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Square Scacco Diamond
                  Ring truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                  tempor, sunt aliqua put a bird on it squid single-origin
                  coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  Leggings occaecat craft beer farm-to-table, raw denim
                  aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </p>
                <ul className="acr-list mb-0">
                  <li>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </li>
                  <li>
                    {" "}
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum{" "}
                  </li>
                  <li>
                    {" "}
                    There are many variations of passages of Lorem Ipsum{" "}
                  </li>
                  <li>
                    {" "}
                    Internet tend to repeat predefined chunks as necessary{" "}
                  </li>
                  <li>
                    {" "}
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
            <Card.Header>
              <Accordion.Toggle as={NavLink} variant="link" eventKey="0">
                How can I start with buying a home?
              </Accordion.Toggle>
            </Card.Header>
          </Card>
          <Card>
            <Accordion.Collapse eventKey="1" className="collapseparent">
              <Card.Body>
                <p>
                  {" "}
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Square Scacco Diamond
                  Ring truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                  tempor, sunt aliqua put a bird on it squid single-origin
                  coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  Leggings occaecat craft beer farm-to-table, raw denim
                  aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </p>
                <ul className="acr-list mb-0">
                  <li>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </li>
                  <li>
                    {" "}
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum{" "}
                  </li>
                  <li>
                    {" "}
                    There are many variations of passages of Lorem Ipsum{" "}
                  </li>
                  <li>
                    {" "}
                    Internet tend to repeat predefined chunks as necessary{" "}
                  </li>
                  <li>
                    {" "}
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
            <Card.Header>
              <Accordion.Toggle as={NavLink} variant="link" eventKey="1">
                Is the service free?
              </Accordion.Toggle>
            </Card.Header>
          </Card>
          <Card>
            <Accordion.Collapse eventKey="2" className="collapseparent">
              <Card.Body>
                <p>
                  {" "}
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Square Scacco Diamond
                  Ring truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                  tempor, sunt aliqua put a bird on it squid single-origin
                  coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  Leggings occaecat craft beer farm-to-table, raw denim
                  aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </p>
                <ul className="acr-list mb-0">
                  <li>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </li>
                  <li>
                    {" "}
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum{" "}
                  </li>
                  <li>
                    {" "}
                    There are many variations of passages of Lorem Ipsum{" "}
                  </li>
                  <li>
                    {" "}
                    Internet tend to repeat predefined chunks as necessary{" "}
                  </li>
                  <li>
                    {" "}
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
            <Card.Header>
              <Accordion.Toggle as={NavLink} variant="link" eventKey="2">
                How many agents can I have at once?
              </Accordion.Toggle>
            </Card.Header>
          </Card> */}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
