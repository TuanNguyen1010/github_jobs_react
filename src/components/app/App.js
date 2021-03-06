import React, {useState} from 'react';
import '../../styles/App.css';
import useFetchJobs from '../useFetchJobs/useFetchJobs';
import {Container } from 'react-bootstrap';
import Job from '../Job/Job'
import JobsPagination from '../JobsPagination/JobsPagination';
import SearchForm from '../SearchForm/SearchForm'

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs, loading, error, hasNextPage} = useFetchJobs(params, page)

  const handleParamChange = (e) => {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }
  

  return (
    <div className="App" data-test='app-component'>
      <Container className='app-Container'>
        <h1 className='app-title' >GitHub Jobs</h1>
        <SearchForm params={params} onParamChange={handleParamChange}/>
        <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
        {loading && <h1> Loading ...</h1>}
        {error && <h1> Error. Try Refreshing.</h1>}
        {jobs.map(job => {
          return <Job key={job.id} job={job}/> 
        } )}
        <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
      </Container>
    </div>
  );
}

export default App;
