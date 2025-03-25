import React from "react";
import { MantineProvider, Container, Title } from "@mantine/core";
import TextStyler from "./components/TextStyler"; // Corrected path


function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container>
        <Title order={1} align="center" mt="md">
          Create Your Text
        </Title>
        <TextStyler />
      </Container>
    </MantineProvider>
  );
}

export default App;
