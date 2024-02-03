import React, { PropsWithChildren, useEffect, useState } from 'react';
import { BookProps, TransitionDuration, TransitionTimingFunction } from './Book.types';
import { interpolateNumber } from '../../utils';
import { BackCover, BookWrapper, FrontCover, Pages } from './Styled';

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
  borderRadiusLeft: '.125rem',
  borderRadiusRight: '.5rem',
  thickness: '1rem',
  creaseMargin: '.5rem',
  creaseWidth: '.5rem',
  coverColor: '#555',
  coverMargin: '.25rem',
  transitionDuration: '300ms',
  transitionTimingFunction: 'ease-out',
  coverStartAngle: 0,
  coverEndAndle: 25,
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

    if (Number.isFinite(props.coverCloseAngle)) {
      const skew = interpolateNumber(...[ props.coverCloseAngle as number, ...argsSkew ] as args);
      const scale = interpolateNumber(...[ props.coverCloseAngle as number, ...argsScale ] as args);
      setTransformSkewStart(skew);
      setTransformScaleStart(scale);
    }

    if (Number.isFinite(props.coverOpenAngle)) {
      const skew = interpolateNumber(...[ props.coverOpenAngle as number, ...argsSkew ] as args);
      const scale = interpolateNumber(...[ props.coverOpenAngle as number, ...argsScale ] as args);
      setTransformSkewEnd(skew);
      setTransformScaleEnd(scale);
    }
  }, [ props.coverCloseAngle, props.coverOpenAngle ]);


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
        '--border-radius-left': props.leftCornerRadius,
        '--border-radius-right': props.rightCornerRadius,
        '--crease-margin': props.creaseMargin,
        '--crease-width': props.creaseWidth,
        '--thickness': props.thickness,
        '--cover-margin': props.coverMargin,
        '--fallback-color': props.coverColor,
        '--transition-duration': props.transitionDuration,
        '--transition-timing-function': props.transitionTimingFunction,
        '--start-skew': `${transformSkewStart * -1}deg`,
        '--end-skew': `${transformSkewEnd * -1}deg`,
        '--start-scale': transformScaleStart,
        '--end-scale': transformScaleEnd,
      } as React.CSSProperties }
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
  coverCloseAngle: 0,
  coverOpenAngle: 45,
};