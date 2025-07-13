import PropertyCard from '@/components/PropertyCard';
import { Container, Typography, Grid } from '@mui/material';

type Property = {
  id: string;
  title: string;
  image: string;
  location: string;
  price: number;
};

export default async function PropertiPage() {
  const res = await fetch('https://687134f07ca4d06b34b9b681.mockapi.io/properties', {
    cache: 'no-store',
  });
  const data: Property[] = await res.json();

  return (
    <Container>
      <Typography variant="h4">Daftar Properti</Typography>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <PropertyCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
