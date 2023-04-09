import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack: React.FC<VStackProps> = (props) => {
    const { align = 'start' } = props;

    return (
        <Flex direction="column" {...props} align={align} />
    );
};
