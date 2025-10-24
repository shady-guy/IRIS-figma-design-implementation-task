export default function Announcement() {
  const data = [
    {
      text: "IRIS Product Team is Recruiting!",
      date: "24 October 2025",
      resource: "visit resource",
    },
    {
      text: "Happy Deepavali to all!",
      date: "21 October 2025",
      resource: "visit resource",
    },
    {
      text: "NITK to scrap 75% attendance policy.",
      date: "7 October 2025",
      resource: "visit resource",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden mb-4">
      {/* Blue header strip */}
     <div className="px-4 py-2">
  <h3 className="font-semibold text-white inline-block bg-[#6770D2] px-2 py-1 rounded">
    Announcements
  </h3>
</div>


      {/* Announcements list */}
      <ul className="p-4 space-y-4">
        {data.map((item, idx) => (
          <li key={idx} className="space-y-1">
            {/* First line: main text */}
            <div className="font-inter font-normal text-[20px] text-black">
              {item.text}
            </div>

            {/* Second line: date left, resource right */}
            <div className="flex justify-between items-center">
              <span className="font-inter font-thin text-[14px] text-black">
                {item.date}
              </span>
              <span className="font-inter font-medium text-[14px] text-[#4791F2]">
                {item.resource}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
