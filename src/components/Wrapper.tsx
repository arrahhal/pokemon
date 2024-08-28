interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Wrapper({ children }: Props) {
  return (
    <div className="max-w-7xl w-full px-4 mx-auto">
      {children}
    </div>
  )
}
