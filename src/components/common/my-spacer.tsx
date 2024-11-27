export default function MySpacer({ className }: { className?: string }) {
  return <div className={`${className || "my-1.5"}`} />;
}
