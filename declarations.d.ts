declare module '*.svg' {
    import React from 'react';
    import { SvgProps } from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
}

declare module '*.png';
declare module 'react-phone-number-input/react-native-input';
declare module 'react-native-swipe-modal-up-down';
declare module 'react-native-swipeable';
declare module 'react-shimmer-effect';
declare module 'react-native-deep-linking' {
    namespace DeepLinking {
        function addScheme(url: string): void;
        function addRoute(url: string, callback: any): void;
        function evaluateUrl(url: string): boolean;
    }
    export = DeepLinking;
}
