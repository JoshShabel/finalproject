import {PrismaClient} from "@prisma/client"
import Card from "./Card";
const prisma = new PrismaClient()
import "../app/globals.css";

async function MainCards() {
    {
        const enduser = await prisma.enduser.findUnique({
            where: {
                email: "ava2@purdue.edu",
            },
            include: {notes: true}
        })

        let x = await prisma.notes.create({
            data: {
                userId: enduser.id,
                //enduser: {connect: {id: enuser.id}},
                name: "grocery",
                contents: "list of the groceries"
            }
        })

        const result = enduser.notes;
        const notes = await prisma.enduser.findFirst({
            include: {notes: true}
        })
        //studentsWithGrades.forEach(student => {})
        //const response = await fetch("https://web.ics.purdue.edu/~jshabel/fetch-data.php");
        //let x = profiles.notes;

        return (
            <div className="darkCardDisplayArea">
                {
                    result.map((note) => (
                        <Card key={note.id} id={note.id} name={note.name} contents={note.contents}/>
                    ))
                }
            </div>
        )

    }
}

export default MainCards;