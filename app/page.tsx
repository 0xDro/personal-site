export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="flex flex-col space-y-6">
        <h1 className="text-6xl font-bold">Hello, It's Alejandro</h1>
        <p className="text-2xl mt-4">
          Current work:{" "}
          <a
            className="text-blue-500 underline"
            href="https://streamprotocol.money/"
          >
            Building Stream Finance
          </a>
        </p>
        <br />
        <p className="text-2xl">
          I'm a crypto native engineer{" "}
          {"(yes, my first language was solidity) "}
          with curiosity for any interesting problems. Specifically I'm
          interested in human coordination software and exploring consensus
          algorithms.
          <br />
          <br />
        </p>
        <div className="flex flex-row space-x-4">
          <a
            href="https://twitter.com/0xUhtred"
            className="text-2xl text-blue-500 underline"
          >
            Twitter
          </a>
          <a
            href="https://github.com/0xDro"
            className="text-2xl text-blue-500 underline"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/alejandro-gala-02281a227/"
            className="text-2xl text-blue-500 underline"
          >
            LinkedIn
          </a>
        </div>
        <br />
        <br />
        <div className="flex flex-col space-y-4">
          <h2 className="text-4xl font-bold">Some Projects</h2>
          <div className="flex flex-col space-y-4">
            <a
              className="text-2xl  text-blue-500 underline"
              href="https://github.com/0xDro/SeguroWallet"
            >
              {" "}
              Cross-chain multi-sig wallet built on LayerZero
            </a>
            <a
              className="text-2xl  text-blue-500 underline"
              href="https://github.com/0xDro/Fitnancial"
            >
              {" "}
              Weight scale with crypto incentives for weight loss
            </a>
            <a
              className="text-2xl  text-blue-500 underline"
              href="https://ethglobal.com/showcase/reputable-kxzd7"
            >
              {" "}
              On-chain reputation system
            </a>
            <a
              className="text-2xl  text-blue-500 underline"
              href="https://ethglobal.com/showcase/facelink-zs2su"
            >
              {" "}
              biometric wallet address resolver
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
