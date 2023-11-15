import React from 'react';
import { Card, CardBody, Badge } from 'reactstrap';
import { EducationType } from '../types/sections';
import Fade from 'react-reveal/Fade';

const EducationCard = ({
  schoolName,
  location,
  subHeader,
  graduation,
  //desc,
  gpa,
  descBullets,
}: EducationType) => {
  return (
    <Fade left duration={2000}>
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-info">{schoolName}</h5>
              <h6>{location}</h6>
              <h6>{subHeader}</h6>
              <Badge color="info" className="mr-1">
                {graduation}
              </Badge>
              {gpa && (
                <Badge color="primary" className="mr-1">
                  {gpa}
                </Badge>
              )}
              { <p className="description mt-3">{descBullets}</p>
              /*<ul>
                {descBullets
                  ? descBullets.map((desc) => {
                      return <li key={desc}>{desc}</li>;
                    })
                  : null}
              </ul> */}
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default EducationCard;
