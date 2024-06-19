export default function TailwindIndicator() {
  return (
    <div className="fixed bottom-1 left-1 z-50 flex h-6 w-8 items-center justify-center rounded-md bg-gray-300 p-3 font-mono text-xs text-black/65">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
