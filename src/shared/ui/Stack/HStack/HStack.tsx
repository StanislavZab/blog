import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack: React.FC<HStackProps> = (props) => (
    <Flex direction="row" {...props} />
);
