import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

export default function SecaoTextoAEsquerda({
    sectionLabel,
    title,
    subtitle,
    description,
    buttonText,
    buttonPath,
}) {
    return (
        <Container maxWidth="lg">
            <Box
                component={motion.div}
                initial="hidden"
                animate="visible"
                sx={{
                    width: "100%",
                    textAlign: { xs: "center", md: "left" },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: { xs: "center", md: "flex-start" },
                        gap: { xs: 3, md: 5 },
                        width: "100%", // ocupa toda a largura
                        px: { xs: 2, md: 0 }, // padding só no mobile
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        {/* Linha azul decorativa */}
                        <Box
                            sx={{
                                width: 50,
                                height: 2,
                                background:
                                    "linear-gradient(90deg, rgba(0,85,255,0) 0%, rgb(0,85,255) 50%, rgba(0,85,255,0) 100%)",
                                mx: { xs: "auto", md: 0 },
                                mb: 2,
                            }}
                        />

                        {/* Badge acima do texto */}
                        <Box
                            sx={{
                                borderRadius: "10px",
                                px: 2,
                                py: 0.5,
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 1.5,
                                backdropFilter: "blur(2.5px)",
                                background:
                                    "linear-gradient(0.07deg, rgba(0,85,255,0.08) 0%, rgba(153,153,153,0.1) 100%)",
                                border: "1px solid rgba(255, 255, 255, 0.05)",
                                mb: 2,
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    background:
                                        "linear-gradient(90deg, rgb(255,255,255) 0%, rgba(153,153,153,0) 350%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    fontWeight: 500,
                                }}
                            >
                                {sectionLabel}
                            </Typography>
                        </Box>

                        {/* Título + subtítulo */}
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 400,
                                color: "white",
                                mb: 2,
                                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.7rem" },
                            }}
                        >
                            {title}
                            {subtitle && (
                                <Box
                                    component="span"
                                    sx={{
                                        display: "block",
                                        color: "rgba(255,255,255,0.6)",
                                        fontWeight: 300,
                                    }}
                                >
                                    {subtitle}
                                </Box>
                            )}
                        </Typography>

                        {/* Texto descritivo */}
                        <Typography
                            variant="body1"
                            sx={{
                                color: "rgba(255,255,255,0.7)",
                                fontWeight: 300,
                                maxWidth: 600,
                                mx: { xs: "auto", md: 0 },
                                mb: buttonText ? 3 : 0,
                            }}
                        >
                            {description}
                        </Typography>

                        {/* Botão opcional */}
                        {buttonText && buttonPath && (
                            <Button
                                component={RouterLink}
                                to={buttonPath}
                                variant="text">
                                {buttonText}
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
                        )}
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

SecaoTextoAEsquerda.propTypes = {
    sectionLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    buttonPath: PropTypes.string,
};

SecaoTextoAEsquerda.defaultProps = {
    subtitle: "",
    buttonText: null,
    buttonPath: null,
};
