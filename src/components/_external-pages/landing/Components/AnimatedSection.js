import React from 'react';
import { Stack, Chip, Container, Button, Box, Typography, Card, CardContent, Grid, useMediaQuery } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageCard from '../../portifolio/ImageCard';
import { varFadeInUp, MotionInView, varFadeInDown } from '../../../animate';
import { alpha, useTheme, styled } from '@mui/material';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));
export default function PageLayout() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <RootStyle>
      <Container maxWidth="lg" >
        <Grid container spacing={isDesktop ? 10 : 5}   >

          <Grid item xs={12} md={7}>
            <ScrollCards />
          </Grid>

          <Grid item xs={12} md={5}>
            <StickyShowcase />
          </Grid>

        </Grid>
      </Container>

    </RootStyle>
  );
}





function StickyShowcase() {

  return (
    <Box
      sx={{
        width: '100%',
        position: { xs: 'static', md: 'sticky' },
        top: { md: 80 },
        alignSelf: 'flex-start'
      }}
    >
      <MotionInView variants={varFadeInUp}>
        <ImageCard image={'static/mock-images/imageHome/Imagem_terno01.png'} />
      </MotionInView>
    </Box>
  );
}




const cards = [
  {
    id: 1,
    stage: 'Atualmente',
    image:'static/mock-images/imageHome/ICONES/universobenner_logo.jpeg',
    title: 'Desenvolvedor .Net - Benner',
    description: 'Desenvolvimento e manutenção de sistemas em C#, .NET e bancos de dados. Atuação em demandas de RH, otimização de performance e colaboração em equipe para entrega de soluções corporativas.',
    tags: ['C#', '.NET', 'SQL', 'PostgreSQL', 'Oracle', 'Builder', 'Runner', 'WES'],
  },
  {
    id: 21,
    stage: 'Atualmente',
    image:'static/mock-images/imageHome/ICONES/JUNIOR.png',
    title: 'Desenvolvedor Web Freelance',
    description: 'Criação de sites institucionais, landing pages e sistemas sob demanda com React.js, Next.js e Node.js. Desenvolvimento de APIs e integrações de pagamento, com foco em UI/UX e atendimento ao cliente.',
    tags: ['React.js', 'Next.js', 'Node.js', 'MySQL', 'Firebase', 'Tailwind CSS', 'Mercado Pago'],
  },
  {
    id: 3,
    stage: '2022 - 2024',
    image:'static/mock-images/imageHome/ICONES/loja_mirante_logo.jpeg',
    title: 'Designer - Loja Mirante',
    description: 'Criação de campanhas digitais, planejamento de conteúdo e identidade visual. Aumento de engajamento e seguidores em +50% utilizando ferramentas como Photoshop, Illustrator e Canva.',
    tags: ['Photoshop', 'Illustrator', 'Canva', 'Mailchimp', 'Marketing Digital', 'UI/UX'],
  },
  {
    id: 4,
    stage: '2022',
    image:'static/mock-images/imageHome/ICONES/fluxogama_logo.jpeg',
    title: 'Analista de Tecnologia - Fluxogama',
    description: 'Desenvolvimento de software customizado em C# e .NET para setor têxtil. Participação em análise de requisitos, melhoria de processos internos e entrega de sistema funcional com foco em performance e usabilidade.',
    tags: ['Ext JS', 'Java', 'MySQL', 'Git', 'Arquitetura em Camadas'],
  },
  {
    id: 5,
    stage: '2020 - 2022',
    image:'static/mock-images/imageHome/ICONES/loja_mirante_logo.jpeg',
    title: 'Expedição - Loja Mirante',
    description: 'Primeiro emprego. Atuação em operações de expedição, logística e suporte interno da empresa.',
    tags: ['Logística', 'Expedição', 'Gestão de Estoque'],
  },
];


const cardsColumnVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 36, scale: 0.995 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'circOut' } },
};

