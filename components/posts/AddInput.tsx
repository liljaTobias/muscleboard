"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export const AddInput = () => {
  const [postTitle, setPostTitle] = useState("");

  const router = useRouter();

  const handleSave = useCallback(async () => {
    await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: postTitle,
      }),
    });
    router.refresh();
  }, [postTitle, router]);

  return (
    <div>
      <input value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
      <button onClick={handleSave}>Add</button>
    </div>
  );
};
