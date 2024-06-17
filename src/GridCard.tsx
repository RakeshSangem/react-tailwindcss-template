import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function GridCard({ children }: Props) {
  return <article className="border rounded-2xl">{children}</article>;
}
