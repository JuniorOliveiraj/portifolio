import { useTheme, styled } from '@mui/material';
import { Grid, Container, useMediaQuery, Box } from '@mui/material';
import { varFadeInUp, MotionInView } from '../../../animate';
import  { Suspense,  useState } from "react";
import CachedSpline from '../../../../hooks/CachedSpline';

const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(12),
    },
}));

const SplineWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '500px',
    borderRadius: theme.shape.borderRadius * 2,
    overflow: 'hidden',
    boxShadow: theme.shadows[3],
    [theme.breakpoints.up('lg')]: {
        height: '600px',
    },
}));

export default function Robo3d() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg')); 
    const [sceneLoaded, setSceneLoaded] = useState(false);

    return (
        <RootStyle>
            <Container
                maxWidth={isDesktop ? false : 'lg'}
                sx={{
                    maxWidth: isDesktop ? 'calc(1200px * 1.2)' : undefined,
                    borderRadius: isDesktop ? '20px' : '10px',
                }}
            >
                <Grid container spacing={isDesktop ? 10 : 5}>
                    <Grid item xs={12}>
                        <MotionInView variants={varFadeInUp}>
                            <Suspense fallback={<div>Carregando 3D...</div>}>
                                <SplineWrapper>
                                   
                                                <CachedSpline
              sceneUrl="https://prod.spline.design/JP9BGV4pgrg71SND/scene.splinecode"
              fallback={<div>Carregando 3D...</div>}
            />
                                    {!sceneLoaded && <div>Carregando cena...</div>}
                                </SplineWrapper>
                            </Suspense>
                        </MotionInView>
                    </Grid>
                </Grid>
            </Container>
        </RootStyle>
    );
}
