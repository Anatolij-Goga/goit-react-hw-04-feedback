import styled from '@emotion/styled';

const StatisticsContainer = styled.ul`
  background-color: white;
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  color: black;
  font-weight: bold;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
`;

const StatisticsItem = styled.li`
  margin-bottom: 5px;
  font-size: 16px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export { StatisticsContainer, StatisticsItem };
