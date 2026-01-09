import React from "react";

const ExperienceCard = ({
  title,
  subtitle,
  period,
  description,
  colorClass,
  delay = 0,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="relative p-8 rounded-3xl bg-white border border-gray-200"
    >
      {/* Top Accent Line */}
      <span
        className={`absolute top-0 left-8 h-1 w-16 rounded-b-full ${colorClass}`}
      />

      {/* Period */}
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
        {period}
      </p>

      {/* Title */}
      <h3 className={`text-xl md:text-2xl font-black text-gray-900`}>
        {title}
      </h3>

      {/* Subtitle */}
      <p className="mt-2 mb-4 flex items-center gap-2 text-sm font-semibold text-gray-600">
        <span className={`w-2 h-2 rounded-full ${colorClass}`} />
        {subtitle}
      </p>

      {/* Description */}
      <p className="text-sm leading-relaxed text-gray-500">{description}</p>
    </div>
  );
};

export default ExperienceCard;
