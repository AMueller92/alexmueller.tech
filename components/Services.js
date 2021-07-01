import {
  Box,
  CardBody,
  CardHeader,
  Text,
  Card,
  Heading,
  Paragraph,
  Grid,
} from "grommet";

export default function Services() {
  return (
    <Box>
      <Text
        size="4xl"
        textAlign="center"
        color="light-1"
        style={{ marginBottom: 40 }}
      >
        Services
      </Text>
      <Grid gap="large" columns={{ count: "fit", size: "small" }}>
        <Card pad="medium" width="medium" gap="medium" background="light-1">
          <CardHeader>
            <Heading level={3} margin="none">
              Service 1
            </Heading>
          </CardHeader>
          <CardBody>
            <Paragraph margin="none">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </Paragraph>
          </CardBody>
        </Card>
        <Card pad="medium" width="medium" gap="medium" background="light-1">
          <CardHeader>
            <Heading level={3} margin="none">
              Service 1
            </Heading>
          </CardHeader>
          <CardBody>
            <Paragraph margin="none">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </Paragraph>
          </CardBody>
        </Card>
        <Card pad="medium" width="medium" gap="medium" background="light-1">
          <CardHeader>
            <Heading level={3} margin="none">
              Service 1
            </Heading>
          </CardHeader>
          <CardBody>
            <Paragraph margin="none">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </Paragraph>
          </CardBody>
        </Card>
        <Card pad="medium" width="medium" gap="medium" background="light-1">
          <CardHeader>
            <Heading level={3} margin="none">
              Service 1
            </Heading>
          </CardHeader>
          <CardBody>
            <Paragraph margin="none">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </Paragraph>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
