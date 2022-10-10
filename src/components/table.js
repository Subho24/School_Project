import { useState } from "react"
import ReactTooltip from "react-tooltip"
import { data2 } from "../data"
import { getSubjects } from "../hooks/getSubject"
import { getStyles } from "../hooks/getStyles"

const createTooltip = (subject, grades, month) => {
    return `<div style="display: flex"><div style="background: #feeb8b; width: 20; height: 20"></div>${subject} - ${month}: ${grades}</div>`
}


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
              <td style={{fontFamily: 'sans-serif', fontSize: 11, color: '#333333'}}>
                {subject.subjectName}
              </td>
              <td 
                data-tip={createTooltip(subject.subjectName, subject.aug, 'aug')} 
                style={getStyles(subject,'td1','aug',noOpacity)} 
                id='td1' 
                onMouseEnter={handleTdMouseEnter} 
                onMouseLeave={handleTdMouseLeave} 
              />
              <td 
                data-tip={subject.sep} 
                style={getStyles(subject,'td2','sep',noOpacity)} 
                id='td2' 
                onMouseEnter={handleTdMouseEnter} 
                onMouseLeave={handleTdMouseLeave} 
                />
              <td 
                data-tip={subject.oct} 
                style={getStyles(subject,'td3','oct',noOpacity)} 
                id='td3' 
                onMouseEnter={handleTdMouseEnter} 
                onMouseLeave={handleTdMouseLeave} 
                />
              <td 
                data-tip={subject.nov} 
                style={getStyles(subject,'td4','nov',noOpacity)} 
                id='td4' 
                onMouseEnter={handleTdMouseEnter} 
                onMouseLeave={handleTdMouseLeave} 
                />
              <td 
                data-tip={subject.dec} 
                style={getStyles(subject,'td5','dec',noOpacity)} 
                id='td5' 
                onMouseEnter={handleTdMouseEnter} 
                onMouseLeave={handleTdMouseLeave} 
                />
              <td 
                data-tip={subject.jan} 
                style={getStyles(subject,'td6','jan',noOpacity)} 
                id='td6' 
                onMouseEnter={handleTdMouseEnter} 
                onMouseLeave={handleTdMouseLeave} 
                />
              <td 
                data-tip={subject.feb} 
                style={getStyles(subject,'td7','feb',noOpacity)} 
                id='td7' 
                onMouseEnter={handleTdMouseEnter} 
                onMouseLeave={handleTdMouseLeave} 
                />
              <td 
                data-tip={subject.mar} 
                style={getStyles(subject,'td8','mar',noOpacity)} 
                id='td8' 
                onMouseEnter={handleTdMouseEnter} 
                onMouseLeave={handleTdMouseLeave} 
                />
              <td 
                data-tip={subject.apr} 
                style={getStyles(subject,'td9','apr',noOpacity)} 
                id='td9' 
                onMouseEnter={handleTdMouseEnter} 
                onMouseLeave={handleTdMouseLeave} 
                />
              <td 
                data-tip={subject.may} 
                style={getStyles(subject,'td10','may',noOpacity)} 
                id='td10'
                onMouseEnter={handleTdMouseEnter} 
                onMouseLeave={handleTdMouseLeave}  
                />
              <td 
                data-tip={subject.jun} 
                style={getStyles(subject,'td11','jun',noOpacity)} 
                id='td11'
                onMouseEnter={handleTdMouseEnter} 
                onMouseLeave={handleTdMouseLeave}  
                />
                <ReactTooltip type="light" html={true} />
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