function ScrollCards() {
  const totalCards = cards.length;
  console.log(totalCards);
  return (
    <Box component={motion.div} variants={cardsColumnVariant} initial="hidden" animate="visible">
      <Box
        sx={{
          width: 50,
          height: 2,
          background:
            "linear-gradient(90deg, rgba(0, 85, 255, 0) 0%, rgb(0,85,255) 50%, rgba(0, 85, 255, 0) 100%)",
        }}
      />
      <Box
        sx={{

          borderRadius: "10px",
          px: 2,
          py: 0.5,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
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
          trajetória
        </Typography>

      </Box>
      <Box
        sx={{
          mb: { xs: 4, md: 6 },
          display: 'flex',
          gap: 2,
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          marginTop: 5,
        }}
      >


        <Box>
          <Box sx={{ mb: 1 }}>
            <Typography
              variant="h1"
              sx={{ fontWeight: 400, color: "white", mb: 3 }}
            >
              Minha trajetória
              <Box component="span" sx={{ display: 'block', color: 'rgba(255,255,255,0.6)' }}>
                Profissional e projetos
              </Box>
            </Typography>
          </Box>
          <Typography
            variant="p"
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontWeight: 300,
            }}
          >
            Ao longo da minha carreira, venho acumulando experiências e desenvolvendo projetos que mostram minha evolução profissional, minhas habilidades e meu compromisso em entregar resultados de qualidade.
          </Typography>
        </Box>
      </Box>


      <Stack spacing={4}>
        {cards.map((c) => (
          <Box key={c.id} component={motion.div} variants={cardVariant}>
            <Card
              sx={{
                borderRadius: 2,
                background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))',
                boxShadow: 'rgba(0,0,0,0.6) 0px 8px 30px',
                overflow: 'visible',
              }}
            >
              <CardContent sx={{ pb: 3 }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  {/* Ícone fake */}
                  <Box
                    sx={{
                      minWidth: 56,
                      minHeight: 56,
                      borderRadius: 1.5,
                      bgcolor: 'rgba(0,85,255,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'inset 0 -6px 14px rgba(0,0,0,0.4)',
                      position: 'relative', // necessário para o efeito do motion.div
                    }}
                  >
                    {/* Imagem quadrada de 28x28 */}
                    <Box
                      component="img"
                      src={c.image}
                      alt="Ícone"
                      sx={{
                        width: 28,
                        height: 28,
                      }}
                    />

                    {/* Efeito de blur */}
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0.8, scale: 1 }}
                      animate={{ opacity: 0.2, scale: 1 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      sx={{
                        position: "absolute",
                        width: "200px",
                        height: "200px",
                        backgroundColor: "rgb(0, 85, 255)",
                        filter: "blur(40px)",
                        borderRadius: "50%",
                        top: "1%",
                        left: "1%",
                        transform: "translate(-50%, -50%)",
                        zIndex: -1,
                      }}
                    />
                  </Box>


                  {/* Conteúdo */}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      {c.stage}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>
                      {c.title}
                    </Typography>

                    <Typography sx={{ color: 'rgba(255,255,255,0.65)' }}>{c.description}</Typography>

                    <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
                      {c.tags.map((t) => (
                        <Chip
                          key={t}
                          size="small"
                          label={t}
                          sx={{
                            bgcolor: 'rgba(255,255,255,0.04)',
                            color: 'rgba(255,255,255,0.85)',
                            borderRadius: 2,
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </Box>

                {/* Footer apenas no último card */}
                {c.id === totalCards && (

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mt: 3,
                      marginTop: 9,
                    }}
                  >

                    <Button
                      variant="contained"
                      href="/contact"
                      sx={{
                        bgcolor: '#0055FF',
                        px: 3,
                        py: 1,
                        borderRadius: 2,
                        boxShadow: '0 8px 40px rgba(0,85,255,0.25)',
                        '&:hover': { bgcolor: '#0047d1' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      {/* Texto com espaçamento */}
                      <Box sx={{ mr: 2 }}>Ler mais sobre minha trajetória</Box>

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


                    <Stack direction="row" spacing={1}>

                      <Chip
                        size="small"
                        label="Documentation"
                        sx={{ bgcolor: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.7)' }}
                      />
                    </Stack>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}