// src/components/ServicesPills.jsx
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

/* ------------------ SVG icons (paths copiados do HTML original) ------------------ */
const IconPen = (props) => (
    <svg viewBox="0 0 256 256" width="18" height="18" {...props} aria-hidden>
        <path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.69,147.32,64l24-24L216,84.69Z" />
    </svg>
);

const IconLock = (props) => (
    <svg viewBox="0 0 256 256" width="18" height="18" {...props} aria-hidden>
        <path d="M208,80H96V56a32,32,0,0,1,32-32c15.37,0,29.2,11,32.16,25.59a8,8,0,0,0,15.68-3.18C171.32,24.15,151.2,8,128,8A48.05,48.05,0,0,0,80,56V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,128H48V96H208V208Zm-80-96a28,28,0,0,0-8,54.83V184a8,8,0,0,0,16,0V166.83A28,28,0,0,0,128,112Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,128,152Z" />
    </svg>
);

const IconGlobe = (props) => (
    <svg viewBox="0 0 256 256" width="18" height="18" {...props} aria-hidden>
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.1,131.79a47.84,47.84,0,0,0,0-55.58l28.5-28.49a87.83,87.83,0,0,1,0,112.56ZM96,128a32,32,0,1,1,32,32A32,32,0,0,1,96,128Zm88.28-67.6L155.79,88.9a47.84,47.84,0,0,0-55.58,0L71.72,60.4a87.83,87.83,0,0,1,112.56,0ZM60.4,71.72l28.5,28.49a47.84,47.84,0,0,0,0,55.58L60.4,184.28a87.83,87.83,0,0,1,0-112.56ZM71.72,195.6l28.49-28.5a47.84,47.84,0,0,0,55.58,0l28.49,28.5a87.83,87.83,0,0,1-112.56,0Z" />
    </svg>
);

const IconPaper = (props) => (
    <svg viewBox="0 0 256 256" width="18" height="18" {...props} aria-hidden>
        <path d="M228.54,86.66l-176.06-54A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16,16,16,0,0,0,4.52-.65L136,181.73V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-29.9l28.54-8.75A16.09,16.09,0,0,0,240,138V102A16.09,16.09,0,0,0,228.54,86.66ZM136,165,48,192V48l88,27Zm48,27H152V176.82L184,167Zm40-54-.11,0L152,160.08V79.92l71.89,22,.11,0v36Z" />
    </svg>
);

const IconClock = (props) => (
    <svg viewBox="0 0 256 256" width="18" height="18" {...props} aria-hidden>
        <path d="M128,24a8,8,0,0,0-8,8V88a8,8,0,0,0,8,8,32,32,0,1,1-27.72,16,8,8,0,0,0-2.93-10.93l-48.5-28A8,8,0,0,0,37.92,76,104,104,0,1,0,128,24ZM48.09,91.1,83,111.26A48.09,48.09,0,0,0,80,128c0,1.53.08,3,.22,4.52L41.28,143A88.16,88.16,0,0,1,48.09,91.1Zm-2.67,67.31,39-10.44A48.1,48.1,0,0,0,120,175.32v40.31A88.2,88.2,0,0,1,45.42,158.41ZM136,215.63V175.32a48,48,0,0,0,0-94.65V40.36a88,88,0,0,1,0,175.27Z" />
    </svg>
);

const IconStar = (props) => (
    <svg viewBox="0 0 256 256" width="18" height="18" {...props} aria-hidden>
        <path d="M234.29,114.85l-5.06,4.37a8,8,0,0,1-10.45-12.12l5.06-4.37c.12-.1.23-.19.13-.5s-.18-.27-.34-.29l-8.27-.67a8,8,0,1,1,1.29-15.94l8.27.66a16.46,16.46,0,0,1,9.37,28.86Zm-61.71,37.79,4.08,17.22a8,8,0,0,0,7.78,6.16,7.86,7.86,0,0,0,1.85-.22,8,8,0,0,0,5.94-9.63l-3-12.49,8-6.86a8,8,0,0,0-10.45-12.12l-11.64,10A8,8,0,0,0,172.58,152.64Zm29.13,53.53a8,8,0,0,0-15.57,3.69l1.32,5.58a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-6.72-4.13a8,8,0,0,0-8.38,13.63l6.72,4.13A16.4,16.4,0,0,0,203,211.75ZM175.36,98.05l-15.64-1.27A8,8,0,0,1,153,91.86L136,50.78V184.63l7.43,4.57a8,8,0,1,1-8.38,13.63L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,10.76.87a8,8,0,1,1-1.29,16ZM120,184.63V50.78L103,91.86a8,8,0,0,1-6.75,4.92l-63.92,5.16c-.15,0-.24,0-.33.29a.39.39,0,0,0,.13.51l48.7,42a8,8,0,0,1,2.56,7.91l-14.88,62.8a.37.37,0,0,0,.17.48c.18.14.23.11.38,0Z" />
    </svg>
);

