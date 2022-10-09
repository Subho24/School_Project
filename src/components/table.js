import { useState } from "react"
import { data2 } from "../data"
import { getSubjects } from "../hooks/getSubject"

const TableBody = ({children, ...props}) => {
    const [noOpacity, setNoOpacity] = useState('')
    const subjects = getSubjects(props.subjects, props.studentId)

    const handleTdMouseEnter = (e) => {
        setNoOpacity(e.target.id);
    }

    const handleTdMouseLeave = (e) => {
        setNoOpacity('');
    }
  
    return (
      <tbody>
        {
          subjects.map((subject, i) => {
            return (
            <tr style={{width: 98, height: 98}} id={`tr${i+1}`} onClick={() => {throw new Error('Error!!!!')}} >
              <td style={{transform: 'rotate(-20deg)', fontFamily: 'sans-serif', fontSize: 11, color: '#333333'}}>
                {subject.subjectName}
              </td>
              <td title={subject.aug} style={{background: subject.aug === 50 ? '#feeb8b' : subject.aug === 10 ? '#a50027' : '#006837', opacity: noOpacity === 'td1' ? '100%' : noOpacity === '' ? null :  '30%'}} id='td1' onMouseEnter={handleTdMouseEnter} onMouseLeave={handleTdMouseLeave} ></td>
              <td title={subject.sep} style={{background: subject.sep === 50 ? '#feeb8b' : subject.sep === 10 ? '#a50027' : '#006837', opacity: noOpacity === 'td2' ? '100%' : noOpacity === '' ? null :  '30%'}} id='td2' onMouseEnter={handleTdMouseEnter} onMouseLeave={handleTdMouseLeave} ></td>
              <td title={subject.oct} style={{background: subject.oct === 50 ? '#feeb8b' : subject.oct === 10 ? '#a50027' : '#006837', opacity: noOpacity === 'td3' ? '100%' : noOpacity === '' ? null :  '30%'}} id='td3' onMouseEnter={handleTdMouseEnter} onMouseLeave={handleTdMouseLeave} ></td>
              <td title={subject.nov} style={{background: subject.nov === 50 ? '#feeb8b' : subject.nov === 10 ? '#a50027' : '#006837', opacity: noOpacity === 'td4' ? '100%' : noOpacity === '' ? null :  '30%'}} id='td4' onMouseEnter={handleTdMouseEnter} onMouseLeave={handleTdMouseLeave} ></td>
              <td title={subject.dec} style={{background: subject.dec === 50 ? '#feeb8b' : subject.dec === 10 ? '#a50027' : '#006837', opacity: noOpacity === 'td5' ? '100%' : noOpacity === '' ? null :  '30%'}} id='td5' onMouseEnter={handleTdMouseEnter} onMouseLeave={handleTdMouseLeave} ></td>
              <td title={subject.jan} style={{background: subject.jan === 50 ? '#feeb8b' : subject.jan === 10 ? '#a50027' : '#006837', opacity: noOpacity === 'td6' ? '100%' : noOpacity === '' ? null :  '30%'}} id='td6' onMouseEnter={handleTdMouseEnter} onMouseLeave={handleTdMouseLeave} ></td>
              <td title={subject.feb} style={{background: subject.feb === 50 ? '#feeb8b' : subject.feb === 10 ? '#a50027' : '#006837', opacity: noOpacity === 'td7' ? '100%' : noOpacity === '' ? null :  '30%'}} id='td7' onMouseEnter={handleTdMouseEnter} onMouseLeave={handleTdMouseLeave} ></td>
              <td title={subject.mar} style={{background: subject.mar === 50 ? '#feeb8b' : subject.mar === 10 ? '#a50027' : '#006837', opacity: noOpacity === 'td8' ? '100%' : noOpacity === '' ? null :  '30%'}} id='td8' onMouseEnter={handleTdMouseEnter} onMouseLeave={handleTdMouseLeave} ></td>
              <td title={subject.apr} style={{background: subject.apr === 50 ? '#feeb8b' : subject.apr === 10 ? '#a50027' : '#006837', opacity: noOpacity === 'td9' ? '100%' : noOpacity === '' ? null :  '30%'}} id='td9' onMouseEnter={handleTdMouseEnter} onMouseLeave={handleTdMouseLeave} ></td>
              <td title={subject.may} style={{background: subject.may === 50 ? '#feeb8b' : subject.may === 10 ? '#a50027' : '#006837', opacity: noOpacity === 'td10' ? '100%' : noOpacity === '' ? null :  '30%'}} id='td10'onMouseEnter={handleTdMouseEnter} onMouseLeave={handleTdMouseLeave}  ></td>
              <td title={subject.jun} style={{background: subject.jun === 50 ? '#feeb8b' : subject.jun === 10 ? '#a50027' : '#006837', opacity: noOpacity === 'td11' ? '100%' : noOpacity === '' ? null :  '30%'}} id='td11'onMouseEnter={handleTdMouseEnter} onMouseLeave={handleTdMouseLeave}  ></td>
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
          < TableBody subjects={data2.studentsGrades} studentId={props.studentId} />
      </table>
    </div>
  )
}

