import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const iconComponents = {
  FaBriefcase,
  FaGraduationCap
};

const TimelineSection = ({ timeline }) => {
  const IconComponent = iconComponents[timeline?.icon] || (() => null);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-gray-700">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <IconComponent className="text-indigo-500 w-6 h-6 shrink-0" />
        {timeline?.title}
      </h3>
      <div className="space-y-6">
        {timeline?.options?.map((option, index) => (
          <TimelineItem key={index} {...option} />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ title, subTitle, subTitleLink, period, description }) => (
  <div className="relative pl-8 pb-6 last:pb-0">
    <div className="absolute left-0 top-0 h-full w-0.5 bg-indigo-500/30" aria-hidden="true" />
    <div className="absolute left-[-3px] top-2 w-2 h-2 rounded-full bg-indigo-500" aria-hidden="true" />
    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
      {title}
    </h4>
    <p className="mt-0.5 text-sm">
      {subTitleLink ? (
        <a
          href={subTitleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-700 hover:underline dark:text-indigo-400"
        >
          {subTitle}
        </a>
      ) : (
        <span  dangerouslySetInnerHTML={{ __html: subTitle }} ></span>
      )}
      <span className="text-gray-400 dark:text-gray-500"> {' \u2022 '} </span>
      <span className="text-gray-500 dark:text-gray-400">{period}</span>
    </p>
    {Array.isArray(description) ? (
      <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
        {description.map((desc, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: desc }}></li>
        ))}
      </ul>
    ) : (
      <p
        className="text-gray-600 dark:text-gray-300 mt-2"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    )}
  </div>
);

export default TimelineSection;
