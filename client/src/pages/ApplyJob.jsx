import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import { assets } from '../assets/assets';
import kconvert from 'k-convert';
import moment from 'moment';

const ApplyJob = () => {
  const { id } = useParams();
  const { jobs } = useContext(AppContext);
  const [jobData, setJobData] = useState(null);

  const fetchJob = () => {
    const data = jobs.filter((job) => job._id === id);
    if (data.length !== 0) {
      setJobData(data[0]);
      console.log(data[0]);
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }
  }, [id, jobs]);

  return jobData ? (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto">
        <div className="bg-white text-black rounded-lg w-full">
          <div className="flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl">
            
            {/* Left section - Job info */}
            <div>
              <img
                src={jobData.companyId?.image || assets.company_icon}
                alt={`${jobData.companyId?.name || "Company"} logo`}
                className="h-16 w-16 object-contain"
              />
              <div className="mt-4">
                <h1 className="text-2xl font-semibold">{jobData.title}</h1>
                <div className="flex flex-col gap-2 mt-3 text-gray-700">
                  <span className="flex items-center gap-2">
                    <img src={assets.suitcase_icon} alt="Company icon" className="h-5 w-5" />
                    {jobData.companyId?.name}
                  </span>
                  <span className="flex items-center gap-2">
                    <img src={assets.location_icon} alt="Location icon" className="h-5 w-5" />
                    {jobData.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <img src={assets.person_icon} alt="Person icon" className="h-5 w-5" />
                    {jobData.level}
                  </span>
                  <span className="flex items-center gap-2">
                    <img src={assets.money_icon} alt="Salary icon" className="h-5 w-5" />
                    CTC: {jobData.salary ? kconvert.convertTo(jobData.salary) : "N/A"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right section - Apply button */}
            <div className="flex flex-col items-start gap-3">
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg shadow">
                Apply Now
              </button>
              <p className="text-gray-500 text-sm">
                Posted {jobData.date ? moment(jobData.date).fromNow() : "N/A"}
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default ApplyJob;
