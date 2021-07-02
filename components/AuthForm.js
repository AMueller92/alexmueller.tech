import {
  Anchor,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  Heading,
  TextInput,
} from "grommet";
import Link from "next/link";

export default function AuthForm() {
  return (
    <Card
      pad="medium"
      width="medium"
      gap="medium"
      background="light-1"
      elevation="xlarge"
    >
      <CardHeader>
        <Heading level={3} margin="none" size="small">
          Auth Token
        </Heading>
      </CardHeader>
      <CardBody>
        <Form onSubmit={({ value }) => console.log(value)}>
          <TextInput id="textinput-id" name="token" />
          <Box direction="row" justify="between" margin={{ top: "medium" }}>
            <Link href="/" passHref>
              <Anchor label="Back" />
            </Link>
            <Button
              type="submit"
              primary
              label="Authenticate"
              style={{ borderRadius: "7px" }}
            />
          </Box>
        </Form>
      </CardBody>
    </Card>
  );
}
