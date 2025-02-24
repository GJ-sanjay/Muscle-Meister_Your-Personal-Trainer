import React from 'react';
import { motion } from 'framer-motion';
import { Meal } from '../types';

interface Props {
  meal: Meal;
}

const DietPlanCard: React.FC<Props> = ({ meal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-black rounded-lg shadow-lg overflow-hidden max-w-md mx-auto"
    >
      <img
        src={meal.image || '/default-image.jpg'}
        alt={meal.name || 'Diet meal'}
        className="w-full h-60 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-red-500">
          {meal.name || 'Meal Name'}
        </h3>
        <p className="text-gray-300 mb-4">
          {meal.description || 'No description available'}
        </p>
        <div className="text-sm">
          <span className="bg-red-900 text-red-100 px-3 py-1 rounded-full">
            {meal.calories} calories
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default DietPlanCard;
