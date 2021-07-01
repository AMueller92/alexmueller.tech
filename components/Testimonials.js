import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  Text,
  Box,
  Heading,
  Paragraph,
} from "grommet";

export default function Testimonials() {
  return (
    <Box pad="medium">
      <Grid gap="large" columns={{ count: "fit", size: "small" }}>
        <Card pad="medium" width="medium" gap="medium" background="light-1">
          <CardHeader>
            <Heading level={3} margin="none">
              Company A
            </Heading>
          </CardHeader>
          <CardBody>
            <Paragraph margin="none">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren
            </Paragraph>
          </CardBody>
        </Card>
        <Card pad="medium" width="medium" gap="medium" background="light-1">
          <CardHeader>
            <Heading level={3} margin="none">
              Company B
            </Heading>
          </CardHeader>
          <CardBody>
            <Paragraph margin="none">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren
            </Paragraph>
          </CardBody>
        </Card>
        <Card pad="medium" width="medium" gap="medium" background="light-1">
          <CardHeader>
            <Heading level={3} margin="none">
              Company C
            </Heading>
          </CardHeader>
          <CardBody>
            <Paragraph margin="none">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren
            </Paragraph>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
