import { data2 } from "../data"
import { getSubjects } from "../hooks/getSubject"

const TableRow = ({children, ...props}) => {
    const subjects = getSubjects(props.subjects, props.studentId)
  
    return (
      <tbody>
        {
          subjects.map((subject) => {
            return (
            <tr style={{width: 98, height: 98}}>
              <td style={{transform: 'rotate(-20deg)', fontFamily: 'sans-serif', fontSize: 11, color: '#333333'}}>
                {subject.subjectName}
              </td>
              <td value={subject.aug} style={{background: subject.aug === 50 ? '#feeb8b' : subject.aug === 10 ? '#a50027' : '#006837'}}></td>
              <td value={subject.sep} style={{background: subject.sep === 50 ? '#feeb8b' : subject.sep === 10 ? '#a50027' : '#006837'}}></td>
              <td value={subject.oct} style={{background: subject.oct === 50 ? '#feeb8b' : subject.oct === 10 ? '#a50027' : '#006837'}}></td>
              <td value={subject.nov} style={{background: subject.nov === 50 ? '#feeb8b' : subject.nov === 10 ? '#a50027' : '#006837'}}></td>
              <td value={subject.dec} style={{background: subject.dec === 50 ? '#feeb8b' : subject.dec === 10 ? '#a50027' : '#006837'}}></td>
              <td value={subject.jan} style={{background: subject.jan === 50 ? '#feeb8b' : subject.jan === 10 ? '#a50027' : '#006837'}}></td>
              <td value={subject.feb} style={{background: subject.feb === 50 ? '#feeb8b' : subject.feb === 10 ? '#a50027' : '#006837'}}></td>
              <td value={subject.mar} style={{background: subject.mar === 50 ? '#feeb8b' : subject.mar === 10 ? '#a50027' : '#006837'}}></td>
              <td value={subject.apr} style={{background: subject.apr === 50 ? '#feeb8b' : subject.apr === 10 ? '#a50027' : '#006837'}}></td>
              <td value={subject.may} style={{background: subject.may === 50 ? '#feeb8b' : subject.may === 10 ? '#a50027' : '#006837'}}></td>
              <td value={subject.jun} style={{background: subject.jun === 50 ? '#feeb8b' : subject.jun === 10 ? '#a50027' : '#006837'}}></td>
            </tr>
            )
          })
        }
      </tbody>
    )
  }
  
export const Table = (props) => {
  const months = ['aug', 'sep', 'oct', 'nov', 'dec', 'jan', 'feb', 'mar', 'apr', 'may', 'jun']

  return(
    <div style={{margin: 50}}>
      <table>
        <thead>
          <tr style={{marginBottom:'20px'}}>
            <th></th>
            {months.map((month) => <th style={{minWidth: 110, transform: 'rotate(-20deg)', fontFamily: 'sans-serif', fontSize: 11, color: '#333333'}}>{month}</th>)}
          </tr>
        </thead>
          < TableRow subjects={data2.studentsGrades} studentId={props.studentId} />
      </table>
    </div>
  )
}

