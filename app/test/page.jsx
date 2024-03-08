"use client"
import { useState } from 'react';

export default function Closet() {
  const [imageSrcList, setImageSrcList] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const newImageSrcList = [...imageSrcList, reader.result];
      if (newImageSrcList.length > 6) {
        alert('Maximum limit reached');
      } else {
        setImageSrcList(newImageSrcList);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDelete = (index) => {
    const newImageSrcList = [...imageSrcList];
    newImageSrcList.splice(index, 1);
    setImageSrcList(newImageSrcList);
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen p-4">
      <div className="grid gap-4 w-full max-w-5xl grid-cols-1 md:grid-cols-2">
        <div className="grid gap-4 w-full grid-template-rows-[repeat(auto-fill,minmax(200px,1fr))]">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl">My Closet</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Drag and drop a folder onto the plus sign or click to upload an image
            </p>
            <div
              className="flex items-center justify-center border-dashed border-2 border-gray-200 rounded-lg w-full h-[200px] dark:border-gray-800"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <input
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                type="file"
                onChange={(event) => {
                  const file = event.target.files[0];
                  const reader = new FileReader();
                  reader.onload = () => {
                    const newImageSrcList = [...imageSrcList, reader.result];
                    if (newImageSrcList.length > 6) {
                      alert('Maximum limit reached');
                    } else {
                      setImageSrcList(newImageSrcList);
                    }
                  };
                  reader.readAsDataURL(file);
                }}
              />
              <PlusIcon className="h-6 w-6 text-gray-400 dark:text-gray-600" />
              <p className="text-sm text-gray-500 dark:text-gray-400">Upload an image here</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 w-full grid-cols-1 md:grid-cols-3 items-start">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="relative">
              <div className="flex items-center justify-center border border-gray-200 rounded-lg w-full h-[200px] bg-white dark:bg-gray-800 aspect-image overflow-hidden dark:border-gray-800">
                {index < imageSrcList.length ? (
                  <>
                    <img
                      alt={`Image ${index + 1}`}
                      className="aspect-image object-cover"
                      src={imageSrcList[index]}
                    />
                    <button
                      className="absolute top-2 right-2 text-gray-600 dark:text-gray-400"
                      onClick={() => handleDelete(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </>
                ) : null}
              </div>
              {index >= imageSrcList.length ? (
                <div className="absolute inset-0 flex items-center justify-center border border-gray-200 rounded-lg w-full h-[200px] bg-white dark:bg-gray-800 dark:border-gray-800">
                  <span className="text-gray-500 dark:text-gray-400">No image uploaded</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 p-4 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
          Welcome to Your Virtual Closet
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300">Explore and organize your wardrobe digitally</p>
      </div>
    </div>
  );
}

function PlusIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className} // Add className prop
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
