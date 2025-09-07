// material
import { useTheme, styled } from '@mui/material';
import { Box, Grid, Chip, Card, Container, Typography, useMediaQuery, Button, Stack, Link, CardContent } from '@mui/material';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

// lazy load images
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const cards = [
  {
    img: 'static/mock-images/imageHome/PROJETOS/f9c159197675063.66343415433e4.webp',
    location: 'Nany Limpeza - Site Institucional',
    company: 'Nany Limpeza',
    description:
      'Site desenvolvido para a empresa Nany Limpeza, focado em facilitar o agendamento de serviços de limpeza residencial de forma prática e intuitiva.',
    badge1: 'Aumento de 25% na Taxa de Conversão',
  },
  {
    img: 'static/mock-images/imageHome/PROJETOS/SWAGGER-DOTNET.png',
    location: 'Documentação API .NET',
    company: 'Swagger .NET API',
    description:
      'Desenvolvimento de uma API RESTful documentada utilizando Swagger para facilitar a integração e o entendimento das rotas e funcionalidades.',
    badge1: '30% Mais Leads Gerados',
  },
  {
    img: 'static/mock-images/imageHome/PROJETOS/4e6e23190445279.65bae826bbddb.webp',
    location: 'Identidade Visual - Bella Isa',
    company: 'Bella Isa Cosméticos',
    description:
      'Criação da identidade visual e logo para a marca Bella Isa, uma empresa voltada para cosméticos e cuidados pessoais.',
    badge1: 'Crescimento de 35% nas Vendas',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const HeroOverlay = styled(`img`)(({ side }) => ({
  position: 'absolute',
  top: '30%',
  [side]: 100,
  width: 400,
  height: 400,
  objectFit: 'contain',
  zIndex: 1,
  pointerEvents: 'none',
  opacity: 0.3,
}));

export default function PrimeiraSecaoProjetos() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <HeroOverlay
        side="left"
        alt="degrade-left"
        src="static/mock-images/imageHome/degradeAzul2.png"
       />
      <HeroOverlay
        side="right"
        alt="degrade-right"
        src="static/mock-images/imageHome/degradeAzul.png"
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
              <ResultsSection />
              <CarouselWithCard />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

function ResultsSection() {
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
            Results
          </Typography>
        </Box>
      </Stack>

      <Box>
        <Typography variant="h1" sx={{ fontWeight: 400, color: "white", mb: 1 }}>
          API. UI. Deploy. Automações.
        </Typography>
        <Typography variant="h1" sx={{ color: "rgba(255,255,255,0.6)", fontWeight: 300 }}>
          Tudo funcionando. Tudo integrado.
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 600 }}>
        Backend robusto, Front-end performático e infraestrutura escalável.
        Do design ao deploy, eu construo produtos completos, integrando tecnologia, automação,
      </Typography>

      <Button
        component={Link}
        to="/contact"
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
        Entrar em contato
      </Button>
    </Box>
  );
}

function CarouselWithCard() {
  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', marginTop: 8 }}>
      {/* --- Blur da Esquerda --- */}
      <Box sx={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: { xs: 40, md: 80 },
        zIndex: 10,
        background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0))',
        pointerEvents: 'none',
      }} />
      {/* --- Blur da Direita --- */}
      <Box sx={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: { xs: 40, md: 80 },
        zIndex: 10,
        background: 'linear-gradient(to left, rgba(0,0,0,0.9), rgba(0,0,0,0))',
        pointerEvents: 'none',
      }} />

      <Swiper
        spaceBetween={30}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        allowTouchMove={false}
        modules={[Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
        }}
      >
        {/* duplicar cards para loop infinito suave */}
        {cards.concat(cards).map((card, index) => (
          <SwiperSlide key={index}>
            <Card sx={{
              borderRadius: 4,
              overflow: 'hidden',
              height: 450,
              position: 'relative',
              boxShadow: 5,
              transition: 'transform 0.5s, box-shadow 0.5s',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: 8,
              },
              margin: 2,
              willChange: 'transform, box-shadow',
            }}>
              <LazyLoadImage
                effect="blur"
                src={card.img}
                alt={card.company}
                width="100%"
                height="450px"
                style={{ objectFit: "cover" }}
              />

              <CardContent sx={{
                position: 'absolute',
                bottom: 0,
                left: 4,
                right: 0,
                width: '98%',
                bgcolor: 'rgba(0,0,0,0.85)',
                color: '#fff',
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                p: 4,
              }}>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Typography variant="subtitle2" fontWeight="300">{card.location}</Typography>
                </Stack>
                <Typography variant="subtitle1" fontWeight="400">{card.company}</Typography>
                <Box margin={2} />
                <Typography variant="body2" color="grey.400" mb={1}>{card.description}</Typography>
                <Box margin={2} />
                <Stack direction="row" gap={1} flexWrap="wrap">
                  <Chip
                    label={card.badge1}
                    sx={{ bgcolor: 'rgba(255, 255, 255, 0.08)', color: '#fff', borderRadius: 2 }}
                    size="small"
                  />
                </Stack>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
