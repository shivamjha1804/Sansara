const YoutubeVideo = () => {
  return (
    <div className="flex justify-center pb-24">
      <iframe
        className="w-full md:w-4/5 h-56 md:h-96 rounded-lg shadow-lg"
        src="https://www.youtube.com/embed/vJDc7jU945o"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeVideo;
