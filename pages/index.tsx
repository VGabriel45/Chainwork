import { Inter } from "@next/font/google";
import { Box } from "@chakra-ui/react";
import JobCard from "../components/Cards/JobCard";
import jobs from "../static/mockData/jobs.json";
import { useEffect } from "react";
import cookie from "js-cookie";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const cookies = cookie.get("accessToken");
    console.log(cookies);
  }, []);
  return (
    <Box>
      {jobs.map((data) => (
        <JobCard
          id={data.id}
          key={jobs.indexOf(data)}
          title={data.title}
          description={data.description}
          payment={data.payment}
          skills={data.skills}
        />
      ))}
    </Box>
  );
}
