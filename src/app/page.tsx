import getProvince from "./server-actions/province/getProvince";
import CountDown from "./components/general/countdown";
import Container from "./components/general/container";
import Form from "./components/form";
import "./styles/page.scss";

export default async function Home() {
  const time = new Date("2025-06-14");
  const province = await getProvince();

  return (
    <>
      <header>
        <h2>
          <CountDown expiryTimestamp={time} />
        </h2>
      </header>
      <main>
        <Container>
          <Form province={province} />
        </Container>
      </main>
    </>
  );
}
