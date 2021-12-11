import Header from "../components/Header";

function Error() {
  return (
    <div>
      <Header />

      <div className="h-96 flex justify-center items-center">
        <h1 className="text-4xl font-bold">Page not found!</h1>
      </div>
    </div>
  );
}

export default Error;
