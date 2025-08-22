import React from "react";
import { Container, Grid, Box, Typography, Link as MuiLink } from "@mui/material";
import { motion } from "framer-motion";

/**
 * Projeto: mosaic responsivo
 * - As 2 primeiras cards (index 0 e 1) são maiores (ocupam md=6).
 * - As demais cards são menores (ocupam md=4).
 * - Cada card usa imagem em grayscale que vira color no hover.
 * - SVG de seta no canto superior direito.
 * - Tudo dentro de um Container MUI.
 */

const projects = [
  {
    title: "Anallogue",
    category: "Brand",
    image: "https://framerusercontent.com/images/AZs8bVqrPji0m0GYpp5NjmuUgQ.jpg",
    link: "./project/anallogue",
  },
  {
    title: "Known One",
    category: "Technical",
    image: "https://framerusercontent.com/images/vlM15RHQVmAOOQnJMAbBC0C3QIg.jpg",
    link: "./project/known-one",
  },
  {
    title: "Ninety Editions",
    category: "Digital",
    image: "https://framerusercontent.com/images/MN3bBXhZNSAzp9GWQZ8fIGagwJs.jpg",
    link: "./project/digital-product-design",
  },
  {
    title: "Sevenson",
    category: "Brand",
    image: "https://framerusercontent.com/images/HXfTfxTi56vuYwoeHAIHuSNEICA.jpg",
    link: "./project/sevenson",
  },
  {
    title: "X Models",
    category: "Creative",
    image: "https://framerusercontent.com/images/Z9PsoPh8tezSKkPC7XoUiv7aCLo.jpg",
    link: "./project/x-models",
  },
];

const MotionBox = motion(Box);

const ProjectMosaic = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={4}>
        {projects.map((project, index) => {
          const isLarge = index < 2; // primeiras duas são maiores
          const md = isLarge ? 6 : 4;
          const imageHeight = isLarge ? 500 : 350;

          return (
            <Grid item xs={12} sm={6} md={md} key={project.title}>
              <MotionBox
                // animação de entrada e hover
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* card como link */}
                <Box
                  component={MuiLink}
                  href={project.link}
                  underline="none"
                  sx={{
                    display: "block",
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: "1px solid rgba(250,250,250,0.07)",
                    backgroundColor: "rgba(250,250,250,0.03)",
                    color: "inherit",
                    // hover global: remove grayscale da imagem e sutil elevação
                    transition: "transform 0.18s ease, box-shadow 0.18s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
                    },
                    // ao hover do link, afeta imagem filtrada (img diretos dentro deste box)
                    "&:hover img": {
                      filter: "grayscale(0%)",
                    },
                  }}
                >
                  {/* Conteúdo superior: título / categoria */}
                  <Box sx={{ px: 2, pt: 2, pb: 1 }}>
                    <Typography
                      component="h3"
                      sx={{ fontSize: 16, fontWeight: 600, color: "white", lineHeight: 1.1 }}
                    >
                      {project.title}
                    </Typography>
                    <Typography sx={{ fontSize: 12, color: "rgba(200,200,200,0.7)", mt: 0.6 }}>
                      {project.category}
                    </Typography>
                  </Box>

                  {/* Imagem com padding interno (replicando o inset do original) */}
                  <Box sx={{ px: 2, pb: 2 }}>
                    <Box
                      sx={{
                        borderRadius: 2,
                        overflow: "hidden",
                        // fundo levemente mais escuro para realçar (opcional e parecido com original)
                        backgroundColor: "rgba(0,0,0,0.04)",
                      }}
                    >
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{
                          width: "100%",
                          height: imageHeight,
                          objectFit: "cover",
                          display: "block",
                          filter: "grayscale(100%)",
                          transition: "filter 0.3s ease, transform 0.3s ease",
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Ícone de seta no canto superior direito (posicionado absolute) */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      border: "1px solid rgba(250,250,250,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      // sutil fundo/transição para parecer clicável
                      background: "transparent",
                      transition: "transform 0.18s ease, background 0.18s ease",
                      // animação leve no hover do card (rotaciona o svg)
                      "&:hover": {
                        transform: "translateY(-2px)",
                        background: "rgba(255,255,255,0.02)",
                      },
                      // também permite que o svg rotacione com o hover do próprio botão:
                      "& svg": {
                        transition: "transform 0.2s ease",
                      },
                      // quando o card pai é hover, faça leve rotação no svg:
                      "a:hover & svg, &:hover svg": {
                        transform: "translateY(-1px)",
                      },
                      color: "rgba(250,250,250,0.6)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      width="18"
                      height="18"
                      fill="rgba(250,250,250,0.6)"
                      aria-hidden
                    >
                      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                    </svg>
                  </Box>
                </Box>
              </MotionBox>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ProjectMosaic;
