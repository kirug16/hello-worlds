// students score, total possible score

const totalScore = function (score, totalStudentScore) {
    const total = (score * 100) / totalStudentScore 
    let letterGrade = ''
        if (total >= 90 && total<= 100) {
            letterGrade = 'A'
        }else if (total >= 80 && total <=89){
            letterGrade = 'B'
        }else if (total >= 70 && total <= 79) {
            letterGrade = 'C'
        }else if (total >= 60 && total<= 69) {
            letterGrade = 'D'
        }else {
            letterGrade = 'F'
        }
        return `You got an ${letterGrade} (${total}%) `
}

let result = totalScore(20, 30)
console.log(result)