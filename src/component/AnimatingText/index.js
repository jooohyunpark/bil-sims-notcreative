import React, { useContext, useMemo } from 'react';
import { Col, Row, Container, Visible } from 'react-grid-system';

import SimlishSVG from '../SVG/Simlish';
import { ContentContext } from '../../content/config';
import Section from '../Partial/Section';
import Sticker from '../Sticker';

import {
  AnimatingTextLayout,
  WordContainer,
  Word,
  Regular,
  Simlish,
  Break,
  Blank,
} from './styles';

const Renderer = ({ dataArray = [] }) => {
  const textOnlyArray = useMemo(
    () => dataArray.filter(d => !d.includes('{{') && !d.includes('}}')),
    [dataArray],
  );

  return dataArray.map((data, i) => {
    if (data.includes('{{') && data.includes('}}')) {
      const el = data.replaceAll('{{', '').replaceAll('}}', '');

      // sticker
      if (el.includes('sticker'))
        return <Sticker id={Number(el.replace('sticker_', ''))} key={i} />;
      // line break
      if (el === 'break') return <Break key={i} />;
      if (el === 'blank') return <Blank key={i} />;
    }

    const textIndex = textOnlyArray.indexOf(data) + 1;

    // text
    return (
      <Word key={`word_${i}`}>
        <Regular $index={textIndex}>{data}</Regular>
        <Simlish $index={textIndex} aria-label={data}>
          <SimlishSVG id={textIndex} />
        </Simlish>
      </Word>
    );
  });
};

export default () => {
  const { content } = useContext(ContentContext);
  const { animatingText } = content;

  return (
    <Section id="animating-text" background="white">
      <AnimatingTextLayout>
        <Container>
          <Row>
            <Col xs={12}>
              <WordContainer>
                <Visible xs sm md>
                  <Renderer dataArray={animatingText.mobile} />
                </Visible>
                <Visible lg xl xxl>
                  <Renderer dataArray={animatingText.desktop} />
                </Visible>
              </WordContainer>
            </Col>
          </Row>
        </Container>
      </AnimatingTextLayout>
    </Section>
  );
};
