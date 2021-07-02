import React from "react";
import { Close } from "grommet-icons";
import {
  Box,
  Button,
  Heading,
  Layer,
  TextArea,
  TextInput,
  Form,
} from "grommet";

export default function ContactForm({ onClose }) {
  return (
    <Box fill align="center" justify="center">
      <Layer position="center" modal onClickOutside={onClose} onEsc={onClose}>
        <Box
          as="form"
          fill="vertical"
          overflow="auto"
          width="large"
          pad="medium"
          onSubmit={onClose}
        >
          <Box flex={false} direction="row" justify="between">
            <Heading level={2} margin="none">
              Contact
            </Heading>
            <Button icon={<Close />} onClick={onClose} />
          </Box>
          <Form onSubmit={({ value }) => console.log(value)}>
            <Box margin={{ top: "medium" }}>
              <TextInput id="name" name="name" placeholder="Name" />
            </Box>
            <Box margin={{ top: "small" }}>
              <TextInput id="email" name="email" placeholder="Email" />
            </Box>
            <Box margin={{ top: "small" }} height="small">
              <TextArea placeholder="Message" fill resize={false} />
            </Box>
            <Box as="footer" align="start" margin={{ top: "medium" }}>
              <Button
                type="submit"
                label="Send"
                onClick={onClose}
                primary
                style={{ borderRadius: "7px" }}
              />
            </Box>
          </Form>
        </Box>
      </Layer>
    </Box>
  );
}
