import React, {useRef, useEffect, useState} from 'react';

const BorderDraw = ({
                        children,
                        className = '',
                        animate = false,
                        borderColor = 'white',
                        borderWidth = 3,
                        borderRadius = '0',
                        duration = 4,
                        width,
                        height,
                        ...props
                    }) => {
    const pathRef = useRef(null);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    const [pathLength, setPathLength] = useState(0);
    const [contentSize, setContentSize] = useState({width: undefined, height: undefined});

    // Measure child size on mount (only if width/height not provided)
    useEffect(() => {
        if (!width || !height) {
            const resizeObserver = new ResizeObserver((entries) => {
                for (let entry of entries) {
                    const {width, height} = entry.contentRect;
                    setContentSize({width, height});
                }
            });
            if (contentRef.current) resizeObserver.observe(contentRef.current);
            return () => resizeObserver.disconnect();
        }
    }, [width, height]);

    // Get SVG path length
    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            setPathLength(length);
            pathRef.current.style.strokeDasharray = length;
            pathRef.current.style.strokeDashoffset = length;
            pathRef.current.style.transition = 'none';
        }
    }, [contentSize]);

    // Animate the stroke dashoffset
    useEffect(() => {
        if (pathRef.current && pathLength > 0) {
            if (animate) {
                pathRef.current.style.transition = `stroke-dashoffset ${duration}s ease-out`;
                pathRef.current.style.strokeDashoffset = '0';
            } else {
                pathRef.current.style.transition = 'none';
                pathRef.current.style.strokeDashoffset = pathLength;
            }
        }
    }, [animate, duration, pathLength]);

    const svgRadius = parseFloat(borderRadius.replace('em', '')) * 16 - borderWidth;

    return (
        <div
            className={`border-draw ${className}`}
            style={{
                borderRadius,
                width: width ?? 'fit-content',
                height: height ?? 'fit-content',
            }}
            {...props}
        >
            <svg
                width="100%"
                height="100%"
            >
                <rect
                    ref={pathRef}
                    x={borderWidth / 2}
                    y={borderWidth / 2}
                    width={`calc(100% - ${borderWidth}px)`}
                    height={`calc(100% - ${borderWidth}px)`}
                    rx={svgRadius}
                    ry={svgRadius}
                    className="border-path"
                    style={{
                        stroke: borderColor,
                        strokeWidth: borderWidth,
                        fill: 'none',
                    }}
                />
            </svg>
            {children}
        </div>
    );
};

export default BorderDraw;
