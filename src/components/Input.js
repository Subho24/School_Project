import { data2 } from '../data';
import Select from 'react-select';

export const Input = (props) => {
  const students = data2.students.map(student => ({value: student.studentName, label: student.studentName, id: student.studentId}))

  const handleOnChange = (e) => {
    e === null ? props.setStudentId(null) : props.setStudentId(e.id)
  }

  return (
    <div style={{
      width: '30%',
      marginLeft: 50,
      marginRight: 20,
      marginTop: 20,
      marginBottom: 100
    }}>
      <label htmlFor='student'>Student</label>
      <br/>
      < Select 
        backspaceRemovesValue = {true}
        isClearable={true}
        isSearchable={true}
        options={students}
        name='student'
        isDisabled={false}
        onChange={(e) => handleOnChange(e)}
      />
    </div>
  )
}