import Image from "next/image";

export default function EmdepFrame({ image, title }) {
  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>
  );
}

