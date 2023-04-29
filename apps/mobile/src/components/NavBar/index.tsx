import { Container, ContentIcon, ButtomNav, ImageLineBar } from './style'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
type Props = BottomTabBarProps;

import imgLineBar from '../../assets/line-bar.png'

import { Ionicons } from '@expo/vector-icons'

const CustomNavBar: React.FC<Props> = ({ state, descriptors, navigation }) => {
    return (
        <Container>
            <ImageLineBar
                source={imgLineBar} />
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <ButtomNav
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        key={route.key}
                    >
                        <ContentIcon>
                            <Ionicons
                                name={options.tabBarIcon}
                                size={30}
                                color={isFocused ? "#387CFF" : "#D7DCE4"}
                            />
                        </ContentIcon>

                    </ButtomNav>
                );
            })}


        </Container>
    )
}

export default CustomNavBar;