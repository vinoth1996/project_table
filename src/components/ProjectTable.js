import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Table, Form } from 'react-bootstrap';

const ProjectTable = () => {
  const projects = useSelector((state) => state.projects);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(projects);
  }, [projects])

  const filterProjects = (e) => {
    if(e.target.value !== 'All'){
      setTableData(projects.filter((item) => item.status === e.target.value));
    }
    else{
      setTableData(projects);
    }
  }

  return(
    <div>
      <Table>
        <thead>
          <tr>
            <th>project id</th>
            <th>project code</th>
            <th>description</th>
            <th>start_date</th>
            <th>end_date</th>
            <th>company_name</th>
            <th>
              <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Control as="select" onChange={filterProjects} custom>
                    <option>All</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((val) => (
            <tr>
              <td>{val.project_id}</td>
              <td>{val.project_code}</td>
              <td>{val.description}</td>
              <td>{val.start_date}</td>
              <td>{val.end_date}</td>
              <td>{val.company_name}</td>
              <td>{val.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ProjectTable;