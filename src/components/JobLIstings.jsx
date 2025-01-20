import { useEffect, useState } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
import Pagination from "./Pagination";
const JobLIstings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentJobPage, setCurrentJobPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(6);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = "/api/jobs";
      const res = await fetch(apiUrl);
      const data = await res.json();
      setJobs(data);
      setLoading(false);
    };
    fetchJobs();
  }, []);
  useEffect(() => {
    const fetchSearch = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      const res = await fetch(apiUrl);
      const data = await res.json();
      const filteredData = data.filter((job) =>
        job.title.toLowerCase().includes(search)
      );
      setJobs(filteredData);
      setCurrentJobPage(1);
    };
    fetchSearch();
  }, [search]);
  const lastJobIndex = currentJobPage * jobsPerPage;
  const firstJobIndex = lastJobIndex - jobsPerPage;
  const currentJobs = jobs.slice(firstJobIndex, lastJobIndex);

  return (
    <section
      className={
        isHome ? "bg-blue-50 px-4 py-10" : "bg-blue-50 px-4 py-10 min-h-[99vh]"
      }
    >
      <div className="container-xl lg:container m-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentJobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
            {console.log(currentJobs)}
          </div>
        )}

        {isHome ? (
          ""
        ) : (
          <Pagination
            totalJops={jobs}
            jopsPerPage={jobsPerPage}
            setCurrentJobPage={setCurrentJobPage}
            currentJobPage={currentJobPage}
          />
        )}
      </div>
    </section>
  );
};

export default JobLIstings;
