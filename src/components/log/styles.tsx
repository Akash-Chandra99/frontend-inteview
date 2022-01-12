import styled from 'styled-components'

interface LogCardProps {
  readonly color: string;
}

export const LogCard = styled.div<LogCardProps>`
  margin:1rem 1rem 1rem 0;
  border-radius:5px;
  height:7rem;
  background-color: ${(props) => props.color};
`;

export const ButtonWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
`;