import React from 'react';
import { Col, Container, Row } from 'react-grid-system';

import { Content } from '../../content/config';
import Section from '../Partial/Section';
import { DisclaimerLayout } from './styles';

export default () => (
  <Section background="white">
    <DisclaimerLayout>
      <Container>
        <Row>
          <Col xs={12} xxl={10} offset={{ xxl: 1 }}>
            <Content id="disclaimer" />
          </Col>
        </Row>
      </Container>
    </DisclaimerLayout>
  </Section>
);
