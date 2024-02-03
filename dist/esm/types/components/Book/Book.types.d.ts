import React from 'react';
export interface BookProps {
    cover?: string;
    title?: string;
    subtitle?: string;
    leftCornerRadius?: string;
    rightCornerRadius?: string;
    creaseMargin?: string;
    creaseWidth?: string;
    thickness?: string;
    coverColor?: string;
    coverMargin?: string;
    transitionTimingFunction?: TransitionTimingFunction;
    transitionDuration: TransitionDuration;
    coverCloseAngle?: number;
    coverOpenAngle?: number;
    coverContent?: React.JSX.Element | React.JSX.Element[];
    pageContent?: React.JSX.Element | React.JSX.Element[];
}
export type TransitionDuration = `${number}ms` | `${number}s`;
export type TransitionTimingFunction = 'ease' | 'ease-in' | 'ease-in-out' | 'ease-out' | 'jump-both' | 'jump-end' | 'jump-none' | 'jump-start' | 'linear' | 'step-end' | 'step-start' | 'steps' | `cubic-bezier(${string})` | `linear(${string})`;
