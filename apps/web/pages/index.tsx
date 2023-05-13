import Head from "next/head";
import { Button } from "ui";

export default function Web() {
  return (
    <>
      <Head>
        <title>Web App</title>
      </Head>

      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex space-x-3 items-center">
          <h1 className="font-bold text-lg">Web</h1>
          <Button title="Hello world" variants="primary" />
          <Button title="Hello world" variants="outlined" />
          <Button title="Hello world" variants="custom" />
        </div>
      </div>
    </>
  );
}
