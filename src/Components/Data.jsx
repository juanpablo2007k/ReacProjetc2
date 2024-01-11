export default function Data() {
  return  (
    <>
      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 opacity-80 mt-10 mb-5">
        <div  style={{
            borderLeft: "none",
            borderTop: "none",
            borderBottom: "none",
          }} className="border border-gray-500 p-4">
          <p className="text-gray-500 font-bold">Plays about shooters</p>
          <strong className="text-4xl">300+</strong>
        </div>

        <div  style={{
            borderLeft: "none",
            borderTop: "none",
            borderBottom: "none",
          }} className="border border-gray-500 p-4">
          <p className="text-gray-500 font-bold">Plays about Horror</p>
          <strong className="text-4xl">+59</strong>
        </div>

        <div  style={{
            borderLeft: "none",
            borderTop: "none",
            borderBottom: "none",
          }} className="border border-gray-500 p-4">
          <p className="text-gray-500 font-bold">Plays about adventure</p>
          <strong className="text-4xl">+50</strong>
        </div>

        <div  style={{
            borderLeft: "none",
            borderTop: "none",
            borderBottom: "none",
          }} className="border border-gray-500 p-4">
          <p className="text-gray-500 font-bold">Plays about anything</p>
          <strong className="text-4xl">+459</strong>
        </div>
      </div>
    </>
  );
}
