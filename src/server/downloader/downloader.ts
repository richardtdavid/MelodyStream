import fs from "fs";
import ytdl from "ytdl-core";

export async function downloadMp3() {
  const url = "https://www.youtube.com/watch?v=VEy9I96c5_Y";
  const info = await ytdl.getInfo(url);
  console.log(info.player_response.videoDetails);
  //   return info.player_response.videoDetails;

  const audioFormats = ytdl.filterFormats(info.formats, "audioonly");
  const audio = audioFormats[0];
  const audioOutput = fs.createWriteStream(
    `./audio/${info.player_response.videoDetails.videoId}.mp3`,
  );

  ytdl(url, {
    format: audio,
  }).pipe(audioOutput);

  audioOutput.on("finish", () => {
    console.log("Download finished");
  });

  audioOutput.on("error", (err) => {
    console.error(err);
  });

  return info.player_response.videoDetails;
}
