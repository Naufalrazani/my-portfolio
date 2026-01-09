import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const ProjectCard = ({
  title,
  description,
  image,
  delay = 0,
  liveUrl = "#",
  repoUrl,
  tags = [],
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="overflow-hidden rounded-3xl bg-white border border-gray-200"
    >
      {/* Image */}
      <div className="h-52">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-6">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-bold text-indigo-600 hover:text-gray-900"
          >
            View Project
            <HiArrowUpRight />
          </a>

          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-gray-500 hover:text-gray-900"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
