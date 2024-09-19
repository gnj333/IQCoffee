import { ShopsButton } from '@/shared/ui/shopsButton/styled';


interface Props {
  secondColor: string;
}
export const Button: React.FC<Props> = ({ secondColor }) => (
  <ShopsButton secondColor={ secondColor }>Go</ShopsButton>
);
