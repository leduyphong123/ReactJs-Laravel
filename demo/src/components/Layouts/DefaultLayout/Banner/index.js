import {Carousel} from 'flowbite-react';



function Banner() {
    const imgRoot=[
        "https://image.shutterstock.com/image-photo/full-size-profile-side-photo-600w-1908471799.jpg",
        "https://image.shutterstock.com/image-photo/portrait-happy-asian-pretty-girl-600w-1705236454.jpg",
        "https://image.shutterstock.com/image-photo/full-size-profile-photo-optimistic-600w-1917096068.jpg"
    ];

 
    return (
       
<div className="h-56 sm:h-64 xl:h-80 2xl:h-96 px-2 md:px-0">
  <Carousel
  leftControl={true}
  rightControl={true}>
    <img
      src={imgRoot[0]}
      alt="..."
    />
    <img
      src={imgRoot[1]}
      alt="..."
    />
    <img
      src={imgRoot[2]}
      alt="..."
    />
    {/* <img
      src="%public%/logo192.jpg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      alt="..."
    /> */}
  </Carousel>
</div>

    );
}

export default Banner;