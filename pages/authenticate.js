import HeroBase from "@components/HeroBase";
import AuthForm from "@components/AuthForm";
import CustomFooter from "@components/CustomFooter";

export default function Authenticate() {
  return (
    <div>
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
      <CustomFooter />
    </div>
  );
}
