import React from "react";

import Image from "next/image";

export default function Avatar() {
  return (
    <Image
      className="rounded-full"
      alt="Avater"
      width={30}
      height={30}
      src="/images/placeholder.jpg"
    />
  );
}
