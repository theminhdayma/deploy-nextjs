"use client";

import Link from "next/link";

export default function page() {
  return (
    <div>
      Trang chủ
      <Link href={"/Sign-in"}>Đăng nhập</Link>
    </div>
  );
}
