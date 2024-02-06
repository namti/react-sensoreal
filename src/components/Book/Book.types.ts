import React from 'react';

export interface BookProps {
	/**
	 * Cover image URL
	 */
	cover?: string;

	/**
	 * Border radius, relative to the width of the book. `0` - `1`
	 */
	leftCornerRadius?: number;
	/**
	 * Border radius, relative to the width of the book. `0` - `1`
	 */
	rightCornerRadius?: number;
	/**
	 * Crease margin to the left, ralative to the width of the book. `0` - `1`
	 */
	creaseMargin?: number,
	/**
	 * Crease width, ralative to the width of the book. `0` - `1`
	 */
	creaseWidth?: number,
	/**
	 * Thickness, relative to the height of the book. `0` - `1`
	 */
	thickness?: number;
	/**
	 * Cover margin, relative to the height of the book. `0` - `1`
	 */
	coverMargin?: number;

	/**
	 * Cover color shows when the cover image is loading or not provided.
	 */
	coverColor?: string;
	transitionTimingFunction?: TransitionTimingFunction;
	transitionDuration: TransitionDuration;
	/**
	 * Initial cover angle. `0` - `45`
	 */
	coverStartAngle?: number;
	/**
	 * Cover angle when hover on it. `0` - `45`
	 */
	coverEndAngle?: number;
	coverContent?: React.JSX.Element | React.JSX.Element[];
	pageContent?: React.JSX.Element | React.JSX.Element[];
}

export type TransitionDuration = `${number}ms` | `${number}s`;

export type TransitionTimingFunction = 'ease' | 'ease-in' | 'ease-in-out' | 'ease-out' | 'jump-both' | 'jump-end' | 'jump-none' | 'jump-start' | 'linear' | 'step-end' | 'step-start' | 'steps' | `cubic-bezier(${string})` | `linear(${string})`;

// export type absSize = `${number}px` | `${number}pt` | `${number}em` | `${number}rem`;