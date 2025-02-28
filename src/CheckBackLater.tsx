const CheckBackLater = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white px-4">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
          This Project is Still in Progress
        </h1>
        <p className="text-lg text-gray-300">
          Check back later for updates. This project is currently being worked on and will be available soon.
        </p>
        <a href="/" className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-all">
          Go Back Home
        </a>
      </div>
    );
  };
  
  export default CheckBackLater;
  