import React from 'react';

const MergedShape = ({ fill = "#ffffff", children, style: containerStyle, ...props }) => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      maxWidth: '1080px',
      maxHeight: '410px',
      ...containerStyle,
    }}
    {...props}
  >
    {/* Shape 1 - Main Rectangle */}
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 'calc(100% - 210px)',
        height: '100%',
        backgroundColor: fill,
        borderRadius: '32px 0px 32px 32px',
        overflow: 'hidden'
      }}
    >
      {children}
    </div>
    
    {/* Shape 2 - Side Rectangle */}
    <div
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
        width: '210px',
        height: 'calc(100% - 70px)',
        backgroundColor: fill,
        borderRadius: '0px 32px 32px 0px',
      }}
    />
    
    {/* Negative Space - Bottom Right Corner */}
    <div
      style={{
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '210px',
        height: '70px',
      }}
    >
      {/* Bridge - Curved Corner */}
      <svg
        style={{
          position: 'absolute',
          left: 0,
          top: '-32px',
          width: '32px',
          height: '32px',
          pointerEvents: 'none',
        }}
        viewBox="0 -32 32 32"
      >
        <path d="M 0 0 C 0 -23.872 5.76 -32 32 -32 H 0 Z" fill={fill} />
      </svg>
    </div>
  </div>
);

export default MergedShape;
