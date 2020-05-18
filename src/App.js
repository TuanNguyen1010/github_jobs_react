import React, {useState} from 'react';
import './App.css';
import useFetchJobs from './useFetchJobs';
import {Container } from 'react-bootstrap';
import Job from './Job'
import JobsPagination from './JobsPagination';

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs, loading, error, hasNextPage} = useFetchJobs(params, page)

  return (
    <div className="App">
      <Container className='app-Container'>
        <h1 className='app-title' >GitHub Jobs</h1>
        <JobsPagination page={page} setPage={setPage} hasNextPage={true}/>
        {loading && <h1> Loading ...</h1>}
        {error && <h1> Error. Try Refreshing.</h1>}
        {jobs.map(job => {
          console.log(job)
          return <Job key={job.id} job={job}/> 
        } )}
        <JobsPagination page={page} setPage={setPage} hasNextPage={true}/>
      </Container>
    </div>
  );
}

export default App;
