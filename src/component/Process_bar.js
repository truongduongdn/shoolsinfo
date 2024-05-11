import React, { useState, useEffect } from 'react';
import { Accordion, Card, Row, Col, ProgressBar } from 'react-bootstrap';

const studentData = [
  { title: 'Giảng viên (Teachers)', rating: 8.6 },
  { title: 'Cơ sở vật chất (Facilities)', rating: 8.0 },
  { title: 'Môi trường HT (Learning Environment)', rating: 8.2 },
  { title: 'Hoạt động ngoại khoá (Extracurricular Activities)', rating: 8.1 },
  { title: 'Cơ hội việc làm (Job Opportunities)', rating: 7.0 },
  { title: 'Tiến bộ bản thân (Self Improvement)', rating: 8.6 },
  { title: 'Thủ tục hành chính (Administrative Procedures)', rating: 7.2 },
  { title: 'Quan tâm sinh viên (Student Support)', rating: 6.6 },
  { title: 'Hài lòng về học phí (Satisfied with Tuition Fee)', rating: 6.9 },
  { title: 'Sẵn sàng giới thiệu (Recommend to Others)', rating: 7.4 },
];

function StudentSatisfaction() {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    // Simulate data fetching (replace with your actual logic)
    setRatings(studentData);
  }, []);

  return (
    <div className="accordion_custom">
      <h5 className="plain active" href="javascript:void(0);">
        Mức độ hài lòng (Satisfaction Level)
      </h5>
      <div className="row custom-rating">
        <Row xs={1} md={2} lg={2} className="g-2">
          {ratings.map((item, index) => (
            <Col key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Text>{item.rating}</Card.Text>
                    <ProgressBar now={item.rating * 10} variant="success" />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default StudentSatisfaction;