import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  Text,
  Box,
} from "grommet";

export default function Testimonials() {
  return (
    <Box pad="xlarge">
      <Grid
        gap="medium"
        rows="medium"
        align="start"
        justify="center"
        columns={{ count: "fit", size: "medium" }}
      >
        <Card pad="medium" width="medium" gap="medium" background="light-1">
          <CardHeader>
            <Text size="xlarge">Company A</Text>
          </CardHeader>
          <CardBody>
            <Text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren
            </Text>
          </CardBody>
        </Card>
        <Card pad="medium" width="medium" gap="medium" background="light-1">
          <CardHeader>
            <Text size="xlarge">Company B</Text>
          </CardHeader>
          <CardBody>
            <Text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren
            </Text>
          </CardBody>
        </Card>
        <Card pad="medium" width="medium" gap="medium" background="light-1">
          <CardHeader>
            <Text size="xlarge">Company C</Text>
          </CardHeader>
          <CardBody>
            <Text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren
            </Text>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
