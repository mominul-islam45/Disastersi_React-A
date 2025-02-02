import React from "react";
import { useNavigate } from "react-router";
import Button from "../components/common/Button";
import Container from "../components/common/container";
import Title from "../components/common/Title";

const Error = () => {
  let navigate = useNavigate();

  const goTo = () => {
    navigate("/Dashboard");
  };

  return (
    <>
      <Container className=" h-screen flex flex-col justify-center items-center gap-8">
        <Title>Page not found.</Title>
        <Button onClick={goTo}>Go to Dashboard</Button>
      </Container>
    </>
  );
};

export default Error;
