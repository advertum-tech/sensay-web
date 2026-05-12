interface Props {
  src?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function HeroPerson({ className, style }: Props) {
  return (
    <img src="/hero-person.png" alt="" className={className} style={style} />
  );
}
