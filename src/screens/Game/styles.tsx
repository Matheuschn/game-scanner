import styled from 'styled-components/native';
import { colors } from '../../colors';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.primary};
`;

export const GameContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
