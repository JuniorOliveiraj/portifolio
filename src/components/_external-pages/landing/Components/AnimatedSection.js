import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const cards = [
  {
    id: 1,
    stage: 'Etapa 1',
    title: 'Planejamento',
    description: 'Nesta fase inicial, defino os objetivos do projeto, entendo as necessidades do cliente e crio um roadmap técnico. É aqui que a visão começa a ganhar forma.',
    tags: ['Análise de Requisitos', 'Arquitetura do Projeto'],
  },
  {
    id: 2,
    stage: 'Etapa 2',
    title: 'Desenvolvimento',
    description: 'Com a base bem definida, inicio a implementação usando as melhores práticas em React, Next.js, Flutter, C# e DevOps. O foco é eficiência, escalabilidade e qualidade.',
    tags: ['Boas Práticas', 'Código Escalável'],
  },
  {
    id: 3,
    stage: 'Etapa 3',
    title: 'Entrega & Suporte',
    description: 'Após a conclusão, realizo testes, deploy e disponibilizo documentação completa. Ofereço suporte contínuo para garantir a evolução e estabilidade do sistema.',
    tags: ['Testes e Deploy', 'Suporte Contínuo'],
  },
];


const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const imageVariant = {
  hidden: { opacity: 0, x: -60, scale: 0.98 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, ease: 'easeOut' } },
};

const cardsColumnVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 36, scale: 0.995 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'circOut' } },
};

export default function HowWeWorkSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#07070A',
        color: 'common.white',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header area */}
        <Box
          sx={{
            mb: { xs: 4, md: 6 },
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
         

          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                lineHeight: 1.05,
                color: 'common.white',
                fontSize: { xs: '1.8rem', md: '2.6rem' },
              }}
            >
              Simplificamos a jornada
              <Box component="span" sx={{ display: 'block', color: 'rgba(255,255,255,0.6)' }}>
                Do design ao lançamento.
              </Box>
            </Typography>

            <Typography sx={{ mt: 1.5, color: 'rgba(255,255,255,0.6)' }}>
              Facilitamos a concretização das suas ideias, guiando você do conceito ao lançamento completo do produto.
            </Typography>
          </Box>
        </Box>

        {/* Main content: image (left) + cards (right) */}
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '360px 1fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'start',
          }}
        >
          {/* --- FOTO (entra junto com os cards; em md+ fica sticky) --- */}
          <Box
            component={motion.div}
            variants={imageVariant}
            sx={{
              position: { xs: 'relative', md: 'sticky' }, // Usando sticky
              top: { md: '110px' },
              alignSelf: 'start',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: (theme) => `0 8px 40px rgba(0,85,255,0.18), inset 0 -10px 30px rgba(0,0,0,0.4)`,
              height: { xs: '320px', md: '520px' }, // Definindo altura
            }}
          >
            {/* Background image */}
            <Box
              component="img"
              src="https://media.licdn.com/dms/image/v2/D4D03AQFtxN7itmq-7g/profile-displayphoto-crop_800_800/B4DZivnm3pHwAU-/0/1755293054482?e=1758758400&v=beta&t=HXd3qzqh3dCKGejdoAAzAfC-7egb8nQcYR1i-5-rh14"
              alt="Ilustração / Foto"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {/* Small overlay tag */}
            <Box
              sx={{
                position: 'absolute',
                left: 16,
                top: 16,
                px: 2,
                py: 0.5,
                borderRadius: 1,
                bgcolor: 'rgba(0,85,255,0.9)',
                color: 'white',
                fontWeight: 700,
                fontSize: 12,
              }}
            >
              Stage 1
            </Box>
          </Box>

          {/* --- CARDS (coluna) --- */}
          <Box component={motion.div} variants={cardsColumnVariant}>
            <Stack spacing={4}>
              {cards.map((c) => (
                <Box
                  key={c.id}
                  component={motion.div}
                  variants={cardVariant}
                  sx={{
                    transformOrigin: 'top center',
                  }}
                >
                  <Card
                    sx={{
                      borderRadius: 2,
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))',
                      boxShadow: 'rgba(0,0,0,0.6) 0px 8px 30px',
                      overflow: 'visible',
                    }}
                  >
                    <CardContent sx={{ position: 'relative', pb: 3 }}>
                      {/* Top: small icon area */}
                      <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
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
                          }}
                        >
                          {/* small svg icon */}
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M12 2C8.13 2 5 5.13 5 9c0 4.25 3.4 7.98 7 10.9 3.6-2.92 7-6.65 7-10.9 0-3.87-3.13-7-7-7z"
                              fill="white"
                              opacity="0.95"
                            />
                            <circle cx="12" cy="9" r="2.5" fill="#0055FF" />
                          </svg>
                        </Box>

                        <Box sx={{ flex: 1 }}>
                          <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                            {c.stage}
                          </Typography>
                          <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>
                            {c.title}
                          </Typography>

                          <Typography sx={{ color: 'rgba(255,255,255,0.65)' }}>
                            {c.description}
                          </Typography>

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

                      {/* Footer buttons/tags */}
                      {c.id === 3 && (
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mt: 3,
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
                            }}
                          >
                            Book an Appointment
                          </Button>

                          <Stack direction="row" spacing={1}>
                            <Chip
                              size="small"
                              label="Ongoing Support"
                              sx={{ bgcolor: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.7)' }}
                            />
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
        </Box>
      </Container>
    </Box>
  );
}
