import {StudentType} from "../02/02";
import {addSkill, makeStudentActive, studentCIty} from "./03";

let student: StudentType

beforeEach(()=>{
    student = {
        id: 1,
        name: 'Dmitriy',
        age: 28,
        isActive: false,
        address: {
            streetTitle:"Lenina",
            city: {
                title: "SPb",
                countryTitle: "RF"
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React'
            }
        ]
    }
})


test('skill is added', () => {
    expect (student.technologies.length).toBe(3);
    addSkill(student,'JS');

    expect (student.technologies.length).toBe(4);
    expect (student.technologies[3].title).toBe('JS');
    expect (student.technologies[3].id).toBeDefined();
    }
)
test('student should be active', () => {
    expect (student.isActive).toBe(false);

    makeStudentActive(student);

    expect (student.isActive).toBe(true);
    }
)
test('does student live in city?', () => {


        let res1 = studentCIty(student,'Moscow');
        let res2 = studentCIty(student,'SPb');

        expect (res1).toBe(false);
        expect (res2).toBe(true);
    }
)