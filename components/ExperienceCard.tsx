import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
  Button,
} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { ExperienceType } from '../types/sections';

const ExperienceCard = ({
  companyLogo,
  projectName,
  //role,
  //date,
  //desc,
  descBullets,
  github,
}: ExperienceType) => {
  return (
    <Col lg="6">
      <Fade left duration={2000}>
        <Card
          style={{ flex: 1 }}
          className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
        >
          <CardBody className="">
            <img
              src={companyLogo}
              style={{
                objectFit: 'cover',
                left: 0,
                right: 0,
                top: '7rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '8rem',
                height: '8rem',
                borderRadius: '50%',
              }}
              className="shadow mb-3"
              alt={companyLogo}
            />
            <CardTitle tag="h4" className="mb-2">
              {projectName  }&nbsp;{/* Using non-breaking space */}
              {github ? (
                  <Button
                    className="btn-icon"
                    color="github"
                    href={github}
                    target="_blank"
                    rel="noopener"
                    aria-label="Github">
                    <span className="btn-inner--icon">
                      <i className="fa fa-github" />
                    </span>
                  </Button>
                ) : null}
            </CardTitle>
            {/* <CardSubtitle tag="h5" className="mb-2">
              {role}
            </CardSubtitle>
            <CardSubtitle>{date}</CardSubtitle>
            { <CardText tag="div" className="description my-3 text-left">
              {desc}} */}
              <div>
                {descBullets && descBullets.map((descBullet, i) => (
                  <p key={i}>
                    {Array.isArray(descBullet) ? (
                      // If descBullet is an array (React nodes), render each element
                      descBullet.map((item, j) => <span key={j}>{item}</span>)
                    ) : (
                      // If descBullet is a string, render it directly
                      descBullet
                    )}
                  </p>
                ))}
              </div>
            {/* </CardText> */}
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ExperienceCard;
