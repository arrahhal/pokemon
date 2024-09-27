import { Mt } from "./Utils";

type ModalBackgroundProps = {
  children: React.ReactNode;
};

function ModalBackground({ children }: ModalBackgroundProps) {
  return (
    <div className="absolute w-full h-full flex justify-center items-center">
      <div className="w-full max-w-xl px-4 py-2">
        <div
          style={borderStyles}
          className="bg-white text-black border border-black py-4 px-8 shadow-md"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

const borderStyles = {
  borderImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAABgQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMM8PuMAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGHRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4xLjVkR1hSAAAA5UlEQVRoQ+3MQQrDMBBD0fb+h06N/2A+MTHdTtBbKRpHn0u+UtUf6oepqinTQ1VT62kfyNgbuHcGTaYXmqbT9XXEU6vDUaZvWk/XHxtfn/KOa6YXrk2n/UGGG7K5J8NNpgc3rafBAW7I5p4MGmR6oMFrpvf8xG+ckemV0XraB+czv3RGpldG62n47PzEb5yR6ZXxmmm4IZt7MmiQ6YEGrad9IGNv4N4ZNJleaJpO19cRT60OR5m+aT1df2x8fco7rpleuDad9gcZbsjmngw3mR7ctJ4GB1T1h/phqmrK9FDV1HH6un4ss9jsFZtJkQAAAABJRU5ErkJggg==) 42 round",
  borderStyle: "solid",
  borderWidth: "21px",
}

type ModalProps = {
  title?: string;
  children: React.ReactNode;
  centerTitle: boolean;
};

export function Modal({ title = '', children, centerTitle }: ModalProps) {
  return (
    <ModalBackground>
      {title && <p className={`font-bold ${centerTitle ? "text-center" : ""}`}>{title}</p>}
      {title ? <Mt>{children}</Mt> : children}
    </ModalBackground>
  );
}

type InputItemProps = {
  id: string;
  count?: number;
  label: string;
  onClick: () => void;
}

function ButtonItem({ id, label, onClick }: InputItemProps) {
  return (
    <button
      id={id}
      onClick={onClick}
      className="block relative arrow"
    >
      {label}
      <style>{`
        .arrow:hover::before {
          position: absolute;
          left: -20px;
          content: url(/src/assets/right-arrow.svg);
          width: 12px;
          height: 12px;
        }
      `}</style>
    </button >
  )
}

export function StartModal({ onSelect }: { onSelect: (cnt: number) => void; }) {
  return (
    <Modal title="Select a Difficlity Level">
      <Mt>
        <div className="space-y-4">
          <ButtonItem id="easy-level" label="Easy" onClick={() => { onSelect(6) }} />
          <ButtonItem id="medium-level" label="Medium" onClick={() => { onSelect(12) }} />
          <ButtonItem id="hard-level" label="Hard" onClick={() => { onSelect(18) }} />
        </div>
      </Mt>
      <Mt>
        <a
          target="_blank"
          href="https://github.com/arrahhal/pokemon"
          className="text-sm"
        >
          GitHub Repo
        </a>
      </Mt>
    </Modal>
  );
}

type EndProps = {
  score: number;
  level: number;
  onPlayAgain: () => void;
  onQuit: () => void;
}

export function EndModal({ score, level, onPlayAgain, onQuit }: EndProps) {
  return (
    <Modal title={score === level ? "You Won!" : "Game Over!"} centerTitle={true}>
      <div>
        <img className="w-64 mx-auto" src={score === level ? "https://media2.giphy.com/media/xx0JzzsBXzcMK542tx/giphy.gif" : "https://media.tenor.com/TRTMIXMvMlAAAAAC/ditto-sad.gif"} alt="" />
        <p className="text-sm text-center">{`your final score is: ${score}`}</p>
      </div>
      <Mt>
        <div className="space-y-2">
          <ButtonItem id="again-btn" label="Play Again" onClick={onPlayAgain} />
          <ButtonItem id="quit-btn" label="Quit" onClick={onQuit} />
        </div>
      </Mt>
    </Modal>
  )
}
