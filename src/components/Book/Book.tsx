import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { BookProps, TransitionDuration, TransitionTimingFunction } from './Book.types';
import { interpolateNumber } from '../../utils';
import { BackCover, BookWrapper, FrontCover, Pages } from './Styled';
import _ from 'lodash';

const defaultRatio = 0.7;

type TImageSize = [
  /**
   * Width
   */
  number,
  /**
   * Height
   */
  number,
];

const defaults = {
  borderRadiusLeft: .025,
  borderRadiusRight: .045,
  thickness: .075,
  creaseWidth: .035,
  creaseMargin: .06,
  coverMargin: .018,

  coverColor: '#555',
  transitionDuration: '300ms',
  transitionTimingFunction: 'ease-out',
  coverStartAngle: 0,
  coverEndAngle: 10,
};

const Book: React.FC<PropsWithChildren<BookProps>> = (props): React.JSX.Element => {
  const [ src, setSrc ] = useState('');
  const [ imageRatio, setImageRatio ] = useState(defaultRatio);
  const [ transformSkewStart, setTransformSkewStart ] = useState(0);
  const [ transformScaleStart, setTransformScaleStart ] = useState(1);
  const [ transformSkewEnd, setTransformSkewEnd ] = useState(0);
  const [ transformScaleEnd, setTransformScaleEnd ] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ isCoverLoading, setIsCoverLoading ] = useState(false);
  const [ wrapperSize, setWrapperSize ] = useState<{ width: number, height: number } | null>(null);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(wrapperRef.current){
      const { width, height } = wrapperRef.current.getBoundingClientRect();
      setWrapperSize({ width, height });
    }

    const resizeObserver = new ResizeObserver(entries => {
      if(entries?.length){
        const { width, height } = entries?.[0]?.contentRect || {};
        setWrapperSize({ width, height });
      }
    });

    if(wrapperRef.current) resizeObserver.observe(wrapperRef.current);

    return () => {
      if(wrapperRef.current) resizeObserver.unobserve(wrapperRef.current);
    };
  }, []);

  useEffect(() => {
    if (props.cover) {
      setIsCoverLoading(true);
      getImageSize(props.cover)
        .then(size => {
          setImageRatio((size[0] / size[1]) ?? defaultRatio);
          setSrc(props.cover || '');
        })
        .catch(e => {
          console.error('Failed to load the image', e);
        })
        .finally(() => {
          setIsCoverLoading(false);
        });
    }
  }, [ props.cover ]);

  useEffect(() => {
    const argsSkew = [
      0,
      45,
      0,
      45,
    ];
    const argsScale = [
      0,
      45,
      1,
      .5,
    ];

    type args = [number, number, number, number, number];

    if (Number.isFinite(props.coverStartAngle)) {
      const skew = interpolateNumber(...[ props.coverStartAngle as number, ...argsSkew ] as args);
      const scale = interpolateNumber(...[ props.coverStartAngle as number, ...argsScale ] as args);
      setTransformSkewStart(skew);
      setTransformScaleStart(scale);
    }

    if (Number.isFinite(props.coverEndAngle)) {
      const skew = interpolateNumber(...[ props.coverEndAngle as number, ...argsSkew ] as args);
      const scale = interpolateNumber(...[ props.coverEndAngle as number, ...argsScale ] as args);
      setTransformSkewEnd(skew);
      setTransformScaleEnd(scale);
    }
  }, [ props.coverStartAngle, props.coverEndAngle ]);


  const getImageSize = (url = '') => new Promise<TImageSize>((resolve, reject) => {
    const imgEl = document.createElement('img');
    imgEl.src = url;

    imgEl.onerror = e => {
      reject(e);
    };

    imgEl.onload = () => {
      resolve([ imgEl.width, imgEl.height ]);
    };
  });

  return (
    <BookWrapper
      style={ {
        'aspectRatio': imageRatio,
        '--cover-image': `url(${src})`,

        '--border-radius-left': ((wrapperSize?.width ?? 0) * (_.clamp(props.leftCornerRadius ?? defaults.borderRadiusLeft, 0, props.creaseMargin ?? defaults.creaseMargin))).toFixed(2) + 'px',
        '--border-radius-right': ((wrapperSize?.width ?? 0) * (props.rightCornerRadius ?? defaults.borderRadiusRight)).toFixed(2) + 'px',
        '--crease-margin': ((wrapperSize?.width || 0) * (props.creaseMargin ?? defaults.creaseMargin)).toFixed(2) + 'px',
        '--crease-width': ((wrapperSize?.width || 0) * (props.creaseWidth ?? defaults.creaseWidth)).toFixed(2) + 'px',
        '--thickness': ((wrapperSize?.height || 0) * (props.thickness ?? defaults.thickness)).toFixed(2) + 'px',
        '--cover-margin': ((wrapperSize?.width || 0) * (props.coverMargin ?? defaults.coverMargin)).toFixed(2) + 'px',

        '--fallback-color': props.coverColor,
        '--transition-duration': props.transitionDuration,
        '--transition-timing-function': props.transitionTimingFunction,
        '--start-skew': `${transformSkewStart * -1}deg`,
        '--end-skew': `${transformSkewEnd * -1}deg`,
        '--start-scale': transformScaleStart,
        '--end-scale': transformScaleEnd,
      } as React.CSSProperties }
      ref={ wrapperRef }
    >
      <FrontCover className="cover">

        <div className="wrapper">
          <div className="left-part" />
          <div className="right-part">
            {
              props.coverContent && <div className="content">
                { props.coverContent }
              </div>
            }
          </div>
        </div>
      </FrontCover>

      <Pages>
        <div className="first-page">
          {
            props.pageContent && <div className="content">
              { props.pageContent }
            </div>
          }
        </div>
      </Pages>

      <BackCover style={ { backgroundImage: `url("${src}")` } } />
    </BookWrapper>
  );
};

export default Book;

Book.defaultProps = {
  leftCornerRadius: defaults.borderRadiusLeft,
  rightCornerRadius: defaults.borderRadiusRight,
  thickness: defaults.thickness,
  creaseMargin: defaults.creaseMargin,
  creaseWidth: defaults.creaseWidth,
  coverColor: defaults.coverColor,
  coverMargin: defaults.coverMargin,
  transitionDuration: defaults.transitionDuration as TransitionDuration,
  transitionTimingFunction: defaults.transitionTimingFunction as TransitionTimingFunction,
  coverStartAngle: defaults.coverStartAngle,
  coverEndAngle: defaults.coverEndAngle,
};