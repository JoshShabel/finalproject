
const {PrismaClient} = require( "@prisma/client")
const prisma = new PrismaClient()
import "../app/globals.css";
import MainCardsClient from "./MainCardsClient";
import Card from "./Card";


async function MainCards() {
    {
        var result = []
        try{
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

            result = enduser.notes;
        }catch (e) {
            console.log("error")
        }


        return (
            <div className="darkCardDisplayArea">
                {
                    result.map((note) => (
                        <Card key={note.id} id={note.id} name={note.name} contents={note.contents}/>
                    ))
                }
            </div>
        )

/*            const notes = await prisma.enduser.findFirst({
                include: {notes: true}
            })*/




        //studentsWithGrades.forEach(student => {})
        //const response = await fetch("https://web.ics.purdue.edu/~jshabel/fetch-data.php");
        //let x = profiles.notes;

    }

}


export default MainCards;