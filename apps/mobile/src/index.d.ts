declare module '*.png' {
    const value: any;
    export default value;
}
declare module '*.svg' {
    const value: any;
    export default value;
}
declare module 'react-native-vector-icons' {
    export interface IconProps {
        name: string;
        size?: number;
        color?: string;
    }
}
