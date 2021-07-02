import React from "react";
import CustomFooter from "@components/CustomFooter";
import Testimonials from "@components/Testimonials";
import HeroBase from "@components/HeroBase";
import { Box, Text, ResponsiveContext, Button } from "grommet";
import Services from "@components/Services";
import ContactForm from "@components/ContactForm";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);

  return (
    <div>
      <HeroBase title="Alexander Mueller">
        <ResponsiveContext.Consumer>
          {(size) =>
            size === "small" ? (
              <Box width="large" className="mainHeadlineSmall">
                <Text size="xxlarge" color="light-1">
                  Custom Product & Software Development Focused On Your Success
                </Text>
                <Button
                  primary
                  label="Contact"
                  size="medium"
                  style={{
                    width: 160,
                    borderRadius: "8px",
                    marginTop: "10px",
                  }}
                />
              </Box>
            ) : (
              <Box width="large" className="mainHeadlineLarge">
                <Text size="4xl" color="light-1">
                  Custom Product & Software Development Focused On Your Success
                </Text>
                <Button
                  primary
                  label="Contact"
                  size="large"
                  onClick={onOpen}
                  style={{ width: 200, borderRadius: "8px", marginTop: "20px" }}
                />
              </Box>
            )
          }
        </ResponsiveContext.Consumer>

        <Services />
      </HeroBase>
      <Box width="xlarge" margin="auto">
        <Testimonials />
      </Box>
      <div style={{ marginTop: 80 }}>
        <CustomFooter />
      </div>
      {open && <ContactForm onClose={onClose} />}
    </div>
  );
}
