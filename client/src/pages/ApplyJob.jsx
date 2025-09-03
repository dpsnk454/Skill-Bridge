import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import { assets } from '../assets/assets';
import kconvert from 'k-convert';
import moment from 'moment';
import JobCard from '../components/JobCard.jsx';
import Footer from '../components/Footer';

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
            <div className='flex flex-col md:flex-row items-center'>
              <img
                src={jobData.companyId?.image || assets.company_icon}
                alt={`${jobData.companyId?.name || "Company"} logo`}
                className="h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border"
              />
              <div className="text-centerfont md:text-left text-neutral-700 ">
                <h1 className="text-2xl sm:text-4xl font-medium">{jobData.title}</h1>
                <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
                  <span className="flex items-center gap-1">
                    <img src={assets.suitcase_icon} alt="Company icon" className="h-5 w-5" />
                    {jobData.companyId?.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.location_icon} alt="Location icon" className="h-5 w-5" />
                    {jobData.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.person_icon} alt="Person icon" className="h-5 w-5" />
                    {jobData.level}
                  </span>
                  <span className="flex items-center gap-1">
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
        
      <div className='flex flex-col lg:flex-row justify-between items-start'>
        <div className='w-full lg:w-2/3'>
          <h2 className='font-bold text-2xl mb-4 mt-10'>Job Description</h2>
          <div className="rich-text" dangerouslySetInnerHTML={{
            __html: jobData.description
          }}>

          </div>
          <button className='bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg shadow'> Apply Now</button>
        </div>
        {/* Right Section More jobs */}
        <div className='w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5'>
          <h2>More Jobs from {jobData.companyId?.name}</h2>
          {jobs.filter(job => job._id != jobData._id && job.companyId._id === jobData.companyId._id)
            .filter(job => true).slice(0, 4)
            .map((job, index) => <JobCard key={index} job={job} />
            )}
        </div>
      </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default ApplyJob;
