       
const GifLoader = ({children}) => {
  return (
    <div className="fixed z-50 inset-0 bg-white flex flex-col gap-4 justify-center items-center h-full">
  
        <img
          src={'/fruitloader.gif'}
          className=""
          alt="fruitloader"
        />
        {children}

    </div>
  );
};

export default GifLoader;
