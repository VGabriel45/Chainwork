import { useRouter } from "next/router";
import JobCardFull from "../../components/Cards/JobCardFull";
import ProposalBox from "../../components/ProposalBox";
import jobs from "../../static/mockData/jobs.json";

const Job = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the job with the matching id
  const jobData = id
    ? jobs.find((job) => job.id == id)
    : {
        id: "",
        title: "",
        description: "",
        payment: { min: 0, max: 0 },
        skills: [],
      };
  console.log(jobData);

  // Return the JobCardFull component with the jobData props if jobData is not empty
  return jobData?.id ? (
    <>
      <JobCardFull
        id={jobData.id}
        title={jobData.title}
        description={jobData.description}
        payment={jobData.payment}
        skills={jobData.skills}
      />
      <ProposalBox />
    </>
  ) : null;
};

export default Job;