const IconTag = (props) => (
    <svg viewBox="0 0 256 256" width="18" height="18" {...props} aria-hidden>
        <path d="M230.64,25.36a32,32,0,0,0-45.26,0q-.21.21-.42.45L131.55,88.22,121,77.64a24,24,0,0,0-33.95,0l-76.69,76.7a8,8,0,0,0,0,11.31l80,80a8,8,0,0,0,11.31,0L178.36,169a24,24,0,0,0,0-33.95l-10.58-10.57L230.19,71c.15-.14.31-.28.45-.43A32,32,0,0,0,230.64,25.36ZM96,228.69,79.32,212l22.34-22.35a8,8,0,0,0-11.31-11.31L68,200.68,55.32,188l22.34-22.35a8,8,0,0,0-11.31-11.31L44,176.68,27.31,160,72,115.31,140.69,184ZM219.52,59.1l-68.71,58.81a8,8,0,0,0-.46,11.74L167,146.34a8,8,0,0,1,0,11.31l-15,15L83.32,104l15-15a8,8,0,0,1,11.31,0l16.69,16.69a8,8,0,0,0,11.74-.46L196.9,36.48A16,16,0,0,1,219.52,59.1Z" />
    </svg>
);

const IconCompass = (props) => (
    <svg viewBox="0 0 256 256" width="18" height="18" {...props} aria-hidden>
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64A8,8,0,0,0,172.42,72.84ZM138,138,97.89,158.11,118,118l40.15-20.07Z" />
    </svg>
);

/* ------------------ skills data (pode ser substituído pelos seus labels exatos) ------------------ */
const defaultSkills = [
    {
        title: "Frontend",
        Icon: IconPen,
        active: false,
    },
    {
        title: "Backend",
        Icon: IconLock,
        active: true, // exemplo: destaquei "Cybersecurity"/backend como ativo (pequeno ponto branco)
    },
    {
        title: "APIs & Integrações",
        Icon: IconGlobe,
        active: false,
    },
    {
        title: "DevOps & Cloud",
        Icon: IconPaper,
        active: false,
    },
    {
        title: "Banco de Dados",
        Icon: IconClock,
        active: false,
    },
    {
        title: "Testes & Qualidade ",
        Icon: IconStar,
        active: false,
    },
    {
        title: "Perf. & Otimização",
        Icon: IconTag,
        active: false,
    },
    {
        title: "Segurança & Boas Práticas",
        Icon: IconCompass,
        active: false,
    },
];
/* Styled components */
const Pill = styled(motion.div)(({ theme }) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 18px",
    borderRadius: 999,
    backgroundColor: "#0b0b0b",
    border: "1px solid rgba(255,255,255,0.07)",
    color: "#fff",
    cursor: "default",
    minWidth: 220,
    boxSizing: "border-box",
    backgroundImage:
        "repeating-radial-gradient(circle at 0 0, rgba(255,255,255,0.02) 0 1px, transparent 1px 10px)",
    transition: "transform 150ms ease, box-shadow 150ms ease",
}));

const IconCircle = styled("div")({
    width: 36,
    height: 36,
    borderRadius: 12,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, #4F1AD6 0%, #8059E3 100%)",
    border: "2px solid rgba(255,255,255,0.12)",
    flexShrink: 0,
    color: "#fff",
});

const DotActive = styled("span")({
    display: "inline-block",
    width: 8,
    height: 8,
    borderRadius: 8,
    background: "#fff",
    marginLeft: 8,
    boxShadow: "0 0 0 4px rgba(255,255,255,0.04)",
});

/* Motion defaults */
const itemTransition = { duration: 0.35, ease: "easeOut" };

export default function ServicesPills({ skills = defaultSkills }) {
  return (
    <Container sx={{ py: { xs: 4, md: 6 }, background: "#050505" }}>
      {/* Primeira linha */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        {skills.slice(0, 5).map((s, idx) => (
          <Pill key={s.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ ...itemTransition, delay: idx * 0.06 }} whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.98 }} role="button" aria-label={s.title}>
            <IconCircle>
              <s.Icon style={{ width: 18, height: 18, fill: "currentColor" }} />
            </IconCircle>
            <Typography variant="body2" sx={{ color: "#fff", fontWeight: 600, whiteSpace: "nowrap" }}>
              {s.title}
            </Typography>
            {s.active && <DotActive />}
          </Pill>
        ))}
      </Box>

      {/* Segunda linha */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // centraliza os 3 itens
          gap: 2,
          flexWrap: "wrap",
          
        }}
      >
        {skills.slice(5).map((s, idx) => (
          <Pill key={s.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ ...itemTransition, delay: idx * 0.06 }} whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.98 }} role="button" aria-label={s.title}>
            <IconCircle>
              <s.Icon style={{ width: 18, height: 18, fill: "currentColor" }} />
            </IconCircle>
            <Typography variant="body2" sx={{ color: "#fff", fontWeight: 600, whiteSpace: "nowrap" }}>
              {s.title}
            </Typography>
            {s.active && <DotActive />}
          </Pill>
        ))}
      </Box>
    </Container>
  );
}

