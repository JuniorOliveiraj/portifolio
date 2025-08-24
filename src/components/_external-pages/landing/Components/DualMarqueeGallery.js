// DualMarqueeGallery.jsx
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";

/**
 * DualMarqueeGallery
 *
 * Props:
 *  - topImages: string[] (imagens da linha superior)
 *  - bottomImages: string[] (imagens da linha inferior)
 *  - topHeight: css value (default "240px")
 *  - bottomHeight: css value (default "200px")
 *  - gap: number px between cards (default 12)
 *  - topSpeed: px/s (default 140)
 *  - bottomSpeed: px/s (default 110)
 *  - pauseOnHover: boolean (default true)
 *
 * Uso:
 *  <DualMarqueeGallery topImages={[...]} bottomImages={[...]} />
 */
export default function DualMarqueeGallery({
  topImages = [],
  bottomImages = [],
  topHeight = "350px",
  bottomHeight = "350px",
  gap = 12,
  topSpeed = 90,
  bottomSpeed = 70,
  pauseOnHover = false,
}) {
  // Row subcomponent
  function MarqueeRow({ images, height, direction = "left", speed }) {
    const containerRef = useRef(null);
    const firstGroupRef = useRef(null);
    const contentControls = useAnimation();
    const [groupWidth, setGroupWidth] = useState(0);
    const [copies, setCopies] = useState(2);
    const pausedRef = useRef(false);

    // measure group width and container width, then decide copies
    useEffect(() => {
      const measure = () => {
        if (!firstGroupRef.current || !containerRef.current) return;
        const gW = firstGroupRef.current.offsetWidth;
        const cW = containerRef.current.offsetWidth;
        if (gW === 0 || cW === 0) return;
        setGroupWidth(gW);
        // ensure we have enough groups so there's no visible gap during loop
        const needed = Math.max(2, Math.ceil(cW / gW) + 1);
        setCopies(needed);
      };

      measure();
      const ro = new ResizeObserver(measure);
      if (containerRef.current) ro.observe(containerRef.current);
      if (firstGroupRef.current) ro.observe(firstGroupRef.current);
      window.addEventListener("load", measure);
      window.addEventListener("resize", measure);
      return () => {
        ro.disconnect();
        window.removeEventListener("load", measure);
        window.removeEventListener("resize", measure);
      };
    }, [images, gap]);

    // start animation when we have groupWidth
    useEffect(() => {
      if (!groupWidth) return;
      const duration = Math.max(1, groupWidth / speed);

      const from = direction === "left" ? 0 : -groupWidth;
      const to = direction === "left" ? -groupWidth : 0;

      // ensure animation restarts cleanly
      contentControls.set({ x: from });
      contentControls.start({
        x: to,
        transition: { duration, ease: "linear", repeat: Infinity },
      });
    }, [groupWidth, direction, speed, contentControls]);

    // pause/resume helpers
    const handleMouseEnter = () => {
      if (!pauseOnHover) return;
      pausedRef.current = true;
      contentControls.stop();
    };
    const handleMouseLeave = () => {
      if (!pauseOnHover) return;
      if (!groupWidth) return;
      pausedRef.current = false;
      // restart (preserves direction & duration)
      const duration = Math.max(1, groupWidth / speed);
      const from = direction === "left" ? 0 : -groupWidth;
      const to = direction === "left" ? -groupWidth : 0;
      contentControls.set({ x: pausedRef.current ? undefined : from });
      contentControls.start({
        x: to,
        transition: { duration, ease: "linear", repeat: Infinity },
      });
    };

    // Build a single group (used for measurement and duplication)
    const group = (isFirst = false) => (
      <Box
        ref={isFirst ? firstGroupRef : undefined}
        sx={{
          display: "flex",
          gap: `${gap}px`,
          alignItems: "center",
          flexShrink: 0,
        }}
        aria-hidden={!isFirst ? "true" : undefined}
      >
        {images.map((src, idx) => (
          <Box
            key={`${idx}-${src}`}
            sx={{
              width: { xs: "160px", sm: "220px", md: "300px" },
              height,
              flex: "0 0 auto",
              borderRadius: 3,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
              backgroundColor: "rgba(0,0,0,0.06)",
            }}
          >
            <img
              src={src}
              alt={`gallery-${idx}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        ))}
      </Box>
    );

    // render copies times
    const groups = [];
    for (let i = 0; i < copies; i++) {
      groups.push(
        <React.Fragment key={`g-${i}`}>{group(i === 0)}</React.Fragment>
      );
    }

    return (
      <Box
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          py: 1,
          // mask / fade effect on edges
          WebkitMaskImage:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%)",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            gap: `${gap}px`,
            alignItems: "center",
            whiteSpace: "nowrap",
          }}
          animate={contentControls}
        >
          {groups}
        </motion.div>
      </Box>
    );
  }

  MarqueeRow.propTypes = {
    images: PropTypes.array.isRequired,
    height: PropTypes.string,
    direction: PropTypes.oneOf(["left", "right"]),
    speed: PropTypes.number,
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ mb: 2 }}>
        <MarqueeRow
          images={topImages}
          height={topHeight}
          gap={gap}
          direction="left"
          speed={topSpeed}
        />
      </Box>

      <Box sx={{ mt: 4 }}>
        <MarqueeRow
          images={bottomImages}
          height={bottomHeight}
          gap={gap}
          direction="right"
          speed={bottomSpeed}
        />
      </Box>
    </Box>
  );
}

DualMarqueeGallery.propTypes = {
  topImages: PropTypes.arrayOf(PropTypes.string),
  bottomImages: PropTypes.arrayOf(PropTypes.string),
  topHeight: PropTypes.string,
  bottomHeight: PropTypes.string,
  gap: PropTypes.number,
  topSpeed: PropTypes.number,
  bottomSpeed: PropTypes.number,
  pauseOnHover: PropTypes.bool,
};

/* Example quick usage (not part of the component file):
import DualMarqueeGallery from './DualMarqueeGallery';
...
<DualMarqueeGallery
  topImages={[ 'url1', 'url2', 'url3' ]}
  bottomImages={[ 'urlA', 'urlB', 'urlC' ]}
/>
*/
