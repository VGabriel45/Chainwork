import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Box } from "@chakra-ui/react";
import JobCard from "../components/JobCard";
import jobs from "../static/mockData/jobs.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
