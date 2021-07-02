import {
  Box,
  CardBody,
  CardHeader,
  Text,
  Card,
  Heading,
  Paragraph,
  ResponsiveContext,
} from "grommet";
import ResponsiveGrid from "@components/utils/ResponsiveGrid";

// If the size is small, we only see 1 column
// If the size is medium or above, we see 2 columns
const columns = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto"],
  xlarge: ["auto", "auto"],
};

// If the size is small, we have 8 rows
// If the size is medium or above, we have 2 rows
const rows = {
  small: [
    "xsmall",
    "xsmall",
    "xsmall",
    "xsmall",
    "xsmall",
    "xsmall",
    "xsmall",
    "xsmall",
  ],
  medium: ["small", "small"],
  large: ["small", "small"],
  xlarge: ["small", "small"],
};

// Set the different areas you need for every size

const fixedGridAreas = {
  small: [
    { name: "service1", start: [0, 0], end: [0, 1] },
    { name: "service2", start: [0, 2], end: [0, 3] },
    { name: "service3", start: [0, 4], end: [0, 5] },
    { name: "service4", start: [0, 6], end: [0, 7] },
  ],
  medium: [
    { name: "service1", start: [0, 0], end: [0, 0] },
    { name: "service2", start: [1, 0], end: [1, 0] },
    { name: "service3", start: [0, 1], end: [0, 1] },
    { name: "service4", start: [1, 1], end: [1, 1] },
  ],
  large: [
    { name: "service1", start: [0, 0], end: [0, 0] },
    { name: "service2", start: [1, 0], end: [1, 0] },
    { name: "service3", start: [0, 1], end: [0, 1] },
    { name: "service4", start: [1, 1], end: [1, 1] },
  ],
  xlarge: [
    { name: "service1", start: [0, 0], end: [0, 0] },
    { name: "service2", start: [1, 0], end: [1, 0] },
    { name: "service3", start: [0, 1], end: [0, 1] },
    { name: "service4", start: [1, 1], end: [1, 1] },
  ],
};

export default function Services() {
  return (
    <Box>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <Text
              size="xxlarge"
              textAlign="center"
              color="light-1"
              margin={{ bottom: "small" }}
            >
              Services
            </Text>
          ) : (
            <Text size="4xl" textAlign="center" color="light-1">
              Services
            </Text>
          )
        }
      </ResponsiveContext.Consumer>

      <ResponsiveGrid
        rows={rows}
        columns={columns}
        gap="medium"
        areas={fixedGridAreas}
        margin="large"
      >
        <Box gridArea="service1" justify="center" align="center">
          <Card
            pad="medium"
            width="large"
            height="medium"
            gap="medium"
            background="light-1"
            elevation="xlarge"
          >
            <CardHeader>
              <Heading level={3} margin="none">
                Service 1
              </Heading>
            </CardHeader>
            <CardBody>
              <Paragraph margin="none">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam
              </Paragraph>
            </CardBody>
          </Card>
        </Box>
        <Box gridArea="service2" justify="center" align="center">
          <Card
            pad="medium"
            width="large"
            height="medium"
            gap="medium"
            background="light-1"
            elevation="xlarge"
          >
            <CardHeader>
              <Heading level={3} margin="none">
                Service 2
              </Heading>
            </CardHeader>
            <CardBody>
              <Paragraph margin="none">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam
              </Paragraph>
            </CardBody>
          </Card>
        </Box>
        <Box gridArea="service3" justify="center" align="center">
          <Card
            pad="medium"
            width="large"
            height="medium"
            gap="medium"
            background="light-1"
            elevation="xlarge"
          >
            <CardHeader>
              <Heading level={3} margin="none">
                Service 3
              </Heading>
            </CardHeader>
            <CardBody>
              <Paragraph margin="none">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam
              </Paragraph>
            </CardBody>
          </Card>
        </Box>
        <Box gridArea="service4" justify="center" align="center">
          <Card
            pad="medium"
            width="large"
            height="medium"
            gap="medium"
            background="light-1"
            elevation="xlarge"
          >
            <CardHeader>
              <Heading level={3} margin="none">
                Service 4
              </Heading>
            </CardHeader>
            <CardBody>
              <Paragraph margin="none">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam
              </Paragraph>
            </CardBody>
          </Card>
        </Box>
      </ResponsiveGrid>
    </Box>
  );
}
