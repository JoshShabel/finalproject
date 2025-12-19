import'./globals.css'
import MainCards from "../components/MainCards";
import PageClient from "./pageClient";
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export default function Home() {
    return (
        <div>
            <PageClient>
                <MainCards />
            </PageClient>
        </div>
    )
}
