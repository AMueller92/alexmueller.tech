import HeroBase from "@components/HeroBase";
import AuthForm from "@components/AuthForm";
import CustomFooter from "@components/CustomFooter";
import { Box } from "grommet";

export default function Authenticate() {
  return (
    <div>
      <Box margin={{ bottom: "xlarge" }}>
        <HeroBase title="Authenticate">
          <div
            style={{
              position: "absolute",
              top: "350%",
              left: "50%",
              transform: "translate(-50%, 0%)",
            }}
          >
            <AuthForm />
          </div>
        </HeroBase>
      </Box>
      <CustomFooter />
    </div>
  );
}
