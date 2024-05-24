"use client";
import { AuthUser } from "@/model/user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, DragEvent, FormEvent, useRef, useState } from "react";
import PostUserAvatar from "./PostUserAvatar";
import Button from "./ui/Button";
import GridSpinner from "./ui/GridSpinner";
import FilesIcon from "./ui/icons/FilesIcon";

type Props = {
  user: AuthUser;
};
export default function NewPost({ user: { username, image } }: Props) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const textRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };
  const handleDrag = (e: DragEvent) => {
    if (e.type === "dragenter") {
      setDragging(true);
    } else if (e.type === "dragleave") {
      setDragging(false);
    }
  };
  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("text", textRef.current?.value ?? "");

    fetch("/api/posts/", { method: "POST", body: formData }) //
      .then((res) => {
        if (!res.ok) {
          setError(`${res.status} ${res.statusText}`);
          return;
        }
        router.push("/");
      })
      .catch((err) => setError(err.toString()))
      .finally(() => setLoading(false));
  };

  return (
    <section className="flex justify-center mt-28">
      <div className="w-[900px] h-[500px] flex">
        {loading && (
          <div className="absolute inset-0 z-20 text-center pt-[30%] bg-sky-500/20">
            <GridSpinner />
          </div>
        )}
        {error && (
          <p className="w-full bg-red-100 text-red-600 text-center p-4 mb-4 font-bold">
            {error}
          </p>
        )}
        <div className="relative basis-3/5 h-full">
          <input
            className="hidden"
            name="input"
            id="input-upload"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
          <label
            className={`w-full h-full flex flex-col items-center justify-center ${
              !file && "border-2 border-sky-500 border-dashed"
            }`}
            htmlFor="input-upload"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {dragging && (
              <div className="absolute inset-0 z-10 bg-sky-500/20 pointer-events-none" />
            )}
            {!file && (
              <div className="flex flex-col items-center pointer-events-none">
                <FilesIcon />
                <p>Drag and Drop your image here or click</p>
              </div>
            )}
            {file && (
              <div className="relative w-full h-full">
                <Image
                  className="object-contain"
                  src={URL.createObjectURL(file)}
                  alt="local file"
                  fill
                  sizes="818px"
                />
              </div>
            )}
          </label>
        </div>
        <div className="w-full basis-2/5 flex flex-col border border-neutral-300">
          <PostUserAvatar
            username={username}
            image={
              image ??
              "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            }
          />
          <form
            className="flex-grow flex flex-col mt-2"
            onSubmit={handleSubmit}
          >
            <textarea
              className="outline-none text-base border-b-2 border-neutral-300 border-t-2 border-neutral-300 flex-grow p-3 resize-none"
              name="text"
              id="input-text"
              required
              placeholder="Write a caption..."
              ref={textRef}
            />

            <button
              className={`font-bold ml-2 text-sky-500 py-2 px-8`}
              onClick={() => {}}
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
