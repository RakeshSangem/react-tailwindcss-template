import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function GridCard({ children }: Props) {
  return <article className="">{children}</article>;
}
