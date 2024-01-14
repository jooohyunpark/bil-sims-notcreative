import React, { Fragment } from 'react';
import styled from 'styled-components';
import { SwitchTransition, Transition } from 'react-transition-group';

const FadeDiv = styled.div`
  transition: all 0.25s;
  height: auto;
  width: auto;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  display: ${({ state }) => (state === 'exited' ? 'none' : 'block')};
`;

const TransitionWrapper = ({ id, children, ...props }) => (
  <Fragment>
    <Transition {...props}>
      {state => <FadeDiv state={state}>{children}</FadeDiv>}
    </Transition>
  </Fragment>
);

const RenderWhen = ({ limit, isTrue, id, children }) => {
  const list = [];

  if (isTrue !== true) {
    return null;
  }

  children.forEach((child, i) => {
    const { isTrue: isChildTrue } = child.props || {};

    if (isChildTrue === true && list.length < limit) {
      list.push(
        <div key={`${i}${id}`}>
          <SwitchTransition mode="out-in">
            <TransitionWrapper key={`${i}${id}`} id={id} appear timeout={250}>
              {child}
            </TransitionWrapper>
          </SwitchTransition>
        </div>,
      );
    }
  });

  return <Fragment>{list}</Fragment>;
};

RenderWhen.defaultProps = {
  limit: 1,
  isTrue: true,
};

RenderWhen.If = ({ children }) => children;

export { RenderWhen };
