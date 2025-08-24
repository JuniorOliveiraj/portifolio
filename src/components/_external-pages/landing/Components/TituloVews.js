// PrimeiraSecaoProjetos.jsx
import { useTheme, styled } from '@mui/material';
import { Box, Grid, Chip, Card, Container, Typography, useMediaQuery, Button, Stack } from '@mui/material';
import { varFadeInUp, MotionInView, varFadeIn } from '../../../animate';
import { motion } from "framer-motion"; 
import 'swiper/css';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

// lazy load images
import "react-lazy-load-image-component/src/effects/blur.css";
 

const RootStyle = styled('div')(({ theme }) => ({
    position: 'relative',          // <- torna o RootStyle o posicionador pai
    overflow: 'hidden',            // <- evita que as imagens saiam do bloco
    paddingTop: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(15)
    }
}));

const HeroOverlay = styled(
    motion.img,
    { shouldForwardProp: (prop) => prop !== 'side' } // evita passar `side` para o DOM <img>
)(({ side }) => ({
    position: 'absolute',
    top: '1%',
    [side]: 100, // comportamento previsível; o número vira px no objeto de estilo
    width: 400,
    height: 400,
    objectFit: 'contain',
    zIndex: 1,
    pointerEvents: 'none',
    opacity: 0.3,
}));

export default function TituloVews({
    sectionLabel,
    mainTitle1,
    mainTitle2,
    subtitle,
    buttonText,
    buttonPath,
}) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <RootStyle>
            <HeroOverlay
                side="left"
                alt="degrade-left"
                src="static/mock-images/imageHome/degradeAzul2.png"
                variants={varFadeIn}
            />
            <HeroOverlay
                side="right"
                alt="degrade-right"
                src="static/mock-images/imageHome/degradeAzul.png"
                variants={varFadeIn}
            />

            <Container
                maxWidth={isDesktop ? false : 'lg'}
                sx={{
                    maxWidth: isDesktop ? 'calc(1200px * 1.2)' : undefined,
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <Grid container spacing={isDesktop ? 10 : 5}>
                    <Grid item xs={12}>
                        <MotionInView variants={varFadeInUp}>
                            <ResultsSection
                                sectionLabel={sectionLabel}
                                mainTitle1={mainTitle1}
                                mainTitle2={mainTitle2}
                                subtitle={subtitle}
                                buttonText={buttonText}
                                buttonPath={buttonPath}
                            />
                        </MotionInView>

                    </Grid>
                </Grid>
            </Container>
        </RootStyle>
    );
}

function ResultsSection({ sectionLabel, mainTitle1, mainTitle2, subtitle, buttonText, buttonPath }) {
    return (
        <Box
            component={motion.div}
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 6,
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <Stack direction="column" gap={2} alignItems="center">
                <Box sx={{
                    width: "50px",
                    height: "2px",
                    background: "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(153,153,153,0) 100%)",
                    borderRadius: "10px",
                    position: "relative",
                }}>
                    <Box sx={{
                        width: 50,
                        height: 2,
                        background: "linear-gradient(90deg, rgba(0, 85, 255, 0) 0%, rgb(0,85,255) 50%, rgba(0, 85, 255, 0) 100%)",
                    }} />
                </Box>

                <Box sx={{
                    backdropFilter: "blur(2.5px)",
                    background: "linear-gradient(0.07deg, rgba(0,85,255,0.08) 0%, rgba(153,153,153,0.1) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "10px",
                    px: 2,
                    py: 0.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                }}>
                    <Typography
                        variant="body2"
                        sx={{
                            background: "linear-gradient(90deg, rgb(255,255,255) 0%, rgba(153,153,153,0) 350%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: 500,
                        }}
                    >
                        {sectionLabel}
                    </Typography>
                </Box>
            </Stack>

            <Box>
                <Typography variant="h1" sx={{ fontWeight: 400, color: "white", mb: 1 }}>
                    {mainTitle1}
                </Typography>
                <Typography variant="h1" sx={{ color: "rgba(255,255,255,0.6)", fontWeight: 300 }}>
                    {mainTitle2}
                </Typography>
            </Box>

            <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 600 }}>
                {subtitle}
            </Typography>

            <Button
                component={RouterLink}
                to={buttonPath}
                sx={{
                    backgroundColor: "rgb(0,85,255)",
                    borderRadius: "10px",
                    border: "3px solid rgba(255,255,255,0.15)",
                    boxShadow: "0px 8px 40px rgba(0,85,255,0.5), 0px 0px 10px 1px inset rgba(255,255,255,0), 0px 0px 0px 1px rgba(0,85,255,0.12)",
                    color: "white",
                    px: 3,
                    py: 1,
                    "&:hover": { backgroundColor: "rgb(0,95,255)" },
                }}
            >
                <Box sx={{ mr: 2 }}>{buttonText}</Box>

                <Box
                    sx={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        border: "1px solid rgba(250,250,250,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "transparent",
                        transition: "transform 0.18s ease, background 0.18s ease",
                        "&:hover": {
                            transform: "translateY(-2px)",
                            background: "rgba(255,255,255,0.02)",
                        },
                        "& svg": {
                            transition: "transform 0.2s ease",
                        },
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
            </Button>
        </Box>
    );
}

TituloVews.propTypes = {
    sectionLabel: PropTypes.string,
    mainTitle1: PropTypes.string,
    mainTitle2: PropTypes.string,
    subtitle: PropTypes.string,
    buttonText: PropTypes.string,
    buttonPath: PropTypes.string,
};

TituloVews.defaultProps = {
    sectionLabel: "Projetos Atuais",
    mainTitle1: "Inovações Criativas Para Marcas",
    mainTitle2: "E Negócios Em Crescimento",
    subtitle: "Cada projeto é desenvolvido para unir estratégia, estética e tecnologia, transformando ideias em resultados.",
    buttonText: "Ver Projetos",
    buttonPath: "/Projetos",
};
