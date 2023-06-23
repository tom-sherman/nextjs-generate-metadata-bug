export const dynamic = "force-dynamic";

export function generateMetadata() {
  throw new Error("Error");
}

export default function Page() {
  return <h1>Nested</h1>;
}
