import styled from 'styled-components';

export const BookWrapper = styled.div`
width: 100%;
display: flex;
position: relative;
margin-top: var(--thickness);
background-color: var(--fallback-color);

border-top-left-radius: var(--border-radius-left);
border-bottom-left-radius: var(--border-radius-left);
border-top-right-radius: var(--border-radius-right);
border-bottom-right-radius: var(--border-radius-right);

// transition: aspect-ratio ease 150ms;

@media (hover: hover) {
  &:hover{
    .cover{
      .wrapper{
        .right-part{
          transform: skewY(var(--end-skew)) scaleX(var(--end-scale));

          &::after{
            opacity: 1;
          }
        }
      }
    }
  }
}
`;

export const FrontCover = styled.div`
z-index: 4;
width: 100%;
height: 100%;
position: absolute;
left: 0;
top: 0;
transform: translateY(calc(var(--thickness) * -1));
// transition: transform ease-out 300ms;

border-top-left-radius: var(--border-radius-left);
border-bottom-left-radius: var(--border-radius-left);
border-top-right-radius: var(--border-radius-right);
border-bottom-right-radius: var(--border-radius-right);

&>.wrapper{
  position: relative;
  width: 100%;
  height: 100%;

  .left-part, .right-part{
    position: absolute;
    top: 0;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: var(--cover-image);
    background-color: var(--fallback-color);

    &::before{
      content: '';
      display: block;
      position: absolute;
      width: calc(var(--crease-width) / 2);
      height: 100%;
      z-index: 2;
      mix-blend-mode: soft-light;
    }
  }

  .left-part{
    left: 0px;
    width: calc(var(--crease-margin) + .5px);
    background-position: left center;

    border-top-left-radius: var(--border-radius-left);
    border-bottom-left-radius: var(--border-radius-left);

    &::before{
      right: calc(0px + .5px);
      background-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,.5) 65%, rgba(127,127,127,.5) 100%);
    }
  }

  .right-part{
    position: relative;
    left: var(--crease-margin);
    width: calc(100% - var(--crease-margin));
    background-position: right center;
    background-image: var(--cover-image);

    transition: transform var(--transition-timing-function) var(--transition-duration);
    transform-origin: 0% 100%;
    transform: skewY(var(--start-skew)) scaleX(var(--start-scale));

    border-top-right-radius: var(--border-radius-right);
    border-bottom-right-radius: var(--border-radius-right);
    overflow: hidden;

    &::before{
      background-image: linear-gradient(to right, rgba(127,127,127,.5), rgba(255,255,255,.5) 35%, rgba(255,255,255,0) 100%);
    }

    &::after{
      z-index: 3;
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(255,255,255,.5) 100%);
      mix-blend-mode: soft-light;
      opacity: 0;
      transition: opacity var(--transition-timing-function) var(--transition-duration);
    }

    &>.content{
      z-index: 2;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
`;

export const BackCover = styled.div`
z-index: 0;
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-size: cover;
background-image: var(--cover-image);
background-color: rgba(0,0,0,.3);
background-blend-mode: multiply;

border-top-left-radius: var(--border-radius-left);
border-bottom-left-radius: var(--border-radius-left);
border-top-right-radius: var(--border-radius-right);
border-bottom-right-radius: var(--border-radius-right);
overflow: hidden;
`;

export const Pages = styled.div`
z-index: 3;
width: calc(100% - var(--cover-margin) - (var(--cover-margin) / 2));
height: calc(100% - var(--cover-margin) * 2);
background-color: #f6eee3;
position: absolute;
bottom: var(--cover-margin);
left: calc(var(--cover-margin) / 2);

&, &>.first-page{
  border-top-left-radius: calc(var(--border-radius-left) - var(--cover-margin) / 2);
  border-bottom-left-radius: calc(var(--border-radius-left) - var(--cover-margin) / 2);
  border-top-right-radius: calc(var(--border-radius-right) - var(--cover-margin) / 2);
  border-bottom-right-radius: calc(var(--border-radius-right) - var(--cover-margin) / 2);
}

&>.first-page{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background-color: #fffcf8;
  transform: translateY(calc(var(--thickness) * -1));
  outline: solid 1px #f9f6f3;
  outline-offset: -1px;
  overflow: hidden;
}
`;