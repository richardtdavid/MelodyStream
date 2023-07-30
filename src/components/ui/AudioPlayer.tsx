import { useState } from "react";

export const AudioPlayer = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleAudio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const file = files[0];
      const audio = new Audio(URL.createObjectURL(file));
      setAudio(audio);
    }
  };

  const togglePlay = () => {
    if (audio) {
      if (playing) {
        audio.pause();
      } else {
        audio.play();
      }
      setPlaying(!playing);
    }
  };

  const handleProgress = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    const target = e.target as HTMLAudioElement;
    const duration = target.duration;
    const currentTime = target.currentTime;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
  };

  const handleSeek = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const target = e.target as HTMLInputElement;
    const width = target.clientWidth;
    const clickX = e.clientX;
    const duration = audio?.duration;
    if (duration) {
      const newCurrentTime = (clickX / width) * duration;
      audio!.currentTime = newCurrentTime;
    }
  };

  return (
    <div className="w-full">
      {/* <div className="h-2 bg-red-600"></div> */}
      <div className="flex items-center justify-center h-screen ">
        <div
          className="bg-white shadow-lg rounded-lg"
          //   style="width: 45rem !important;"
        >
          <div className="flex">
            <div>
              <img
                className="w-full rounded hidden md:block"
                src="https://tailwindcss.com/img/card-top.jpg"
                alt="Album Pic"
              />
            </div>
            <div className="w-full p-8">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-2xl text-gray-950 font-medium">
                    One Woman
                  </h3>
                  <p className="text-sm text-gray-700 mt-1">
                    {" "}
                    Adekunle Gold & Ty Dolla $ign
                  </p>
                </div>
                {/* <div className="text-red-400">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                  </svg>
                </div> */}
              </div>
              <div className="flex justify-between items-center mt-8">
                <div className="text-gray-950">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z" />
                  </svg>
                </div>
                <div className="text-gray-950">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
                  </svg>
                </div>
                <div className="text-white p-4 rounded-full bg-blue-900	 shadow-md">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    onClick={togglePlay}
                  >
                    {playing ? (
                      <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                    ) : (
                      <path d="M5 4v12l10-6-10-6z" />
                    )}
                  </svg>
                </div>
                <div className="text-gray-950">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
                  </svg>
                </div>
                <div className="text-gray-950">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-8 py-4"></div>
          <div className="flex justify-between text-sm text-gray-950">
            <p>0:40</p>
            <p>4:20</p>
          </div>
          <div className="mt-1">
            <div className="h-1 bg-gray-600 rounded-full">
              <div className="w-1/5 h-1 bg-blue-400 rounded-full relative">
                {/* <span className="mb-8 w-4 h-4 bg-blue-700 absolute pin-r pin-b  rounded-full shadow"></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
