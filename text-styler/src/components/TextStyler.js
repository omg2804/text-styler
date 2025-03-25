import React, { useState } from "react";
import {
  Button,
  Textarea,
  Group,
  ColorInput,
  Title,
  Paper,
  Stack,
} from "@mantine/core";

const TextStyler = () => {
  const [text, setText] = useState("Type your text here...");
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [isBold, setIsBold] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const applyStyle = (styleType) => {
    if (styleType === "bold") setIsBold((prev) => !prev);
    if (styleType === "underline") setIsUnderline((prev) => !prev);
  };

  const resetStyles = () => {
    setText("Type your text here...");
    setFgColor("#000000");
    setBgColor("#ffffff");
    setIsBold(false);
    setIsUnderline(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <Paper shadow="md" p="md" radius="lg">
      <Group position="apart">
        <Button onClick={resetStyles} color="red">
          Reset All
        </Button>
        <Button onClick={() => applyStyle("bold")} color={isBold ? "blue" : "gray"}>
          Bold
        </Button>
        <Button onClick={() => applyStyle("underline")} color={isUnderline ? "blue" : "gray"}>
          Underline
        </Button>
      </Group>

      <Stack mt="md">
        <Title order={3}>Foreground Color</Title>
        <ColorInput value={fgColor} onChange={setFgColor} />
        <Title order={3}>Background Color</Title>
        <ColorInput value={bgColor} onChange={setBgColor} />
      </Stack>

      <Textarea
        value={text}
        onChange={(event) => setText(event.currentTarget.value)}
        autosize
        minRows={3}
        style={{
          color: fgColor,
          backgroundColor: bgColor,
          fontWeight: isBold ? "bold" : "normal",
          textDecoration: isUnderline ? "underline" : "none",
        }}
      />

      <Button fullWidth mt="md" onClick={copyToClipboard}>
        Copy
      </Button>
    </Paper>
  );
};

export default TextStyler;
