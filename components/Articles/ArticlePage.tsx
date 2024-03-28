import Comments from "./Comments";
import { useEffect} from "react";
export default function ArticlePage({article}) {
  useEffect(() => {
  document.getElementById('content').innerHTML = article[0].content;
  console.log(article)
  }, [])

  //function convertostringdata generated using generative AI(copilot)
  function convertToStringData(date: Date) {
    const x = new Date(date)
    const day = x.getDate();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[x.getMonth()];
    const year = x.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate; 
  }
  
  return (
    
    <div className="flex flex-col justify-start mt-24 max-w-3xl xl:max-w-4xl">
      <h1 className="text-5xl mb-6 font-extrabold">{article[0].title}</h1>
      <p>Published at {convertToStringData(article[0].published_at)}</p>
      <div className="flex border-blue-900 border p-3 mt-16 rounded-lg shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
        <div className="p-2 min-w-56">
          <p className="font-extrabold text-xl">What was claimed</p>
          <p className="leading-7 font-semibold">
            {article[0].claimedSummary}
          </p>
        </div>
        <div className="w-4 bg-yellow-300 min-h-max"></div>
        <div className="p-2 ml-4">
          <p className="font-extrabold text-xl">Summary of our analysis</p>
          <p className="leading-7 font-semibold">
            {article[0].ourConclusion}
          </p>
        </div>
      </div>
      <div  className="mt-16 text-lg">
        <div id='content'></div>
      </div>
     
    </div>
  );
}
