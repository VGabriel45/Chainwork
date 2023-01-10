import { Inter } from "@next/font/google";
import { Box } from "@chakra-ui/react";
import JobCard from "../components/Cards/JobCard";
import jobs from "../static/mockData/jobs.json";
import { useEffect } from "react";
import cookie from "js-cookie";
import { ALL_OPEN_JOBS } from "../graphql/user/queries/jobQueries";
import { useQuery } from "@apollo/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { loading, error, data } = useQuery(ALL_OPEN_JOBS);

  loading && <>loading...</>;
  console.log(data);

  return (
    <Box>
      {data?.jobs.map((job: any) => (
        <JobCard
          id={job.id}
          key={job.id}
          title={job.title}
          description={job.description}
          payment={{ min: job.rateMin, max: job.rateMax }}
          skills={[]}
        />
      ))}
    </Box>
  );
}
