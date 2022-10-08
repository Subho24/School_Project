export const getSubjects = (data, studentId) => {
    let subjects = [];
  
    for(let i = 0; i < data.length; i++) {
      if(data[i].studentId === studentId) {
        subjects.push(data[i]);
      }
    }
    return subjects;
}