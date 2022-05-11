/** @jsx jsx */
import { jsx, Box, Grid, Flex, Container, Image, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import cows from 'assets/images/cows.jpg';
import Support from './support';
const data = [
  {
    id: 1,
    label: 'Medical and vision',
  },
  {
    id: 2,
    label: 'Life insurance',
  },
  {
    id: 3,
    label: '400(k) savings',
  },
  {
    id: 4,
    label: 'HSAs and FSAs',
  },
  {
    id: 5,
    label: 'Commuter benefits',
  },
  {
    id: 6,
    label: '529 college savings',
  },
];

const PremiumFeature = () => {
  return (
    <section sx={styles.section}>
    <Support/>
      <Container>
        <Grid sx={styles.grid}>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="About Us"
              description="Concerta was created in 2021 and is a pioneer in the approach of consulting in the agribusiness sector. Specifically, our approach follows the &quot;Farm to Fork&quot; strategy with three dimensions: technical support, project management and corporate finances, both nationaly and aiming at building international relatioships of cooperation.Our work is guided by the three principles of Animal Welfare, Sustainability, and One Health."
            />
          </Box>
          <Box sx={styles.illustration}>
            <Image src={cows} alt="cows" />
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default PremiumFeature;

const styles = {

  section: {
    background:'#253D39',
    pt: [6, null, null, 9, 7, 4, 9],
    pb: [8, null, null, 11, 0],
  },
  grid: {
    gap: [0, 0, 0, 0, 10, 30],
    display: ['flex', null, null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'column', 'row'],
    gridTemplateColumns: ['0.9fr 1.1fr'],
    alignItems: 'center',
  },
  heading: {
    maxWidth: ['auto', null, null, '495px', 'auto'],
    textAlign: ['center', null, null, null, 'left'],
    mb: ['20px'],
    ml: [0],
    h2: {
      color: '#FFFFFF',
      fontSize: ['24px', null, null, '36px', '31px', 10, 40],
      lineHeight: [1.33, 1.33, 1.26, null, 1.5, 1.26],
      letterSpacing: '-1px',
      letterSpacing: '-1px',
    },
    img: {
      marginBottom:'70px',
      maxWidth: [24, null, null, 30, 25, null, '100%'],
      top: ['4px', '8px', null, null, '4px', '8px'],
      '@media screen and (min-width: 1441px) and (max-width:1600px)': {
        maxWidth: 35,
      },
    },
    p: {
      color: '#FFFFFF',
      maxWidth: 430,
    },
  },
  features: {
    color: '#FFFFFF',
    columnCount: [1, 2],
    lineHeight: 2.81,
    ml: ['20px', 0],
    mt: [null, null, null, 6, 0],
    img: {
      mr: '10px',
      mt: '11px',
    },
    '+ a': {
      mt: '25px',
      ml: ['20px', 0],
    },
  },
  illustration: {
    left:'-30px',
    mb: [0, null, null, null, '-30px', '60px'],
    mt: [0],
    img: {
    },
    '@media screen and (max-width: 767px)': {
      background: `transparent url(${cows}) no-repeat center top / cover`,
      width: '100%',
      minHeight: 310,
      marginBottom: 40,
      
    },
  },
};
