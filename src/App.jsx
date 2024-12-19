import "./App.css";
import { useState } from "react";
import { ChangeMode } from "./components/ChangeMode";

function App() {
  const [useUrl, setUseUrl] = useState(true);

  return (
    <>
      <div className="mt-5">
        <div className="text-center text-2xl font-bold">Wiki TTS</div>
        <div className="bg-base-200 mx-3 my-5 min-h-[80vh] rounded-2xl py-5 px-5">
          <ChangeMode useUrl={useUrl} setUseUrl={setUseUrl} />

          {useUrl ? <></> : <></>}
          <textarea
            className="textarea textarea-info"
            placeholder="Bio"
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default App;
