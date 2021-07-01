import CustomFooter from "@components/CustomFooter";
import Testimonials from "@components/Testimonials";
import HeroBase from "@components/HeroBase";
import { Box, Text, ResponsiveContext, Button } from "grommet";
import Services from "@components/Services";

export default function Home() {
  return (
    <div>
      <HeroBase title="Alexander Mueller">
        <ResponsiveContext.Consumer>
          {(size) =>
            size === "small" ? (
              <Box width="large" margin="large">
                <Text size="xxlarge" color="light-1">
                  Custom Product & Software Development Focused On Your Success
                </Text>
                <Button
                  primary
                  label="Contact"
                  size="medium"
                  style={{ width: 160, borderRadius: "6px", marginTop: "20px" }}
                />
              </Box>
            ) : (
              <Box width="large" margin="xlarge">
                <Text size="4xl" color="light-1">
                  Custom Product & Software Development Focused On Your Success
                </Text>
                <Button
                  primary
                  label="Contact"
                  size="large"
                  style={{ width: 200, borderRadius: "6px", marginTop: "20px" }}
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
    </div>
  );
}
