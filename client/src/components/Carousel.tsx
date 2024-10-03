import { useState, useRef, useEffect } from "react";
import { cardsData } from "../Constants";

export interface Card {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const CardCarousel: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0); // Set to 0 for default expanded card
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleCardClick = (
    event: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    event.preventDefault(); // Prevent default behavior (scrolling)
    event.stopPropagation(); // Stop the event from bubbling up

    // Check if the clicked card is the currently expanded card
    if (expandedIndex === index) {
      // If the last card is clicked, collapse it and expand the first card
      if (index === cardsData.length - 1) {
        setExpandedIndex(0); // Expand the first card
      } else {
        setExpandedIndex(index + 1); // Expand the next card
      }
    } else {
      // Expand the clicked card
      setExpandedIndex(index);
    }

    // Scroll to center the clicked card
    if (containerRef.current) {
      const cardElement = containerRef.current.children[index] as HTMLElement;

      // Calculate offset to center the clicked card
      const containerWidth = containerRef.current.clientWidth;
      const cardWidth = cardElement.offsetWidth;

      // The left offset is the left position of the card
      const offset =
        cardElement.offsetLeft + cardWidth / 2 - containerWidth / 2;

      // Ensure we do not scroll beyond the max scrollable width
      const maxScrollLeft = containerRef.current.scrollWidth - containerWidth;
      const clampedOffset = Math.max(0, Math.min(offset, maxScrollLeft));

      // Smooth scroll to the calculated offset
      containerRef.current.scrollTo({
        left: clampedOffset,
        behavior: "smooth",
      });
    }
  };

  // Handle touch start
  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX; // Get the initial touch position
  };

  // Handle touch end
  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = event.changedTouches[0].clientX; // Get the final touch position
    handleSwipe();
  };

  // Function to handle swipe logic
  const handleSwipe = () => {
    const threshold = 50; // Minimum distance to consider it a swipe
    const distance = touchEndX.current - touchStartX.current;

    if (distance > threshold) {
      // Swipe right
      if (expandedIndex > 0) {
        setExpandedIndex(expandedIndex - 1); // Expand the previous card
      }
    } else if (distance < -threshold) {
      // Swipe left
      if (expandedIndex < cardsData.length - 1) {
        setExpandedIndex(expandedIndex + 1); // Expand the next card
      } else {
        setExpandedIndex(0); // If on the last card, go back to the first
      }
    }
  };

  // Adjust the scroll position when the component mounts or the expanded index changes
  useEffect(() => {
    if (containerRef.current) {
      const initialScrollIndex = expandedIndex; // Use the current expanded index
      const cardElement = containerRef.current.children[
        initialScrollIndex
      ] as HTMLElement;

      // Calculate the scroll position
      const cardWidth = cardElement.clientWidth; // Get the width of the card
      const scrollPosition = cardWidth * initialScrollIndex - 200; // Calculate the scroll position

      // Scroll horizontally without affecting vertical scroll
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [expandedIndex]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setExpandedIndex((prevIndex) =>
        prevIndex < cardsData.length - 1 ? prevIndex + 1 : 0
      );
    }, 2800);

    // Clear interval on component unmount to avoid memory leaks
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="fade-carousel-container">
      {" "}
      {/* Added fade-carousel-container */}
      <div
        className="flex overflow-x-auto overflow-y-hidden space-x-4 p-4 hide-scrollbar w-[700px] h-[600px] items-center"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`flex-none transition-all duration-300 ease-in-out my-auto ${
              expandedIndex === index ? "w-80" : "w-32"
            }`}
            onClick={(event) => handleCardClick(event, index)}
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-auto rounded-lg cursor-pointer"
            />
            <div className="mt-2">
              <h2 className="font-bold">{card.title}</h2>
              <p className="text-gray-500">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
