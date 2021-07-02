import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  Text,
  Box,
  Heading,
  Paragraph,
} from "grommet";
import ResponsiveGrid from "@components/utils/ResponsiveGrid";

const columns = {
  small: ["auto"],
  medium: ["auto", "auto", "auto"],
  large: ["auto", "auto", "auto"],
  xlarge: ["auto", "auto", "auto"],
};

const rows = {
  small: ["xsmall", "xsmall", "xsmall", "xsmall", "xsmall", "xsmall"],
  medium: ["medium"],
  large: ["medium"],
  xlarge: ["medium"],
};

// Set the different areas you need for every size

const fixedGridAreas = {
  small: [
    { name: "company1", start: [0, 0], end: [0, 1] },
    { name: "company2", start: [0, 2], end: [0, 3] },
    { name: "company3", start: [0, 4], end: [0, 5] },
  ],
  medium: [
    { name: "company1", start: [0, 0], end: [0, 0] },
    { name: "company2", start: [1, 0], end: [1, 0] },
    { name: "company3", start: [2, 0], end: [2, 0] },
  ],
  large: [
    { name: "company1", start: [0, 0], end: [0, 0] },
    { name: "company2", start: [1, 0], end: [1, 0] },
    { name: "company3", start: [2, 0], end: [2, 0] },
  ],
  xlarge: [
    { name: "company1", start: [0, 0], end: [0, 0] },
    { name: "company2", start: [1, 0], end: [1, 0] },
    { name: "company3", start: [2, 0], end: [2, 0] },
  ],
};

export default function Testimonials() {
  return (
    <Box>
      <Text size="4xl" textAlign="center" style={{ marginTop: 50 }}>
        What Customers are saying
      </Text>
      <ResponsiveGrid
        rows={rows}
        columns={columns}
        gap="medium"
        areas={fixedGridAreas}
        margin="medium"
      >
        <Box gridArea="company1" justify="center" align="center">
          <Card pad="medium" width="medium" gap="medium" background="light-1">
            <CardHeader>
              <Heading level={3} margin="none">
                Company A
              </Heading>
            </CardHeader>
            <CardBody>
              <Paragraph margin="none">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren
              </Paragraph>
            </CardBody>
          </Card>
        </Box>
        <Box gridArea="company2" justify="center" align="center">
          <Card pad="medium" width="medium" gap="medium" background="light-1">
            <CardHeader>
              <Heading level={3} margin="none">
                Company B
              </Heading>
            </CardHeader>
            <CardBody>
              <Paragraph margin="none">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren
              </Paragraph>
            </CardBody>
          </Card>
        </Box>
        <Box gridArea="company3" justify="center" align="center">
          <Card pad="medium" width="medium" gap="medium" background="light-1">
            <CardHeader>
              <Heading level={3} margin="none">
                Company C
              </Heading>
            </CardHeader>
            <CardBody>
              <Paragraph margin="none">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren
              </Paragraph>
            </CardBody>
          </Card>
        </Box>
      </ResponsiveGrid>
    </Box>
  );
}
