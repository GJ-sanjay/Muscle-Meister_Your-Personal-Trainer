import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface WorkoutCardProps {
  exercise: {
    name: string;
    sets?: number;
    reps?: string;
    description?: string;
    muscleGroup?: string;
    image?: string;
    videoLink?: string;
  };
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ exercise }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleShowVideo = () => {
    setShowVideo(true);
  };

  const handleBackToImage = () => {
    setShowVideo(false);
  };

  const getEmbedVideoLink = (link: string | undefined) => {
    if (!link) return '';

    if (link.includes('youtube.com/shorts/')) {
      return link.replace('https://youtube.com/shorts/', 'https://www.youtube.com/embed/');
    } else if (link.includes('youtu.be/')) {
      const videoId = link.split('/').pop()?.split('?')[0];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
    } else if (link.includes('youtube.com/watch?v=')) {
      const videoId = new URL(link).searchParams.get('v');
      return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
    }
    return '';
  };

  const embedVideoLink = getEmbedVideoLink(exercise.videoLink);

  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
    >
      {/* Title */}
      <h3 className="text-2xl font-bold text-red-500 mb-4">{exercise.name}</h3>

      {/* Image or Video */}
      <div className="mb-4">
        {showVideo ? (
          embedVideoLink ? (
            <iframe
              width="100%"
              height="240"
              src={embedVideoLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          ) : (
            <p className="text-red-500">Video not available</p>
          )
        ) : (
          <img
            src={exercise.image}
            alt={exercise.name}
            className="w-full h-60 object-cover rounded-lg shadow-md"
          />
        )}
      </div>

      {/* Button to Toggle View */}
      <div className="mb-4 text-center">
        {!showVideo ? (
          <button
            onClick={handleShowVideo}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
          >
            Watch Video
          </button>
        ) : (
          <button
            onClick={handleBackToImage}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
          >
            View Image
          </button>
        )}
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-4 text-gray-300">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-400">Sets</p>
            <p className="text-lg font-semibold">{exercise.sets || 'N/A'}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-400">Reps</p>
            <p className="text-lg font-semibold">{exercise.reps || 'N/A'}</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-400">Muscle Group</p>
            <p className="text-lg font-semibold">{exercise.muscleGroup || 'N/A'}</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-400">Description</p>
          <p className="text-base font-light">
            {exercise.description || 'No description provided.'}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkoutCard;
