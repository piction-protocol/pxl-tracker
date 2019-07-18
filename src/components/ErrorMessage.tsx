import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors';

export interface ErrorMessageProps {
  error: Error
}

const ErrorMessageWrapper = styled.div`
  background-color: ${Colors.red};
  color: ${Colors.white};
  padding: 16px
`;

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  <ErrorMessageWrapper>
    {error.toString()}
  </ErrorMessageWrapper>
)

export default ErrorMessage