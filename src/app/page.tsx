import Form from "./components/form";
import Container from "./components/general/container";
import CountDown from "./components/general/countdown";
import "./styles/page.scss";

export default function Home() {
  const time = new Date("2025-06-14");

  return (
    <>
      <header>
        <h2>
          <CountDown expiryTimestamp={time} />
        </h2>
      </header>
      <main>
        <Container>
          <Form />
        </Container>
      </main>
    </>
  );
}
