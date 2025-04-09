import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Text,
    Button,
    Section,
    Container,
  } from "@react-email/components";
  
  interface VerificationEmailProps {
    username: string;
    otp: string;
  }
  
  export default function VerificationEmail({
    username,
    otp,
  }: VerificationEmailProps) {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <title>Verification Code</title>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
              format: "woff2",
            }}
          />
        </Head>
        <Preview>Your verification code is here</Preview>
        <Section style={{ backgroundColor: "#f4f4f4", padding: "40px 0" }}>
          <Container
            style={{
              backgroundColor: "#ffffff",
              padding: "30px",
              borderRadius: "8px",
              maxWidth: "500px",
              margin: "0 auto",
              fontFamily: "'Roboto', Verdana, sans-serif",
              color: "#333",
            }}
          >
            <Heading style={{ fontSize: "24px", marginBottom: "20px" }}>
              Hello, {username} 👋
            </Heading>
            <Text style={{ fontSize: "16px", marginBottom: "16px" }}>
              Thanks for signing up. To continue, please use the verification code
              below:
            </Text>
            <Text
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                letterSpacing: "4px",
                textAlign: "center",
                margin: "20px 0",
                color: "#4a90e2",
              }}
            >
              {otp}
            </Text>
            <Text style={{ fontSize: "14px", color: "#555" }}>
              This code is valid for 10 minutes. If you didn’t request this, you
              can safely ignore this email.
            </Text>
          </Container>
        </Section>
      </Html>
    );
  }
  