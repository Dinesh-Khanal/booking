import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./slide.css";

export default function Slider() {
  return (
    <div className="placeSlider">
      <Splide
        options={{ rewind: true, perPage: 3, height: 200, gap: 2 }}
        aria-label="React Splide Example"
      >
        <SplideSlide>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ef/5d/cb/pashupatinath-kathmandu.jpg?w=600&h=400&s=1"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/65/06/f7/the-main-maya-devi-temple.jpg?w=500&h=-1&s=1"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ef/5d/cb/pashupatinath-kathmandu.jpg?w=600&h=400&s=1"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/65/06/f7/the-main-maya-devi-temple.jpg?w=500&h=-1&s=1"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ef/5d/cb/pashupatinath-kathmandu.jpg?w=600&h=400&s=1"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/65/06/f7/the-main-maya-devi-temple.jpg?w=500&h=-1&s=1"
            alt=""
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}
