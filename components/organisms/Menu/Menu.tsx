import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div>
      <Link href="/todolist/daily"> Todolist </Link>
      <Link href="/notes"> Notes </Link>
      <Link href="/checklist"> Checklist </Link>
    </div>
  );
};

export default Menu;
