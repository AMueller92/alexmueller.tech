import React from "react";
import HeroBase from "@components/HeroBase";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  ResponsiveContext,
} from "grommet";
import CustomFooter from "@components/CustomFooter";
import ContactForm from "@components/ContactForm";

export default function Imprint() {
  const [open, setOpen] = React.useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);

  return (
    <div>
      <Box>
        <HeroBase title="Authenticate">
          <ResponsiveContext.Consumer>
            {(size) => (
              <Box margin="auto" pad={{ top: "xlarge", bottom: "xlarge" }}>
                <Card
                  pad="large"
                  width={size === "small" ? "medium" : "large"}
                  height={size === "small" ? "medium" : "large"}
                  gap="large"
                  background="light-1"
                  elevation="xlarge"
                >
                  <CardHeader>
                    <Heading level={1} margin="none" size="small">
                      Imprint
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Box margin="small">
                      <Text weight="bold" size="large">
                        Alexander Müller{" "}
                      </Text>
                      <Text margin={{ top: "small" }}>
                        Wiedegasse 5 <br />
                        54290 Trier
                      </Text>
                      <Text margin={{ top: "medium" }}>
                        Email: hello@alexmueller.tech
                      </Text>
                      <Button
                        primary
                        size="small"
                        style={{ borderRadius: "7px", width: 120 }}
                        label="Contact"
                        onClick={onOpen}
                        margin={{ top: "small" }}
                      />
                    </Box>
                  </CardBody>
                </Card>
              </Box>
            )}
          </ResponsiveContext.Consumer>
        </HeroBase>
      </Box>
      <CustomFooter />
      {open && <ContactForm onClose={onClose} />}
    </div>
  );
}
