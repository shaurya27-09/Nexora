'use client';

import { motion, SpringOptions, useScroll, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';
import { RefObject } from 'react';

export type ScrollProgressProps = {
  className?: string;
  springOptions?: SpringOptions;
  containerRef?: RefObject<HTMLDivElement | null>;
};

const DEFAULT_SPRING_OPTIONS: SpringOptions = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
};

export function ScrollProgress({
  className,
  springOptions,
  containerRef,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll(
    containerRef ? { container: containerRef } : {}
  );

  const scaleX = useSpring(scrollYProgress, {
    ...DEFAULT_SPRING_OPTIONS,
    ...(springOptions ?? {}),
  });

  return (
    <motion.div
      className={cn('fixed inset-x-0 top-0 h-0.5 origin-left z-50 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500', className)}
      style={{
        scaleX,
      }}
    />
  );
}
