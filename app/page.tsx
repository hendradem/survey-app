import Link from 'next/link' 
import { HiIdentification } from "react-icons/hi2";

const surveyID = '12kndqwidq'

export default function Home() {  
  return (
    <div className="h-screen flex items-center justify-center">
      <Link href={`/survey?session=${surveyID}`}>
        <button className="button-dark button-icon mr-2">
          <HiIdentification className="mr-2" /> Take a survey
        </button>
      </Link>
    </div>
  );
}
