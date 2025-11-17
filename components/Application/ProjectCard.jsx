"use client"
import Image from "next/image";
import React from "react";
import placeholder from "@/public/img-placeholder.webp";
import { ArrowRight } from "lucide-react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";

const ProjectCard = ({ src, projName, description, url, tags, date }) => {

  const onClickLink = async (url) => {
    try {
      axios.post('/api/view/create', { url })


      window.open(url, "_blank");
    } catch (error) {
      console.log(error);
      alert('Failed to record view');
    }
  };


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = Array.isArray(src) ? src : [src];

  if (!images.length) return null;

  return (
    <div>
      <div className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#101828] shadow-md border shadow-white/20 hover:shadow-xl transition-all duration-500 w-full mx-auto">
        <div className="relative md:h-[400px] h-[200px] w-full overflow-hidden object-fill ">
          <Slider {...settings}>
            {images.map((url, index) => (
              <div key={index}>
                <div className="w-full h-[400px] relative">
                  <Image
                    src={url || placeholder.src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="md:object-cover object-contain object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                </div>
              </div>
            ))}
          </Slider>
          {tags && (
            <div className="md:absolute md:bottom-3 md:left-3 flex gap-2 z-20 md:flex-nowrap flex-wrap">
              {tags.map((tag, i) => (
                <span key={i} className="bg-yellow-500/90 px-5 py-1 text-white rounded-full text-xs ">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
        </div>


        <div className="p-3">
          <h4 className="md:text-2xl text-2xl font-semibold text-gray-800 dark:text-white tracking-wide mb-2 text-center">
            {projName}
          </h4>

          {description && (
            <p className="text-gray-600 dark:text-gray-300 md:text-md text-sm">
              {description}
            </p>
          )}
          <hr className="mt-3" />
          <div className="flex justify-between items-center mt-3">
            {date && (
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {date}
              </p>
            )}
            <a onClick={() => onClickLink(url)} target="_blank" href={url} className="text-blue-400 flex items-center gap-2 text-sm">
              Open Link <ArrowRight size={15} />
            </a>
          </div>

        </div>


        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-teal-400/70 transition-all duration-500 pointer-events-none"></div>

      </div>

    </div>
  );
};

export default ProjectCard;