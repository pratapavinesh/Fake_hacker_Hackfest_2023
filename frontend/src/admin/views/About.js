/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

function Notifications() {
  const notificationAlertRef = React.useRef(null);
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            {place==="tl"?"A user-friendly and responsive web-based platform that allows users to invest in a variety of assets"
            :place==="tc"?"Our platform will provide real-time market data for a variety of assets, including stocks, bonds, and cryptocurrencies.":
            "Our platform will provide investment recommendations based on historical data and machine learning algorithms."}
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  return (
    <>
      <div className="content">
        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef} />
        </div>
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Executive Summary</CardTitle>
              </CardHeader>
              <CardBody>
                <Alert color="info">
                  <span>Our investment platform aims to solve the problems of limited 
                    investment opportunities, siloed assets, and complex investment 
                    processes by providing a one-stop-shop for investors to manage their 
                    investments across different asset classes.</span>
                </Alert>
                <Alert color="success">
                  <span> Our platform will offer 
                    real-time market data and investment recommendations to help investors 
                    make informed decisions and maximize their returns. By converting all these 
                    assets into a single digital currency, we can simplify the investment process 
                    for users and provide a more streamlined experience.</span>
                </Alert>
                <Alert color="primary">
                  <span> Our platform will offer 
                    real-time market data and investment recommendations to help investors 
                    make informed decisions and maximize their returns. By converting all these 
                    assets into a single digital currency, we can simplify the investment process 
                    for users and provide a more streamlined experience.</span>
                </Alert>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Background and Context</CardTitle>
              </CardHeader>
              <CardBody>
                <Alert color="primary">
                  <span>
                    Investment opportunities are often limited to a select few 
                    who have the knowledge and resources to
                     invest in traditional assets such as stocks, bonds, and cryptocurrencies. 
                  </span>
                </Alert>
                <Alert color="info">
                  <span>
                  Additionally, these assets are often siloed, 
                  with investors needing to switch between different platforms to manage 
                  their portfolios. There is a need for a web-based investment platform that
                   allows anyone to invest in a variety of assets, while also offering real-time market data, 
                  investment recommendations, and a user-friendly interface
                  </span>
                </Alert>
                <Alert color="warning">
                  <span>
                  Furthermore, there is a need for a digital currency that can incorporate all these
                   different assets and simplify the investment process for users.
                  </span>
                </Alert>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="6">
                      <CardTitle tag="h4">
                              Deliverables
                        <p className="category">The key deliverables of our investment platform will include:</p>
                      </CardTitle>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("tl")}
                          >
                            Web-based investment platform
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("tc")}
                          >
                            Real-time market data
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("tr")}
                          >
                           Investment recommendations 
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Notifications;
