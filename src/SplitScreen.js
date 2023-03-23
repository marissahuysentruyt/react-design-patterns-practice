import styled from "styled-components";

export const SplitScreen = ({children, leftWeight=1, centerWeight=1, rightWeight=1 }) => {
  const [ left, center, right ] = children;

  const Container = styled.div`
    display: flex;
  `;

  const SplitItem = styled.div`
    flex: ${props => props.weight};
    text-align: center;
  `;

  return (
    <Container>
      <SplitItem weight={leftWeight}>
        {left}
      </SplitItem>
      <SplitItem weight={centerWeight}>
        {center}
      </SplitItem>
      <SplitItem weight={rightWeight}>
        {right}
      </SplitItem>
    </Container>
  )
}

