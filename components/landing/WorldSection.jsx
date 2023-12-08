import Image from "next/image";

const WorldSection = () => {
  return (
    <section class="flex justify-center items-center py-8">
      <section class="space-y-4 mx-auto text-center">
        <div
          class="heading wow fadeInUp mb-5 text-center mx-auto max-w-xl"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <h2 class="text-center">
            Experience Continental Diversity with Gonje
          </h2>
          <p class="text-center">
            At Gonje, we understand that food is more than just sustenance; it's
            a cultural expression, a source of joy, and a way to connect with
            diverse flavors from around the world. That's why we are proud to
            offer an extensive selection of groceries and ingredients that cater
            to a myriad of continental cuisines and dishes.
          </p>
        </div>
        {/* <Image
          src={`/images/worldmap.png`}
          alt="world map"
          width={1000}
          height={1000}
        /> */}
        <WorldGrid/>
      </section>
    </section>
  );
};
export default WorldSection;




const WorldGrid = () => {
  const continents = [
    { name: 'Africa', image: '/images/continents/africa.png' },
    { name: 'Asia', image: '/images/continents/asia.png' },
    { name: 'Australia', image: '/images/continents/australia.png'},
    { name: 'Europe', image: '/images/continents/europe.png' },
    { name: 'North America', image: '/images/continents/america.png' },
    { name: 'South America', image: '/images/continents/america.png' },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-x-8 gap-y-6 justify-between">
      {continents.map((continent) => (
        <div key={continent.name} className="flex-col flex items-center justify-center gap-y-3">
          <Image
            src={continent.image}
            alt={continent.name}
            width={230}
            height={230}
          />
          <p className="text-center font-bold">{continent.name}</p>
        </div>
      ))}
    </div>
  )}