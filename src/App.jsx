import React from "react";

function App() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl p-4 m-4">Start Coding in React 19</h1>

      <div className="bg-gray-300 p-4 rounded-sm text-lg text-center max-w-md">
        <p className="text-3xl">🧑‍💻 Author</p>
        <p className="mt-2">
          Developed with ❤️ by <strong>Najib Hossain</strong>
        </p>
        <p className="mt-2">
          <a
            href="https://github.com/NajibHossain49"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/md-najib-hossain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </p>

        <p className="mt-4 text-2xl">🌟 Show Your Support</p>
        <p className="mt-2">
          Liked it? You can show your support with a{" "}
          <span className="font-bold">STAR (⭐)</span>.
        </p>
        <p className="mt-2">
          Many thanks to all the{" "}
          <span className="font-semibold">Stargazers</span> who have supported
          this project with stars (⭐).
        </p>
      </div>
    </div>
  );
}

export default App;
