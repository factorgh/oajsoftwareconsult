import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={hoverable ? { y: -5, scale: 1.02 } : undefined}
      className={`bg-white rounded-xl shadow-lg border border-gray-100 ${
        hoverable ? 'cursor-pointer hover:shadow-xl' : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};