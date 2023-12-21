import React, { Fragment } from 'react';
import { SkillBars } from '../portfolio';
import { Container, Row, Progress, Col, UncontrolledTooltip } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import GreetingLottie from '../components/DisplayLottie';
import DisplayLottie from '../components/DisplayLottie';
import { Icon } from '@iconify/react';

 const Proficiency = () => {
  return (
    SkillBars && (
      <Container className="section section-lg">
        <Fade bottom duration={2000}>
          <Row>
            <Col lg="6">
              <h1 className="h1 text-center">Skills</h1>
              {/* {SkillBars.map((skill) => {
                return (
                  <div className="progress-info" key={skill.Stack}>
                    <div className="progress-label">
                      <span>{skill.Stack}</span>
                    </div>
                    <div className="progress-percentage">
                      <span>{skill.progressPercentage}%</span>
                    </div>
                    <Progress
                      max="100"
                      value={skill.progressPercentage}
                      color="info"
                      role="progressbar"
                      aria-label={skill.Stack}
                    />
                  </div>
                );
              })} */}
              {SkillBars.map((section, index) => {
          return (
            <Row className="my-5" key={index}>
              <Col className="order-1 order-lg-2">
                <Fade right duration={2000}>
                  <div className="d-flex justify-content-center flex-wrap">
                    {section.softwareSkills.map((skill, i) => {
                      return (
                        <Fragment key={i}>
                          <div
                            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                            id={skill.skillName.replace(/\s/g, '')}
                          >
                            <Icon
                              icon={skill.iconifyTag}
                              data-inline="false"
                            ></Icon>
                          </div>
                          <UncontrolledTooltip
                            delay={0}
                            placement="bottom"
                            target={skill.skillName.replace(/\s/g, '')}
                          >
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      );
                    })}
                  </div>
                </Fade>
              </Col>
            </Row>
          );
        })}
            </Col>
            <Col lg="6">
              <GreetingLottie animationPath="/lottie/build.json" />
            </Col>
          </Row>
        </Fade>
      </Container>
    )
  );
 };

 export default Proficiency;
