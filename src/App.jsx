import "./App.css";
import { useState } from "react";
import { ChangeMode } from "./components/ChangeMode";
import { FromUrl } from "./components/FromUrl";

function App() {
  const [useUrl, setUseUrl] = useState(true);
  const [lookupUrl, setLookupUrl] = useState("");

  return (
    <>
      <div className="mt-5">
        <div className="text-center text-2xl font-bold">Wiki TTS</div>
        <div className="bg-base-200 mx-3 my-5 min-h-[80vh] rounded-2xl py-5 px-5">
          {/* change text mode */}
          <ChangeMode useUrl={useUrl} setUseUrl={setUseUrl} />

          <div className="mt-6">
            {useUrl ? (
              <FromUrl lookupUrl={lookupUrl} setLookupUrl={setLookupUrl} />
            ) : (
              <>
                <textarea
                  className="textarea textarea-info w-full"
                  placeholder="Paste your text here..."
                ></textarea>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
