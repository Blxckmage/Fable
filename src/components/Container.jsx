const Container = ({ children }) => {
  return (
    <div className="w-full max-w-2xl flex-grow self-center px-4 transition-all md:px-24">
      {children}
    </div>
  );
};

export default Container;
