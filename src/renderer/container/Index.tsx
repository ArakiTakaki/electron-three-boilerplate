import * as React from 'react';
import Styled from 'styled-components';

const Wrap = Styled.div({
  width: 400,
  backgroundColor: 'rgba(255, 255, 0, 0.4)',
  margin: '0 auto',
  lineHeight: '1.7',
  textAlign: 'center',
});

const Index = () => {
  return (
    <Wrap>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
    </Wrap>
  );
};

Index.defaultProps = {};
export default Index;
