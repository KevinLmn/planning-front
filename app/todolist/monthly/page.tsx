import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href="/todolist/monthly">
        <a>Monthly</a>
      </Link>
    </div>
  );
};

export default page;
