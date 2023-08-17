import { ButtonStyle } from './styles';
import { ButtonProps } from './types';

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonStyle {...props}>
      {children}
    </ButtonStyle>
  );
};