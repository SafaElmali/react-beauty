import { Container } from 'components/Layouts/Container/Container';

const App = () => {
  return (
    <>
      <Container maxWidth="xl">Extra-Large Container</Container>
      <Container maxWidth="lg">Large Container</Container>
      <Container maxWidth="md">Medium Container</Container>
      <Container maxWidth="sm">Small Container</Container>
    </>
  );
};

export default App;
