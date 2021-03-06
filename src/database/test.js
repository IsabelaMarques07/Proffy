const Database = require('./db')
const createProffy = require('./createProffy')//O mesmo que uma função

Database.then(async (db) => {
    //Inserir dados

    proffyValue = {
        name: 'Isabela Marques',
        avatar: 'https://avatars0.githubusercontent.com/u/61291155?s=460&u=6245e503f0303e68712593028f0e97e2deea0ebe&v=4',
        whatsapp: "5511940028922",
        bio: 'Instrutora de Matemática',
    }

    classValue = {
        subject: 7,
        cost: "R$20,00",
        //o proffy id virá pelo bando de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados apos cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //Chamar createProffy
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //Consultar as classes de um determinado professor 
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

        console.log(selectClassesSchedules)
})