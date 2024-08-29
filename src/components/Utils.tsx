interface Props {
  children: JSX.Element | JSX.Element[];
}

export function Wrapper({ children }: Props) {
  return (
    <div className="max-w-7xl w-full px-4 mx-auto">
      {children}
    </div>
  )
}


export function Center({ children }: Props) {
  return (
    <div className="flex justify-center items-center">
      {children}
    </div>
  )
}


type MtProps = {
  children: React.ReactNode;
};

export function Mt({ children }: MtProps) {
  return <div className="mt-8">{children}</div>;
}

