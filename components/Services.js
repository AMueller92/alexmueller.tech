import {
  Box,
  CardBody,
  CardHeader,
  Text,
  Card,
  Heading,
  Paragraph,
  Grid,
  ResponsiveContext,
} from "grommet";

// If the size is small, we only see 1 column
// If the size is medium, we only see 2 columns
// If the size is either large or xlarge, we see 3 columns

const columns = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto"],
  xlarge: ["auto", "auto"],
};

// If the size is small, we have 3 rows
// If the size is medium, we have 2 rows
// If the size is large or xlarge, we have 1 row

const rows = {
  small: ["xsmall", "xsmall", "xsmall"],
  medium: ["small", "small"],
  large: ["small", "small"],
  xlarge: ["small", "small"],
};

// Set the different areas you need for every size

const fixedGridAreas = {
  small: [
    { name: "header", start: [0, 0], end: [0, 0] },
    { name: "test", start: [0, 1], end: [0, 1] },
    { name: "test1", start: [0, 2], end: [0, 2] },
  ],
  medium: [
    { name: "header", start: [0, 0], end: [1, 0] },
    { name: "test", start: [0, 1], end: [0, 1] },
    { name: "test1", start: [1, 1], end: [1, 1] },
  ],
  large: [
    { name: "header", start: [0, 0], end: [1, 0] },
    { name: "test", start: [0, 1], end: [0, 1] },
    { name: "test1", start: [1, 1], end: [1, 1] },
  ],
  xlarge: [
    { name: "header", start: [0, 0], end: [1, 0] },
    { name: "test", start: [0, 1], end: [0, 1] },
    { name: "test1", start: [1, 1], end: [1, 1] },
  ],
};

const Responsive = ({
  children,
  overrideColumns,
  overrideRows,
  areas,
  ...props
}) => (
  <ResponsiveContext.Consumer>
    {(size) => {
      // Take into consideration if not array is sent but a simple string
      let columnsVal = columns;
      if (columns) {
        if (columns[size]) {
          columnsVal = columns[size];
        }
      }

      let rowsVal = rows;
      if (rows) {
        if (rows[size]) {
          rowsVal = rows[size];
        }
      }

      // Also if areas is a simple array not an object of arrays for
      // different sizes
      let areasVal = areas;
      if (areas && !Array.isArray(areas)) areasVal = areas[size];

      return (
        <Grid
          {...props}
          areas={!areasVal ? undefined : areasVal}
          rows={!rowsVal ? size : rowsVal}
          columns={!columnsVal ? size : columnsVal}
        >
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

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
      <Responsive
        rows={rows}
        columns={columns}
        gap="small"
        areas={fixedGridAreas}
        margin="medium"
      >
        <Card
          pad="medium"
          width="medium"
          gap="medium"
          background="light-1"
          gridArea="header"
        >
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
        <Card
          pad="medium"
          width="medium"
          gap="medium"
          background="light-1"
          gridArea="test"
        >
          <CardHeader>
            <Heading level={3} margin="none">
              Service 2
            </Heading>
          </CardHeader>
          <CardBody>
            <Paragraph margin="none">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </Paragraph>
          </CardBody>
        </Card>
        <Card
          pad="medium"
          width="medium"
          gap="medium"
          background="light-1"
          gridArea="test1"
        >
          <CardHeader>
            <Heading level={3} margin="none">
              Service 3
            </Heading>
          </CardHeader>
          <CardBody>
            <Paragraph margin="none">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </Paragraph>
          </CardBody>
        </Card>
        {/*<Card pad="medium" width="medium" gap="medium" background="light-1">*/}
        {/*  <CardHeader>*/}
        {/*    <Heading level={3} margin="none">*/}
        {/*      Service 4*/}
        {/*    </Heading>*/}
        {/*  </CardHeader>*/}
        {/*  <CardBody>*/}
        {/*    <Paragraph margin="none">*/}
        {/*      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam*/}
        {/*      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam*/}
        {/*    </Paragraph>*/}
        {/*  </CardBody>*/}
        {/*</Card>*/}
      </Responsive>
    </Box>
  );
}
